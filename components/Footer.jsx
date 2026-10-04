import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#6e473b]/15 bg-[#beb5a9]/25">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <Image src="/images/logo/starOva.png" alt="starOva Technologies" width={230} height={130} className="w-[190px]" />
            <p className="mt-6 max-w-md text-sm leading-7 text-[#6e473b]/70">
              Building thoughtful digital experiences through technology,
              design and data.
            </p>
            <div className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-[#6e473b]/65">
              <span>Technology</span><span>×</span><span>Business</span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6e473b]/55">Explore</p>
              <div className="mt-5 flex flex-col gap-3 text-sm font-semibold">
                <Link href="/about" className="hover:text-[#6e473b]">About</Link>
                <Link href="/solutions" className="hover:text-[#6e473b]">Solutions</Link>
                <Link href="/contact" className="hover:text-[#6e473b]">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6e473b]/55">Contact</p>
              <div className="mt-5 flex flex-col gap-3 text-sm font-semibold">
                <a href="mailto:starovatech@gmail.com" className="hover:text-[#6e473b]">starovatech@gmail.com</a>
                <a href="tel:+919960045758" className="hover:text-[#6e473b]">+91 99600 45758</a>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#6e473b]">Start a project <ArrowUpRight size={14} /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-[#6e473b]/15 pt-6 text-xs text-[#6e473b]/55 sm:flex-row">
          <span>© {new Date().getFullYear()} starOva Technologies. All rights reserved.</span>
          <span>Made with purpose.</span>
        </div>
      </div>
    </footer>
  );
}
