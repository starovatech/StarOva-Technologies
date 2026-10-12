"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { DialogButton } from "@/components/Dialogs";
import { FaqItem } from "@/components/FaqSection";
import { useActiveService } from "@/components/useActiveService";
import { contact } from "@/lib/site";

// FAQ for the services page; shows the questions for whichever service area is selected
export default function ServiceFaq({ areas }) {
  const active = useActiveService(areas.map(({ id }) => id));
  const area = areas.find(({ id }) => id === active) ?? areas[0];
  const [open, setOpen] = useState(0);

  // Start with the first question open whenever the area changes
  useEffect(() => setOpen(0), [active]);

  return (
    <section aria-labelledby="service-faq-title" className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:pb-14">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="flex flex-col gap-6">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 id="service-faq-title" className="mt-4 text-3xl font-semibold tracking-tight text-espresso sm:text-4xl">
              Questions about <span className="text-cocoa">{area.nav}</span>
            </h2>
            <p className="mt-4 max-w-sm leading-7 text-cocoa">
              The things clients usually ask us before we start working together.
            </p>
          </div>

          <div className="rounded-3xl bg-espresso p-6 text-cream shadow-[0_30px_60px_-30px_rgba(41,28,14,0.8)] sm:p-7">
            <p className="text-lg font-semibold">Still have questions?</p>
            <p className="mt-2 text-sm leading-6 text-cream/85">
              Ask us directly. We&apos;re happy to talk through your project, no
              strings attached.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
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
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <ul key={area.id} className="flex animate-[fadeUp_0.4s_ease-out] flex-col gap-3 motion-reduce:animate-none">
          {area.faqs.map(([question, answer], i) => (
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
