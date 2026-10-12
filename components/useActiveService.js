"use client";

import { useEffect, useState } from "react";

// Which service area is showing on the services page. Kept in the URL hash (#web, #data, #crm)
// so every link to an area just uses href="#id", and back/forward and shared links work.
export function useActiveService(ids) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(",");

  useEffect(() => {
    const read = (scroll) => {
      const id = window.location.hash.slice(1);
      if (!ids.includes(id)) return;
      setActive(id);
      // wait for the area to be shown before scrolling to it
      if (scroll) {
        requestAnimationFrame(() =>
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
        );
      }
    };
    read(Boolean(window.location.hash));
    const onChange = () => read(true);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}
