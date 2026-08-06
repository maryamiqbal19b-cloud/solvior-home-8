"use client";

import { Eyebrow } from "./Reveal";
import { TESTIMONIALS } from "./data";

const NEW_AVATARS = [
  "/h1-test-1.webp",
  "/h1-test-2.webp",
  "/h3-test-3.png",
  "/h3-test-4.png",
  "/h6-test-1.webp",
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#F1F5FB]">
      <div className="max-w-7xl mx-auto">
        {/* Header block - left aligned */}
        <div className="mb-16 text-left">
          <Eyebrow>Client Feedbacks</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0B1B33] mb-8 max-w-2xl">
            Client testimonial and real success stories
          </h2>

          <div className="flex items-center gap-6 mb-8">
            <span className="font-display text-6xl md:text-7xl font-bold text-[#2563EB]">
              99%
            </span>
            <span className="w-px h-16 bg-[#0B1B33]/15" />
            <p className="text-[#0B1B33]/60 max-w-[220px] text-sm md:text-base">
              Happy clients all over the world with Solvior
            </p>
          </div>

          <button className="flex items-center gap-3 bg-[#0B1B33] text-white pl-2 pr-6 py-2 rounded-full font-semibold hover:bg-[#1E3A8A] transition-colors group">
            <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            Explore more
          </button>
        </div>

        {/* Testimonial cards - two vertical reels, opposite directions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px] overflow-hidden">
          {[0, 1].map((col) => (
            <div key={col} className="overflow-hidden h-full">
              <div
                className={`flex flex-col gap-6 ${
                  col === 0
                    ? "animate-[scrollUp_20s_linear_infinite]"
                    : "animate-[scrollDown_20s_linear_infinite]"
                }`}
              >
                {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                  <div
                    key={t.name + i}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-sm"
                  >
                    <p className="text-[#2563EB] mb-4 tracking-wider">★★★★★</p>
                    <p className="text-[#0B1B33]/70 mb-7 leading-relaxed text-sm">
                      &quot;{t.quote}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={NEW_AVATARS[i % NEW_AVATARS.length]}
                        alt={t.name}
                        className="rounded-full h-11 w-11 object-cover shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold text-sm text-[#0B1B33]">
                          {t.name}
                        </h4>
                        <p className="text-xs text-[#0B1B33]/50">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes scrollUp {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
          }
          @keyframes scrollDown {
            from { transform: translateY(-50%); }
            to { transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
}