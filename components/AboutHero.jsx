import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenText,
  ChartLine,
  CodeXml,
  LayoutDashboard,
  Handshake,
  Mail,
  MessageCircle,
  PenTool,
  Phone,
  Workflow,
} from "lucide-react";
import Typewriter from "@/components/Typewriter";
import { DialogButton } from "@/components/Dialogs";
import { contact } from "@/lib/site";

const IMAGE = "url('/images/hero/blackhole.jpg')";

const roles = ["web developers", "logo designers", "catalogue creators", "data analysts", "dashboard builders"];

const strip = [
  { label: "Websites", icon: CodeXml },
  { label: "BI development", icon: Workflow },
  { label: "Data analysis", icon: ChartLine },
  { label: "Dashboards", icon: LayoutDashboard },
  { label: "CRM", icon: Handshake },
  { label: "Catalogues", icon: BookOpenText },
  { label: "Logos", icon: PenTool },
];

const socials = [
  { href: contact.whatsapp, label: "WhatsApp", icon: MessageCircle, external: true },
  { href: `mailto:${contact.email}`, label: "Email", icon: Mail },
  { href: contact.phoneHref, label: "Phone", icon: Phone },
];

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[680px] overflow-hidden bg-espresso px-4 pb-8 pt-28 text-cream sm:px-8 lg:min-h-svh">
      {/* Blurred backdrop, same as the home hero */}
      <div
        aria-hidden
        className="absolute -inset-10 bg-cover bg-center blur-lg"
        style={{ backgroundImage: IMAGE }}
      />
      <div aria-hidden className="absolute inset-0 bg-espresso/25" />

      {/* Glass card */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/50 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.35)]">
        {/* Sharp image seen through the card (fixed so it lines up with the backdrop) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: IMAGE }}
        />

        {/* Frosted panel behind the text */}
        <div
          aria-hidden
          className="absolute inset-0 border-white/20 bg-cream/15 backdrop-blur-xl md:right-auto md:w-[56%] md:border-r"
        />

        <div className="relative grid flex-1 items-center md:grid-cols-[56%_44%]">
          {/* Text */}
          <div className="p-6 sm:p-10 lg:p-12">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone">
              <span className="size-1.5 rounded-full bg-stone" />
              About StarOva
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              We build digital experiences{" "}
              <span className="text-taupe">that matter.</span>
            </h1>
            <p className="mt-5 text-xl font-semibold sm:text-2xl">
              We are <Typewriter words={roles} text="text-taupe" caret="bg-taupe" />
            </p>
            <p className="mt-5 max-w-xl leading-7 text-cream/80">
              StarOva Technologies is a small studio run by two founders: one
              designs and builds how your business looks online, the other turns
              your data into clear, useful insights.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <DialogButton
                dialog="enquiry"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-espresso transition-colors hover:bg-white"
              >
                Start a project
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </DialogButton>
              <a
                href="#owners"
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-white/20"
              >
                Meet the owners
                <ArrowDown className="size-4" aria-hidden />
              </a>
              <ul className="ml-1 flex gap-2">
                {socials.map(({ href, label, icon: Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="grid size-10 place-items-center rounded-full border border-white/50 bg-white/10 text-cream backdrop-blur transition-colors hover:bg-cream hover:text-espresso"
                    >
                      <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mascot on the clear side of the card */}
          <div aria-hidden className="relative mx-auto hidden size-72 md:block lg:size-80">
            <div className="absolute inset-10 animate-[ringBreathe_6s_ease-in-out_infinite] rounded-full bg-taupe/40 blur-3xl motion-reduce:animate-none" />
            <div className="absolute inset-0 animate-[spin_50s_linear_infinite] rounded-full border border-dashed border-cream/25 motion-reduce:animate-none" />
            <div className="absolute inset-8 rounded-full border border-cream/15" />
            <div className="absolute inset-0 grid place-items-center">
              <Image
                src="/images/mascot/starling-warm.png"
                alt=""
                width={387}
                height={615}
                priority
                className="h-56 w-auto animate-[footerFloat_5s_ease-in-out_infinite] motion-reduce:animate-none lg:h-64"
              />
            </div>
          </div>
        </div>

        {/* What we do, like a tech bar, along the bottom of the card */}
        <div className="relative border-t border-white/20 bg-black/25 backdrop-blur-md">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 text-sm font-semibold sm:px-6">
            {strip.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2 text-cream/90">
                <Icon className="size-[18px] text-taupe" strokeWidth={1.75} aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
