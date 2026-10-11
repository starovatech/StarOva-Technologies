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
    title: "CRM Solutions",
    text: "Customer relationship systems set up around how you sell, so leads, clients and follow-ups stay organised in one place.",
    icon: Handshake,
  },
  {
    title: "Catalogue Design",
    text: "Professional product catalogues, digital and print-ready, that showcase your range clearly and help customers choose.",
    icon: BookOpenText,
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
    text: "Interactive dashboards that bring your KPIs and business insights together in one place.",
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
