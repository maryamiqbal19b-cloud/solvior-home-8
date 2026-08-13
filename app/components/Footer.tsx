"use client";

const SERVICES = [
  "Strategic planning",
  "Market research",
  "Business process",
  "Financial management",
  "Change management",
  "IT consulting",
  "Leadership",
];

const RESOURCES = [
  { label: "Contact us", badge: false },
  { label: "Privacy policy", badge: false },
  { label: "Recognitions", badge: false },
  { label: "Careers", badge: true },
  { label: "Blog", badge: false },
  { label: "Feedback", badge: false },
  { label: "Error 404", badge: false },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      {/* Main footer */}
      <div className="relative bg-[#0B1B33] text-white px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column 1: Newsletter + Social + Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
            <div className="flex items-center bg-[#16294A] rounded-full px-5 py-3 mb-8">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-white placeholder-white/50 text-sm"
              />
              <span className="w-px h-5 bg-white/20 mx-3" />
              <button aria-label="Subscribe">
                <svg
                  className="w-5 h-5 text-[#3B82F6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>

            <h4 className="font-bold mb-3">Follow Us:</h4>
            <div className="flex gap-3 mb-10">
              {["f", "ig", "tw", "in"].map((s) => (
                <span
                  key={s}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2563EB] flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-bold mb-4">Resourses</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {RESOURCES.map((r) => (
                <li key={r.label} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  {r.label}
                  {r.badge && (
                    <span className="bg-[#2563EB] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services + Our offices stacked together */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-white/70 mb-10">
              {SERVICES.map((s) => (
                <li key={s} className="hover:text-white transition-colors cursor-pointer">
                  {s}
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-4">Our offices</h4>
            <p className="text-white/40 text-xs mb-1">Headquarters - USA</p>
            <p className="text-white/80 text-sm mb-2">
              993 Renner Burg, West Rond, MT 94251-030
            </p>
            <p className="text-white font-semibold text-sm mb-6">+1 (009) 544-7818</p>

            <p className="text-white/40 text-xs mb-1">Operations - Canada</p>
            <p className="text-white/80 text-sm">
              Suite 452 8082 Boner Parge, Elviraton, CA 48998
            </p>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="absolute bottom-8 right-6 md:right-10 w-12 h-12 rounded-full bg-[#2563EB] hover:bg-[#1E40AF] flex items-center justify-center transition-colors shadow-lg"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0B1B33] border-t border-white/10 px-6 md:px-10 py-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 text-center text-white/60 text-sm">
          <p className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Trusted partner in business excellence
          </p>
          <p>
            © 2026 <span className="text-white font-semibold">Solvior</span> All right reserved.
          </p>
          <p>
            Policy & privacy <span className="mx-1">•</span> Terms & conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
