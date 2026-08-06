
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    title: "Quick Solutions",
    copy: "Our consultancy excels in providing quick solutions tailored to your business challenges.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="6" width="18" height="18" rx="3" />
        <rect x="16" y="16" width="18" height="18" rx="3" fill="white" />
      </svg>
    ),
  },
  {
    title: "Expert Advice",
    copy: "Our consultancy excels in providing quick solutions tailored to your business challenges.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" />
        <circle cx="20" cy="20" r="4" />
      </svg>
    ),
  },
  {
    title: "Strategic Planning",
    copy: "Our consultancy excels in providing quick solutions tailored to your business challenges.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="16" />
        <circle cx="20" cy="20" r="10" />
        <circle cx="20" cy="20" r="4" />
      </svg>
    ),
  },
  {
    title: "Efficient Operations",
    copy: "Our consultancy excels in providing quick solutions tailored to your business challenges.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12,4 24,10 24,22 12,28 0,22 0,10" transform="translate(2,4)" />
        <line x1="28" y1="30" x2="36" y2="22" />
        <line x1="28" y1="22" x2="36" y2="30" />
      </svg>
    ),
  },
];

export function CoreFeatures() {
  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <p
          className="text-[#2563EB] text-xs font-semibold tracking-[0.25em] uppercase mb-3"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          • Number #1 Solver •
        </p>
        <h2
          className="text-3xl md:text-5xl font-extrabold text-[#0B1B33] mb-4"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Explore our core features
        </h2>
        <p className="text-gray-500 mb-8 max-w-lg">
          Our mission is to empower businesses to thrive in solutions.
        </p>
        <button className="flex items-center gap-3 bg-[#0B1B33] text-white pl-2 pr-6 py-2 rounded-full font-semibold mb-14 hover:bg-[#1E3A8A] transition-colors group">
          <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          Explore more
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group bg-[#EEF2FA] hover:bg-[#0B1B33] p-8 rounded-2xl h-full transition-colors duration-300 cursor-pointer">
                <div className="w-10 h-10 text-[#0B1B33] group-hover:text-[#60A5FA] mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B1B33] group-hover:text-white mb-3 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                  {f.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}