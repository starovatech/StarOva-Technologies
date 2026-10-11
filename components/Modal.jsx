"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

// Native <dialog> shell shared by the site's pop-ups: backdrop, enter/exit animation,
// Escape / backdrop-click to close, and the brown card panel (styled like the "Selected work" cards).
export default function Modal({ open, onClose, labelledBy, className = "max-w-md", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      // Clicks on the backdrop land on the <dialog> itself
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-labelledby={labelledBy}
      className={`m-auto max-h-[calc(100svh-1rem)] w-[calc(100%-1.5rem)] sm:max-h-[calc(100svh-2rem)] sm:w-[calc(100%-2rem)] overflow-visible bg-transparent p-0 opacity-0 scale-95 transition-[opacity,scale,display,overlay] transition-discrete duration-300 ease-out open:opacity-100 open:scale-100 starting:open:opacity-0 starting:open:scale-95 backdrop:bg-espresso/0 backdrop:backdrop-blur-none backdrop:transition-[background-color,backdrop-filter,display,overlay] backdrop:transition-discrete backdrop:duration-300 open:backdrop:bg-espresso/55 open:backdrop:backdrop-blur-sm starting:open:backdrop:bg-espresso/0 starting:open:backdrop:backdrop-blur-none ${className}`}
    >
      <div
        className="relative max-h-[calc(100svh-1rem)] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[1.75rem] border border-white/15 p-4 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] sm:max-h-[calc(100svh-2rem)] sm:rounded-[2rem] sm:p-5 md:p-8"
        style={{
          backgroundColor: "#6e473b",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(225,212,194,0.28), transparent 50%), linear-gradient(170deg, rgba(255,255,255,0.14), transparent 60%)",
        }}
      >
        {/* Decorative circles, clipped so they can't widen the panel and cause a sideways scrollbar */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
          <div className="absolute -right-16 -top-10 size-72 rounded-full border border-white/20" />
          <div className="absolute -right-4 top-6 size-44 rounded-full border border-white/15" />
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-black/30 text-white backdrop-blur transition-colors hover:bg-white hover:text-espresso sm:right-5 sm:top-5"
        >
          <X className="size-5" strokeWidth={1.75} aria-hidden />
        </button>
        <div className="relative">{children}</div>
      </div>
    </dialog>
  );
}

// Small eyebrow with a pulsing dot, used at the top of each pop-up
export function ModalBadge({ children }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25d366] opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-[#25d366]" />
      </span>
      {children}
    </p>
  );
}
