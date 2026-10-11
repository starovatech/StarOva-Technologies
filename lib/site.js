import {
  CodeXml,
  PenTool,
  Database,
  ChartLine,
  LayoutDashboard,
  Workflow,
} from "lucide-react";

export const contact = {
  email: "starovatech@gmail.com",
  phone: "+91 99600 45758",
  phoneHref: "tel:+919960045758",
  whatsapp:
    "https://wa.me/919960045758?text=Hi%20StarOva%2C%20I%20would%20like%20to%20discuss%20a%20project.",
};

export const services = [
  {
    title: "Website Development",
    text: "Modern, responsive and performance-focused websites that represent your business professionally and give customers a smooth experience.",
    icon: CodeXml,
  },
  {
    title: "Logo & Brand Identity",
    text: "Clean, memorable visual identities that give your business a consistent and recognisable presence across every platform.",
    icon: PenTool,
  },
  {
    title: "Data Cleaning",
    text: "We organise, clean and structure messy datasets so your information becomes reliable, usable and ready for analysis.",
    icon: Database,
  },
  {
    title: "Data Analysis",
    text: "We turn raw business data into meaningful insights, patterns and trends that support smarter decisions.",
    icon: ChartLine,
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
];

export const process = [
  ["01", "Understand", "We learn about your business, your audience and what you want to achieve."],
  ["02", "Create", "We turn the idea into a clear structure, visual direction and working solution."],
  ["03", "Refine", "We test, improve and polish the details that make the result feel considered."],
  ["04", "Launch", "We deliver something ready for the real world, and stay around to support it."],
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
