"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import Modal, { ModalBadge } from "@/components/Modal";
import { contact } from "@/lib/site";

const channels = [
  {
    label: "Connect on call",
    value: contact.phone,
    href: contact.phoneHref,
    icon: Phone,
    tile: "bg-espresso text-cream",
  },
  {
    label: "Connect on WhatsApp",
    value: contact.whatsappNumber,
    href: contact.whatsapp,
    icon: MessageCircle,
    tile: "bg-[#25d366] text-white",
    external: true,
  },
  {
    label: "Connect on mail",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
    tile: "bg-white text-cocoa",
  },
];

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={() =>
        navigator.clipboard?.writeText(value).then(() => setCopied(true))
      }
      aria-label={copied ? "Copied" : `Copy ${label.toLowerCase()}`}
      title={copied ? "Copied" : "Copy"}
      className="grid size-10 shrink-0 place-items-center rounded-xl text-white/70 transition-colors hover:bg-white/15 hover:text-white"
    >
      {copied ? (
        <Check className="size-4" strokeWidth={2} aria-hidden />
      ) : (
        <Copy className="size-4" strokeWidth={1.75} aria-hidden />
      )}
    </button>
  );
}

export default function ConnectDialog({ open, onClose, onEnquire }) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="connect-title">
      <ModalBadge>Accepting new projects</ModalBadge>
      <h2 id="connect-title" className="mt-3 text-3xl font-semibold tracking-tight text-white">
        Connect <span className="text-cream/70">with us.</span>
      </h2>
      <p className="mt-2 text-sm leading-6 text-white/70">
        Pick whichever is easiest for you. We&apos;ll take it from there.
      </p>

      <ul className="mt-7 space-y-3">
        {channels.map(({ label, value, href, icon: Icon, tile, external }) => (
          <li
            key={label}
            className="group flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 p-2 pr-2 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 hover:shadow-[0_18px_36px_-20px_rgba(0,0,0,0.5)]"
          >
            <a
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex min-w-0 flex-1 items-center gap-4 rounded-xl p-2 text-white outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <span
                className={`grid size-12 shrink-0 place-items-center rounded-xl shadow-sm transition-transform group-hover:scale-105 ${tile}`}
              >
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  {label}
                </span>
                <span className="mt-0.5 block truncate font-semibold">
                  {value}
                </span>
              </span>
              <ArrowUpRight
                className="size-4 shrink-0 text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                aria-hidden
              />
            </a>
            <CopyButton value={value} label={label.replace("Connect on ", "")} />
          </li>
        ))}
      </ul>

      <p className="mt-6 text-center text-sm text-white/70">
        Prefer to write it out?{" "}
        <button
          type="button"
          onClick={onEnquire}
          className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          Send a project enquiry
        </button>
      </p>
    </Modal>
  );
}
