"use client";

import { useState, useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible] as const;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`flex items-center justify-center gap-2 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 ${
        dark ? "text-[#93C5FD]" : "text-[#2563EB]"
      }`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {children}
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
    </p>
  );
}