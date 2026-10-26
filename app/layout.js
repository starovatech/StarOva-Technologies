import { Poppins, Doto } from "next/font/google";
import Navbar from "@/components/NavbarGlass";
import Footer from "@/components/Footer";
import Mascot from "@/components/Mascot";
import ScrollReset from "@/components/ScrollReset";
import { DialogsProvider } from "@/components/Dialogs";
import JsonLd from "@/components/JsonLd";
import { site, founders } from "@/lib/site";
import { organizationLd, websiteLd } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const doto = Doto({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-doto",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Website Design & Power BI Dashboards`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "website design for small business",
    "website development services",
    "website redesign",
    "Power BI dashboard development",
    "Power BI consultant",
    "Excel to Power BI",
    "website development",
    "web design",
    "Next.js developer",
    "logo design",
    "catalogue design",
    "data analysis",
    "Power BI dashboards",
    "business intelligence",
    "Microsoft Fabric",
    "CRM solutions",
    "digital studio India",
  ],
  authors: founders.map((f) => ({ name: f.name, url: `/about#${f.name.toLowerCase()}` })),
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "technology",
  verification: { google: "9af1-Um9UFpy4UssaTEUko1hLXk_LRrqjwAfuJDGr5U" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${doto.variable}`}>
      <body id="top" className="font-sans">
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <DialogsProvider>
          <ScrollReset />
          <Navbar />
          <main className="overflow-x-clip">{children}</main>
          <Footer />
          <Mascot />
        </DialogsProvider>
      </body>
    </html>
  );
}
