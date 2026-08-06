"use client";

import { useState } from "react";

const BACKGROUND_IMAGE = "/growth-bg.webp";
const YOUTUBE_ID = "eVORc3oT57s";

export function GrowthShowcase() {
  const [open, setOpen] = useState(false);

  return (
   <section className="relative py-4">
  <div className="w-full">
        <div className="relative overflow-hidden">
          <img
            src={BACKGROUND_IMAGE}
            alt="Business growth"
            className="w-full h-[420px] md:h-[540px] object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 max-w-md">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
                See how we drive real business growth
              </h2>
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-3 group"
              >
                <span className="w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="w-4 h-4 text-white ml-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="text-white font-semibold underline underline-offset-4">
                  Play our reels
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-white text-3xl leading-none"
            >
              &times;
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
              title="Business growth video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}