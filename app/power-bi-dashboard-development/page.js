import ServiceLanding from "@/components/ServiceLanding";
import { landingPages } from "@/lib/landing";
import { pageMetadata } from "@/lib/seo";

const page = landingPages.data;

export const metadata = pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: page.path });

export default function PowerBiDashboardPage() {
  return <ServiceLanding id="data" page={page} />;
}
