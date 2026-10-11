"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const H = 96;
const W = Math.round((H * 396) / 624); // keeps the image's aspect ratio
const PAD = 20; // clear space kept around the mascot
const STEP = 80; // grid spacing when searching for empty spots
const EDGE = 8; // distance kept from the viewport edges
const TOP_SAFE = 96; // stay below the navbar
const LOOK = 28; // how far ahead it checks while travelling
const CHECK_MS = 140; // how often it checks the path ahead
const SPEED = { down: 45, left: 60 }; // travel speed, px per second
const FOLLOW_MS = 5000;
const SIDE_HOP_MS = 6000; // pop over to the other side of the screen this often
const SWAY = 20; // px it weaves to either side of its path (kept within PAD)

// Anything the mascot should never sit on top of
const SOLID =
  "a,button,input,textarea,select,label,img,picture,video,canvas,svg,iframe,h1,h2,h3,h4,h5,h6,p,li,dt,dd,blockquote,figure,form,[data-mascot-avoid]";

const DIRS = { down: { x: 0, y: 1 }, left: { x: -1, y: 0 } };

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
// Visible page width, excluding the scrollbar
const viewW = () => document.documentElement.clientWidth;
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

function colorAlpha(color) {
  if (!color || color === "transparent") return 0;
  const slash = color.match(/\/\s*([\d.]+)(%?)\s*\)$/);
  if (slash) return parseFloat(slash[1]) / (slash[2] ? 100 : 1);
  const parts = color.match(/\(([^)]+)\)/)?.[1].split(",") ?? [];
  return parts.length === 4 ? parseFloat(parts[3]) : 1;
}

// Returns a function that tells whether a viewport point is "empty":
// no text, media or controls, and not on a card/panel (a filled box narrower than the page).
function makeBlankTest() {
  const vw = viewW();
  const cache = new Map();
  const isPanel = (el) => {
    if (cache.has(el)) return cache.get(el);
    const s = getComputedStyle(el);
    const filled = s.backgroundImage !== "none" || colorAlpha(s.backgroundColor) > 0.05;
    const panel = filled && el.getBoundingClientRect().width < vw * 0.9;
    cache.set(el, panel);
    return panel;
  };

  return (x, y) => {
    // Every layer under the point, top first (includes ancestors and overlapping siblings)
    const stack = document.elementsFromPoint(x, y);
    const top = stack[0];
    if (!top || top.closest(SOLID)) return false;
    for (const n of top.childNodes) {
      if (n.nodeType === 3 && n.textContent.trim()) return false;
    }
    return !stack.some((el) => el !== document.documentElement && isPanel(el));
  };
}

const inBounds = (p) =>
  p.x >= EDGE &&
  p.y >= TOP_SAFE &&
  p.x + W <= viewW() - EDGE &&
  p.y + H <= window.innerHeight - EDGE;

function isClear(test, p) {
  if (!inBounds(p)) return false;
  const vw = viewW();
  const vh = window.innerHeight;
  for (const fx of [0, 0.5, 1]) {
    for (const fy of [0, 0.5, 1]) {
      const px = p.x - PAD + fx * (W + PAD * 2);
      const py = p.y - PAD + fy * (H + PAD * 2);
      if (!test(clamp(px, 0, vw - 1), clamp(py, 0, vh - 1))) return false;
    }
  }
  return true;
}

// Spot right beside the footer banner's big mascot (marked with data-mascot-home)
function homeSpot() {
  const el = document.querySelector("[data-mascot-home]");
  const r = el?.getBoundingClientRect();
  if (!r || !r.width) return null; // not rendered or hidden at this screen size
  return {
    x: clamp(r.right + 6, EDGE, viewW() - W - EDGE),
    y: clamp(r.bottom - H - 6, EDGE, window.innerHeight - H - EDGE),
  };
}

