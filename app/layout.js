import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "starOva Technologies",
    template: "%s | starOva Technologies",
  },
  description:
    "starOva Technologies builds thoughtful digital products, websites, data experiences and technology solutions for modern businesses.",
  keywords: [
    "starOva",
    "starOva Technologies",
    "web development",
    "digital solutions",
    "data analytics",
    "business technology",
  ],
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
