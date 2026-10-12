"use client";

import { useEffect, useRef, useState } from "react";

const BOX = { w: 380, h: 300 }; // formation size, centred in the play area
const FORMATION = [
  { x: 70, y: 190 },
  { x: 190, y: 72 },
  { x: 310, y: 190 },
];
const AGENT = { w: 64, h: 101 }; // rendered mascot size
const TAGS = ["Web", "Data", "Design"]; // label shown above each agent, in FORMATION order
const HAND = { x: 32, y: 60 }; // where an agent holds the ball, from its top-left
const BALL = 14;
const HIT = 44; // grab area around the ball

const THROW_MS = 1500;
const TOSS_MS = 650;
const HOLD_MS = 200;
const HOP_MS = 380;
const WALK = 0.2; // px per ms

const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
const bezier = (a, c, b, t) => ({
  x: (1 - t) ** 2 * a.x + 2 * (1 - t) * t * c.x + t * t * b.x,
  y: (1 - t) ** 2 * a.y + 2 * (1 - t) * t * c.y + t * t * b.y,
});
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

// Three small agents playing catch. Grab the ball and drop it, or click anywhere to throw it:
// the nearest agent walks over, fetches it, carries it home and the game carries on.
export default function CatchGame() {
  const areaRef = useRef(null);
  const ballRef = useRef(null);
  const agentRefs = useRef([]);
  const imgRefs = useRef([]);
  const api = useRef(null);
  const [hint, setHint] = useState(true);

  useEffect(() => {
    const area = areaRef.current;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let homes = FORMATION;
    let size = { w: BOX.w, h: BOX.h };

    const layout = () => {
      const r = area.getBoundingClientRect();
      size = { w: r.width, h: r.height };
      // Squeeze the formation on narrow screens so all three agents (and their labels) fit
      const k = Math.min(1, (r.width - 40) / BOX.w, (r.height - 20) / BOX.h);
      const cx = BOX.w / 2, cy = BOX.h / 2;
      homes = FORMATION.map((p) => ({ x: r.width / 2 + (p.x - cx) * k, y: r.height / 2 + (p.y - cy) * k }));
    };
    layout();

    const agents = homes.map((h) => ({ ...h, hop: -Infinity }));
    const s = {
      mode: "hold", // throw | hold | drag | toss | loose | carry
      holder: 0,
      from: null,
      to: null,
      arc: null,
      t0: performance.now(),
      ball: { ...homes[0] },
      fetcher: null,
    };

    const clampBall = (p) => ({
      x: Math.min(size.w - BALL, Math.max(BALL, p.x)),
      y: Math.min(size.h - BALL, Math.max(BALL, p.y)),
    });
    const nearest = (p) =>
      agents.reduce((best, a, i) => (dist(a, p) < dist(agents[best], p) ? i : best), 0);
    const atHome = (i) => dist(agents[i], homes[i]) < 1;

    const startFlight = (mode, from, to, lift, now) => {
      const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
      s.mode = mode;
      s.from = { ...from };
      s.to = { ...to };
      s.arc = { x: mid.x, y: lift > 0 ? Math.max(from.y, to.y) + lift : Math.min(from.y, to.y) + lift };
      s.t0 = now;
    };

    // Called by the pointer handlers below
    api.current = {
      grab() {
        s.mode = "drag";
        s.holder = null;
        s.fetcher = null;
      },
      move(p) {
        if (s.mode === "drag") s.ball = clampBall(p);
      },
      drop() {
        if (s.mode !== "drag") return;
        s.mode = "loose";
        s.fetcher = nearest(s.ball);
      },
      throwTo(p) {
        s.holder = null;
        s.fetcher = null;
        startFlight("toss", s.ball, clampBall(p), -90, performance.now());
      },
    };

    let raf = 0;
    let last = performance.now();
    let visible = true;

    const frame = (now) => {
      const dt = Math.min(50, now - last);
      last = now;

      // Ball
      if (s.mode === "throw" || s.mode === "toss") {
        const t = Math.min(1, (now - s.t0) / (s.mode === "throw" ? THROW_MS : TOSS_MS));
        s.ball = bezier(s.from, s.arc, s.to, ease(t));
        if (t === 1) {
          if (s.mode === "throw") {
            s.mode = "hold";
            s.holder = s.target;
            s.t0 = now;
            agents[s.holder].hop = now;
          } else {
            s.mode = "loose";
            s.fetcher = nearest(s.ball);
          }
        }
      }

      // Agents: the fetcher heads for the ball, everyone else heads home
      agents.forEach((a, i) => {
        const goal = s.mode === "loose" && i === s.fetcher ? s.ball : homes[i];
        const d = dist(a, goal);
        const step = Math.min(d, WALK * dt);
        a.walking = d > 1;
        if (d > 0) {
          a.dir = Math.sign(goal.x - a.x) || a.dir || 1;
          a.x += ((goal.x - a.x) / d) * step;
          a.y += ((goal.y - a.y) / d) * step;
        }
      });

      if (s.mode === "loose" && dist(agents[s.fetcher], s.ball) < 2) {
        s.mode = "carry";
        s.holder = s.fetcher;
        agents[s.holder].hop = now;
      }
      if (s.mode === "carry" && atHome(s.holder)) {
        s.mode = "hold";
        s.t0 = now;
      }
      if (s.mode === "hold" || s.mode === "carry") s.ball = { ...agents[s.holder] };

      // Next throw once the holder has had the ball a moment and everyone is home
      if (s.mode === "hold" && !still && now - s.t0 > HOLD_MS && agents.every((_, i) => atHome(i))) {
        const next = (s.holder + 1) % agents.length;
        s.target = next;
        // the pass back to the first agent is a low bounce-pass; the others are lobs
        startFlight("throw", homes[s.holder], homes[next], next === 0 ? 110 : -120, now);
      }

      // Render
      agents.forEach((a, i) => {
        const el = agentRefs.current[i];
        if (!el) return;
        const p = Math.min(1, (now - a.hop) / HOP_MS);
        const hop = p < 1 ? -14 * Math.sin(Math.PI * p) : 0;
        const bob = a.walking ? -Math.abs(Math.sin(now / 90)) * 4 : 0;
        const tilt = a.walking ? Math.sin(now / 90) * 7 : 0;
        const facing = a.walking ? a.dir : i === 2 ? -1 : 1;
        el.style.transform = `translate(${a.x - HAND.x}px, ${a.y - HAND.y + hop + bob}px) rotate(${tilt}deg)`;
        // flip only the image to face the ball, so the label text never mirrors
        if (imgRefs.current[i]) imgRefs.current[i].style.transform = `scaleX(${facing})`;
      });
      if (ballRef.current) {
        ballRef.current.style.transform = `translate(${s.ball.x - HIT / 2}px, ${s.ball.y - HIT / 2}px)`;
        ballRef.current.dataset.mode = s.mode;
      }

      if (visible) raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);

    // Only animate while the hero is on screen
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        last = performance.now();
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      }
    });
    io.observe(area);
    const ro = new ResizeObserver(layout);
    ro.observe(area);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  const point = (e) => {
    const r = areaRef.current.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  return (
    <div
      ref={areaRef}
      className="absolute inset-0 cursor-crosshair touch-none select-none"
      onPointerDown={(e) => {
        if (e.target !== areaRef.current) return;
        api.current?.throwTo(point(e));
        setHint(false);
      }}
    >
      {FORMATION.map((_, i) => (
        <div
          key={i}
          ref={(el) => (agentRefs.current[i] = el)}
          className="pointer-events-none absolute left-0 top-0 origin-[50%_100%] will-change-transform"
          style={{ width: AGENT.w, height: AGENT.h }}
        >
          <span className="absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/70 bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-espresso shadow-[0_8px_20px_-10px_rgba(0,0,0,0.6)] backdrop-blur">
            {TAGS[i]}
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={(el) => (imgRefs.current[i] = el)}
            src="/images/mascot/starling-warm.png"
            alt=""
            draggable={false}
            className="size-full"
          />
        </div>
      ))}

      <div
        ref={ballRef}
        className="absolute left-0 top-0 grid cursor-grab place-items-center rounded-full will-change-transform active:cursor-grabbing"
        style={{ width: HIT, height: HIT }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          api.current?.grab();
          api.current?.move(point(e));
          setHint(false);
        }}
        onPointerMove={(e) => api.current?.move(point(e))}
        onPointerUp={() => api.current?.drop()}
        onPointerCancel={() => api.current?.drop()}
      >
        <span
          className="rounded-full bg-[#fff6ea] shadow-[0_0_12px_4px_rgba(255,236,210,0.85),0_0_30px_10px_rgba(167,141,120,0.55)]"
          style={{ width: BALL, height: BALL }}
        />
      </div>

      <p
        className={`pointer-events-none absolute inset-x-0 bottom-5 text-center text-xs font-medium text-white/55 transition-opacity duration-700 ${
          hint ? "opacity-100" : "opacity-0"
        }`}
      >
        Grab the ball, or click anywhere to throw it
      </p>
    </div>
  );
}
