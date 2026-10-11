import {
  Rocket,
  Building2,
  CodeXml,
  ShoppingBag,
  UserRound,
  Sparkles,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";
import GalaxyHero from "@/components/GalaxyHero";
import ProjectsSection from "@/components/ProjectsSection";
import WhatWeDo from "@/components/WhatWeDo";
import ApproachSlider from "@/components/ApproachSlider";
import Eyebrow from "@/components/Eyebrow";
import FaqSection from "@/components/FaqSection";

const audiences = [
  { label: "Startups", icon: Rocket },
  { label: "SMEs", icon: Building2 },
  { label: "Tech", icon: CodeXml },
  { label: "Retail", icon: ShoppingBag },
  { label: "Professionals", icon: UserRound },
];

const reasons = [
  { title: "Creative by design", text: "Websites and branding built around your identity, not a template with your logo on top.", icon: Sparkles },
  { title: "Smart with data", text: "We clean, analyse and visualise your business data so it actually tells you something.", icon: BrainCircuit, dark: true },
  { title: "Built for growth", text: "Modern foundations with Next.js and React that evolve as your business grows.", icon: TrendingUp },
];

export default function HomePage() {
  return (
    <>
      <GalaxyHero />
      <ProjectsSection />

      {/* Audiences */}
      <section
        className="relative overflow-hidden border-y border-white/20 bg-espresso bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: "url('/images/hero/blackhole.jpg')" }}
      >
        <div aria-hidden className="absolute inset-0 bg-espresso/25" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:px-6 md:flex-row md:justify-between">
          <p className="rounded-full border border-white/20 bg-espresso/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone backdrop-blur-md">
            Built for modern businesses
          </p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 rounded-3xl border border-white/20 bg-espresso/70 px-6 py-3 backdrop-blur-md md:rounded-full">
            {audiences.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-semibold text-white"
              >
                <Icon className="size-[18px] text-taupe" strokeWidth={1.75} aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <WhatWeDo />

      {/* Process */}
      <section
        className="relative overflow-hidden border-y border-white/20 bg-espresso bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: "url('/images/hero/blackhole.jpg')" }}
      >
        <div aria-hidden className="absolute inset-0 bg-espresso/25" />
        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <ApproachSlider />
        </div>
      </section>

      {/* Why StarOva */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Eyebrow>Why StarOva</Eyebrow>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-espresso sm:text-4xl">
              Technology should make{" "}
              <span className="text-cocoa">business simpler.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-cocoa/80 md:text-right">
            One partner for design, development and data, focused on results
            you can actually see.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {reasons.map(({ title, text, icon: Icon, dark }) => (
            <li
              key={title}
              className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                dark
                  ? "bg-espresso text-cream shadow-[0_30px_60px_-30px_rgba(41,28,14,0.8)]"
                  : "border border-white/70 bg-white/50 text-espresso shadow-[0_20px_45px_-30px_rgba(41,28,14,0.45)] backdrop-blur-xl hover:border-taupe/60 hover:bg-white/65"
              }`}
            >
              {/* Oversized faded icon in the corner */}
              <Icon
                aria-hidden
                strokeWidth={1}
                className={`pointer-events-none absolute -bottom-6 -right-6 size-36 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
                  dark ? "text-cream/[0.07]" : "text-cocoa/[0.07]"
                }`}
              />
              <span
                className={`relative grid size-11 place-items-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
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
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <FaqSection />
    </>
  );
}
