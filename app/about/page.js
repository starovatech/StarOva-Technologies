import AboutHero from "@/components/AboutHero";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, peopleLd, breadcrumbLd } from "@/lib/seo";
import Founders from "@/components/Founders";
import OurStory from "@/components/OurStory";
import Values from "@/components/Values";
import ApproachSlider from "@/components/ApproachSlider";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Meet StarOva Technologies: a digital studio run by Huda (website developer) and Adnan (data analyst), bringing design, development, branding and data together for growing businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([["Home", "/"], ["About", "/about"]]), ...peopleLd()]} />
      <AboutHero />

      {/* Story */}
      <OurStory />

      {/* Owners */}
      <Founders />

      {/* Values */}
      <Values />

      {/* Approach (same as the home page) */}
      <section
        className="relative overflow-hidden border-y border-white/20 bg-espresso bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: "url('/images/hero/blackhole.jpg')" }}
      >
        <div aria-hidden className="absolute inset-0 bg-espresso/25" />
        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <ApproachSlider />
        </div>
      </section>
    </>
  );
}
