import GalaxyHero from "@/components/GalaxyHero";
import ProjectsSection from "@/components/ProjectsSection";
import WhatWeDo from "@/components/WhatWeDo";
import AudienceStrip from "@/components/AudienceStrip";
import ApproachStrip from "@/components/ApproachStrip";
import WhyStarova from "@/components/WhyStarova";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { homeFaqs } from "@/lib/site";
import { faqLd } from "@/lib/seo";

export const metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqLd(homeFaqs, "/")} />
      <GalaxyHero />
      <ProjectsSection />

      <AudienceStrip />

      {/* Services */}
      <WhatWeDo />

      <ApproachStrip />

      {/* Why StarOva */}
      <WhyStarova />

      {/* FAQ */}
      <FaqSection />
    </>
  );
}
