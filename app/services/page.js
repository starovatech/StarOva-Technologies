import {
  ArrowUpRight,
  CodeXml,
  LayoutDashboard,
  Users,
  MonitorSmartphone,
  Server,
  LayoutTemplate,
  RefreshCw,
  Layers,
  Wrench,
  ChartLine,
  Eraser,
  Boxes,
  Database,
  Network,
  FileClock,
  Settings2,
  Filter,
  Workflow,
  BookOpenText,
  Tablet,
  PenTool,
  Hourglass,
} from "lucide-react";
import ServicesHero from "@/components/ServicesHero";
import ServiceFaq from "@/components/ServiceFaq";
import ApproachStrip from "@/components/ApproachStrip";
import { DialogButton } from "@/components/Dialogs";
import Link from "next/link";
import ServiceNav from "@/components/ServiceNav";
import ServiceTabs from "@/components/ServiceTabs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, serviceLd, faqLd, breadcrumbLd } from "@/lib/seo";
import { landingPages } from "@/lib/landing";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Website development, UI/UX, dashboards and Power BI, data analysis and engineering, BI architecture, CRM setup and catalogue design by StarOva Technologies.",
  path: "/services",
});

// Showcase items: set `image` (in public/images/projects) and `href` to fill a "coming soon" slot.
// `tint` is the card colour behind the screenshot.
const categories = [
  {
    id: "web",
    faqs: [
      ["How long does it take to build a website?", "It depends on the size and features. A landing page is quicker than a full website with custom functionality. After our first conversation we agree a clear timeline with milestones, so you always know what happens and when."],
      ["Can you redesign my existing website?", "Yes. We can modernise the design, improve speed and mobile experience, and restructure pages, while keeping the content and search rankings that already work."],
      ["Will my website work well on mobile?", "Yes. Every site we build is responsive and tested on phones, tablets and desktops before launch."],
      ["Do I need to have all my content ready?", "No. We can work with what you have, help you structure it, and point out what's missing so nothing holds the launch back."],
      ["Do you look after the website after launch?", "Yes. We offer ongoing maintenance and support: updates, fixes, performance improvements and new features whenever you need them."],
    ],
    nav: "Web Development",
    short: "Web",
    icon: CodeXml,
    title: "Websites that",
    accent: "work as hard as you do.",
    text: "Fast, modern and responsive websites designed around your brand, built to turn visitors into customers.",
    enquire: "Website Development",
    cta: "Start a web project",
    more: landingPages.web,
    showcase: [
      {
        title: "Syntrad",
        category: "Website",
        tint: "#7a2e2e",
        image: "/images/projects/syntrad-website.webp",
        href: "https://www.syntradltd.co.uk/",
        cta: "Visit website",
      },
      {
        title: "WebMagic Informatica",
        category: "Website",
        tint: "#1e2a44",
        image: "/images/projects/webmagic-website.webp",
        href: "https://webmagicinformatica.com/",
        cta: "Visit website",
      },
    ],
    offerings: [
      { title: "Frontend Development", text: "Responsive, accessible interfaces that look sharp and load fast on every device.", icon: MonitorSmartphone },
      { title: "Backend Development", text: "Secure APIs, databases and server logic that keep everything running reliably.", icon: Server },
      { title: "UI/UX Design", text: "Clear layouts and journeys that make your site easy to use and hard to leave.", icon: LayoutTemplate },
      { title: "Website Redesign", text: "Modernise an existing site while keeping the content and rankings that already work.", icon: RefreshCw },
      { title: "Full-Stack Development", text: "One team taking your website from design and structure to build and launch.", icon: Layers },
      { title: "Maintenance & Support", text: "Updates, fixes, performance tuning and new features long after launch.", icon: Wrench },
    ],
  },
  {
    id: "data",
    faqs: [
      ["Can you work with the data we already have?", "Yes. We work with spreadsheets, databases and the systems you already use. We clean and organise the data first, then build reports and dashboards on top of it."],
      ["What's the difference between BI development and BI architecture?", "BI development is building the reports and dashboards your team uses. BI architecture is designing the foundations underneath: data models, pipelines and structure, so reporting stays fast and reliable as you grow."],
      ["Will our dashboards update automatically?", "Yes. We connect dashboards to your data sources and set up scheduled refreshes, so the numbers stay current without manual work."],
      ["Our data is messy. Can you still help?", "Yes. Data cleaning is often the first step. We fix duplicates, gaps and inconsistent formats so your insights can be trusted."],
      ["How do you keep our data secure?", "We only access the data a project needs, work within your existing permissions, and agree with you up front how data is handled and shared."],
    ],
    nav: "Dashboards & BI",
    short: "Data & BI",
    icon: LayoutDashboard,
    title: "Data that turns into",
    accent: "clear decisions.",
    text: "From raw spreadsheets to interactive dashboards and scalable BI foundations, we make your data tell you something useful.",
    enquire: "BI Development",
    cta: "Start a data project",
    more: landingPages.data,
    tone: "dark",
    showcase: [
      {
        title: "Procure-to-Pay Dashboard",
        category: "Dashboard",
        tint: "#3b4a4f",
        image: "/images/projects/powerbi-dashboard.webp",
        href: "https://app.powerbi.com/view?r=eyJrIjoiOWM0ZTE2NTAtMzA1OS00NzQyLTliNWUtZTY5ODgzMmY3Y2ZjIiwidCI6IjQ0MmJjNjc0LWRjZjQtNGZiYi1hZDBlLTBkYmE2NWYwNmQ5MyJ9",
        cta: "Open dashboard",
      },
      { title: "New dashboard", category: "Dashboard", tint: "#4a4038" },
    ],
    offerings: [
      { title: "Data Analysis", text: "Patterns, trends and insights pulled from your business data.", icon: ChartLine },
      { title: "Data Cleaning", text: "Messy datasets organised, validated and made ready for analysis.", icon: Eraser },
      { title: "Data Modelling", text: "Well-structured models that make reporting fast and consistent.", icon: Boxes },
      { title: "Interactive Dashboards", text: "Your KPIs and metrics together in one clear, live view.", icon: LayoutDashboard },
      { title: "BI Development", text: "Reports and dashboards designed and built end to end.", icon: Database },
      { title: "BI Engineering", text: "Reliable data pipelines that feed your reports automatically.", icon: Workflow },
      { title: "BI Architecture", text: "Scalable BI foundations designed to grow with your team.", icon: Network },
      { title: "Automated Reporting", text: "Scheduled reports that land on time, without manual work.", icon: FileClock },
    ],
  },
  {
    id: "crm",
    faqs: [
      ["We don't use a CRM yet. Can you help us choose one?", "Yes. We look at how your team sells and follows up, recommend a CRM that fits your size and budget, then set it up around your process."],
      ["Can you move our existing customer data into the CRM?", "Yes. We import your contacts, leads and deals from spreadsheets or your old system, and clean them up on the way in."],
      ["What can be automated in a CRM?", "Follow-up reminders, lead assignment, emails, task creation and pipeline updates, so your team spends less time on admin and more time selling."],
      ["Do you design both print and digital catalogues?", "Yes. We design print-ready catalogues and shareable digital versions that look great on any screen, often from the same design."],
      ["Can you design our logo and brand as well?", "Yes. We create logos and simple visual systems, and can apply them across your catalogues, website and marketing material for a consistent look."],
    ],
    nav: "CRM & Catalogues",
    short: "CRM",
    icon: Users,
    title: "Tools that help you",
    accent: "sell and stay organised.",
    text: "CRM systems that keep your customers in one place, and catalogues and brand assets that present your range professionally.",
    enquire: "CRM Solutions",
    cta: "Start a CRM or design project",
    tone: "cocoa",
    offerings: [
      { title: "CRM Setup & Customisation", text: "A CRM configured around how your team actually sells.", icon: Settings2 },
      { title: "Lead & Pipeline Management", text: "Track every lead and deal so nothing slips through.", icon: Filter },
      { title: "CRM Automation", text: "Follow-ups, reminders and workflows that run on their own.", icon: Workflow },
      { title: "Catalogue Design", text: "Print-ready product catalogues that showcase your range clearly.", icon: BookOpenText },
      { title: "Digital Catalogues", text: "Shareable online catalogues that look great on any screen.", icon: Tablet },
      { title: "Logo & Brand Identity", text: "Memorable logos and visual systems for a consistent presence.", icon: PenTool },
    ],
  },
];

