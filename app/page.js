import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Blocks,
  Code2,
  Database,
  Layers3,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    text: "Fast, responsive websites and web applications designed around how your business actually works.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Brand & Identity",
    text: "Clear visual systems that give your company a recognizable presence across digital touchpoints.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Data Analytics",
    text: "Clean, structured and understandable data experiences that turn information into useful decisions.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "BI Solutions",
    text: "Dashboards, reporting systems and business intelligence foundations built for everyday use.",
    icon: Database,
  },
];

const process = [
  ["01", "Understand", "We start with the business, the people and the problem before thinking about the interface."],
  ["02", "Shape", "We turn the idea into a clear structure, visual direction and practical digital experience."],
  ["03", "Build", "We develop the product with clean components, responsive layouts and maintainable code."],
  ["04", "Refine", "We test, polish and improve the details that make the final experience feel considered."],
];

const faqs = [
  ["What does starOva build?", "We work across websites, web applications, branding, data analytics, dashboards and business intelligence solutions."],
  ["Can you redesign an existing website?", "Yes. We can rebuild the visual system, structure, responsiveness and overall user experience while preserving what already works."],
  ["Do you use Next.js?", "Yes. Next.js and React are part of our preferred modern web stack, with Tailwind CSS used for lightweight interface styling."],
  ["Can you support a project after launch?", "Yes. We can help with updates, improvements, new features, performance work and ongoing digital development."],
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[760px] border-b border-[#6e473b]/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(110,71,59,.16),transparent_28%),radial-gradient(circle_at_10%_75%,rgba(167,141,120,.18),transparent_28%)]" />
        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-[1.08fr_.92fr] lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-[#6e473b]">
              <span className="h-2 w-2 rounded-full bg-[#6e473b]" />
              Technology · Design · Data
            </div>

            <h1 className="text-5xl font-medium leading-[.98] tracking-[-.055em] text-[#291c0e] sm:text-6xl lg:text-[82px]">
              Technology,
              <br />
              <span className="text-[#6e473b]">made human.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#6e473b]/80 sm:text-lg">
              starOva Technologies creates digital experiences that feel clear,
              useful and distinctive — from business websites to data-driven
              solutions.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#291c0e] px-6 py-3.5 text-sm font-semibold text-[#e1d4c2] transition hover:-translate-y-0.5 hover:bg-[#6e473b]"
              >
                Start a conversation
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-[#6e473b]/30 px-6 py-3.5 text-sm font-semibold text-[#291c0e] transition hover:border-[#291c0e]"
              >
                Explore solutions
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-[#6e473b]/15 pt-7">
              <div>
                <p className="text-2xl font-semibold tracking-tight">10+</p>
                <p className="mt-1 text-xs uppercase tracking-[.14em] text-[#6e473b]/65">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[.14em] text-[#6e473b]/65">Responsive</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight">24/7</p>
                <p className="mt-1 text-xs uppercase tracking-[.14em] text-[#6e473b]/65">Digital presence</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[430px] w-full max-w-[520px] items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-[#a78d78]/25 blur-3xl" />
            <div className="absolute h-[360px] w-[360px] rounded-[46%] border border-[#6e473b]/20 [transform:rotate(-16deg)]" />
            <div className="absolute h-[290px] w-[410px] rounded-[50%] border border-[#6e473b]/20 [transform:rotate(25deg)]" />
            <div className="absolute right-8 top-10 rounded-full border border-[#6e473b]/25 bg-[#e1d4c2]/75 px-4 py-2 text-xs font-semibold tracking-[.16em] text-[#6e473b] backdrop-blur">
              STAROVA
            </div>
            <div className="relative grid h-56 w-56 place-items-center rounded-[38%] border border-[#e1d4c2]/50 bg-[#291c0e] shadow-[0_35px_80px_rgba(41,28,14,.24)] [transform:rotate(-7deg)] animate-[floatSlow_7s_ease-in-out_infinite]">
              <div className="absolute inset-5 rounded-[35%] border border-[#e1d4c2]/20" />
              <div className="text-center">
                <div className="text-6xl font-semibold tracking-[-.08em] text-[#e1d4c2]">S</div>
                <div className="mt-1 text-[9px] font-semibold uppercase tracking-[.45em] text-[#a78d78]">
                  Technologies
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-4 max-w-48 rounded-2xl border border-[#6e473b]/20 bg-[#beb5a9]/55 p-4 backdrop-blur">
              <Layers3 size={18} className="text-[#6e473b]" />
              <p className="mt-3 text-sm font-semibold">Simple systems. Strong outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#6e473b]/15 bg-[#beb5a9]/25">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-5 sm:grid-cols-3 lg:px-10">
          {["Startups", "Growing businesses", "Established teams"].map((item) => (
            <div key={item} className="flex items-center justify-between border-r border-[#6e473b]/15 py-3 pr-5 last:border-0">
              <span className="text-sm font-medium text-[#291c0e]">{item}</span>
              <span className="text-xs uppercase tracking-[.18em] text-[#6e473b]/60">Built to evolve</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#6e473b]">What we do</p>
            <h2 className="mt-5 max-w-lg text-4xl font-medium leading-tight tracking-[-.045em] sm:text-5xl">
              A small team for meaningful digital work.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-[#6e473b]/75">
              We bring design, development and data together so you do not have
              to coordinate a different answer for every digital problem.
            </p>
          </div>

          <div className="divide-y divide-[#6e473b]/15 border-y border-[#6e473b]/15">
            {services.map(({ number, title, text, icon: Icon }) => (
              <Link key={title} href="/solutions" className="group grid gap-5 py-7 sm:grid-cols-[56px_1fr_40px] sm:items-start">
                <span className="pt-1 text-xs font-semibold text-[#6e473b]/55">{number}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <Icon size={18} strokeWidth={1.6} className="text-[#6e473b]" />
                    <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6e473b]/70">{text}</p>
                </div>
                <ArrowUpRight size={20} className="mt-1 text-[#6e473b]/45 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#291c0e]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#291c0e] text-[#e1d4c2]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#a78d78]">Our approach</p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-.045em] sm:text-5xl">
                Thoughtful from the first screen to the last detail.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-[#e1d4c2]/15 bg-[#e1d4c2]/10 sm:grid-cols-2">
              {process.map(([num, title, text]) => (
                <div key={num} className="bg-[#291c0e] p-7 sm:p-8">
                  <span className="text-xs font-semibold text-[#a78d78]">{num}</span>
                  <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#e1d4c2]/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_.85fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#6e473b]">Why starOva</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-[-.05em] sm:text-6xl">
              Less noise.
              <br />
              More <span className="text-[#6e473b]">clarity.</span>
            </h2>
          </div>
          <div className="space-y-7">
            {[
              ["01", "Designed around the business", "We do not begin with decoration. We begin with purpose, audience and what needs to happen."],
              ["02", "Built with modern foundations", "Reusable React components, Next.js and Tailwind CSS keep the experience fast and maintainable."],
              ["03", "Made to feel like yours", "The final product should not look like a template with your logo placed on top. It should have its own character."],
            ].map(([num, title, text]) => (
              <div key={num} className="border-t border-[#6e473b]/15 pt-6">
                <span className="text-xs font-semibold text-[#6e473b]/55">{num}</span>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-[#6e473b]/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#6e473b]/15 bg-[#a78d78]/15">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#6e473b]">FAQ</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-.045em] sm:text-5xl">A few useful answers.</h2>
          </div>
          <div className="mt-12 divide-y divide-[#6e473b]/15 border-y border-[#6e473b]/15">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold">
                  {question}
                  <span className="text-2xl font-light transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-7 text-[#6e473b]/75">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#6e473b] px-7 py-16 text-[#e1d4c2] sm:px-12 sm:py-20">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#e1d4c2]/15" />
          <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border border-[#e1d4c2]/10" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e1d4c2]/65">Have an idea?</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-.05em] sm:text-6xl">
              Let&apos;s make something worth remembering.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-[#e1d4c2]/70">
              Tell us what you are building, where you are stuck, or simply what
              you want to improve.
            </p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#e1d4c2] px-6 py-3.5 text-sm font-semibold text-[#291c0e] transition hover:bg-white">
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
