"use client";

import { useState } from "react";
import { Eyebrow, Reveal } from "./Reveal";
import { SERVICES } from "./data";

export function Services() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="services" className="py-24 px-6 md:px-10 bg-[#0B1B33] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Video thumbnail - clickable, sharp corners, animated play button */}
      <Reveal>
  <div className="relative w-full h-[300px] md:h-[500px] mb-16 overflow-hidden bg-black">
    {!playing ? (
      <button
        onClick={() => setPlaying(true)}
        className="absolute inset-0 w-full h-full group cursor-pointer"
        aria-label="Play video"
      >
        <img
          src="/h8-video-img.jpg"
          alt="Watch our story"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="relative flex items-center justify-center w-20 h-20">
            <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
            <span className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
              <svg className="w-7 h-7 text-[#0B1B33] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </span>
      </button>
    ) : (
    <iframe
  src="https://www.youtube.com/embed/MM05Kc_3yXE?autoplay=1"
  title="Business consulting video"
  allow="autoplay; encrypted-media"
  allowFullScreen
  className="w-full h-full"
/>
    )}
  </div>
</Reveal>

        {/* Heading */}
        <div className="mb-14">
          <Eyebrow dark>Our Services</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Services Built for <span className="text-[#60A5FA]">Business</span> goal Success
          </h2>
        </div>

        {/* Services list */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center py-7 hover:bg-white/5 transition-colors duration-300 px-2 md:px-4">
                <span className="md:col-span-1 font-display text-2xl text-[#60A5FA] font-semibold">
                  {s.n}
                </span>
                <h3 className="md:col-span-4 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="md:col-span-6 text-white/60 leading-relaxed">{s.copy}</p>
                <span className="md:col-span-1 flex md:justify-end">
                  <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-colors">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* More Services button - now at the bottom of the section */}
        <div className="flex justify-center mt-12">
          <button className="border border-white/25 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
            More Services
          </button>
        </div>
      </div>
    </section>
  );
}