import { Rocket, Building2, CodeXml, ShoppingBag, UserRound } from "lucide-react";

const audiences = [
  { label: "Startups", icon: Rocket },
  { label: "SMEs", icon: Building2 },
  { label: "Tech", icon: CodeXml },
  { label: "Retail", icon: ShoppingBag },
  { label: "Professionals", icon: UserRound },
];

// "Built for modern businesses" strip over the black-hole image (home + services pages)
export default function AudienceStrip() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/20 bg-espresso bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: "url('/images/hero/blackhole.jpg')" }}
    >
      <div aria-hidden className="absolute inset-0 bg-espresso/25" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:px-6 md:flex-row md:justify-between">
        <p className="rounded-full border border-white/20 bg-espresso/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone backdrop-blur-md">
          Built for modern businesses
        </p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 rounded-3xl border border-white/20 bg-espresso/70 px-6 py-3 backdrop-blur-md md:rounded-full">
          {audiences.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-sm font-semibold text-white"
            >
              <Icon className="size-[18px] text-taupe" strokeWidth={1.75} aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
