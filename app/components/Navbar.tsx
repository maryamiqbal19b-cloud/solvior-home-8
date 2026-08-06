"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1B33]/95 backdrop-blur shadow-sm" : "bg-[#0B1B33]"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
              <path d="M12 2 L18 8 L12 14 L6 8 Z" fill="white" />
            </svg>
          </span>
          <span className="text-white text-2xl font-bold tracking-tight">
            Sol<span className="italic font-normal">vior</span>
          </span>
        </a>

        <button className="flex items-center gap-2 text-white font-medium text-sm hover:opacity-80 transition-opacity">
          Menu
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" />
          </svg>
        </button>
      </nav>
    </header>
  );
}