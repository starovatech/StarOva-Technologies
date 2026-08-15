export const metadata = {
  title: "Projects | starOva technologies",
  description: "Explore projects and digital work by starOva.",
};

export default function ProjectsPage() {
  return (
    <main className="relative flex min-h-[35vh] items-center justify-center overflow-hidden bg-[#050505] px-8 text-white pt-20">

      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.07] blur-[150px]" />

      {/* Main content */}
      <section className="relative z-10 w-full max-w-4xl">

        {/* Outer frame */}
        <div className="relative border border-white/[0.09] px-6 py-20 sm:px-12 sm:py-24 md:px-20">

          {/* Top accent */}
          <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

          {/* Corner accents */}
          <div className="absolute left-0 top-0 h-8 w-px bg-purple-400/40" />
          <div className="absolute left-0 top-0 h-px w-8 bg-purple-400/40" />

          <div className="absolute right-0 top-0 h-8 w-px bg-purple-400/40" />
          <div className="absolute right-0 top-0 h-px w-8 bg-purple-400/40" />

          <div className="absolute bottom-0 left-0 h-8 w-px bg-white/20" />
          <div className="absolute bottom-0 left-0 h-px w-8 bg-white/20" />

          <div className="absolute bottom-0 right-0 h-8 w-px bg-white/20" />
          <div className="absolute bottom-0 right-0 h-px w-8 bg-white/20" />

          {/* Small label */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/15" />

            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/35">
              starOva technologies
            </span>

            <span className="h-px w-8 bg-white/15" />
          </div>

          {/* Main heading */}
          <h1 className="text-center text-5xl font-light tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
            Under{" "}
            <span className="font-normal text-purple-300">
              Work
            </span>
          </h1>

          {/* Thin divider */}
          <div className="mx-auto mt-8 h-px w-12 bg-purple-400/50" />

          {/* Description */}
          <p className="mx-auto mt-8 max-w-md text-center text-sm font-light leading-7 text-white/40 md:text-base">
            We&apos;re currently working behind the scenes.
            Something new is being crafted and will be revealed soon.
          </p>

          {/* Status */}
          <div className="mt-9 flex justify-center">
            <div className="flex items-center gap-3 border border-white/[0.08] px-4 py-2.5">

              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/35">
                Currently building
              </span>

            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-16 flex items-center justify-center gap-4 text-[8px] uppercase tracking-[0.35em] text-white/20">
            <span>Design</span>
            <span className="h-0.5 w-0.5 rounded-full bg-white/20" />
            <span>Technology</span>
            <span className="h-0.5 w-0.5 rounded-full bg-white/20" />
            <span>Innovation</span>
          </div>

        </div>

      </section>
    </main>
  );
}
{/* import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";

export const metadata = {
  title: "Services",
  description: "WEBNEXA web development, UI/UX, web applications and digital business solutions."
};

const services = [
  { number: "01", title: "Website Development", text: "Premium responsive websites engineered for speed, clarity and conversions.", icon: "code" },
  { number: "02", title: "UI / UX Design", text: "Modern interfaces and user journeys that make your brand easy to understand.", icon: "design" },
  { number: "03", title: "Web Applications", text: "Custom web applications built with scalable modern technologies.", icon: "app" },
  { number: "04", title: "Landing Pages", text: "Focused landing pages designed to turn visitors into enquiries and customers.", icon: "landing" },
  { number: "05", title: "SEO Foundations", text: "Clean structure, metadata and performance foundations that help search engines understand your site.", icon: "seo" },
  { number: "06", title: "Maintenance & Support", text: "Ongoing updates, improvements, fixes and support after launch.", icon: "support" }
];

export default function ServicesPage() {
  return (
    <div className="inner-page">
      <section className="page-hero section-shell">
        <div className="eyebrow">Our services</div>
        <h1>Everything you need to build a <span>stronger digital presence.</span></h1>
        <p>From strategy and design to development and launch, we create digital solutions around your business.</p>
      </section>

      <section className="section-shell services-page-grid">
        {services.map((service) => <ServiceCard key={service.number} {...service} />)}
      </section>

      <section className="section-shell service-banner">
        <div>
          <div className="eyebrow">Not sure what you need?</div>
          <h2>Tell us your goal. We&apos;ll help map the <span>right solution.</span></h2>
        </div>
        <Button href="/contact">Talk to WEBNEXA</Button>
      </section>
    </div>
  );
} */}