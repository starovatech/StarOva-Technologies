"use client";

import { useEffect } from "react";

// Always start at the top on load/reload, instead of the browser restoring the last scroll position
export default function ScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);
  return null;
}
