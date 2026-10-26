import ServiceLanding from "@/components/ServiceLanding";
import { landingPages } from "@/lib/landing";
import { pageMetadata } from "@/lib/seo";

const page = landingPages.web;

export const metadata = pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path });

export default function WebsiteDesignPage() {
  return <ServiceLanding id="web" page={page} />;
}
