import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { CoreFeatures } from "../components/CoreFeatures";
import { Team } from "../components/Team";

export const metadata: Metadata = {
  title: "About Us — Solvior",
  description: "Crafting tailored solutions for every business challenge. Learn about Solvior's story, values, and the team behind it.",
};

const STATS = [
  { target: 98, suffix: "%", label: "Projects completed" },
  { target: 45, suffix: "M+", label: "Reach worldwide" },
  { target: 3, suffix: ".5x", label: "Faster growth" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header banner */}
      <section className="bg-[#0B1B33] text-white px-6 md:px-10 py-20 text-center">
        <Eyebrow dark>About Our Company</Eyebrow>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 max-w-2xl mx-auto">
          Crafting tailored solutions for every business challenge
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Our mission is to empower businesses of every size to thrive in an ever-changing marketplace, through strategic insight and honest execution.
        </p>
      </section>

      {/* Core features (reused) */}
      <CoreFeatures />

      {/* Our story / evolution */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <Eyebrow>Our Evolution</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#0B1B33] max-w-2xl mx-auto">
              A small consultancy that grew into a global partner
            </h2>
          </Reveal>

          <Reveal delay={100} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#1E3A8A]/70 leading-relaxed">
              Founded in 2019 with a simple idea: give businesses consulting they can actually act on. What started as a small team quickly became a trusted partner for companies navigating complex growth, market entry, and operational change. Our core values — integrity, innovation, and follow-through — still guide every engagement we take on today.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 120} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-[#2563EB] mb-2">
                  <Counter target={s.target} suffix={s.suffix} />
                </p>
                <p className="text-[#1E3A8A]/60 text-sm">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team (reused) */}
      <Team />

      {/* CTA */}
      <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
          Ready to work with us?
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#1E3A8A] font-semibold px-8 py-3.5 rounded-full hover:bg-[#F6F3EC] transition-colors"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
