"use client";

import { motion } from "framer-motion";
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
          className="group relative overflow-hidden rounded-none bg-[#0B1B33]"
        >
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-display text-xl font-bold text-white mb-3">
              {p.title}
            </h3>
            <div className="flex gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-wider bg-black/40 backdrop-blur-md border border-white/10 text-white font-semibold px-3 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
