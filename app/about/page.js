import { Compass, Lightbulb, Gem, TrendingUp } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Eyebrow from "@/components/Eyebrow";
import CallToAction from "@/components/CallToAction";
import { process } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "StarOva Technologies is a digital studio bringing design, development, branding and data together for growing businesses.",
};

const values = [
  ["Clarity", "Good technology should be easy to understand, navigate and use.", Compass],
  ["Creativity", "We avoid generic solutions and give every project its own personality.", Lightbulb],
  ["Quality", "From the smallest detail to the overall experience, we do things properly.", Gem],
  ["Growth", "We build foundations that can evolve as your business grows.", TrendingUp],
];

const differences = [
  "Design + Development",
  "Web + Data",
  "Creative + Analytical",
  "Business + Technology",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About StarOva"
        title="We build digital experiences"
        accent="that matter."
      >
        StarOva Technologies is a digital studio focused on thoughtful
        websites, brands, data experiences and practical business solutions.
      </PageHeader>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <Eyebrow>Our story</Eyebrow>
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-espresso sm:text-4xl">
              Businesses shouldn&apos;t have to choose between technology that
              looks good and technology that{" "}
              <span className="text-cocoa">actually works.</span>
            </h2>
            <div className="mt-8 grid gap-6 leading-7 text-cocoa/80 sm:grid-cols-2">
              <p>
                A website should communicate clearly. A brand should be
                recognisable. Data shouldn&apos;t sit inside confusing
                spreadsheets without telling you anything useful.
              </p>
              <p>
                That&apos;s where StarOva comes in. We bring design,
                development, branding and data together to create solutions
                around the real needs of a business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-espresso text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <Eyebrow dark>What matters to us</Eyebrow>
          <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Built around <span className="text-taupe">better work.</span>
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-cream/15 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, text, Icon]) => (
              <li key={title} className="bg-espresso p-7 sm:p-8">
                <Icon className="size-6 text-taupe" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-12 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-cream/60">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
              From idea <span className="text-cocoa">to impact.</span>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-cocoa/80">
              We don&apos;t just ask how something should look. We ask why it
              exists, who it&apos;s for and what it should achieve.
            </p>
          </div>
          <ol className="space-y-6">
            {process.map(([num, title, text]) => (
              <li key={num} className="flex gap-5 border-t border-stone/50 pt-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-cream text-xs font-semibold text-cocoa">
                  {num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-espresso">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-cocoa/75">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Difference */}
      <section className="border-y border-stone/40 bg-cream/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <Eyebrow>Why StarOva Technologies</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-espresso sm:text-4xl">
            More than just <span className="text-cocoa">another digital agency.</span>
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {differences.map((item, i) => (
              <li
                key={item}
                className="rounded-2xl border border-stone/60 bg-white p-6"
              >
                <span className="text-xs font-semibold text-taupe">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-6 font-semibold text-espresso">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction
        eyebrow="Let's build something"
        title="Your next digital chapter starts here."
        text="Whether you need a website, a stronger brand or better insights from your data, let's talk about what you want to build."
      />
    </>
  );
}
