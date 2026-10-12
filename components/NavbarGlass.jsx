"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Layers, Users, Send, Menu, X } from "lucide-react";
import { useOpenDialog } from "@/components/Dialogs";

const links = [
  { href: "/", label: "Home", icon: House },
  { href: "/services", label: "Services", icon: Layers },
  { href: "/about", label: "About", icon: Users },
];

const glass =
  "border border-cream/70 bg-cream/35 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_10px_30px_-10px_rgba(41,28,14,0.25)]";

export default function NavbarGlass() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const openDialog = useOpenDialog();

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="w-full lg:w-1/2 lg:min-w-[700px]">
        <div
          className={`flex items-center justify-between rounded-full p-1.5 pl-2 ${glass}`}
        >
          <Link href="/" className="flex items-center rounded-full pl-2 pr-3">
            <Image
              src="/images/logo/starova-logo.png"
              alt="StarOva Technologies"
              width={800}
              height={290}
              priority
              className="h-11 w-auto sm:h-14"
            />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-cocoa text-cream shadow-sm"
                        : "text-espresso/80 hover:bg-cream/60 hover:text-espresso"
                    }`}
                  >
                    <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => openDialog("connect")}
            aria-haspopup="dialog"
            className="hidden items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-cocoa md:flex"
          >
            Connect with us
            <Send className="size-4" strokeWidth={1.75} aria-hidden />
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full text-espresso hover:bg-cream/60 md:hidden"
          >
            {open ? (
              <X className="size-5" strokeWidth={1.75} />
            ) : (
              <Menu className="size-5" strokeWidth={1.75} />
            )}
          </button>
        </div>

        {open && (
          <ul className={`mt-2 space-y-1 rounded-3xl p-2 md:hidden ${glass}`}>
            {links.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-medium ${
                      active
                        ? "bg-cocoa text-cream"
                        : "text-espresso hover:bg-cream/60"
                    }`}
                  >
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openDialog("connect");
                }}
                aria-haspopup="dialog"
                className="flex w-full items-center gap-3 rounded-2xl bg-espresso px-4 py-3 font-medium text-cream hover:bg-cocoa"
              >
                <Send className="size-5" strokeWidth={1.75} aria-hidden />
                Connect with us
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
