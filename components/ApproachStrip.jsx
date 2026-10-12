import ApproachSlider from "@/components/ApproachSlider";

// "Our approach" slider strip over the black-hole image (home + services pages)
export default function ApproachStrip() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/20 bg-espresso bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: "url('/images/hero/blackhole.jpg')" }}
    >
      <div aria-hidden className="absolute inset-0 bg-espresso/25" />
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <ApproachSlider />
      </div>
    </section>
  );
}
