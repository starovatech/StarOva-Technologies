"use client";

import { useEffect, useRef, useState } from "react";
import {
  ScanSearch,
  Database,
  Compass,
  Zap,
  ShieldCheck,
  PackageCheck,
  ChevronRight,
} from "lucide-react";
import { process as steps } from "@/lib/site";

// How long each slide stays: the overview, then each step (longer, so the sentence can be read)
const OVERVIEW_MS = 4000;
const STEP_MS = 4500;

// One icon per step in `steps`, in order
const icons = [ScanSearch, Database, Compass, Zap, ShieldCheck, PackageCheck];

// Slide 0 is the full flow; slides 1..n show one step each
const count = steps.length + 1;

function Overview() {
  return (
    <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5">
      <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-stone">
        Our approach
      </p>
      <span aria-hidden className="hidden h-5 w-px shrink-0 bg-white/20 lg:block" />
      <ol className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-3 xl:gap-x-3">
      {steps.map(([num, title], i) => {
        const Icon = icons[i];
        return (
          <li key={num} className="flex items-center gap-2.5 xl:gap-3">
            <span className="flex items-center gap-2 text-sm font-semibold text-white">
              <Icon className="size-[18px] text-taupe" strokeWidth={1.75} aria-hidden />
              {title}
            </span>
            {i < steps.length - 1 && (
              <ChevronRight className="size-4 text-white/40" strokeWidth={2} aria-hidden />
            )}
          </li>
        );
      })}
      </ol>
    </div>
  );
}

function Step({ index }) {
  const [, title, text, short] = steps[index];
  const Icon = icons[index];
  return (
    <div className="flex w-full items-center gap-3 sm:gap-4">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-taupe/20 text-taupe ring-1 ring-taupe/30">
        <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden />
      </span>
      <div className="min-w-0 sm:flex sm:items-center sm:gap-4">
        <p className="text-sm font-semibold text-white sm:shrink-0 sm:text-base">{title}</p>
        <span aria-hidden className="hidden h-5 w-px shrink-0 bg-white/20 sm:block" />
        <p className="text-[13px] leading-5 text-white/75 sm:line-clamp-2 sm:text-sm">
          <span className="sm:hidden">{short}</span>
          <span className="hidden sm:inline">{text}</span>
        </p>
      </div>
    </div>
  );
}

export default function ApproachSlider() {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null); // slide that is currently leaving
  const [cycle, setCycle] = useState(0); // bumps to restart the progress line
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const running = inView && !paused;
  const duration = index === 0 ? OVERVIEW_MS : STEP_MS;

  const advance = () => {
    setPrev(index);
    setIndex((i) => (i + 1) % count);
  };

  // Start from the first slide each time the section scrolls into view; stop when it leaves
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setInView(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPrev(null);
          setIndex(0);
          setCycle((c) => c + 1);
        }
        setInView(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);


  return (
    <div
      ref={ref}
      role="region"
      aria-roledescription="carousel"
      aria-label="Our approach"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative flex w-full items-center gap-2 overflow-hidden rounded-3xl border border-white/20 bg-espresso/70 px-5 py-2.5 backdrop-blur-md sm:gap-3 lg:rounded-full"
    >

      {/* Every slide shares one grid cell, so the box keeps the height of the tallest slide */}
      <div className="grid min-w-0 flex-1" aria-live={running ? "off" : "polite"}>
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            inert={i !== index}
            className={`flex items-center [grid-area:1/1] motion-reduce:translate-x-0 motion-reduce:transition-none ${
              i === 0 ? "justify-center" : "justify-start"
            } ${
              i === index
                ? // incoming: slides in from the right once the old slide has mostly gone
                  "translate-x-0 opacity-100 blur-0 transition-[translate,opacity,filter] delay-150 duration-500 ease-out"
                : i === prev
                  ? // outgoing: slides out to the left and fades quickly
                    "pointer-events-none -translate-x-8 opacity-0 blur-[2px] transition-[translate,opacity,filter] duration-300 ease-in"
                  : // waiting: parked on the right, invisible, no transition
                    "pointer-events-none translate-x-8 opacity-0 transition-none"
            }`}
          >
            {i === 0 ? <Overview /> : <Step index={i - 1} />}
          </div>
        ))}
      </div>


      {/* Progress line for the current slide; the slide changes when it finishes,
          so pausing (hover / out of view) keeps the line and the timing in sync */}
      <span
        key={`${index}-${cycle}`}
        aria-hidden
        onAnimationEnd={advance}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-taupe/0 via-taupe to-taupe/0 motion-reduce:opacity-0"
        style={{
          animation: `approachProgress ${duration}ms linear forwards`,
          animationPlayState: running ? "running" : "paused",
        }}
      />
    </div>
  );
}
