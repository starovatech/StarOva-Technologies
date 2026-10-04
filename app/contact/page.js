import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-[#6e473b]/15">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#6e473b]">Contact</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[.98] tracking-[-.055em] sm:text-7xl">
            Tell us what you&apos;re
            <br />
            <span className="text-[#6e473b]">building.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6e473b]/75">
            A website, a data problem, a new digital product or an idea that is
            still taking shape — start with a message.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-10">
        <div className="space-y-4">
          {[
            [Mail, "Email", "starovatech@gmail.com", "mailto:starovatech@gmail.com"],
            [Phone, "Phone", "+91 99600 45758", "tel:+919960045758"],
            [MapPin, "Location", "India", "#"],
          ].map(([Icon, label, value, href]) => (
            <a key={label} href={href} className="block rounded-2xl border border-[#6e473b]/15 bg-[#beb5a9]/20 p-5 transition hover:bg-[#beb5a9]/35">
              <Icon size={18} className="text-[#6e473b]" strokeWidth={1.6} />
              <p className="mt-6 text-xs font-bold uppercase tracking-[.16em] text-[#6e473b]/60">{label}</p>
              <p className="mt-2 text-sm font-semibold">{value}</p>
            </a>
          ))}
        </div>

        <div className="rounded-[2rem] border border-[#6e473b]/20 bg-[#e1d4c2] p-7 sm:p-10">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#6e473b]">Start a project</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-.04em]">What can we help you build?</h2>
            </div>
            <span className="text-xs text-[#6e473b]/45">01 / 01</span>
          </div>

          <form className="mt-10 space-y-6" action="https://formsubmit.co/starovatech@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New project enquiry — starOva Technologies" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-xs font-semibold text-[#6e473b]">
                Name
                <input name="name" required className="mt-2 w-full border-b border-[#6e473b]/25 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#6e473b]/35 focus:border-[#291c0e]" placeholder="Your name" />
              </label>
              <label className="text-xs font-semibold text-[#6e473b]">
                Email
                <input type="email" name="email" required className="mt-2 w-full border-b border-[#6e473b]/25 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#6e473b]/35 focus:border-[#291c0e]" placeholder="you@example.com" />
              </label>
            </div>
            <label className="block text-xs font-semibold text-[#6e473b]">
              What do you need?
              <select name="service" className="mt-2 w-full border-b border-[#6e473b]/25 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#291c0e]">
                <option>Website development</option>
                <option>Brand & identity</option>
                <option>Data analytics</option>
                <option>Business intelligence</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="block text-xs font-semibold text-[#6e473b]">
              Message
              <textarea name="message" required rows={5} className="mt-2 w-full resize-none border-b border-[#6e473b]/25 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#6e473b]/35 focus:border-[#291c0e]" placeholder="Tell us a little about the project..." />
            </label>
            <button className="group inline-flex items-center gap-3 rounded-full bg-[#291c0e] px-6 py-3.5 text-sm font-semibold text-[#e1d4c2] transition hover:bg-[#6e473b]" type="submit">
              Send enquiry
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