export default function Mascot() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const [phase, setPhase] = useState("hidden"); // hidden | in | out
  const [following, setFollowing] = useState(false);
  const [effects, setEffects] = useState([]);
  const wrapRef = useRef(null);
  const btnRef = useRef(null);
  const st = useRef({
    pos: { x: 0, y: 0 },
    target: { x: 0, y: 0 },
    dir: "down",
    drift: 0,
    mode: "idle",
    followUntil: 0,
    mouse: null,
    busy: false,
    visible: false,
    reduced: false,
    nextWrap: 0,
    home: false, // sitting next to the footer mascot
    hovered: false,
  });

  // Only on tablet/desktop widths, where there is room to roam
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setEnabled(mq.matches);
    update();
    st.current.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Run checks with the mascot itself ignored by elementsFromPoint
  const withScan = useCallback((fn) => {
    const btn = btnRef.current;
    if (btn) btn.style.pointerEvents = "none";
    try {
      return fn(makeBlankTest());
    } finally {
      if (btn) btn.style.pointerEvents = "";
    }
  }, []);

  const findSpots = useCallback(
    () =>
      withScan((test) => {
        const spots = [];
        for (let y = TOP_SAFE; y + H <= window.innerHeight - EDGE; y += STEP) {
          for (let x = EDGE * 2; x + W <= viewW() - EDGE; x += STEP) {
            if (isClear(test, { x, y })) spots.push({ x, y });
          }
        }
        return spots;
      }),
    [withScan]
  );

  const effect = useCallback((type, p) => {
    if (st.current.reduced) return;
    const id = Math.random();
    setEffects((e) => [...e, { id, type, x: p.x + W / 2, y: p.y + H / 2 }]);
    setTimeout(() => setEffects((e) => e.filter((v) => v.id !== id)), 900);
  }, []);

  // Vanish where it is, then spawn at `to`
  const teleport = useCallback(
    (to) => {
      const s = st.current;
      if (s.busy) return;
      s.busy = true;
      const wasVisible = s.visible;
      if (wasVisible) {
        effect("vanish", s.pos);
        setPhase("out");
      }
      setTimeout(
        () => {
          s.pos = { ...to };
          s.target = { ...to };
          s.drift = 0;
          s.visible = true;
          effect("spawn", to);
          setPhase("in");
          setTimeout(() => (s.busy = false), 650);
        },
        wasVisible && !s.reduced ? 280 : 0
      );
    },
    [effect]
  );

  const hide = useCallback(() => {
    const s = st.current;
    if (!s.visible || s.busy) return;
    effect("vanish", s.pos);
    s.visible = false;
    setPhase("out");
  }, [effect]);

  // Start a new lap from the top-right-most empty spot, heading down
  const wrap = useCallback(() => {
    const s = st.current;
    const spots = findSpots();
    if (!spots.length) return hide();
    const start = spots.reduce((a, b) => (b.x - b.y * 0.5 > a.x - a.y * 0.5 ? b : a));
    s.dir = "down";
    teleport(start);
  }, [findSpots, hide, teleport]);

  // Look ahead on the current path: keep going, jump past a section, turn, or wrap around
  const checkPath = useCallback(() => {
    const s = st.current;
    if (s.busy || s.mode !== "idle" || s.home) return;
    if (!s.visible) {
      // Nowhere to be right now: look for space again at most once a second
      if (performance.now() < s.nextWrap) return;
      s.nextWrap = performance.now() + 1000;
      return wrap();
    }

    const v = DIRS[s.dir];
    const p = s.target;
    const result = withScan((test) => {
      const ahead = { x: p.x + v.x * LOOK, y: p.y + v.y * LOOK };
      if (isClear(test, ahead) && isClear(test, p)) return { go: true };
      // Something is in the way: find the clear space on the other side of it
      for (let d = LOOK + 24; ; d += 24) {
        const q = { x: p.x + v.x * d, y: p.y + v.y * d };
        if (!inBounds(q)) break;
        if (isClear(test, q)) return { land: q };
      }
      return { edge: true };
    });

    if (result.go) return;
    if (result.land) return teleport(result.land);
    if (s.dir === "down") {
      s.dir = "left"; // reached the bottom: travel right to left
      s.target = { ...s.pos };
    } else {
      wrap(); // reached the left edge: back to the top right
    }
  }, [teleport, withScan, wrap]);

  // Animation loop: travel, follow and float
  useEffect(() => {
    if (!enabled) return;
    let raf;
    let prev = performance.now();
    let lastCheck = 0;
    let prevSway = 0;
    let pauseUntil = 0;
    let nextPause = prev + 4000;
    const t0 = prev;
    const tick = (t) => {
      const s = st.current;
      const dt = Math.min(50, t - prev) / 1000;
      prev = t;

      if (s.mode === "follow") {
        if (t > s.followUntil) {
          s.mode = "idle";
          setFollowing(false);
          const home = s.home && homeSpot();
          const spots = home ? [] : findSpots();
          if (home) {
            teleport(home);
          } else if (spots.length) {
            teleport(spots.reduce((a, b) => (dist(b, s.pos) < dist(a, s.pos) ? b : a)));
          } else {
            hide();
          }
        } else if (s.mouse) {
          s.target = {
            x: clamp(s.mouse.x + 18, EDGE, viewW() - W - EDGE),
            y: clamp(s.mouse.y + 12, EDGE, window.innerHeight - H - EDGE),
          };
        }
      } else if (s.home) {
        // Stay beside the footer mascot as the page scrolls
        const home = homeSpot();
        if (home && !s.busy) {
          if (s.visible) s.target = home;
          else teleport(home);
        }
      } else if (s.visible && !s.busy && !s.reduced) {
        // Every few seconds, stop and hover for a moment
        if (t > nextPause) {
          pauseUntil = t + 900 + Math.random() * 1300;
          nextPause = pauseUntil + 3500 + Math.random() * 5000;
        }
        if (t > pauseUntil) {
          // Uneven pace: drifts between half and full speed
          const pace = 0.5 + 0.5 * (0.5 + 0.5 * Math.sin((t - t0) / 1300));
          const v = DIRS[s.dir];
          s.target.x += v.x * SPEED[s.dir] * pace * dt;
          s.target.y += v.y * SPEED[s.dir] * pace * dt;
        }
      }

      if (s.mode === "idle" && t - lastCheck > CHECK_MS) {
        lastCheck = t;
        checkPath();
      }

      const k = s.mode === "follow" ? 0.16 : 0.12;
      const dx = s.target.x - s.pos.x;
      const dy = s.target.y - s.pos.y;
      s.pos.x += dx * k;
      s.pos.y += dy * k;
      s.drift *= 0.9;
      const age = t - t0;
      const bob = s.reduced ? 0 : Math.sin(age / 650) * 6;

      // Weave side to side across the path (two mixed waves so it never looks mechanical)
      const patrolling = s.mode === "idle" && !s.home && !s.reduced;
      const swayAmp = s.reduced ? 0 : patrolling ? SWAY : 5;
      const sway = swayAmp * (0.7 * Math.sin(age / 900) + 0.3 * Math.sin(age / 2300 + 1));
      const swayVel = dt ? (sway - prevSway) / dt : 0;
      prevSway = sway;
      const across = s.mode === "idle" && s.dir === "left" ? { x: 0, y: 0.8 } : { x: 1, y: 0 };

      // Lean into the weave; glance around while hovering in place
      const hovering = patrolling && t < pauseUntil;
      const look = hovering ? Math.sin(age / 220) * 7 : 0;
      const lean = s.mode !== "idle" ? 0 : s.home ? -8 : s.dir === "left" ? -6 : 0;
      const tilt = clamp(dx * 0.06 - s.drift * 0.2 + lean + swayVel * across.x * 0.25 + look, -16, 16);

      // Gentle squash and stretch in time with the float
      const squash = s.reduced ? 0 : Math.cos(age / 650) * 0.035;

      if (wrapRef.current) {
        // Keep the weave on screen
        const x = clamp(s.pos.x + sway * across.x, 4, viewW() - W - 4);
        const y = clamp(s.pos.y + bob + s.drift + sway * across.y, 4, window.innerHeight - H - 4);
        wrapRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${tilt}deg) scale(${1 - squash}, ${1 + squash})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled, checkPath, findSpots, hide, teleport]);

  // Scroll drift, mouse tracking, resize
  useEffect(() => {
    if (!enabled) return;
    let lastY = window.scrollY;
    const onScroll = () => {
      const s = st.current;
      const delta = window.scrollY - lastY;
      lastY = window.scrollY;
      if (s.mode !== "follow" && !s.home) s.drift = clamp(s.drift - delta * 0.3, -40, 40);
    };
    const onMove = (e) => {
      st.current.mouse = { x: e.clientX, y: e.clientY };
    };
    const onResize = () => {
      const s = st.current;
      if (!inBounds(s.target)) wrap();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled, wrap]);

  // Every few seconds, vanish and pop up on the opposite side of the screen at about the same height
  useEffect(() => {
    if (!enabled) return;
    const id = setInterval(() => {
      const s = st.current;
      if (s.mode !== "idle" || s.home || s.busy || !s.visible || s.hovered || s.reduced || document.hidden) return;
      const mid = viewW() / 2;
      const onRight = s.pos.x + W / 2 > mid;
      const other = findSpots().filter((p) => (onRight ? p.x + W / 2 < mid : p.x + W / 2 > mid));
      if (!other.length) return;
      const spot = other.reduce((a, b) => (Math.abs(b.y - s.pos.y) < Math.abs(a.y - s.pos.y) ? b : a));
      s.dir = "down";
      teleport(spot);
    }, SIDE_HOP_MS);
    return () => clearInterval(id);
  }, [enabled, findSpots, teleport]);

  // When the footer banner comes into view, fly over to sit beside its mascot
  useEffect(() => {
    if (!enabled || !("IntersectionObserver" in window)) return;
    const el = document.querySelector("[data-mascot-home]");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const s = st.current;
        if (entry.intersectionRatio >= 0.6 && !s.home) {
          s.home = true;
          const home = homeSpot();
          if (s.mode === "idle" && home) teleport(home);
        } else if (entry.intersectionRatio < 0.6 && s.home) {
          s.home = false;
          if (s.mode === "idle") wrap();
        }
      },
      { threshold: [0, 0.6] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled, pathname, teleport, wrap]);

  // New page: start a fresh lap once it has rendered
  useEffect(() => {
    if (!enabled) return;
    const t = setTimeout(wrap, 700);
    return () => clearTimeout(t);
  }, [pathname, enabled, wrap]);

  const startFollow = () => {
    const s = st.current;
    if (!s.visible) return;
    s.mode = "follow";
    s.followUntil = performance.now() + FOLLOW_MS;
    setFollowing(true);
  };

  if (!enabled) return null;

  return (
    <>
      {effects.map((fx) => (
        <div
          key={fx.id}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-40"
          style={{ transform: `translate(${fx.x}px, ${fx.y}px)` }}
        >
          {fx.type === "spawn" ? (
            <>
              <span className="mascot-portal" style={{ top: H * 0.38 }} />
              <span className="mascot-beam" />
              <span className="mascot-flash" />
            </>
          ) : (
            <span className="mascot-ring" />
          )}
          {Array.from({ length: 8 }, (_, i) => {
            const a = (i / 8) * Math.PI * 2;
            const r = fx.type === "spawn" ? 52 : 40;
            return (
              <span
                key={i}
                className={fx.type === "spawn" ? "mascot-spark mascot-spark-in" : "mascot-spark"}
                style={{ "--dx": `${Math.cos(a) * r}px`, "--dy": `${Math.sin(a) * r}px` }}
              />
            );
          })}
        </div>
      ))}

      <div
        ref={wrapRef}
        className="pointer-events-none fixed left-0 top-0 z-40 will-change-transform"
        style={{ width: W, height: H }}
      >
        <button
          ref={btnRef}
          type="button"
          onClick={startFollow}
          onMouseEnter={() => (st.current.hovered = true)}
          onMouseLeave={() => (st.current.hovered = false)}
          aria-label="StarOva mascot. Click and it follows your cursor for 5 seconds"
          title={following ? "Following you!" : "Click me!"}
          className={`block size-full cursor-pointer ${
            phase === "in"
              ? "pointer-events-auto animate-[mascotSpawn_0.7s_cubic-bezier(0.34,1.56,0.64,1)_0.15s_both]"
              : phase === "out"
                ? "pointer-events-none animate-[mascotVanish_0.28s_ease-in_both] motion-reduce:opacity-0"
                : "pointer-events-none opacity-0"
          } motion-reduce:animate-none`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mascot/starling-warm.webp"
            alt=""
            draggable={false}
            className={`size-full select-none transition-[filter] duration-300 ${
              following
                ? "drop-shadow-[0_0_18px_rgba(225,212,194,0.95)]"
                : "drop-shadow-[0_0_10px_rgba(167,141,120,0.6)]"
            }`}
          />
        </button>
      </div>
    </>
  );
}
