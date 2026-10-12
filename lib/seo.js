// Structured data (schema.org JSON-LD) and metadata helpers.
// Search engines and AI assistants read these to understand who StarOva is, what it offers
// and who runs it, so answers about the business can be accurate and cite the site.
import { site, contact, services, founders } from "@/lib/site";

const abs = (path = "/") => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
const phone = (p) => p.replace(/\s+/g, "");

export const ids = {
  org: abs("/#organization"),
  website: abs("/#website"),
  person: (name) => abs(`/about#${name.toLowerCase()}`),
};

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ids.org,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: abs("/images/logo/starova-logo.png"),
    image: abs("/opengraph-image"),
    description: site.description,
    slogan: site.tagline,
    email: contact.email,
    telephone: phone(contact.phone),
    address: { "@type": "PostalAddress", addressCountry: site.country },
    areaServed: site.areaServed,
    founder: founders.map((f) => ({ "@id": ids.person(f.name) })),
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales", email: contact.email, telephone: phone(contact.phone), availableLanguage: ["English"] },
      { "@type": "ContactPoint", contactType: "customer support", telephone: phone(contact.whatsappNumber), url: contact.whatsapp },
    ],
    knowsAbout: services.map((s) => s.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.text, provider: { "@id": ids.org } },
      })),
    },
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ids.website,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": ids.org },
  };
}

export function peopleLd() {
  return founders.map((f) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": ids.person(f.name),
    name: f.name,
    jobTitle: f.role.replace(/^Co-founder · /, ""),
    description: f.bio,
    image: f.photo ? abs(f.photo) : undefined,
    worksFor: { "@id": ids.org },
    knowsAbout: f.skills,
    url: abs(`/about#${f.name.toLowerCase()}`),
  }));
}

export function faqLd(faqs, path) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: abs(path),
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
  };
}

export function serviceLd({ name, description, offerings = [], path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: abs(path),
    provider: { "@id": ids.org },
    areaServed: site.areaServed,
    hasOfferCatalog: offerings.length
      ? {
          "@type": "OfferCatalog",
          name,
          itemListElement: offerings.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o.title, description: o.text } })),
        }
      : undefined,
  };
}

// Per-page metadata with canonical URL and social preview defaults
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    // A page's openGraph/twitter replace the site-wide ones, so repeat the shared fields here
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      title: `${title} | ${site.name}`,
      description,
      url: path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} | ${site.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: ["/twitter-image"],
    },
  };
}
