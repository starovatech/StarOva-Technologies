// The live domain. Set NEXT_PUBLIC_SITE_URL in your hosting settings (e.g. Vercel → Environment Variables),
// or change the fallback below, before launch. Used for canonical URLs, the sitemap and structured data.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://starovatech.in").replace(/\/+$/, "");
