"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "../components/data";

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
        >
          <Link
            href={`/portfolios/${p.slug}`}
            className="group relative block overflow-hidden rounded-none bg-[#0B1B33]"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-64 object-contain bg-[#0B1B33] transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-xl font-bold text-white">
                  {p.title}
                </h3>
                {/* Arrow beside the title, animates in on hover */}
                <span className="w-10 h-10 shrink-0 rounded-full bg-white flex items-center justify-center opacity-0 -translate-x-2 -rotate-45 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-4 h-4 text-[#0B1B33]"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
              <div className="flex gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider bg-black/40 backdrop-blur-md border border-white/10 text-white font-semibold px-3 py-1.5 rounded-full transition-all duration-300 group-hover:bg-[#2563EB] group-hover:border-[#2563EB]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
