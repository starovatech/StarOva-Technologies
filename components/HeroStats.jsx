import { Star } from "lucide-react";

const glass =
  "rounded-xl border border-white/25 bg-white/[0.06] px-3 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] backdrop-blur-md";

function Pointer({ className }) {
  return (
    <svg viewBox="0 0 10 10" className={`size-2.5 text-taupe ${className}`} aria-hidden>
      <polygon points="0,0 10,0 5,8" fill="currentColor" />
    </svg>
  );
}

function Value({ children, unit, big = false }) {
  return (
    <p className="mt-1 flex flex-wrap items-baseline gap-x-1 gap-y-0.5">
      <span
        className={`font-dot font-bold leading-none tracking-wide ${big ? "text-3xl" : "text-2xl"}`}
      >
        {children}
      </span>
      {unit && <span className="text-xs font-medium text-white/80">{unit}</span>}
    </p>
  );
}

export default function HeroStats({ className = "" }) {
  return (
    <div className={`grid-cols-4 gap-2.5 ${className}`}>
      {/* Client satisfaction (wide) */}
      <div className={`${glass} col-span-4 flex py-2.5 w-[70%] items-center justify-between justify-self-end`}>
        <div>
          <p className="text-[13px] font-semibold">Client Satisfaction</p>
          <Value unit="happy clients" big>100%</Value>
          <p className="mt-1.5 text-[11px] font-medium text-white/75">
            Every project, every client
          </p>
        </div>
        <div className="flex items-center gap-2 pr-1" aria-hidden>
          <div className="flex flex-col items-center gap-[2px]">
            {Array.from({ length: 9 }, (_, i) => {
              const d = Math.abs(i - 4);
              return (
                <span
                  key={i}
                  className="h-px bg-white"
                  style={{ width: `${40 - d * 6}px`, opacity: 1 - d * 0.18 }}
                />
              );
            })}
          </div>
          <Pointer className="rotate-90" />
        </div>
      </div>

      {/* Reviews */}
      <div className={`${glass} py-2`}>
        <p className="text-[13px] font-semibold">5-Star Reviews</p>
        <Value unit="/ 5">5.0</Value>
        <div className="mt-1.5 flex gap-0.5" aria-label="Rated 5 out of 5">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="size-3 fill-taupe text-taupe" aria-hidden />
          ))}
        </div>
      </div>

      {/* UI / UX */}
      <div className={`${glass} py-2`}>
        <p className="text-[13px] font-semibold">Modern UI/UX</p>
        <Value unit="responsive">100%</Value>
        <div className="relative mt-2 h-px bg-white/40" aria-hidden>
          <Pointer className="absolute -top-2.5 right-0" />
        </div>
        <div className="mt-1 flex justify-between text-[10px] font-medium text-white/75">
          <span>Mobile</span>
          <span>Desktop</span>
        </div>
      </div>

      {/* Data warehouse */}
      <div className={`${glass} py-2`}>
        <p className="text-[13px] font-semibold">Data Warehouse</p>
        <Value unit="insights">24/7</Value>
        <div className="mt-1.5 flex items-end gap-[3px]" aria-hidden>
          {Array.from({ length: 18 }, (_, i) => (
            <span
              key={i}
              className={`w-px ${i === 14 ? "h-3.5 bg-white" : "h-2.5 bg-white/35"}`}
            />
          ))}
        </div>
        <p className="mt-1 text-[10px] font-medium text-white/75">
          BI-ready pipelines
        </p>
      </div>

      {/* Projects */}
      <div className={`${glass} py-2`}>
        <p className="text-[13px] font-semibold">Projects</p>
        <Value unit="delivered">10+</Value>
        <p className="mt-1.5 text-[11px] font-medium text-white/75">
          And counting
        </p>
      </div>
    </div>
  );
}
