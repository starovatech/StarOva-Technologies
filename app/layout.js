import { Poppins, Doto } from "next/font/google";
import Navbar from "@/components/NavbarGlass";
import Footer from "@/components/Footer";
import Mascot from "@/components/Mascot";
import ScrollReset from "@/components/ScrollReset";
import { DialogsProvider } from "@/components/Dialogs";
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
  title: {
    default: "StarOva Technologies | Web, Design & Data",
    template: "%s | StarOva Technologies",
  },
  description:
    "StarOva Technologies builds modern websites, brand identities, data analysis and interactive dashboards for growing businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${doto.variable}`}>
      <body id="top" className="font-sans">
        <DialogsProvider>
          <ScrollReset />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Mascot />
        </DialogsProvider>
      </body>
    </html>
  );
}
