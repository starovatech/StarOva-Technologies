export default function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        dark ? "text-taupe" : "text-cocoa"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${dark ? "bg-taupe" : "bg-cocoa"}`}
      />
      {children}
    </p>
  );
}
