"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, PenTool } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { DialogButton } from "@/components/Dialogs";
import { services } from "@/lib/site";

// Services shown in this homepage section, in order. Data Cleaning and
// Logo & Brand Identity are left out here (still listed on /services)
const order = [
  "Website Development",
  "Data Analysis",
  "Interactive Dashboards",
  "CRM Solutions",
  "Catalogue Design",
  "BI Development & Architecture",
];

// Tiles shown differently here than on /services
const overrides = {
  "Catalogue Design": {
    title: "Catalogue & Logo Design",
    text: "Professional catalogues and memorable logos, digital and print-ready, that give your business a clear and recognisable presence.",
    icon: PenTool,
  },
};

const featured = order
  .map((title) => services.find((service) => service.title === title))
  .map((service) => ({ ...service, ...overrides[service.title] }));

// Grid placement per tile, in order (3-column bento on desktop)
const layout = [
  { span: "md:col-span-2", dark: true },
  { span: "" },
  { span: "" },
  { span: "" },
  { span: "" },
  { span: "lg:col-span-2", dark: true },
];

// Fades and lifts a tile in, staggered by its position
function Reveal({ shown, index, className = "", children }) {
  return (
    <div
      className={`transition-[opacity,translate] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: shown ? `${index * 90}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function ServiceTile({ title, text, icon: Icon, index, dark }) {
  return (
    <Link
      href="/services"
      className={`group relative flex h-full min-h-[150px] flex-col overflow-hidden rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? "bg-espresso text-cream shadow-[0_30px_60px_-30px_rgba(41,28,14,0.8)]"
          : "border border-white/70 bg-white/50 text-espresso shadow-[0_20px_45px_-30px_rgba(41,28,14,0.45)] backdrop-blur-xl hover:border-taupe/60 hover:bg-white/65"
      }`}
    >
      {dark && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-10 size-72 animate-[glowDrift_9s_ease-in-out_infinite] rounded-full bg-cocoa/50 blur-3xl motion-reduce:animate-none"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 size-52 animate-[ringBreathe_6s_ease-in-out_infinite] rounded-full border border-cream/10 motion-reduce:animate-none"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-2 -top-2 size-32 animate-[ringBreathe_6s_ease-in-out_1.5s_infinite] rounded-full border border-cream/10 motion-reduce:animate-none"
          />
        </>
      )}

      <div className="relative flex items-center gap-3">
        <span
          className={`grid size-10 shrink-0 place-items-center rounded-xl transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
            dark
              ? "border border-cream/15 bg-cream/10 text-cream group-hover:bg-cream group-hover:text-espresso"
              : "bg-espresso text-cream group-hover:bg-cocoa"
          }`}
        >
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </span>
        <h3 className="min-w-0 flex-1 text-lg font-semibold leading-tight tracking-tight">
          {title}
        </h3>
        <span
          className={`font-dot text-2xl font-bold leading-none ${dark ? "text-taupe" : "text-taupe/80"}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p
        className={`relative mt-auto max-w-md pr-6 pt-4 text-[13px] leading-5 ${dark ? "text-cream/65" : "text-cocoa/80"}`}
      >
        {text}
      </p>

      <ArrowUpRight
        aria-hidden
        className={`absolute bottom-5 right-5 size-4 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 ${
          dark ? "text-cream" : "text-espresso"
        }`}
      />
    </Link>
  );
}

export default function WhatWeDo() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setShown(true);
    // Play when 20% is in view; reset once fully out of view so it replays next time
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) setShown(true);
        else if (!entry.isIntersecting) setShown(false);
      },
      { threshold: [0, 0.2] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14"
    >
      <Reveal shown={shown} index={0}>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-espresso sm:text-4xl">
              Digital solutions for{" "}
              <span className="text-cocoa">modern businesses.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:max-w-sm md:items-end md:text-right">
            <p className="text-sm leading-6 text-cocoa/80">
              Websites, branding and data, brought together in one place so you
              get one team and one clear answer.
            </p>
            <Link
              href="/services"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/50 px-4 py-2 text-sm font-semibold text-espresso shadow-sm backdrop-blur transition-colors hover:bg-espresso hover:text-cream"
            >
              View all services
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((service, i) => (
          <Reveal key={service.title} shown={shown} index={i + 1} className={layout[i]?.span}>
            <ServiceTile index={i} dark={layout[i]?.dark} {...service} />
          </Reveal>
        ))}

        <Reveal shown={shown} index={featured.length + 1}>
          <DialogButton
            dialog="connect"
            className="group relative flex h-full min-h-[150px] w-full flex-col justify-between overflow-hidden rounded-3xl bg-cocoa p-5 text-left text-cream shadow-[0_30px_60px_-30px_rgba(110,71,59,0.9)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-52 animate-[ringBreathe_6s_ease-in-out_infinite] rounded-full border border-cream/15 motion-reduce:animate-none"
            />
            <span className="relative grid size-10 place-items-center rounded-xl border border-cream/20 bg-cream/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              <MessageCircle className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="relative">
              <p className="text-sm text-cream/70">Not sure what you need?</p>
              <p className="mt-1 flex items-center gap-2 text-xl font-semibold tracking-tight">
                Let&apos;s talk
                <ArrowUpRight
                  className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden
                />
              </p>
            </div>
          </DialogButton>
        </Reveal>
      </div>
    </section>
  );
}
