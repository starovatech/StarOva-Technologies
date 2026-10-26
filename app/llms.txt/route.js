import { site, contact, services, founders, homeFaqs, projects } from "@/lib/site";
import { landingPages } from "@/lib/landing";

// /llms.txt: a plain-language summary of the business for AI assistants (llmstxt.org).
// Generated from lib/site.js so it always matches what the website says.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Key facts",
    `- Name: ${site.name} (also "${site.shortName}")`,
    `- What it is: a small digital studio offering web, design and data services`,
    `- Based in: India; works with clients ${site.areaServed.toLowerCase()}`,
    `- Website: ${site.url}`,
    `- Email: ${contact.email}`,
    `- Phone: ${contact.phone}`,
    `- WhatsApp: ${contact.whatsappNumber}`,
    "",
    "## Services",
    ...services.map((s) => `- ${s.title}: ${s.text}`),
    "",
    "## Founders",
    ...founders.map(
      (f) => `- ${f.name}, ${f.role.replace(/^Co-founder · /, "co-founder and ")}. ${f.bio} Skills: ${f.skills.join(", ")}.`
    ),
    "",
    "## Selected work",
    ...projects.map((p) => `- ${p.title} (${p.category}): ${p.text}${p.imageHref ? ` Example: ${p.imageHref}` : ""}`),
    "",
    "## Frequently asked questions",
    ...homeFaqs.flatMap(([q, a]) => [`### ${q}`, a, ""]),
    "## Pages",
    `- [Home](${site.url}/): overview, selected work, services and FAQ`,
    `- [Services](${site.url}/services): web development, dashboards & BI, CRM and catalogues, with FAQs per service`,
    ...Object.values(landingPages).map((p) => `- [${p.label}](${site.url}${p.path}): ${p.metaDescription}`),
    `- [About](${site.url}/about): story, founders (${founders.map((f) => f.name).join(" and ")}), values and approach`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
