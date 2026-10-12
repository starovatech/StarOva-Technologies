"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, BrainCircuit, TrendingUp } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

const reasons = [
  { title: "Creative by design", text: "Websites and branding built around your identity, not a template with your logo on top.", icon: Sparkles },
  { title: "Smart with data", text: "We clean, analyse and visualise your business data so it actually tells you something.", icon: BrainCircuit, dark: true },
  { title: "Built for growth", text: "Modern foundations with Next.js and React that evolve as your business grows.", icon: TrendingUp },
];

// Fade + rise, staggered by delay; resets once fully off screen so it replays
function reveal(shown) {
  return `transition-[opacity,translate] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
    shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;
}
const delay = (shown, ms) => ({ transitionDelay: shown ? `${ms}ms` : "0ms" });

export default function WhyStarova() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setShown(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.25) setShown(true);
        else if (!entry.isIntersecting) setShown(false);
      },
      { threshold: [0, 0.25] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <div className={reveal(shown)}>
            <Eyebrow>Why StarOva</Eyebrow>
          </div>
          <h2
            style={delay(shown, 100)}
            className={`${reveal(shown)} mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-espresso sm:text-4xl`}
          >
            Technology should make{" "}
            <span className="text-cocoa">business simpler.</span>
          </h2>
        </div>
        <p
          style={delay(shown, 200)}
          className={`${reveal(shown)} max-w-sm text-sm leading-6 text-cocoa/80 md:text-right`}
        >
          One partner for design, development and data, focused on results
          you can actually see.
        </p>
      </div>

      <ul className="mt-8 grid gap-3 md:grid-cols-3">
        {reasons.map(({ title, text, icon: Icon, dark }, i) => (
          <li
            key={title}
            style={delay(shown, 300 + i * 140)}
            className={`group relative overflow-hidden rounded-3xl p-6 sm:p-7 ${reveal(shown)} ${
              dark
                ? "bg-espresso text-cream shadow-[0_30px_60px_-30px_rgba(41,28,14,0.8)]"
                : "border border-white/70 bg-white/50 text-espresso shadow-[0_20px_45px_-30px_rgba(41,28,14,0.45)] backdrop-blur-xl hover:border-taupe/60 hover:bg-white/65"
            }`}
          >
            {/* Oversized faded icon in the corner, slowly drifting */}
            <Icon
              aria-hidden
              strokeWidth={1}
              className={`pointer-events-none absolute -bottom-6 -right-6 size-36 animate-[valueDrift_7s_ease-in-out_infinite] motion-reduce:animate-none ${
                dark ? "text-cream/[0.07]" : "text-cocoa/[0.07]"
              }`}
              style={{ animationDelay: `${i * -2.3}s` }}
            />
            {/* Icon tile pops in just after its card */}
            <span
              style={delay(shown, 600 + i * 140)}
              className={`relative grid size-11 place-items-center rounded-xl transition-[scale,rotate] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 motion-reduce:scale-100 ${
                shown ? "scale-100 group-hover:scale-110" : "scale-0"
              } ${dark ? "border border-cream/15 bg-cream/10 text-cream" : "bg-espresso text-cream"}`}
            >
              <Icon className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
            <h3 className="relative mt-8 text-xl font-semibold tracking-tight">{title}</h3>
            <p className={`relative mt-2 text-sm leading-6 ${dark ? "text-cream/65" : "text-cocoa/80"}`}>
              {text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
