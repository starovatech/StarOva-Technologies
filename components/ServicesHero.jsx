import {
  ArrowUpRight,
  ArrowDown,
  MessageCircle,
  Mail,
  Phone,
  CodeXml,
  Workflow,
  ChartLine,
  LayoutDashboard,
  Handshake,
  BookOpenText,
  PenTool,
} from "lucide-react";
import { DialogButton } from "@/components/Dialogs";
import Typewriter from "@/components/Typewriter";
import CatchGame from "@/components/CatchGame";
import { contact } from "@/lib/site";

const IMAGE = "url('/images/hero/blackhole.jpg')";

const typed = ["websites", "dashboards", "BI solutions", "CRM systems", "catalogues"];

// Strip along the bottom of the card; each links to its section further down the page
const strip = [
  { label: "Websites", icon: CodeXml, href: "#web" },
  { label: "BI development", icon: Workflow, href: "#data" },
  { label: "Data analysis", icon: ChartLine, href: "#data" },
  { label: "Dashboards", icon: LayoutDashboard, href: "#data" },
  { label: "CRM", icon: Handshake, href: "#crm" },
  { label: "Catalogues", icon: BookOpenText, href: "#crm" },
  { label: "Logos", icon: PenTool, href: "#crm" },
];

const round =
  "grid size-11 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-espresso";

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-svh overflow-hidden bg-espresso px-4 pb-8 pt-28 sm:px-8">
      {/* Blurred backdrop */}
      <div
        aria-hidden
        className="absolute -inset-10 bg-cover bg-center blur-lg"
        style={{ backgroundImage: IMAGE }}
      />
      <div aria-hidden className="absolute inset-0 bg-espresso/40" />

      {/* Glass card */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.3)]">
        {/* Sharp image seen through the card */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: IMAGE }}
        />

        <div className="relative grid flex-1 lg:grid-cols-[56%_44%]">
          {/* Frosted panel */}
          <div className="relative flex flex-col justify-center border-b border-white/15 bg-espresso/45 p-6 backdrop-blur-xl sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone">
              <span className="size-1.5 rounded-full bg-stone" />
              Our services
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Digital services built around{" "}
              <span className="bg-gradient-to-r from-taupe to-cocoa bg-clip-text text-transparent">
                your business.
              </span>
            </h1>

            <p className="mt-6 text-xl font-semibold text-white sm:text-2xl">
              We build <Typewriter words={typed} className="text-taupe" />
            </p>

            <p className="mt-5 max-w-lg text-[15px] leading-7 text-cream/80">
              Websites, dashboards, BI, CRM and catalogues from one small team,
              so your brand, your data and your tools finally work together.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <DialogButton
                dialog="enquiry"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-espresso transition-colors hover:bg-white"
              >
                Start a project
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </DialogButton>
              <a
                href="#web"
                className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore services
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
              </a>
              <div className="flex gap-2">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={round}>
                  <MessageCircle className="size-[18px]" strokeWidth={1.75} />
                </a>
                <a href={`mailto:${contact.email}`} aria-label="Email us" className={round}>
                  <Mail className="size-[18px]" strokeWidth={1.75} />
                </a>
                <a href={contact.phoneHref} aria-label="Call us" className={round}>
                  <Phone className="size-[18px]" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>

          {/* Three small agents playing catch, inside soft orbit rings */}
          <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[360px] lg:min-h-0">
            <div aria-hidden className="absolute size-[280px] rounded-full border border-white/10 sm:size-[340px]" />
            <div aria-hidden className="absolute size-[200px] rounded-full border border-dashed border-white/15 sm:size-[250px]" />
            <div aria-hidden className="absolute size-56 rounded-full bg-taupe/20 blur-3xl" />
            <CatchGame />
          </div>
        </div>

        {/* Services strip */}
        <nav aria-label="Services" className="relative border-t border-white/15 bg-espresso/85">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 px-6 py-4 lg:gap-x-9">
            {strip.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-taupe">
                  <Icon className="size-4 text-taupe" strokeWidth={1.75} aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
