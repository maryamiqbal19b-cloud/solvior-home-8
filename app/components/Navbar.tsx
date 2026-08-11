"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, MOBILE_NAV } from "./data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false; // in-page anchors don't own a route
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1B33]/95 backdrop-blur shadow-sm" : "bg-[#0B1B33]"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
              <path d="M12 2 L18 8 L12 14 L6 8 Z" fill="white" />
            </svg>
          </span>
          <span className="text-white text-2xl font-bold tracking-tight">
            Sol<span className="italic font-normal">vior</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#2563EB] hover:bg-[#1E40AF] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Free consultation
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex md:hidden items-center gap-2 text-white font-medium text-sm hover:opacity-80 transition-opacity"
        >
          {open ? "Close" : "Menu"}
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
              <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" />
              <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" />
              <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile full-screen menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-[#0B1B33] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto px-6 py-6">
          {/* Header row: logo + close */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                  <path d="M12 2 L18 8 L12 14 L6 8 Z" fill="white" />
                </svg>
              </span>
              <span className="text-white text-2xl font-bold tracking-tight">
                Sol<span className="italic font-normal">vior</span>
              </span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search bar (visual) */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-[#16294A] rounded-full px-5 py-3 mb-6"
          >
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent outline-none flex-1 text-white placeholder-white/40 text-sm"
            />
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/50" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
          </form>

          {/* Nav links */}
          <nav className="flex flex-col mb-8">
            {MOBILE_NAV.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`py-3.5 text-lg font-semibold border-b border-white/10 transition-colors ${
                      isActive(item.href) ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = expanded === item.label;
              return (
                <div key={item.label} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between py-3.5 text-lg font-semibold text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`py-2.5 pl-4 text-base transition-colors ${
                            isActive(child.href) ? "text-white" : "text-white/60 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Contact info */}
          <div className="mb-8">
            <h3 className="text-white font-display text-xl font-bold mb-4">Contact info</h3>
            <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
              <div className="py-3">
                <p className="text-white/40 text-xs mb-1">Email</p>
                <a href="mailto:support@solvior.com" className="text-white font-semibold text-sm hover:text-[#60A5FA] transition-colors">
                  support@solvior.com
                </a>
              </div>
              <div className="py-3">
                <p className="text-white/40 text-xs mb-1">Phone</p>
                <a href="tel:+10095447818" className="text-white font-semibold text-sm hover:text-[#60A5FA] transition-colors">
                  +1 (009) 544-7818
                </a>
              </div>
              <div className="py-3">
                <p className="text-white/40 text-xs mb-1">Location</p>
                <p className="text-white font-semibold text-sm">West Rond, MT, USA</p>
              </div>
            </div>
          </div>

          {/* Follow us */}
          <div>
            <h4 className="text-white font-bold mb-3">Follow Us:</h4>
            <div className="flex gap-3">
              {["f", "ig", "tw", "in"].map((s) => (
                <span
                  key={s}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2563EB] flex items-center justify-center text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
