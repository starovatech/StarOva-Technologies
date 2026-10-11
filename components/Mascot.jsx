"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const H = 96;
const W = Math.round((H * 202) / 320); // keeps the image's aspect ratio
const PAD = 20; // clear space kept around the mascot
const STEP = 80; // grid spacing when searching for empty spots
const EDGE = 8; // distance kept from the viewport edges
const TOP_SAFE = 96; // stay below the navbar
const LOOK = 28; // how far ahead it checks while travelling
const CHECK_MS = 140; // how often it checks the path ahead
const SPEED = { down: 45, left: 60 }; // travel speed, px per second
const FOLLOW_MS = 5000;

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
    if (s.busy || s.mode !== "idle") return;
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
    const t0 = prev;
    const tick = (t) => {
      const s = st.current;
      const dt = Math.min(50, t - prev) / 1000;
      prev = t;

      if (s.mode === "follow") {
        if (t > s.followUntil) {
          s.mode = "idle";
          setFollowing(false);
          const spots = findSpots();
          if (spots.length) {
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
      } else if (s.visible && !s.busy && !s.reduced) {
        const v = DIRS[s.dir];
        s.target.x += v.x * SPEED[s.dir] * dt;
        s.target.y += v.y * SPEED[s.dir] * dt;
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
      const bob = s.reduced ? 0 : Math.sin((t - t0) / 650) * 6;
      const lean = s.mode === "idle" && s.dir === "left" ? -6 : 0;
      const tilt = clamp(dx * 0.06 - s.drift * 0.2 + lean, -14, 14);
      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(${s.pos.x}px, ${s.pos.y + bob + s.drift}px, 0) rotate(${tilt}deg)`;
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
      if (s.mode !== "follow") s.drift = clamp(s.drift - delta * 0.3, -40, 40);
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
            src="/images/mascot/starling.webp"
            alt=""
            draggable={false}
            className={`size-full select-none transition-[filter] duration-300 ${
              following
                ? "drop-shadow-[0_0_18px_rgba(110,140,255,0.95)]"
                : "drop-shadow-[0_0_10px_rgba(110,140,255,0.55)]"
            }`}
          />
        </button>
      </div>
    </>
  );
}
