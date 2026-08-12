"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES_FULL } from "./data";
import { ServiceIcon } from "./ServiceIcon";

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {SERVICES_FULL.map((s, i) => (
        <motion.div
          key={s.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
        >
          <Link
            href={`/services/${s.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-[#0B1B33]/10 p-8 h-full"
          >
            {/* Background image, hidden until hover */}
            <img
              src={s.image}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-[#0B1B33]/0 transition-colors duration-500 group-hover:bg-[#0B1B33]/75" />

            {/* Content */}
            <div className="relative z-10">
              <span className="inline-flex w-16 h-16 rounded-full bg-[#EEF2FA] items-center justify-center mb-6 text-[#2563EB] transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                <ServiceIcon icon={s.icon} />
              </span>

              <span className="block font-display text-sm text-[#0B1B33]/40 mb-2 transition-colors duration-500 group-hover:text-white/50">
                {s.n}
              </span>

              <h3 className="font-display text-xl font-bold text-[#0B1B33] mb-3 transition-colors duration-500 group-hover:text-white">
                {s.title}
              </h3>

              <p className="text-[#0B1B33]/55 text-sm leading-relaxed mb-6 transition-colors duration-500 group-hover:text-white/75">
                {s.copy}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1B33] transition-colors duration-500 group-hover:text-white">
                Get optimization
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
