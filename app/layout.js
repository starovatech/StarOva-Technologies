import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "starOva | A Connection Between Technology and Business",
    template: "%s | WEBNEXA"
  },
  description:
    "starOva technologies builds modern websites, web applications and digital experiences that connect technology with business.",
  keywords: [
    "starOva",
    "web development",
    "website design",
    "Next.js development",
    "business websites",
    "web applications",
    "digital solutions",
    "Bi developer",
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}