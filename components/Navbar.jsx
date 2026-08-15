"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Solutions", "/solutions"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="navbar">
      <div className="navbar-glow" />

      <div className="nav-inner">
        {/* Logo */}
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <img src="/images/logo/starOva.png" alt="starOva" /> </Link>

        {/* Navigation */}
        <nav className={open ? "nav-links mobile-open" : "nav-links"}>
          {links.map(([label, href]) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={active ? "nav-link active" : "nav-link"}
                onClick={() => setOpen(false)}
              >
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
  href="https://wa.me/919960045758?text=Hi%20Webnexa%2C%20I%20would%20like%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="nav-talk"
>
  <span>Let&apos;s Talk</span>
  <b>↗</b>
</Link>

        {/* Mobile menu */}
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}