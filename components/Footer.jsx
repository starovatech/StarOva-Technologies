import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { contact, services } from "@/lib/site";

const pages = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone/40 bg-cream/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/images/logo/starova-logo.png"
              alt="StarOva Technologies"
              width={800}
              height={290}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-7 text-cocoa/80">
              Thoughtful digital experiences through technology, design and
              data.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {pages.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-espresso/80 transition-colors hover:text-cocoa"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa">
              Services
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 5).map(({ title }) => (
                <li key={title}>
                  <Link
                    href="/services"
                    className="text-espresso/80 transition-colors hover:text-cocoa"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-espresso/80 transition-colors hover:text-cocoa"
                >
                  <Mail className="size-4 text-cocoa" strokeWidth={1.75} aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-2 text-espresso/80 transition-colors hover:text-cocoa"
                >
                  <Phone className="size-4 text-cocoa" strokeWidth={1.75} aria-hidden />
                  {contact.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 font-semibold text-cocoa"
                >
                  Start a project
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-stone/50 pt-6 text-xs text-cocoa/70 sm:flex-row">
          <span>
            © {new Date().getFullYear()} StarOva Technologies. All rights
            reserved.
          </span>
          <span>Technology · Design · Data</span>
        </div>
      </div>
    </footer>
  );
}
