import { Eyebrow, Reveal } from "./Reveal";
import { Counter } from "./Counter";

export function About() {
  const checklist = [
    "Expertise and experience",
    "Client Centric approach",
    "Commitment excellence",
    "Dedicated support team",
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-[#F1F5FB]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* Text on the LEFT */}
        <Reveal className="lg:col-span-7">
          <Eyebrow>Our Company</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 leading-tight text-[#0B1B33]">
            Expert on business mind crafting your path into ultimate success
          </h2>
          <p className="text-[#1E3A8A]/65 mb-9 leading-relaxed">
            Our mission is to empower businesses of all sizes to thrive in an
            ever-changing marketplace. In today&apos;s dynamic business
            environment, the key to success lies in strategic insight,
            practical execution, and a relationship that outlasts the first
            engagement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-center text-[#0B1B33] font-medium"
              >
                <svg
                  className="w-5 h-5 text-[#2563EB] mr-3 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </div>
            ))}
          </div>

          <button className="flex items-center gap-3 bg-[#0B1B33] text-white pl-2 pr-7 py-2 rounded-full font-semibold hover:bg-[#1E3A8A] transition-colors">
            <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            Know more us
          </button>
        </Reveal>

        {/* Image on the RIGHT, side-by-side with text */}
        <Reveal delay={150} className="lg:col-span-5 relative">
          <img
           src="/h8-about-1.webp"
            className="rounded-none h-[420px] w-full object-cover"
          />
          <div className="absolute -bottom-7 -right-6 bg-[#2563EB] text-white p-6 rounded-2xl shadow-xl">
            <p className="font-display text-3xl font-semibold">
              <Counter target={39} suffix="K+" />
            </p>
            <p className="text-xs font-medium mt-1 max-w-[140px] text-white/85">
              Happy clients all over the world
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}