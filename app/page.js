import {
  Rocket,
  Building2,
  CodeXml,
  ShoppingBag,
  UserRound,
  Plus,
} from "lucide-react";
import GalaxyHero from "@/components/GalaxyHero";
import ProjectsSection from "@/components/ProjectsSection";
import WhatWeDo from "@/components/WhatWeDo";
import Eyebrow from "@/components/Eyebrow";
import CallToAction from "@/components/CallToAction";
import { process } from "@/lib/site";

const audiences = [
  { label: "Startups", icon: Rocket },
  { label: "SMEs", icon: Building2 },
  { label: "Tech", icon: CodeXml },
  { label: "Retail", icon: ShoppingBag },
  { label: "Professionals", icon: UserRound },
];

const reasons = [
  ["01", "Creative by design", "Websites and branding built around your identity, not a template with your logo on top."],
  ["02", "Smart with data", "We clean, analyse and visualise your business data so it actually tells you something."],
  ["03", "Built for growth", "Modern foundations with Next.js and React that evolve as your business grows."],
];

const faqs = [
  ["What does StarOva build?", "Business websites, landing pages, portfolios, web applications, brand identities, data analysis and interactive dashboards."],
  ["Can you redesign an existing website?", "Yes. We can redesign the visual system, improve responsiveness, restructure pages and modernise the overall experience while keeping what already works."],
  ["Do you build websites with Next.js?", "Yes. Next.js and React are our preferred stack for fast, scalable and SEO-friendly websites."],
  ["Can you maintain the website after launch?", "Yes. We help with updates, content changes, performance improvements, bug fixes and new features."],
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
      <section className="bg-espresso text-cream">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <Eyebrow dark>Our approach</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Simple process. <span className="text-taupe">Strong results.</span>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-cream/65">
              Good digital work doesn&apos;t need to be complicated. We keep
              things focused, transparent and centred on what your business
              actually needs.
            </p>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-3xl border border-cream/15 bg-cream/10 sm:grid-cols-2">
            {process.map(([num, title, text]) => (
              <li key={num} className="bg-espresso p-7 sm:p-8">
                <span className="text-xs font-semibold text-taupe">{num}</span>
                <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-cream/60">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why StarOva */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>Why StarOva</Eyebrow>
            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight tracking-tight text-espresso sm:text-5xl">
              Technology should make{" "}
              <span className="text-cocoa">business simpler.</span>
            </h2>
          </div>
          <div className="space-y-8">
            {reasons.map(([num, title, text]) => (
              <div key={num} className="border-t border-stone/50 pt-6">
                <span className="text-xs font-semibold text-taupe">{num}</span>
                <h3 className="mt-2 text-xl font-semibold text-espresso">{title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-7 text-cocoa/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-stone/40 bg-cream/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
              Questions, <span className="text-cocoa">answered.</span>
            </h2>
          </div>
          <div className="divide-y divide-stone/60 border-y border-stone/60">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-espresso [&::-webkit-details-marker]:hidden">
                  {question}
                  <Plus
                    className="size-5 shrink-0 text-cocoa transition-transform group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-7 text-cocoa/80">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
