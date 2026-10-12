"use client";

import { useEffect, useRef, useState } from "react";
import { Compass, Lightbulb, Gem, TrendingUp } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

const values = [
  ["Clarity", "Good technology should be easy to understand, navigate and use.", Compass],
  ["Creativity", "We avoid generic solutions and give every project its own personality.", Lightbulb],
  ["Quality", "From the smallest detail to the overall experience, we do things properly.", Gem],
  ["Growth", "We build foundations that can evolve as your business grows.", TrendingUp],
];

// Shared reveal: fade + rise, staggered; resets once fully off screen so it replays
function reveal(shown) {
  return `transition-[opacity,translate] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
    shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;
}

export default function Values() {
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
        <div className={reveal(shown)}>
          <Eyebrow>What matters to us</Eyebrow>
        </div>
        <h2 style={{ transitionDelay: shown ? "100ms" : "0ms" }} className={`${reveal(shown)} mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-espresso sm:text-4xl`}>
          Built around <span className="text-cocoa">better work.</span>
        </h2>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, text, Icon], i) => {
            const dark = i % 2 === 1;
            return (
              <li
                key={title}
                style={{ transitionDelay: shown ? `${250 + i * 120}ms` : "0ms" }}
                className={`group relative overflow-hidden rounded-3xl p-6 sm:p-7 ${reveal(shown)} ${
                  dark
                    ? "bg-espresso text-cream shadow-[0_30px_60px_-30px_rgba(41,28,14,0.8)]"
                    : "border border-white/70 bg-white/50 text-espresso shadow-[0_20px_45px_-30px_rgba(41,28,14,0.45)] backdrop-blur-xl hover:border-taupe/60 hover:bg-white/65"
                }`}
              >
                {/* Oversized faded icon in the corner */}
                <Icon
                  aria-hidden
                  strokeWidth={1}
                  className={`pointer-events-none absolute -bottom-6 -right-6 size-36 animate-[valueDrift_7s_ease-in-out_infinite] motion-reduce:animate-none ${
                    dark ? "text-cream/[0.07]" : "text-cocoa/[0.07]"
                  }`}
                />
                <span
                  style={{ transitionDelay: shown ? `${550 + i * 120}ms` : "0ms" }}
                  className={`relative grid size-11 place-items-center rounded-xl transition-[scale,rotate] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 motion-reduce:scale-100 ${shown ? "scale-100 group-hover:scale-110" : "scale-0"} ${
                    dark ? "border border-cream/15 bg-cream/10 text-cream" : "bg-espresso text-cream"
                  }`}
                >
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="relative mt-8 text-xl font-semibold tracking-tight">{title}</h3>
                <p className={`relative mt-2 text-sm leading-6 ${dark ? "text-cream/65" : "text-cocoa/80"}`}>
                  {text}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
  );
}
