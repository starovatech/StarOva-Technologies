import { SITE_URL } from "@/lib/config";
import {
  CodeXml,
  PenTool,
  Database,
  ChartLine,
  LayoutDashboard,
  Workflow,
  Handshake,
  BookOpenText,
} from "lucide-react";

// Site-wide details used for SEO, structured data and /llms.txt.
// The domain comes from lib/config.js (set NEXT_PUBLIC_SITE_URL before launch).
export const site = {
  name: "StarOva Technologies",
  shortName: "StarOva",
  url: SITE_URL,
  tagline: "Web, Design & Data",
  description:
    "StarOva Technologies is an India-based digital studio that designs fast, modern websites and builds Power BI dashboards for businesses in the US, UK and worldwide, plus data analysis, BI, CRM, logo and catalogue design.",
  country: "IN",
  locale: "en_IN",
  areaServed: "Worldwide",
};

export const contact = {
  email: "starovatech@gmail.com",
  phone: "+91 99600 45758",
  phoneHref: "tel:+919960045758",
  whatsappNumber: "+91 81082 04158",
  whatsapp:
    "https://wa.me/918108204158?text=Hi%20StarOva%2C%20I%20would%20like%20to%20discuss%20a%20project.",
};

export const services = [
  {
    title: "Website Development",
    text: "Modern, responsive and performance-focused websites that represent your business professionally and give customers a smooth experience.",
    icon: CodeXml,
  },
  {
    title: "Data Analysis",
    text: "We turn raw business data into meaningful insights, patterns and trends that support smarter decisions.",
    icon: ChartLine,
  },
  {
    title: "Data Cleaning",
    text: "We organise, clean and structure messy datasets so your information becomes reliable, usable and ready for analysis.",
    icon: Database,
  },
  {
    title: "Interactive Dashboards",
    text: "Clear, interactive dashboards that bring your KPIs, metrics and business insights together in one place.",
    icon: LayoutDashboard,
  },
  {
    title: "BI Development & Architecture",
    text: "Reporting systems and business intelligence foundations designed to scale with your data and your team.",
    icon: Workflow,
  },
  {
    title: "Logo & Brand Identity",
    text: "Clean, memorable visual identities that give your business a consistent and recognisable presence across every platform.",
    icon: PenTool,
  },
  {
    title: "Catalogue Design",
    text: "Professional product catalogues, digital and print-ready, that showcase your range clearly and help customers choose.",
    icon: BookOpenText,
  },
  {
    title: "CRM Solutions",
    text: "Customer relationship systems set up around how you sell, so leads, clients and follow-ups stay organised in one place.",
    icon: Handshake,
  },
];

// [number, step, description, shorter description for small screens]
export const process = [
  ["01", "Consult", "We sit down with you to understand your business, your goals, your audience and exactly what you need from the project.", "We learn your goals, audience and requirements."],
  ["02", "Research", "We gather the information, content and data that matter, and study your market to build on solid ground.", "We gather the content and data that matter."],
  ["03", "Strategise", "We define the scope, structure, milestones and timelines, so you know exactly what happens and when.", "We set the scope, milestones and timelines."],
  ["04", "Execute", "We design and build to the agreed plan, sharing progress at every stage so there are no surprises along the way.", "We build to plan and keep you updated."],
  ["05", "Testing", "We test every page, feature and detail across devices, browsers and real scenarios before anything goes live.", "We test every detail before going live."],
  ["06", "Handover", "We hand over everything you need, show you how it all works, and stay on hand to support you long after launch.", "We hand it all over and support you after launch."],
];

