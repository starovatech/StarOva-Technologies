"use client";

import { useId, useState } from "react";
import { Plus, MessageCircle, ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { DialogButton } from "@/components/Dialogs";
import { contact } from "@/lib/site";

const faqs = [
  [
    "What does StarOva build?",
    "Business websites, landing pages, portfolios, web applications, brand identities, catalogues, data analysis and interactive dashboards.",
  ],
  [
    "Can you redesign an existing website?",
    "Yes. We can redesign the visual system, improve responsiveness, restructure pages and modernise the overall experience while keeping what already works.",
  ],
  [
    "Can you build a dashboard from the data we already have?",
    "Yes. We work with data in Excel, Google Sheets, databases or the tools you already use. We clean and organise it first, then build interactive dashboards, for example in Power BI, that bring your key numbers into one place and update as your data changes.",
  ],
  [
    "How long does a project take?",
    "It depends on the scope. A landing page is quicker than a full website or a dashboard built on several data sources. After our first conversation we agree a clear timeline with milestones, so you always know what happens and when.",
  ],
  [
    "Can you maintain the website after launch?",
    "Yes. We help with updates, content changes, performance improvements, bug fixes and new features.",
  ],
];

function FaqItem({ index, question, answer, open, onToggle }) {
  const id = useId();
  return (
    <li
      className={`rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
        open
          ? "border-taupe/60 bg-white/70 shadow-[0_24px_50px_-30px_rgba(41,28,14,0.5)]"
          : "border-white/70 bg-white/45 shadow-[0_14px_35px_-30px_rgba(41,28,14,0.45)] hover:bg-white/60"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          id={`${id}-question`}
          className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        >
          <span className="font-dot text-xl font-bold leading-none text-taupe">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex-1 font-semibold text-espresso">{question}</span>
          <span
            className={`grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
              open ? "rotate-45 bg-espresso text-cream" : "bg-cream text-cocoa"
            }`}
          >
            <Plus className="size-4" strokeWidth={2} aria-hidden />
          </span>
        </button>
      </h3>

      {/* Animates height smoothly with the grid-rows trick */}
      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 pl-[3.75rem] text-sm leading-7 text-cocoa/85 sm:px-6 sm:pl-[4.25rem]">
            {answer}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
              Questions, <span className="text-cocoa">answered.</span>
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-cocoa/80">
              The things clients ask us most about websites, data and working
              together.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-espresso p-6 text-cream shadow-[0_30px_60px_-30px_rgba(41,28,14,0.8)] sm:p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 size-52 animate-[ringBreathe_6s_ease-in-out_infinite] rounded-full border border-cream/10 motion-reduce:animate-none"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-10 size-60 rounded-full bg-cocoa/50 blur-3xl"
            />
            <p className="relative text-lg font-semibold">Still have questions?</p>
            <p className="relative mt-2 text-sm leading-6 text-cream/65">
              Ask us directly. We&apos;re happy to talk through your project,
              no strings attached.
            </p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              <DialogButton
                dialog="connect"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-espresso transition-colors hover:bg-white"
              >
                Ask us
                <ArrowUpRight className="size-4" aria-hidden />
              </DialogButton>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <ul className="flex flex-col gap-3">
          {faqs.map(([question, answer], i) => (
            <FaqItem
              key={question}
              index={i}
              question={question}
              answer={answer}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
