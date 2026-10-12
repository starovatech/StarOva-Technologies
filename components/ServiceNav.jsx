"use client";

import { CodeXml, LayoutDashboard, Users } from "lucide-react";
import { useActiveService } from "@/components/useActiveService";

// Icons can't be passed in from the server page, so pick them by section id
const icons = { web: CodeXml, data: LayoutDashboard, crm: Users };

// Sticky menu for the services page: switches which service area is shown
export default function ServiceNav({ items }) {
  const active = useActiveService(items.map(({ id }) => id));

  return (
    <nav aria-label="Service areas" className="sticky top-24 z-40 mx-auto mt-6 flex max-w-6xl justify-center px-4 sm:px-6">
      <ul className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-stone/40 bg-white/95 p-1.5 shadow-[0_10px_30px_-12px_rgba(41,28,14,0.35)] [scrollbar-width:none]">
        {items.map(({ id, label, short }) => {
          const current = active === id;
          const Icon = icons[id] ?? CodeXml;
          return (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                aria-current={current ? "true" : undefined}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors sm:px-4 sm:text-sm ${
                  current ? "bg-espresso text-cream shadow-sm" : "text-espresso/75 hover:bg-white/70 hover:text-espresso"
                }`}
              >
                <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                <span className="sm:hidden">{short ?? label}</span>
                <span className="hidden sm:inline">{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
