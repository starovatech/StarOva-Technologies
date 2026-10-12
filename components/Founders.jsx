"use client";

import Image from "next/image";
import { CodeXml, ChartLine, Sparkles, Target } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import Typewriter from "@/components/Typewriter";
import { founders } from "@/lib/site";

const looks = {
  web: { icon: CodeXml },
  data: { icon: ChartLine },
};

// Glowing centre artwork: photo (or role icon) with orbit rings and floating labels
function Portrait({ name, photo, focus, highlights }) {
  const Icon = (looks[focus] ?? looks.web).icon;
  const floats = [
    "left-0 top-6 sm:-left-4",
    "-right-2 top-1/2 sm:-right-6",
    "bottom-4 left-6",
  ];
  return (
    <div className="relative mx-auto size-64 sm:size-72">
      <div
        aria-hidden
        className="absolute inset-4 animate-[ringBreathe_6s_ease-in-out_infinite] rounded-full bg-taupe/60 blur-3xl motion-reduce:animate-none"
      />
      <div
        aria-hidden
        className="absolute -inset-3 animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-cocoa/30 motion-reduce:animate-none"
      />
      <div aria-hidden className="absolute inset-2 rounded-full border border-cocoa/15" />

      <div className="absolute inset-8 grid place-items-center overflow-hidden rounded-full bg-gradient-to-br from-cocoa to-espresso shadow-[0_0_60px_10px_rgba(167,141,120,0.45)] ring-4 ring-white/70">
        {photo ? (
          <Image src={photo} alt={name} fill sizes="224px" className="object-cover" />
        ) : (
          <Icon className="size-20 text-cream" strokeWidth={1.25} aria-hidden />
        )}
      </div>

      {highlights.slice(0, 3).map(({ label }, i) => (
        <span
          key={label}
          aria-hidden
          className={`absolute ${floats[i]} animate-[footerFloat_5s_ease-in-out_infinite] rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-xs font-semibold text-espresso shadow-[0_10px_25px_-12px_rgba(41,28,14,0.5)] backdrop-blur motion-reduce:animate-none`}
          style={{ animationDelay: `${i * 0.8}s` }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/55 p-5 shadow-[0_20px_45px_-30px_rgba(41,28,14,0.45)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
      <p className="flex items-center gap-2 font-semibold text-cocoa">
        <Icon className="size-4" strokeWidth={1.75} aria-hidden />
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-cocoa/85">{children}</p>
    </div>
  );
}

function FounderBlock({ founder, reversed }) {
  const { name, role, titles, bio, highlights, philosophy, mission, skills, focus, photo } = founder;
  return (
    <article id={name.toLowerCase()} className="scroll-mt-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_0.85fr] lg:gap-12">
        {/* Text */}
        <div className={reversed ? "lg:order-3" : ""}>
          <Eyebrow>Get to know</Eyebrow>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-espresso sm:text-4xl">
            About <span className="text-cocoa">{name}</span>
          </h3>
          <p className="mt-2 text-lg font-semibold text-espresso sm:text-xl">
            I&apos;m a <Typewriter words={titles} />
          </p>
          <p className="mt-1 text-sm font-medium text-taupe">{role}</p>
          <p className="mt-4 max-w-md leading-7 text-cocoa/85">{bio}</p>

          <ul className="mt-6 grid max-w-md grid-cols-2 gap-3">
            {highlights.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-white/70 bg-white/50 px-3 py-2.5 text-sm font-semibold text-espresso backdrop-blur"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-espresso text-cream">
                  <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Artwork */}
        <div className="lg:order-2">
          <Portrait name={name} photo={photo} focus={focus} highlights={highlights} />
        </div>

        {/* Philosophy & mission */}
        <div className={`flex flex-col gap-4 ${reversed ? "lg:order-1" : "lg:order-3"}`}>
          <InfoCard icon={Sparkles} title="My philosophy">
            {philosophy}
          </InfoCard>
          <InfoCard icon={Target} title="The mission">
            {mission}
          </InfoCard>
        </div>
      </div>

      {/* Skills strip, like a tech bar */}
      <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-3xl bg-gradient-to-r from-espresso via-cocoa to-espresso px-6 py-4 text-sm font-semibold text-cream shadow-[0_20px_45px_-25px_rgba(41,28,14,0.8)] lg:rounded-full">
        {skills.map((skill, i) => (
          <li key={skill} className="flex items-center gap-6">
            {i > 0 && <span aria-hidden className="hidden h-4 w-px bg-cream/25 sm:block" />}
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Founders() {
  return (
    <section id="owners" className="mx-auto max-w-6xl scroll-mt-24 overflow-x-clip px-4 py-12 sm:px-6 lg:py-14">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <Eyebrow>The founders</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
            About the <span className="text-cocoa">owners.</span>
          </h2>
        </div>
        <p className="max-w-sm leading-7 text-cocoa/80 md:text-right">
          Two people, two strengths: one builds how your business looks, the
          other makes sense of the numbers behind it.
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-20">
        {founders.map((founder, i) => (
          <FounderBlock key={`${founder.name}-${i}`} founder={founder} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
