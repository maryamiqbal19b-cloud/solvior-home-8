"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How do consultants add value to a business?",
    a: "Consultants bring an outside perspective and pattern-recognition from working across many businesses. We spot the inefficiencies and blind spots that are hard to see from inside, and bring frameworks that have already been tested elsewhere.",
  },
  {
    q: "How do I know if my business needs a consultant?",
    a: "Common signals are stagnating growth, operational inefficiencies you can't pin down, a strategy that isn't translating into results, or simply not having the in-house expertise for a specific challenge.",
  },
  {
    q: "How do business consultants charge for their services?",
    a: "Pricing usually depends on scope — hourly, project-based, or retainer. We'll walk you through the structure that fits your engagement during the initial consultation.",
  },
  {
    q: "Can a business consultant guarantee results?",
    a: "No responsible consultant guarantees specific outcomes, since results depend on execution and market conditions. What we can guarantee is a clear plan, honest measurement, and hands-on support throughout.",
  },
  {
    q: "How can I measure the success of a consulting engagement?",
    a: "We set measurable KPIs at the start of every engagement — tied to your business goals — and review progress against them at regular checkpoints, not just at the end.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-4">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`border border-gray-300 px-6 transition-colors duration-300 ${isOpen ? "bg-[#F7F9FC]" : "bg-white"}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg font-bold text-[#0B1B33]">{item.q}</span>
              <span
                className={`w-8 h-8 rounded-full border border-[#0B1B33]/15 flex items-center justify-center shrink-0 text-xl font-bold transition-colors duration-300 ${
                  isOpen ? "bg-[#2563EB] border-[#2563EB] text-white" : "text-[#0B1B33]"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-40" : "max-h-0"}`}>
              <p className="text-[#0B1B33]/60 leading-relaxed pb-6 pr-10">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
