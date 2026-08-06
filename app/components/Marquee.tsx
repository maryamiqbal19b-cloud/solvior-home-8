import { KEYWORDS } from "./data";

// Yeh words white fill + thin gray outline style mein dikhenge
const OUTLINE_WORDS = ["Growth", "Consulting"];

export function Marquee() {
  const items = [...KEYWORDS, ...KEYWORDS, ...KEYWORDS, ...KEYWORDS];
  return (
    <div className="overflow-hidden border-y border-gray-200 bg-white py-6">
      <div className="flex gap-8 animate-[marquee_22s_linear_infinite] whitespace-nowrap w-max">
        {items.map((word, i) => {
          const isOutline = OUTLINE_WORDS.includes(word);
          return (
            <span key={i} className="flex items-center gap-8">
              <span
                className="text-2xl md:text-4xl font-bold"
                style={{
                  fontFamily: "Georgia, serif",
                  ...(isOutline
                    ? {
                        color: "white",
                        WebkitTextStroke: "1px #D1D5DB",
                      }
                    : { color: "#0B1B33" }),
                }}
              >
                {word}
              </span>
              <span className="text-[#2563EB] text-2xl font-bold inline-block animate-[starSpin_3s_linear_infinite]">
                *
              </span>
            </span>
          );
        })}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        @keyframes starSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}