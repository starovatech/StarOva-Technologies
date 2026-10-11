"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CircleCheck, LoaderCircle, Mail } from "lucide-react";
import Modal, { ModalBadge } from "@/components/Modal";
import { contact } from "@/lib/site";

// [value sent in the email, short label shown on the pill]
const budgets = [
  ["Under Rs. 2,000", "Under ₹2K"],
  ["Rs. 2,500 – Rs. 5,000", "₹2.5K–5K"],
  ["Rs. 5,500 – Rs. 10,000", "₹5.5K–10K"],
  ["Rs. 10,500 – Rs. 20,000", "₹10.5K–20K"],
  ["Rs. 20,000+", "₹20K+"],
];

// [value sent in the email, short label shown on phones]
const serviceOptions = [
  ["Website Development", "Website"],
  ["Data Analysis", "Data Analysis"],
  ["Data Cleaning", "Data Cleaning"],
  ["Interactive Dashboards", "Dashboards"],
  ["BI Development", "BI Development"],
  ["BI Architecture", "BI Architecture"],
  ["CRM Solutions", "CRM"],
  ["Catalogue Design", "Catalogues"],
  ["Logo & Brand Identity", "Logo & Brand"],
  ["Something else", "Other"],
];

// Service-card titles that don't match an option one-to-one
const serviceAliases = { "BI Development & Architecture": "BI Development" };

const field =
  "mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-white/60 focus:bg-white/15 focus:ring-4 focus:ring-white/10";

const groupLabel = "text-[13px] font-medium text-white sm:text-sm";

// Radio styled as a pill; the label lights up when its input is checked
function Chip({ name, value, label, required, defaultChecked }) {
  return (
    <label className="cursor-pointer rounded-full border border-transparent bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur transition-all select-none hover:bg-white/25 sm:px-4 sm:py-2 sm:text-[13px] has-checked:bg-white has-checked:text-espresso has-checked:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.6)] has-focus-visible:ring-4 has-focus-visible:ring-white/30">
      <input
        type="radio"
        name={name}
        value={value}
        required={required}
        defaultChecked={defaultChecked}
        className="sr-only"
      />
      <span className="sm:hidden">{label}</span>
      <span className="hidden sm:inline">{value}</span>
    </label>
  );
}

export default function EnquiryDialog({ open, onClose, service }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // Pre-select the service the visitor came from (e.g. a service card's "Enquire")
  useEffect(() => {
    if (open && service && formRef.current) {
      formRef.current.elements.service.value = serviceAliases[service] ?? service;
    }
  }, [open, service]);

  // Start fresh next time once an enquiry has gone through
  const handleClose = () => {
    onClose();
    if (status === "sent") {
      formRef.current?.reset();
      setStatus("idle");
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (data._honey) return; // bot filled the hidden field

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      setStatus(res.ok && String(json.success) !== "false" ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Modal open={open} onClose={handleClose} labelledBy="enquiry-title" className="max-w-4xl">
      {status === "sent" ? (
        <div className="flex flex-col items-center py-10 text-center">
          <span className="grid size-16 place-items-center rounded-full bg-white text-espresso shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)]">
            <CircleCheck className="size-8" strokeWidth={1.5} aria-hidden />
          </span>
          <h2 id="enquiry-title" className="mt-6 text-3xl font-semibold tracking-tight text-white">
            Enquiry <span className="text-cream/70">sent.</span>
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Thanks for reaching out. We&apos;ll review your project and get
            back to you as soon as possible.
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-semibold text-espresso transition-colors hover:bg-cream"
          >
            Done
          </button>
        </div>
      ) : (
        <>
          <ModalBadge>Start a project</ModalBadge>
          <h2 id="enquiry-title" className="mt-2 text-xl font-semibold tracking-tight text-white sm:mt-3 sm:text-3xl">
            Tell us what you&apos;re <span className="text-cream/70">building.</span>
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-3 space-y-2.5 sm:mt-5 sm:space-y-4">
            <input type="hidden" name="_subject" value="New project enquiry — StarOva Technologies" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <label className={`block ${groupLabel}`}>
                Name
                <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
              </label>
              <label className={`block ${groupLabel}`}>
                Email
                <input type="email" name="email" required autoComplete="email" placeholder="you@email.com" className={field} />
              </label>
            </div>

            <fieldset>
              <legend className={groupLabel}>What do you need?</legend>
              <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2 sm:gap-2">
                {serviceOptions.map(([value, label], i) => (
                  <Chip key={value} name="service" value={value} label={label} required defaultChecked={i === 0} />
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className={groupLabel}>
                Budget <span className="font-normal text-white/55">(optional)</span>
              </legend>
              <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2 sm:gap-2">
                {budgets.map(([value, label]) => (
                  <Chip key={value} name="budget" value={value} label={label} />
                ))}
              </div>
            </fieldset>

            <label className={`block ${groupLabel}`}>
              Project details
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your business, your idea and what you want to achieve…"
                className={`${field} h-16 resize-none sm:h-24`}
              />
            </label>

            {status === "error" && (
              <p role="alert" className="flex items-start gap-2 rounded-xl bg-black/25 px-3 py-2 text-xs leading-5 text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-cream" strokeWidth={1.75} aria-hidden />
                <span>
                  Couldn&apos;t send. Try again or email{" "}
                  <a href={`mailto:${contact.email}`} className="font-semibold text-white underline underline-offset-4">
                    {contact.email}
                  </a>
                </span>
              </p>
            )}

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="hidden text-xs leading-5 text-white/65 sm:block">
                No pressure, no complicated process. Just a conversation.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-espresso transition-colors hover:bg-cream disabled:cursor-wait disabled:opacity-80"
              >
                {status === "sending" ? (
                  <>
                    Sending
                    <LoaderCircle className="size-4 animate-spin" aria-hidden />
                  </>
                ) : (
                  <>
                    Send enquiry
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
}
