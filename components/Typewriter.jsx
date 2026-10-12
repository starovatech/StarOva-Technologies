"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 70;
const DELETE_MS = 40;
const HOLD_MS = 1600;

// Types each word, holds, deletes it, then moves on to the next (loops).
// Colour: pass `className` (cursor follows the text colour), or `text` + `caret`
// for separate text and cursor colours, e.g. text="text-taupe" caret="bg-taupe".
export default function Typewriter({ words, className, text, caret = "bg-current" }) {
  const textClass = className ?? text ?? "text-cocoa";
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const word = words[wordIndex];

  useEffect(() => {
    if (still) return;
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && length === word.length) delay = HOLD_MS;

    const timer = setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true);
      else if (deleting && length === 0) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else setLength((l) => l + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [length, deleting, word, words.length, still]);

  return (
    <span className={textClass}>
      {/* Screen readers get the full list once instead of the animation */}
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden>
        {still ? words[0] : word.slice(0, length)}
        <span className={`ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-pulse ${caret}`} />
      </span>
    </span>
  );
}
