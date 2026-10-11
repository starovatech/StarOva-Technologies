import Eyebrow from "@/components/Eyebrow";

export default function PageHeader({ eyebrow, title, accent, children }) {
  return (
    <section className="relative overflow-hidden border-b border-stone/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-cream/70 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-36 sm:px-6 lg:pb-16 lg:pt-40">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-espresso sm:text-6xl">
          {title} <span className="text-cocoa">{accent}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-cocoa/80">
          {children}
        </p>
      </div>
    </section>
  );
}
