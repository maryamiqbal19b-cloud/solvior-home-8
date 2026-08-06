"use client";

import { useEffect, useState } from "react";

// 👇 Sirf yahan link change karein jab background image update karni ho

const BACKGROUND_IMAGE = "/h8-hero-bg.webp";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeStyle = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  return (
    <section
      className="relative px-6 md:px-10 pt-16 pb-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(11,27,51,0.92), rgba(30,58,138,0.85), rgba(37,99,235,0.8)), url('${BACKGROUND_IMAGE}')`,
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col items-start">
          {/* INNOVATE */}
          <div className="flex items-center gap-3 mb-0" style={fadeStyle(0)}>
            <h1
              className="text-5xl md:text-7xl lg:text-[6.5rem] font-black uppercase text-white leading-[0.9] tracking-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Innovate
            </h1>
            {/* solid blue circular badge with logo mark */}
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#2563EB] border-2 border-white/40 flex items-center justify-center relative shrink-0">
              <svg
                className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    fill="none"
                  />
                </defs>
                <text fill="white" fontSize="7" letterSpacing="1.5">
                  <textPath href="#circlePath">
                    • AWARD WINNING AGENCY • SINCE 2019
                  </textPath>
                </text>
              </svg>
              {/* logo mark - same diamond/flag shape as header logo */}
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2 L20 8 L12 22 L4 8 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path d="M12 6 L16 9 L12 17 L8 9 Z" fill="white" />
              </svg>
            </div>
          </div>

          {/* CONSULTING - shifted right so it starts under "NN" of Innovate */}
          <h1
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-black italic uppercase text-white leading-[0.9] mb-0 ml-16 md:ml-28"
            style={{ fontFamily: "Inter, sans-serif", ...fadeStyle(150) }}
          >
            Consulting
          </h1>

          {/* HERE - shifted right so it starts under "N" of Consulting */}
          <h1
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-black uppercase text-white leading-[0.9] mb-10 tracking-tight ml-28 md:ml-52"
            style={{ fontFamily: "Inter, sans-serif", ...fadeStyle(250) }}
          >
            Here
          </h1>
        </div>

        <div
          className="flex flex-col md:flex-row md:items-start gap-10 mt-4"
          style={fadeStyle(400)}
        >
          <div className="flex flex-col items-start">
            <div className="animate-bounce mb-3">
              <svg
                className="w-8 h-10 text-[#3B82F6]"
                viewBox="0 0 24 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2 V18 M5 14 L12 22 L19 14" />
              </svg>
            </div>
            <p className="text-white/70 text-lg max-w-sm">
              Transform your ideal business with expert consultancy services
              today.
            </p>
          </div>
         <img
  src="https://solvior.themejunction.net/wp-content/uploads/2025/05/h8-hero-banner.webp"
  alt="Business consulting session"
  className="w-full md:w-[340px] h-[200px] object-cover md:ml-auto"
/>
        </div>
      </div>
    </section>
  );
}