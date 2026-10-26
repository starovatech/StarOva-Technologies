import { site } from "@/lib/site";
import { landingPages } from "@/lib/landing";

const pages = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  ...Object.values(landingPages).map(({ path }) => ({ path, priority: 0.9, changeFrequency: "monthly" })),
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/llms.txt", priority: 0.3, changeFrequency: "monthly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
