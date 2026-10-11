"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { contact } from "@/lib/site";
import HeroStats from "@/components/HeroStats";

const IMAGE = "url('/images/hero/blackhole.jpg')";
const SLIDE_MS = 3000;

const slides = [
  {
    title: "Web Development",
    text: "Modern, responsive websites built with Next.js that represent your business professionally and turn visitors into customers.",
  },
  {
    title: "Data & Dashboards",
    text: "We clean, analyse and visualise your business data, turning it into interactive dashboards and clear insights.",
  },
  {
    title: "Catalogue Design",
    text: "Clean, professional product catalogues, digital and print-ready, that showcase your range clearly and help customers choose.",
  },
  {
    title: "Brand Identity",
    text: "Clean, memorable logos and visual systems that give your business a consistent, recognisable presence everywhere.",
  },
];

function Title({ className }) {
  return (
    <p
      className={`absolute inset-0 select-none font-medium uppercase leading-[0.9] tracking-[0.06em] [font-size:clamp(3rem,7.5vw,7rem)] ${className}`}
      aria-hidden
    >
      <span className="absolute left-[6%] top-[20%]">StarOva</span>
      <span className="absolute left-[46%] top-[calc(20%+0.95em)]">Tech</span>
    </p>
  );
}

export default function GalaxyHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];
  const go = (step) =>
    setIndex((i) => (i + step + slides.length) % slides.length);

  // Advance every 3s; restarts after any manual change, pauses while hovered/focused
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => go(1), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [index, paused]);

  return (
    <section className="relative flex h-svh min-h-[680px] overflow-hidden bg-espresso px-4 pb-8 pt-28 sm:px-8">
      {/* Blurred backdrop */}
      <div
        aria-hidden
        className="absolute -inset-10 bg-cover bg-center blur-lg"
        style={{ backgroundImage: IMAGE }}
      />
      <div aria-hidden className="absolute inset-0 bg-espresso/25" />

      {/* Glass card */}
      <div className="relative mx-auto h-full w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/50 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.35)]">
        {/* Sharp image seen through the card (fixed so it lines up with the backdrop) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: IMAGE }}
        />

        {/* Frosted panel */}
        <div className="absolute inset-x-0 bottom-0 h-[58%] border-t border-white/20 bg-cream/20 backdrop-blur-xl md:inset-y-0 md:left-0 md:h-auto md:w-[40%] md:border-r md:border-t-0" />

        {/* Big title: dark over the glass, light over the image */}
        <h1 className="sr-only">StarOva Technologies</h1>
        <Title className="hidden text-taupe md:block md:[clip-path:inset(0_60%_0_0)]" />
        <Title className="text-white md:[clip-path:inset(0_0_0_40%)]" />

        {/* Panel content */}
        <div className="relative flex h-full flex-col justify-between p-6 sm:p-8 md:w-[40%] md:p-10">
          <div>
            <Link
              href="/contact"
              className="text-sm font-medium text-white hover:underline md:text-stone"
            >
              Contact us
            </Link>
            <div className="mt-3 flex gap-2">
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email us"
                className="grid size-7 place-items-center rounded-md border border-white/60 text-white transition-colors hover:bg-white/20 md:border-stone/60 md:text-stone md:hover:bg-stone/15"
              >
                <Mail className="size-3.5" strokeWidth={1.75} />
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="grid size-7 place-items-center rounded-md border border-white/60 text-white transition-colors hover:bg-white/20 md:border-stone/60 md:text-stone md:hover:bg-stone/15"
              >
                <MessageCircle className="size-3.5" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div
              key={index}
              className="animate-[slideRight_0.6s_ease-out] text-white motion-reduce:animate-none"
            >
              <h2 className="text-xl font-semibold underline decoration-1 underline-offset-[6px] sm:text-2xl">
                {slide.title}
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/90">
                {slide.text}
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex rounded-full border border-white/80 bg-white/10 px-7 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white hover:text-espresso"
              >
                Start a project
              </Link>
            </div>

            {/* Slide controls */}
            <div className="mt-6 inline-flex items-center gap-3 px-2 py-1.5">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous slide"
                className="grid size-7 place-items-center rounded-full text-white transition-colors hover:bg-white/15"
              >
                <ChevronLeft className="size-4" strokeWidth={2} />
              </button>
              <div className="flex items-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.title}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${s.title}`}
                    aria-current={i === index}
                    className={`size-2.5 rounded-full border transition-colors ${
                      i === index
                        ? "border-white bg-white"
                        : "border-taupe bg-black hover:border-cream"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next slide"
                className="grid size-7 place-items-center rounded-full text-white transition-colors hover:bg-white/15"
              >
                <ChevronRight className="size-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats grid (bottom right) */}
        <HeroStats className="absolute bottom-6 left-[calc(40%+1.5rem)] right-6 hidden origin-bottom-right lg:grid [@media(max-height:719px)]:scale-[0.8]" />
      </div>
    </section>
  );
}