// Drop a screenshot at the `image` path (e.g. public/images/projects/websites.jpg)
// and set it here; cards without an image show generated artwork instead.
// `tint` is the colour the image fades into — pick one that matches the screenshot.
export const projects = [
  {
    title: "Websites",
    category: "Web",
    text: "Modern, responsive websites that represent your business and turn visitors into customers.",
    tags: ["Next.js", "UI/UX"],
    tint: "#7a2e2e",
    image: "/images/projects/syntrad-website.webp",
    imageHref: "https://www.syntradltd.co.uk/",
    url: null,
  },
  {
    title: "Dashboards",
    category: "Data",
    text: "A Procure-to-Pay dashboard bringing purchasing, invoices and payments together in one clear view.",
    tags: ["Analytics", "KPIs"],
    tint: "#3b4a4f",
    image: "/images/projects/powerbi-dashboard.webp",
    imageHref:
      "https://app.powerbi.com/view?r=eyJrIjoiOWM0ZTE2NTAtMzA1OS00NzQyLTliNWUtZTY5ODgzMmY3Y2ZjIiwidCI6IjQ0MmJjNjc0LWRjZjQtNGZiYi1hZDBlLTBkYmE2NWYwNmQ5MyJ9",
    url: null,
  },
  {
    title: "Catalogues",
    category: "Design",
    text: "Professional product catalogues, digital and print-ready, that showcase your range clearly.",
    tags: ["Print", "Digital"],
    tint: "#4a2a33",
    image: "/images/projects/catalogues.svg",
    url: null,
  },
];

// The two owners shown on the About page.
// Replace `name` (and any text), and set `photo` to e.g. "/images/profile/owner-1.jpg"
// once a square photo is added to public/images/profile/.
export const founders = [
  {
    name: "Huda",
    role: "Co-founder · Website Developer",
    titles: ["Website Developer", "Logo Designer", "Catalogue Creator"],
    bio: "Builds the websites, logos and catalogues that give businesses a sharp, recognisable presence, from the first sketch to launch.",
    highlights: [
      { label: "Websites", icon: CodeXml },
      { label: "Logos", icon: PenTool },
      { label: "Catalogues", icon: BookOpenText },
      { label: "UI / UX", icon: LayoutDashboard },
    ],
    philosophy: "Design should feel effortless. Every page, logo and catalogue should be clear first and beautiful second, so customers instantly understand what a business offers.",
    mission: "To give every business a polished, responsive website and a brand people remember, built to grow with them.",
    skills: ["Website Development", "Next.js", "React", "AWS", "DevOps", "Logo Design", "Catalogues", "UI / UX"],
    focus: "web",
    photo: "/images/profile/owner-1.webp",
  },
  {
    name: "Adnan",
    role: "Co-founder · Data Analyst",
    titles: ["Data Analyst", "Dashboard Builder", "BI Developer"],
    bio: "Turns raw business data into clear answers: cleaning and analysing it, then building dashboards that show what matters at a glance.",
    highlights: [
      { label: "Analysis", icon: ChartLine },
      { label: "Data cleaning", icon: Database },
      { label: "Dashboards", icon: LayoutDashboard },
      { label: "BI", icon: Workflow },
    ],
    philosophy: "Good data should answer questions, not create more. Clean it first, keep it simple, and show only what helps people decide.",
    mission: "To turn every business's scattered numbers into dashboards and insights they can trust and act on every day.",
    skills: ["Data Analysis", "Data Engineering", "Power BI", "Microsoft Fabric", "SQL", "Python", "Excel", "BI Architecture"],
    focus: "data",
    photo: "/images/profile/owner-2.webp",
  },
];

// Home page FAQ (also published as FAQPage structured data)
export const homeFaqs = [
  [
    "What does StarOva build?",
    "Business websites, landing pages, portfolios, web applications, brand identities, catalogues, data analysis and interactive dashboards.",
  ],
  [
    "Can you redesign an existing website?",
    "Yes. We can redesign the visual system, improve responsiveness, restructure pages and modernise the overall experience while keeping what already works.",
  ],
  [
    "Can you build a dashboard from the data we already have?",
    "Yes. We work with data in Excel, Google Sheets, databases or the tools you already use. We clean and organise it first, then build interactive dashboards, for example in Power BI, that bring your key numbers into one place and update as your data changes.",
  ],
  [
    "How long does a project take?",
    "It depends on the scope. A landing page is quicker than a full website or a dashboard built on several data sources. After our first conversation we agree a clear timeline with milestones, so you always know what happens and when.",
  ],
  [
    "Can you maintain the website after launch?",
    "Yes. We help with updates, content changes, performance improvements, bug fixes and new features.",
  ],
];
