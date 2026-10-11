"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WandSparkles, Box, Shield, Mail, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: WandSparkles },
  { href: "/services", label: "Services", icon: Box },
  { href: "/about", label: "About", icon: Shield },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-6 z-50 px-4">
      <nav className="relative mx-auto max-w-4xl">
        {/* Soft light spill beneath the bar */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-full h-24 -translate-y-2 rounded-[50%] bg-taupe/35 blur-2xl"
        />

        {/* Lit border: 1px gradient ring, bright at the edges where light hits */}
        <div className="relative rounded-2xl bg-[linear-gradient(180deg,rgba(225,212,194,0.45)_0%,rgba(225,212,194,0.08)_35%,rgba(225,212,194,0.08)_65%,rgba(225,212,194,0.7)_100%)] p-px shadow-[0_20px_40px_-12px_rgba(41,28,14,0.6)]">
          {/* Glowing highlight along the bottom edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 -bottom-px h-px bg-gradient-to-r from-transparent via-cream to-transparent shadow-[0_0_12px_2px_rgba(225,212,194,0.55)]"
          />
          {/* Faint highlight along the top edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-16 -top-px h-px bg-gradient-to-r from-transparent via-cream/70 to-transparent"
          />

        <div className="relative flex items-center justify-between rounded-[15px] bg-gradient-to-b from-[#3a2818] to-espresso px-3 py-3 shadow-[inset_0_1px_0_0_rgba(225,212,194,0.12)] sm:px-4">
          <Link
            href="/"
            className="px-3 text-lg font-semibold tracking-tight text-cream"
          >
            StarOva
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center gap-2.5 rounded-xl px-4 py-2 text-[15px] font-semibold transition-colors ${
                      active
                        ? "bg-cream/10 text-cream"
                        : "text-cream/80 hover:bg-cream/5 hover:text-cream"
                    }`}
                  >
                    <Icon
                      className={`size-5 transition-colors ${
                        active
                          ? "text-cream"
                          : "text-stone group-hover:text-cream"
                      }`}
                    />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-xl p-2 text-cream hover:bg-cream/5 md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        </div>

        {open && (
          <ul className="relative mt-2 space-y-1 rounded-2xl border border-cream/10 bg-espresso p-2 shadow-xl md:hidden">
            {links.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 font-semibold ${
                      active
                        ? "bg-cream/10 text-cream"
                        : "text-cream/80 hover:bg-cream/5"
                    }`}
                  >
                    <Icon className="size-5 text-stone" />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
