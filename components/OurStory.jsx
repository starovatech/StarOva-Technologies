"use client";

import { useEffect, useRef, useState } from "react";
import { MonitorX, EyeOff, FileSpreadsheet, ArrowRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

// The original first paragraph, one sentence per card
const problems = [
  { icon: MonitorX, text: "A website should communicate clearly." },
  { icon: EyeOff, text: "A brand should be recognisable." },
  {
    icon: FileSpreadsheet,
    text: "Data shouldn't sit inside confusing spreadsheets without telling you anything useful.",
  },
];

const headline = "Businesses shouldn't have to choose between technology that looks good and technology that";

// Plays when the section is in view; resets once it has fully left so it replays next time
function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setShown(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= threshold) setShown(true);
        else if (!entry.isIntersecting) setShown(false);
      },
      { threshold: [0, threshold] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
}

// Shared reveal: fade + slide from a direction, with a delay
function reveal(shown, from = "up") {
  const hidden = { up: "translate-y-6", left: "-translate-x-8", right: "translate-x-8", none: "" }[from];
  return `transition-[opacity,translate] duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
    shown ? "translate-x-0 translate-y-0 opacity-100" : `${hidden} opacity-0`
  }`;
}

export default function OurStory() {
  const [ref, shown] = useInView();
  const words = headline.split(" ");
  const finalDelay = words.length * 45;

  return (
    <section ref={ref} className="mx-auto max-w-6xl overflow-x-clip px-4 py-12 sm:px-6 lg:py-14">
      <div className={reveal(shown)}>
        <Eyebrow>Our story</Eyebrow>
      </div>

      {/* Headline, revealed word by word */}
      <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-espresso sm:text-4xl lg:text-5xl">
        {words.map((word, i) => (
          <span
            key={i}
            className={`inline-block ${reveal(shown)}`}
            style={{ transitionDelay: shown ? `${i * 45}ms` : "0ms" }}
          >
            {word}&nbsp;
          </span>
        ))}
        <span
          className={`relative inline-block text-cocoa ${reveal(shown)}`}
          style={{ transitionDelay: shown ? `${finalDelay}ms` : "0ms" }}
        >
          actually works.
          {/* Underline that draws itself in */}
          <svg
            aria-hidden
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            className="absolute -bottom-2 left-0 h-3 w-full text-taupe"
          >
            <path
              d="M2 8 C 50 2, 110 2, 198 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength="1"
              className="transition-[stroke-dashoffset] duration-1000 ease-out motion-reduce:transition-none"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: shown ? 0 : 1,
                transitionDelay: shown ? `${finalDelay + 350}ms` : "0ms",
              }}
            />
          </svg>
        </span>
      </h2>

      <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_88px_1fr] lg:gap-4">
        {/* The problem */}
        <ul className="flex flex-col gap-3">
          {problems.map(({ icon: Icon, text }, i) => (
            <li
              key={text}
              className={`group flex items-center gap-4 rounded-2xl border border-white/70 bg-white/50 p-4 shadow-[0_20px_45px_-32px_rgba(41,28,14,0.45)] backdrop-blur-xl transition-colors hover:bg-white/65 sm:p-5 ${reveal(shown, "left")}`}
              style={{ transitionDelay: shown ? `${600 + i * 150}ms` : "0ms" }}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream text-cocoa transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <p className="font-medium leading-7 text-espresso">{text}</p>
            </li>
          ))}
        </ul>

        {/* Connector: flowing dashes leading to the answer */}
        <div
          aria-hidden
          className={`relative mx-auto flex h-20 w-0.5 items-center justify-center lg:h-0.5 lg:w-full ${reveal(shown, "none")}`}
          style={{ transitionDelay: shown ? "1050ms" : "0ms" }}
        >
          <span className="absolute inset-0 animate-[dashFlowY_1.2s_linear_infinite] bg-[repeating-linear-gradient(to_bottom,var(--color-cocoa)_0_6px,transparent_6px_12px)] motion-reduce:animate-none lg:animate-[dashFlowX_1.2s_linear_infinite] lg:bg-[repeating-linear-gradient(to_right,var(--color-cocoa)_0_6px,transparent_6px_12px)]" />
          <span className="relative grid size-10 shrink-0 place-items-center rounded-full bg-espresso text-cream shadow-[0_0_25px_6px_rgba(167,141,120,0.45)] ring-4 ring-white/70">
            <ArrowRight className="size-4 rotate-90 lg:rotate-0" strokeWidth={2.5} />
          </span>
        </div>

        {/* The answer */}
        <div
          className={`relative overflow-hidden rounded-3xl bg-espresso p-6 text-cream shadow-[0_30px_60px_-30px_rgba(41,28,14,0.8)] sm:p-8 ${reveal(shown, "right")}`}
          style={{ transitionDelay: shown ? "1200ms" : "0ms" }}
        >
          <div aria-hidden className="pointer-events-none absolute -right-14 -top-14 size-56 animate-[ringBreathe_6s_ease-in-out_infinite] rounded-full border border-cream/10 motion-reduce:animate-none" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-10 size-72 animate-[glowDrift_9s_ease-in-out_infinite] rounded-full bg-cocoa/50 blur-3xl motion-reduce:animate-none" />

          <p className="relative text-2xl font-semibold tracking-tight sm:text-3xl">
            That&apos;s where <span className="text-taupe">StarOva</span> comes in.
          </p>
          <p className="relative mt-4 max-w-md leading-7 text-cream/75">
            We bring design, development, branding and data together to create
            solutions around the real needs of a business.
          </p>
        </div>
      </div>
    </section>
  );
}
