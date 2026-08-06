import { Reveal } from "./Reveal";
import { PROCESS } from "./data";

// Har step ke neeche wala CTA text (demo jaisa)
const CTA_LABELS = ["Book discovery call", "Explore map", "Book consultation"];

export function Process() {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#F3F4F6] text-[#0B1B33]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="flex items-center justify-center gap-2 text-[#2563EB] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          Our Working Process
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
          Three steps transform for our business
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Timeline row with numbered circles */}
        <div className="relative hidden md:grid grid-cols-3 items-center mb-0 px-8">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -translate-y-1/2" />
          {PROCESS.map((p, i) => (
            <div key={p.n} className="relative flex justify-center">
              <span
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg ${
                  i === 0
                    ? "bg-white border-4 border-[#2563EB] text-[#2563EB]"
                    : "bg-[#0B1B33] text-white"
                }`}
              >
                {p.n}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 -mt-0 md:-mt-8">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <div
                className={`relative pt-10 md:pt-14 pb-8 px-7 rounded-2xl h-full transition-transform duration-300 hover:-translate-y-1 ${
                  i === 0
                    ? "bg-[#2563EB] text-white shadow-xl shadow-blue-900/20"
                    : "bg-white text-[#0B1B33]"
                }`}
              >
                {/* mobile-only number badge */}
                <span
                  className={`md:hidden inline-flex w-10 h-10 rounded-full items-center justify-center font-bold text-sm mb-4 ${
                    i === 0
                      ? "bg-white text-[#2563EB]"
                      : "bg-[#0B1B33] text-white"
                  }`}
                >
                  {p.n}
                </span>

                <h3 className="font-display text-xl font-bold mb-3">
                  {p.title}
                </h3>
                <p
                  className={`leading-relaxed mb-6 ${
                    i === 0 ? "text-white/85" : "text-[#0B1B33]/60"
                  }`}
                >
                  {p.copy}
                </p>

                <a
                  href="#"
                  className={`inline-flex items-center gap-1 font-semibold text-sm group ${
                    i === 0 ? "text-white" : "text-[#0B1B33]"
                  }`}
                >
                  {CTA_LABELS[i] ?? "Learn more"}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}