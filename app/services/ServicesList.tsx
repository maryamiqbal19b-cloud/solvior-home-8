"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const SERVICES_FULL = [
  {
    n: "01",
    title: "Business Process Optimization",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  },
  {
    n: "02",
    title: "Strategic Planning & Execution",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
  {
    n: "03",
    title: "Leadership Executive Coaching",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  },
  {
    n: "04",
    title: "Legacy Leadership Institute",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
  },
  {
    n: "05",
    title: "Executive Growth Solutions",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
  },
  {
    n: "06",
    title: "Empowered Leadership Journey",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1200&q=80",
  },
];

export function ServicesList() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Left: interactive numbered list */}
      <div className="divide-y divide-[#0B1B33]/10 border-t border-b border-[#0B1B33]/10">
        {SERVICES_FULL.map((s, i) => (
          <Link
            key={s.n}
            href="/contact"
            onMouseEnter={() => setActive(i)}
            className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto] gap-4 items-center py-7 px-2 md:px-4 transition-colors duration-300 hover:bg-[#F7F9FC]"
          >
            <span
              className={`font-display text-2xl font-semibold transition-colors duration-300 ${
                active === i ? "text-[#2563EB]" : "text-[#0B1B33]/30"
              }`}
            >
              {s.n}
            </span>
            <div>
              <h3
                className={`font-display text-lg md:text-xl font-bold transition-colors duration-300 ${
                  active === i ? "text-[#2563EB]" : "text-[#0B1B33]"
                }`}
              >
                {s.title}
              </h3>
              <p className="hidden md:block text-[#0B1B33]/50 text-sm mt-1 max-w-md">
                {s.copy}
              </p>
            </div>
            <span
              className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                active === i
                  ? "bg-[#2563EB] border-[#2563EB] -rotate-0"
                  : "border-[#0B1B33]/15 group-hover:border-[#2563EB]"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className={`w-4 h-4 transition-colors duration-300 ${
                  active === i ? "text-white" : "text-[#0B1B33]"
                }`}
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* Right: image panel that cross-fades with the active service (desktop only) */}
      <div className="hidden md:block sticky top-32 h-[520px] rounded-2xl overflow-hidden bg-[#0B1B33]">
        <AnimatePresence mode="wait">
          <motion.img
            key={SERVICES_FULL[active].image}
            src={SERVICES_FULL[active].image}
            alt={SERVICES_FULL[active].title}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/70 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <span className="font-display text-4xl font-bold text-white/30">
            {SERVICES_FULL[active].n}
          </span>
          <h4 className="font-display text-2xl font-bold mt-1">{SERVICES_FULL[active].title}</h4>
        </div>
      </div>
    </div>
  );
}
