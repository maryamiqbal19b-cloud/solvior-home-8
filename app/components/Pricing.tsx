"use client";

import { useState } from "react";
import { PRICING } from "./data";

export function Pricing() {
  const [billing, setBilling] = useState("monthly");
  // Default open: first plan (matches demo)
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="pricing" className="py-24 px-6 md:px-10 max-w-5xl mx-auto bg-[#FAFAFA]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <div>
          <p className="flex items-center gap-2 text-[#2563EB] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            Pricing Plan
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold max-w-md leading-tight">
            Flexible pricing, powerful tangible results
          </h2>
        </div>

        <div className="inline-flex items-center bg-[#0B1B33] rounded-full p-1.5 self-start md:self-auto">
          {["monthly", "yearly"].map((b) => (
            <button
              key={b}
              onClick={() => setBilling(b)}
              className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-colors ${
                billing === b ? "bg-[#2563EB] text-white" : "text-white/60"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {PRICING.map((p, i) => {
          const isOpen = openIndex === i;
          const price = billing === "monthly" ? p.monthly : p.yearly;

          if (isOpen) {
            return (
              <div key={p.tier}>
                {/* Selected plan header - solid blue bar */}
                <button
                  onClick={() => setOpenIndex(i)}
                  className="w-full flex items-center justify-between gap-4 bg-[#2563EB] text-white px-8 py-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-[#2563EB]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-lg font-bold">{p.tier}</span>
                        <span className="bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                          Save 20%
                        </span>
                      </div>
                      <p className="text-white/75 text-sm mt-1">{p.blurb}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm align-top">$</span>
                    <span className="font-display text-4xl md:text-5xl font-bold">
                      {price}
                    </span>
                    <span className="text-white/70 text-sm">/month</span>
                  </div>
                </button>

                {/* Expanded details */}
                <div className="relative bg-[#EEF2FA] px-8 py-8 mt-3">
                  <span
                    className="absolute -top-0 right-0 bg-[#2563EB] text-white text-xs font-bold px-6 py-2"
                    style={{ clipPath: "polygon(18px 0, 100% 0, 100% 100%, 0 100%)" }}
                  >
                    Recommended
                  </span>
                  {/* fold/shadow line under the ribbon for a folded-flag effect */}
                  <span
                    className="absolute top-[34px] right-0 w-[18px] h-[8px] bg-[#0B1B33]/25"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                  />
                  <ul className="space-y-4 mb-8 max-w-lg">
                    {p.features.map((f, fi) => {
                      const isLast = fi === p.features.length - 1;
                      return (
                        <li key={f} className="flex items-start gap-3">
                          <svg
                            className={`w-4 h-4 mt-1 shrink-0 ${
                              isLast ? "text-gray-400" : "text-[#2563EB]"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span
                            className={`text-sm md:text-base ${
                              isLast ? "text-gray-400" : "text-[#0B1B33]/80"
                            }`}
                          >
                            {f}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-3 bg-[#0B1B33] text-white pl-2 pr-6 py-2 rounded-full font-semibold hover:bg-[#152a4d] transition-colors">
                      <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                      Choose package
                    </button>
                    <a
                      href="#"
                      className="text-[#0B1B33] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Price comparison
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          }

          // Collapsed row
          return (
            <button
              key={p.tier}
              onClick={() => setOpenIndex(i)}
              className="w-full flex items-center justify-between gap-4 border border-gray-200 px-8 py-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="w-7 h-7 rounded-full border-2 border-gray-300 shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg font-bold text-[#0B1B33]">
                      {p.tier}
                    </span>
                    <span className="bg-[#2563EB] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      Save 20%
                    </span>
                  </div>
                  <p className="text-[#0B1B33]/50 text-sm mt-1">{p.blurb}</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-sm align-top text-[#0B1B33]/60">$</span>
                <span className="font-display text-4xl md:text-5xl font-bold text-[#0B1B33]">
                  {price}
                </span>
                <span className="text-[#0B1B33]/50 text-sm">/month</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}