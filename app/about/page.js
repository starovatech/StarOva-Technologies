import Link from "next/link";
import { ArrowUpRight, Compass, HeartHandshake, Lightbulb, Target } from "lucide-react";

const values = [
  ["01", "Clarity", "Good technology should make complicated things easier to understand.", Compass],
  ["02", "Craft", "We care about the small details because they shape how the whole product feels.", Lightbulb],
  ["03", "Partnership", "We work with clients, not around them. Communication stays direct and practical.", HeartHandshake],
  ["04", "Purpose", "Every screen, system and interaction should have a reason to exist.", Target],
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-[#6e473b]/15">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#6e473b]">About starOva</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[.98] tracking-[-.055em] sm:text-7xl">
            We believe technology
            <br />
            should feel <span className="text-[#6e473b]">simple.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6e473b]/75">
            starOva Technologies is a digital technology studio focused on
            thoughtful websites, applications, data experiences and practical
            business solutions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[.6fr_1.4fr]">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#6e473b]">Our story</p>
          <div>
            <h2 className="text-4xl font-medium leading-tight tracking-[-.045em] sm:text-5xl">
              Design, technology and data do better work when they are considered together.
            </h2>
            <div className="mt-8 grid gap-6 text-sm leading-7 text-[#6e473b]/75 sm:grid-cols-2">
              <p>We started with a simple idea: businesses should not need to choose between a beautiful digital presence and technology that genuinely works.</p>
              <p>Our work brings those disciplines together in a focused, flexible process — keeping the experience useful for the people who use it and practical for the people who run it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#291c0e] text-[#e1d4c2]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#a78d78]">What matters to us</p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[#e1d4c2]/15 bg-[#e1d4c2]/10 sm:grid-cols-2">
            {values.map(([num, title, text, Icon]) => (
              <div key={title} className="bg-[#291c0e] p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#a78d78]">{num}</span>
                  <Icon size={20} className="text-[#a78d78]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-16 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-[#e1d4c2]/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="rounded-[2rem] border border-[#6e473b]/20 bg-[#beb5a9]/20 p-8 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#6e473b]">Work with us</p>
          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-medium tracking-[-.05em] sm:text-5xl">
              Have a digital problem worth solving?
            </h2>
            <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold underline decoration-[#6e473b]/30 underline-offset-8">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
