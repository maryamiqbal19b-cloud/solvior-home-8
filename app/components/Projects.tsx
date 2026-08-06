"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { PROJECTS } from "./data";

export function Projects() {
  const [active, setActive] = useState(0);

  // Auto-play — moves forward by exactly 1, no skipping
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 md:px-10 bg-[#0B1B33] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="flex items-center justify-center gap-2 text-[#3B82F6] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              Our Case Studies
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
              Explore our outstanding client projects
            </h2>
          </div>
        </Reveal>

        {/* Single-card viewport - no side gaps, no blank space, no jumping */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {PROJECTS.map((proj) => (
              <div key={proj.title} className="w-full shrink-0 relative">
              <img
               src={proj.img}
               alt={proj.title}
               className="w-full h-72 md:h-96 object-contain bg-[#16294A] border-8 border-white/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-3 flex-wrap">
                  <h3 className="font-display text-lg md:text-xl font-bold text-white">
                    {proj.title}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider bg-[#2563EB] text-white font-semibold px-3 py-1.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot navigation - matches exact number of projects */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to project ${i + 1}`}
              onClick={() => setActive(i)}
              className="transition-all duration-300"
            >
              {i === active ? (
                <span
                  className="block w-4 h-4 bg-[#3B82F6] border-2 border-[#3B82F6]"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />
              ) : (
                <span className="block w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-colors" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}