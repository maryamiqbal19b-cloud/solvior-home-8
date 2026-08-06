"use client";

import { useEffect, useState } from "react";
import { useReveal } from "./Reveal";

export function Counter({
  target,
  suffix = "",
  duration = 1500,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [ref, visible] = useReveal();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start: number | null = null;
    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    }
    requestAnimationFrame(step);
  }, [visible, target, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}