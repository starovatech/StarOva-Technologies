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

export default function NavbarFull() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Soft light spill beneath the bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[10%] top-full h-20 -translate-y-4 rounded-[50%] bg-taupe/30 blur-2xl"
      />

      <nav className="relative bg-gradient-to-b from-[#3a2818] to-espresso shadow-[inset_0_1px_0_0_rgba(225,212,194,0.1),0_16px_32px_-12px_rgba(41,28,14,0.6)]">
        {/* Lit bottom border spanning the full width */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-cream/10 via-cream to-cream/10 shadow-[0_0_14px_2px_rgba(225,212,194,0.5)]"
        />

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-cream"
          >
            StarOva
          </Link>

          <ul className="hidden items-center gap-2 md:flex">
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
      </nav>

      {open && (
        <ul className="relative space-y-1 border-b border-cream/20 bg-espresso px-4 py-3 md:hidden">
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
    </header>
  );
}
