import { DialogButton } from "@/components/Dialogs";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { contact } from "@/lib/site";

export default function CallToAction({
  eyebrow = "Have an idea?",
  title = "Let's turn it into something exceptional.",
  text = "Tell us what you're building, where you're stuck, or simply what you want to improve. We'll help you figure out the next step.",
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
      <div className="relative overflow-hidden rounded-[2rem] bg-espresso px-6 py-14 text-cream sm:px-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border border-cream/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 size-52 rounded-full border border-cream/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/3 size-80 rounded-full bg-cocoa/40 blur-3xl"
        />

        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-cream/70">{text}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <DialogButton
              dialog="enquiry"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-espresso transition-colors hover:bg-white"
            >
              Start a project
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
                aria-hidden
              />
            </DialogButton>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
