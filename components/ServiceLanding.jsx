import { ArrowUpRight, MessageCircle } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { DialogButton } from "@/components/Dialogs";
import ApproachStrip from "@/components/ApproachStrip";
import ServiceFaq from "@/components/ServiceFaq";
import CallToAction from "@/components/CallToAction";
import JsonLd from "@/components/JsonLd";
import { contact } from "@/lib/site";
import { serviceLd, faqLd, breadcrumbLd } from "@/lib/seo";

function Tile({ title, text, icon: Icon }) {
  return (
    <li className="rounded-2xl border border-stone/40 bg-white p-5 shadow-[0_16px_36px_-28px_rgba(41,28,14,0.5)] sm:rounded-3xl">
      <span className="grid size-10 place-items-center rounded-xl bg-espresso text-cream">
        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
      </span>
      <h3 className="mt-4 font-semibold tracking-tight text-espresso">{title}</h3>
      <p className="mt-1.5 text-sm leading-6 text-cocoa">{text}</p>
    </li>
  );
}

function WorkCard({ title, category, image, href, cta }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-[30px] bg-espresso p-5 text-cream shadow-[0_30px_60px_-25px_rgba(41,28,14,0.45)] transition-transform duration-300 hover:-translate-y-1.5"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <span className="shrink-0 rounded-full bg-cream/15 px-2.5 py-1 text-[11px] font-semibold">{category}</span>
      </div>
      <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-2xl border border-cream/20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <span className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-cream py-3 text-sm font-semibold text-espresso transition-colors group-hover:bg-white">
        {cta}
        <ArrowUpRight className="size-4" aria-hidden />
      </span>
    </a>
  );
}

// A focused page for one service, written around what clients search for
export default function ServiceLanding({ id, page }) {
  const { path, label, service, eyebrow, title, accent, intro, audienceTitle, audience, offeringsTitle, offerings, work, faqs, ctaTitle, ctaText } = page;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([["Home", "/"], ["Services", "/services"], [label, path]]),
          serviceLd({ name: page.metaTitle, description: page.metaDescription, offerings, path }),
          faqLd(faqs, path),
        ]}
      />

      <section className="relative overflow-hidden border-b border-stone/40">
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-cream/70 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-36 sm:px-6 lg:pb-16 lg:pt-40">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-espresso sm:text-6xl">
            {title} <span className="text-cocoa">{accent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cocoa/80">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <DialogButton
              dialog="enquiry"
              service={service}
              className="group inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cocoa"
            >
              Get a free quote
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </DialogButton>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-espresso/25 px-6 py-3.5 text-sm font-semibold text-espresso transition-colors hover:bg-cream/60"
            >
              <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby={`${id}-audience`} className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:pt-14">
        <h2 id={`${id}-audience`} className="text-3xl font-semibold tracking-tight text-espresso sm:text-4xl">
          {audienceTitle}
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <Tile key={item.title} {...item} />
          ))}
        </ul>
      </section>

      <section aria-labelledby={`${id}-offerings`} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
        <h2 id={`${id}-offerings`} className="text-3xl font-semibold tracking-tight text-espresso sm:text-4xl">
          {offeringsTitle}
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <Tile key={item.title} {...item} />
          ))}
        </ul>
      </section>

      <section aria-labelledby={`${id}-work`} className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:pb-14">
        <h2 id={`${id}-work`} className="text-3xl font-semibold tracking-tight text-espresso sm:text-4xl">
          Recent work
        </h2>
        <div className={`mt-6 grid gap-5 ${work.length > 1 ? "sm:grid-cols-2" : "max-w-xl"}`}>
          {work.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <ApproachStrip />

      <ServiceFaq areas={[{ id, nav: label, faqs }]} />

      <CallToAction eyebrow={eyebrow} title={ctaTitle} text={ctaText} />
    </>
  );
}
