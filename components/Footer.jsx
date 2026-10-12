import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import { DialogButton } from "@/components/Dialogs";
import { contact, services } from "@/lib/site";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About us" },
      { href: "/services", label: "Services" },
      { dialog: "connect", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: services.slice(0, 4).map(({ title }) => ({ href: "/services", label: title })),
  },
];

const socials = [
  { href: contact.whatsapp, label: "WhatsApp", icon: MessageCircle, external: true },
  { href: `mailto:${contact.email}`, label: "Email", icon: Mail },
  { href: contact.phoneHref, label: "Phone", icon: Phone },
];

function Banner() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
      <div className="relative grid overflow-visible rounded-3xl bg-gradient-to-br from-cocoa to-espresso px-6 py-7 text-cream shadow-[0_30px_70px_-30px_rgba(41,28,14,0.8)] sm:px-10 md:grid-cols-[0.85fr_1.15fr] md:py-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
        >
          <div className="absolute -left-16 -top-24 size-72 rounded-full border border-cream/10" />
          <div className="absolute -bottom-32 left-1/3 size-80 rounded-full bg-taupe/20 blur-3xl" />
        </div>

        {/* Mascot breaking out of the card, like the reference illustration */}
        <div aria-hidden className="relative hidden md:block">
          <div data-mascot-home className="absolute bottom-[-1rem] left-0 flex items-end">
            <Image
              src="/images/mascot/starling-warm.png"
              alt=""
              width={387}
              height={615}
              className="h-[15rem] w-auto animate-[footerFloat_5s_ease-in-out_infinite] motion-reduce:animate-none lg:h-[16rem]"
            />
          </div>
          <Sparkles className="absolute -top-10 left-48 size-7 text-cream lg:left-56" strokeWidth={1.5} />
          <Sparkles className="absolute left-40 top-8 size-4 text-taupe lg:left-48" strokeWidth={1.5} />
        </div>

        <div className="relative">
          <h2 className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
            Have a project in mind? Let&apos;s build it together.
          </h2>
          <p className="mt-2 text-sm text-cream/70">
            Leave your email and we&apos;ll get back to you to talk about your
            website, brand or data.
          </p>

          <form
            action={`https://formsubmit.co/${contact.email}`}
            method="POST"
            className="mt-4 flex max-w-md items-center gap-2 rounded-full border border-cream/20 bg-cream/10 p-1.5 pl-4 backdrop-blur focus-within:border-cream/50"
          >
            <input type="hidden" name="_subject" value="New enquiry from the website footer" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <Mail className="size-4 shrink-0 text-cream/60" aria-hidden />
            <label htmlFor="footer-email" className="sr-only">
              Your email
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent py-2 text-sm text-cream outline-none placeholder:text-cream/50"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-cream px-5 py-2 text-sm font-semibold text-espresso transition-colors hover:bg-white"
            >
              Get in touch
            </button>
          </form>

          <p className="mt-2 text-xs leading-5 text-cream/55">
            No spam. We only use your email to reply to you.
            <br />
            Prefer to talk?{" "}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream underline underline-offset-2"
            >
              Message us on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-16">
      <Banner />

      <div className="relative -mt-16 border-t border-white/70 bg-white/85 pt-24 shadow-[0_-20px_50px_-30px_rgba(41,28,14,0.35)] backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-[1.7fr_0.9fr_1.3fr_1.4fr]">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <Image
                src="/images/logo/starova-logo.png"
                alt="StarOva Technologies"
                width={800}
                height={290}
                className="h-10 w-auto"
              />
              <p className="mt-3 max-w-xs text-sm leading-6 text-cocoa/80">
                Thoughtful digital experiences through technology, design and
                data.
              </p>
              <ul className="mt-4 flex gap-2">
                {socials.map(({ href, label, icon: Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="grid size-9 place-items-center rounded-full bg-espresso text-cream transition-colors hover:bg-cocoa"
                    >
                      <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Link columns */}
            {columns.map(({ title, links }) => (
              <div key={title}>
                <p className="text-sm font-semibold text-espresso">{title}</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {links.map(({ href, dialog, label }) => (
                    <li key={label}>
                      {dialog ? (
                        <DialogButton
                          dialog={dialog}
                          className="text-cocoa/80 transition-colors hover:text-espresso"
                        >
                          {label}
                        </DialogButton>
                      ) : (
                        <Link
                          href={href}
                          className="text-cocoa/80 transition-colors hover:text-espresso"
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-sm font-semibold text-espresso">Contact us</p>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li>
                  <a
                    href={contact.phoneHref}
                    className="flex items-center gap-2.5 text-cocoa/80 transition-colors hover:text-espresso"
                  >
                    <Phone className="size-4 shrink-0 text-cocoa" strokeWidth={1.75} aria-hidden />
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-cocoa/80 transition-colors hover:text-espresso"
                  >
                    <MessageCircle className="size-4 shrink-0 text-cocoa" strokeWidth={1.75} aria-hidden />
                    {contact.whatsappNumber}
                    <span className="sr-only">(WhatsApp)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2.5 whitespace-nowrap text-cocoa/80 transition-colors hover:text-espresso"
                  >
                    <Mail className="size-4 shrink-0 text-cocoa" strokeWidth={1.75} aria-hidden />
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-stone/50">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-cocoa/70 sm:flex-row sm:px-6">
            <span>
              © {new Date().getFullYear()} StarOva Technologies. All rights
              reserved.
            </span>
            <div className="flex items-center gap-6">
              <span>Technology · Design · Data</span>
              <a
                href="#top"
                className="inline-flex items-center gap-1 font-medium text-cocoa transition-colors hover:text-espresso"
              >
                Back to top
                <ArrowUp className="size-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
