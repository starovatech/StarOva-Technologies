"use client";

import { Children } from "react";
import { useActiveService } from "@/components/useActiveService";

// Shows one service area at a time; `children` are the areas, in the same order as `ids`
export default function ServiceTabs({ ids, children }) {
  const active = useActiveService(ids);
  return Children.toArray(children).map((child, i) => (
    <div
      key={ids[i]}
      hidden={active !== ids[i]}
      className="animate-[fadeUp_0.5s_ease-out] motion-reduce:animate-none"
    >
      {child}
    </div>
  ));
}