function ShowcaseCard({ title, category, tint, image, href, cta }) {
  if (!image) {
    return (
      <div
        className="relative flex h-full min-h-48 w-full sm:min-h-72 flex-col items-center justify-center overflow-hidden rounded-[30px] border border-dashed border-white/25 p-6 text-center"
        style={{ backgroundColor: tint }}
      >
        <div aria-hidden className="pointer-events-none absolute -right-10 top-4 size-44 rounded-full border border-white/15" />
        <div aria-hidden className="pointer-events-none absolute -right-2 top-12 size-28 rounded-full border border-white/10" />
        <span className="grid size-12 place-items-center rounded-full bg-white/10 text-white">
          <Hourglass className="size-5" strokeWidth={1.75} aria-hidden />
        </span>
        <p className="mt-4 text-lg font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-white/85">Coming soon</p>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full flex-col overflow-hidden rounded-[30px] shadow-[0_30px_60px_-25px_rgba(41,28,14,0.45)] transition-transform duration-300 hover:-translate-y-1.5"
      style={{
        backgroundColor: tint,
        backgroundImage:
          "radial-gradient(circle at 25% 10%, rgba(225,212,194,0.4), transparent 50%), linear-gradient(170deg, rgba(255,255,255,0.14), transparent 60%)",
      }}
    >
      <div aria-hidden className="pointer-events-none absolute -right-10 top-4 size-44 rounded-full border border-white/25" />
      <div aria-hidden className="pointer-events-none absolute -right-2 top-12 size-28 rounded-full border border-white/20" />

      <div className="relative flex items-center justify-between gap-3 px-5 pt-5">
        <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
        <span className="shrink-0 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white">
          {category}
        </span>
      </div>

      <div className="relative mx-5 mt-5 aspect-[16/10] overflow-hidden rounded-2xl border border-white/25 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.5)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`${title} preview`}
          className="absolute inset-0 size-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <span className="relative m-5 inline-flex items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-semibold text-espresso transition-colors group-hover:bg-cream">
        {cta}
        <ArrowUpRight className="size-4" aria-hidden />
      </span>
    </a>
  );
}

function OfferingTile({ title, text, icon: Icon, dark }) {
  return (
    <li
      className={`group relative overflow-hidden rounded-2xl p-4 transition-all sm:rounded-3xl sm:p-5 duration-300 hover:-translate-y-1 ${
        dark
          ? "border border-cream/10 bg-cream/[0.04] hover:border-cream/25 hover:bg-cream/[0.08]"
          : "border border-stone/40 bg-white shadow-[0_16px_36px_-28px_rgba(41,28,14,0.5)] hover:border-taupe/60"
      }`}
    >
      <span
        className={`grid size-10 place-items-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
          dark ? "border border-cream/15 bg-cream/10 text-cream" : "bg-espresso text-cream"
        }`}
      >
        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
      </span>
      <h4 className={`mt-4 text-sm font-semibold leading-snug tracking-tight sm:mt-5 sm:text-base ${dark ? "text-cream" : "text-espresso"}`}>{title}</h4>
      <p className={`mt-1.5 text-xs leading-5 sm:text-[13px] ${dark ? "text-cream/80" : "text-cocoa"}`}>{text}</p>
    </li>
  );
}

// Each service area is its own panel so the three areas read as separate offerings
const tones = {
  light: {
    panel: "border border-white/80 bg-cream/60 text-espresso shadow-[0_30px_70px_-40px_rgba(41,28,14,0.45)]",
    iconTile: "bg-espresso text-cream",
    marker: "text-cocoa",
    accent: "text-cocoa",
    body: "text-cocoa",
    rule: "bg-stone/50",
    button: "bg-espresso text-cream hover:bg-cocoa",
  },
  dark: {
    panel: "bg-espresso text-cream shadow-[0_40px_80px_-40px_rgba(41,28,14,0.9)]",
    iconTile: "border border-cream/15 bg-cream/10 text-cream",
    marker: "text-taupe",
    accent: "text-taupe",
    body: "text-cream/85",
    rule: "bg-cream/15",
    button: "bg-cream text-espresso hover:bg-white",
  },
  cocoa: {
    panel: "bg-[#5a3a2f] text-cream shadow-[0_40px_80px_-40px_rgba(90,58,47,0.9)]",
    iconTile: "border border-cream/20 bg-cream/15 text-cream",
    marker: "text-cream/85",
    accent: "text-cream/80",
    body: "text-cream/90",
    rule: "bg-cream/20",
    button: "bg-cream text-espresso hover:bg-white",
  },
};

function Category({ id, index, total, nav, icon: Icon, title, accent, text, enquire, cta, more, showcase, offerings, others, tone = "light" }) {
  const t = tones[tone];
  const dark = tone !== "light";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-40 px-4 py-3 sm:px-6">
      <div className={`relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-5 sm:rounded-[2.5rem] sm:p-7 lg:p-8 ${t.panel}`}>
        {/* Area header */}
        <div className="relative flex items-center gap-4 sm:gap-5">
          <span className={`grid size-12 shrink-0 place-items-center rounded-2xl sm:size-14 ${t.iconTile}`}>
            <Icon className="size-6" strokeWidth={1.75} aria-hidden />
          </span>
          <div>
            <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs ${t.marker}`}>
              Service {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <h2 id={`${id}-title`} className="mt-1 text-3xl font-semibold tracking-tight sm:text-5xl">
              {nav}
            </h2>
          </div>
        </div>

        <div className={`relative mt-5 h-px w-full sm:mt-6 ${t.rule}`} />

        <div className="relative mt-5 flex flex-col justify-between gap-4 sm:mt-6 md:flex-row md:items-end">
          <p className="max-w-xl text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
            {title} <span className={t.accent}>{accent}</span>
          </p>
          <div className="flex flex-col gap-4 md:max-w-sm md:items-end md:text-right">
            <p className={`text-sm leading-6 ${t.body}`}>{text}</p>
            <DialogButton
              dialog="enquiry"
              service={enquire}
              className={`group inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${t.button}`}
            >
              {cta}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </DialogButton>
            {more && (
              <Link href={more.path} className={`text-sm font-semibold underline underline-offset-4 ${t.accent}`}>
                More about {more.label}
              </Link>
            )}
          </div>
        </div>

        {showcase && (
          <div className="relative mx-auto mt-6 grid max-w-4xl gap-5 sm:mt-8 sm:grid-cols-2">
            {showcase.map((item) => (
              <ShowcaseCard key={item.title} {...item} />
            ))}
          </div>
        )}

        <h3 className={`relative mt-8 text-xs font-semibold uppercase tracking-[0.2em] ${t.marker}`}>
          What we offer
        </h3>
        <ul className={`relative mt-4 grid grid-cols-2 gap-2.5 sm:gap-3 ${offerings.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {offerings.map((item) => (
            <OfferingTile key={item.title} dark={dark} {...item} />
          ))}
        </ul>

        {/* Links to the other service areas */}
        <div className={`relative mt-8 border-t pt-6 ${dark ? "border-cream/15" : "border-stone/50"}`}>
          <h3 className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.marker}`}>
            Explore other services
          </h3>
          <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {others.map(({ id: otherId, nav: otherNav, offerings: otherOfferings, icon: OtherIcon }) => (
              <li key={otherId} className="min-w-0">
                <a
                  href={`#${otherId}`}
                  className={`group flex h-full items-center gap-4 rounded-2xl px-4 py-3.5 transition-colors ${
                    dark
                      ? "border border-cream/20 bg-cream/[0.08] text-cream hover:border-cream/40 hover:bg-cream/[0.14]"
                      : "border border-stone/40 bg-white text-espresso hover:border-taupe"
                  }`}
                >
                  <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${t.iconTile}`}>
                    <OtherIcon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold tracking-tight">View {otherNav}</span>
                    <span className={`mt-0.5 block truncate text-[13px] ${t.body}`}>
                      {otherOfferings.slice(0, 2).map(({ title }) => title).join(" · ")} + {otherOfferings.length - 2} more
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([["Home", "/"], ["Services", "/services"]]),
          ...categories.map((c) =>
            serviceLd({ name: c.nav, description: c.text, offerings: c.offerings, path: `/services#${c.id}` })
          ),
          faqLd(categories.flatMap((c) => c.faqs), "/services"),
        ]}
      />
      <ServicesHero />

      <ServiceNav items={categories.map(({ id, nav, short }) => ({ id, label: nav, short }))} />

      <div className="pb-4 pt-3">
        <ServiceTabs ids={categories.map(({ id }) => id)}>
          {categories.map((category, i) => (
            <Category
              key={category.id}
              index={i}
              total={categories.length}
              others={categories.filter(({ id }) => id !== category.id)}
              {...category}
            />
          ))}
        </ServiceTabs>
      </div>

      <ApproachStrip />

      <ServiceFaq areas={categories.map(({ id, nav, faqs }) => ({ id, nav, faqs }))} />
    </>
  );
}
