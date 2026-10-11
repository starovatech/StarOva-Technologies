import { ArrowUpRight, Mail, Phone, MessageCircle, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { contact, services } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Start a project with StarOva Technologies. Tell us about your website, brand or data needs.",
};

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: "Phone", value: contact.phone, href: contact.phoneHref, icon: Phone },
  { label: "WhatsApp", value: "Chat with us", href: contact.whatsapp, icon: MessageCircle, external: true },
];

const budgets = [
  "Under Rs. 2,000",
  "Rs. 2,500 – Rs. 5,000",
  "Rs. 5,500 – Rs. 10,000",
  "Rs. 10,500 – Rs. 20,000",
  "Rs. 20,000+",
];

const field =
  "mt-2 w-full rounded-xl border border-stone/70 bg-white px-4 py-3 text-sm text-espresso outline-none transition placeholder:text-taupe focus:border-cocoa focus:ring-4 focus:ring-cocoa/10";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Start a project"
        title="Let's make"
        accent="something happen."
      >
        Have an idea, a business problem or simply want to improve your
        digital presence? Tell us what you&apos;re thinking. We&apos;ll take it
        from there.
      </PageHeader>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:py-20 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="space-y-4">
          {channels.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="group flex items-center gap-4 rounded-2xl border border-stone/50 bg-white p-5 transition-colors hover:border-taupe hover:bg-cream/30"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream text-cocoa transition-colors group-hover:bg-espresso group-hover:text-cream">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-cocoa/70">
                  {label}
                </span>
                <span className="mt-1 block truncate text-sm font-semibold text-espresso">
                  {value}
                </span>
              </span>
              <ArrowUpRight className="size-4 text-taupe group-hover:text-espresso" aria-hidden />
            </a>
          ))}

          <div className="flex items-start gap-4 rounded-2xl bg-cream/50 p-5">
            <Clock className="mt-0.5 size-5 shrink-0 text-cocoa" strokeWidth={1.75} aria-hidden />
            <p className="text-sm leading-6 text-cocoa/90">
              <span className="font-semibold text-espresso">
                Currently accepting new projects.
              </span>{" "}
              We&apos;ll review your enquiry and get back to you as soon as
              possible.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone/50 bg-cream/30 p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa">
            Project enquiry
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-espresso">
            Tell us what you&apos;re <span className="text-cocoa">building.</span>
          </h2>

          <form
            action={`https://formsubmit.co/${contact.email}`}
            method="POST"
            className="mt-10 space-y-5"
          >
            <input type="hidden" name="_subject" value="New project enquiry — StarOva Technologies" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-espresso">
                Name
                <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
              </label>
              <label className="block text-sm font-medium text-espresso">
                Email
                <input type="email" name="email" required autoComplete="email" placeholder="you@example.com" className={field} />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-espresso">
                What do you need?
                <select name="service" defaultValue={services[0].title} className={field}>
                  {services.map(({ title }) => (
                    <option key={title}>{title}</option>
                  ))}
                  <option>Something else</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-espresso">
                Project budget
                <select name="budget" defaultValue="" className={field}>
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block text-sm font-medium text-espresso">
              Project details
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us about your business, your idea and what you want to achieve…"
                className={`${field} resize-none`}
              />
            </label>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cocoa"
              >
                Send enquiry
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </button>
              <p className="text-xs leading-5 text-cocoa/70">
                No pressure, no complicated process. Just a conversation.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
