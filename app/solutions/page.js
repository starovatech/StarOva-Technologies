import Link from "next/link";
import { ArrowUpRight, BarChart3, Boxes, Brush, Code2, Database, LayoutDashboard } from "lucide-react";

const solutions = [
  ["Web Development", "Websites and applications that load quickly, adapt beautifully and make the next action obvious.", Code2],
  ["Brand & Identity", "Visual systems, digital direction and brand touchpoints that make your business feel consistent.", Brush],
  ["Data Analytics", "Data cleaning, analysis and visualization that turns scattered information into something useful.", BarChart3],
  ["Business Intelligence", "Dashboards, reporting and BI foundations that help teams see what is happening.", LayoutDashboard],
  ["Data Architecture", "Thoughtful structures for organizing business information so future reporting becomes easier.", Database],
  ["Digital Systems", "Connected digital experiences that bring different parts of a business into one clearer workflow.", Boxes],
];

export default function SolutionsPage() {
  return (
    <div>
      <section className="border-b border-[#6e473b]/15">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#6e473b]">Solutions</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[.98] tracking-[-.055em] sm:text-7xl">
            Digital work with a
            <br />
            <span className="text-[#6e473b]">business reason.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6e473b]/75">
            Choose a starting point or bring us a problem that crosses several
            disciplines. We shape the right solution around the work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map(([title, text, Icon], index) => (
            <article key={title} className="group rounded-3xl border border-[#6e473b]/18 bg-[#e1d4c2] p-7 transition hover:-translate-y-1 hover:bg-[#beb5a9]/25 sm:p-9">
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#291c0e] text-[#e1d4c2]">
                  <Icon size={19} strokeWidth={1.6} />
                </div>
                <span className="text-xs text-[#6e473b]/50">0{index + 1}</span>
              </div>
              <h2 className="mt-16 text-2xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-[#6e473b]/70">{text}</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6e473b]">
                Discuss this <ArrowUpRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#6e473b] text-[#e1d4c2]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e1d4c2]/65">Not sure where to start?</p>
            <div>
              <h2 className="text-4xl font-medium tracking-[-.045em] sm:text-5xl">Bring the problem. We&apos;ll shape the solution together.</h2>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e1d4c2] px-6 py-3.5 text-sm font-semibold text-[#291c0e]">
                Talk to starOva <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
