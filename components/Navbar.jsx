"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Info,
  SlidersHorizontal,
  LayoutGrid,
  Phone,
  Menu,
  X,
} from "lucide-react";


const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Services", href: "/services", icon: SlidersHorizontal },
  { label: "Projects", href: "/projects", icon: LayoutGrid },
  { label: "Contact", href: "/contact", icon: Phone },
];

/* ------------------------------------------------------------------ */
/* LOGO: crescent moon holding a four-point star ("nova").            */
/* To use your real logo, replace <LogoMark /> below with:            */
/*   <Image src="/logo.svg" alt="Starova Tech" width={34} height={34}/>*/
/* and add: import Image from "next/image";                           */
/* ------------------------------------------------------------------ */
function LogoMark({ className = "h-[34px] w-[34px]" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <mask id="starova-moon">
          <rect width="32" height="32" fill="white" />
          <circle cx="22" cy="11" r="9" fill="black" />
        </mask>
      </defs>
      <circle cx="16" cy="16" r="12" fill="#C0A78F" mask="url(#starova-moon)" />
      <path
        d="M22 6.2 L23.3 9.7 L26.8 11 L23.3 12.3 L22 15.8 L20.7 12.3 L17.2 11 L20.7 9.7 Z"
        fill="#C0A78F"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const currentIndex = navItems.findIndex((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
  );
  const hasActive = currentIndex !== -1;

  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [rects, setRects] = useState([]);
  const itemRefs = useRef([]);

  // Measure each link so the pills can slide between them
  useEffect(() => {
    const measure = () =>
      setRects(
        itemRefs.current.map((el) =>
          el ? { left: el.offsetLeft, width: el.offsetWidth } : null
        )
      );
    measure();
    window.addEventListener("resize", measure);
    if (document.fonts?.ready) document.fonts.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname]);

  const activeRect = hasActive ? rects[currentIndex] : null;
  const hoverRect = hovered !== null ? rects[hovered] : null;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5">
      <nav
        aria-label="Main"
        className={`
          relative mx-auto flex w-full max-w-[1100px] items-center justify-between
          rounded-full border px-2.5 py-2 backdrop-blur-xl
          shadow-[inset_0_1px_0_rgba(192,167,143,0.14),0_18px_50px_rgba(0,0,0,0.45)]
          transition-colors duration-300
          ${
            scrolled || open
              ? "border-[#675148]/80 bg-[#272727]/90"
              : "border-[#675148]/40 bg-[#272727]/55"
          }
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Starova Tech home"
          className="
            flex items-center gap-2.5 rounded-full py-0.5 pl-3 pr-4
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0A78F]/70
          "
        >
          
<img
  src="/images/logo/starova-logo.png"
  alt="Starova Technologies"
  className="h-11 w-auto md:h-12"
/>

        </Link>

        {/* Desktop links */}
        <div
          className="relative hidden items-center gap-1 md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {/* Hover pill (slides under the cursor) */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 rounded-full bg-[#443B39] transition-[left,width,opacity] duration-300 ease-out motion-reduce:transition-none"
            style={{
              left: hoverRect?.left ?? 0,
              width: hoverRect?.width ?? 0,
              opacity: hoverRect ? 1 : 0,
            }}
          />
          {/* Active pill: solid Moonlit Sand, slides on route change */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 rounded-full bg-[#C0A78F] shadow-[0_0_28px_rgba(192,167,143,0.28)] transition-[left,width,opacity] duration-300 ease-out motion-reduce:transition-none"
            style={{
              left: activeRect?.left ?? 0,
              width: activeRect?.width ?? 0,
              opacity: activeRect ? 1 : 0,
            }}
          />

          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = hasActive && index === currentIndex;
            const isHover = hovered === index;

            return (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => (itemRefs.current[index] = el)}
                aria-current={active ? "page" : undefined}
                onMouseEnter={() => setHovered(index)}
                onFocus={() => setHovered(index)}
                onBlur={() => setHovered(null)}
                className="
                  z-10 flex items-center gap-2 rounded-full px-4 py-2.5
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0A78F]/70
                "
              >
                <Icon
                  className={`h-[18px] w-[18px] shrink-0 transition-colors duration-300 ${
                    active
                      ? "text-[#272727]"
                      : isHover
                      ? "text-[#C0A78F]"
                      : "text-[#8F7261]"
                  }`}
                  strokeWidth={active ? 2 : 1.6}
                />
                <span
                  className={`hidden whitespace-nowrap text-[14px] font-medium transition-colors duration-300 lg:block ${
                    active
                      ? "text-[#272727]"
                      : isHover
                      ? "text-[#C0A78F]"
                      : "text-[#C0A78F]/75"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right side: CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="
              hidden rounded-full border border-[#C0A78F] px-5 py-2.5 text-[14px] font-semibold
              text-[#C0A78F] transition-all duration-300
              hover:bg-[#C0A78F] hover:text-[#272727] hover:shadow-[0_0_28px_rgba(192,167,143,0.35)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0A78F]/70
              sm:block
            "
          >
            Start a project
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="
              flex h-10 w-10 items-center justify-center rounded-full
              border border-[#675148] bg-[#443B39] text-[#C0A78F] md:hidden
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0A78F]/70
            "
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            absolute left-0 right-0 top-full mt-2 origin-top rounded-3xl
            border border-[#675148]/80 bg-[#272727]/95 p-2 backdrop-blur-xl
            shadow-[0_18px_50px_rgba(0,0,0,0.5)]
            transition-all duration-200 motion-reduce:transition-none md:hidden
            ${
              open
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0"
            }
          `}
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = hasActive && index === currentIndex;
            return (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={open ? 0 : -1}
                aria-current={active ? "page" : undefined}
                className={`
                  flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-medium
                  transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0A78F]/70
                  ${
                    active
                      ? "bg-[#C0A78F] text-[#272727]"
                      : "text-[#C0A78F]/80 hover:bg-[#443B39]"
                  }
                `}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={active ? 2 : 1.6} />
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            tabIndex={open ? 0 : -1}
            className="
              mt-2 block rounded-2xl border border-[#C0A78F] px-4 py-3 text-center
              text-[15px] font-semibold text-[#C0A78F] sm:hidden
            "
          >
            Start a project
          </Link>
        </div>
      </nav>
    </header>
  );
}