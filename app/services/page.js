import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Eyebrow from "@/components/Eyebrow";
import CallToAction from "@/components/CallToAction";
import { DialogButton } from "@/components/Dialogs";
import { services, process } from "@/lib/site";

export const metadata = {
  title: "Services",
  description:
    "Website development, branding, data cleaning, data analysis, interactive dashboards and BI solutions by StarOva Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Everything you need for a"
        accent="stronger digital presence."
      >
        From your website and brand to the data behind your decisions, we
        create digital solutions around the real needs of your business.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon }, i) => (
            <li
              key={title}
              className="group relative flex flex-col rounded-3xl border border-stone/50 bg-white p-7 transition-all hover:-translate-y-1 hover:border-taupe hover:shadow-[0_24px_50px_-24px_rgba(41,28,14,0.35)]"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-cream text-cocoa transition-colors group-hover:bg-espresso group-hover:text-cream">
                  <Icon className="size-[22px]" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="text-xs font-semibold text-taupe">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-8 text-xl font-semibold text-espresso">{title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-cocoa/75">{text}</p>
              <DialogButton
                dialog="enquiry"
                service={title}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cocoa after:absolute after:inset-0 after:rounded-3xl hover:text-espresso"
              >
                Enquire
                <ArrowUpRight className="size-4" aria-hidden />
              </DialogButton>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-stone/40 bg-cream/40">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
          <div className="max-w-2xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
              From first idea <span className="text-cocoa">to final launch.</span>
            </h2>
          </div>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {process.map(([num, title, text]) => (
              <li key={num} className="border-t-2 border-cocoa pt-6">
                <span className="text-xs font-semibold text-taupe">{num}</span>
                <h3 className="mt-3 text-xl font-semibold text-espresso">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-cocoa/75">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction
        eyebrow="Not sure what you need?"
        title="Tell us your goal. We'll map the right solution."
      />
    </>
  );
}
