import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "../components/Reveal";
import { Pricing } from "../components/Pricing";

export const metadata: Metadata = {
  title: "Pricing Plan — Solvior",
  description: "Flexible, transparent pricing plans built for teams of every size. Compare Basic, Business, and Enterprise consulting packages.",
};

const FAQ = [
  { q: "Can I switch plans later?", a: "Yes — upgrade or downgrade anytime, and we'll prorate the difference on your next invoice." },
  { q: "Is there a long-term contract?", a: "No. All plans are billed monthly or yearly, and you can cancel whenever you like." },
  { q: "What's included in support?", a: "Every plan includes email support; Business and Enterprise add priority access and a dedicated consultant." },
];

export default function PricingPage() {
  return (
    <>
      {/* Page header banner */}
      <section className="bg-[#0B1B33] text-white px-6 md:px-10 py-20 text-center">
        <Eyebrow dark>Pricing Plan</Eyebrow>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
          Flexible pricing, powerful results
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Choose the plan that fits your team today — every tier scales with you as your business grows.
        </p>
      </section>

      {/* Reused pricing component */}
      <Pricing />

      {/* FAQ */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#0B1B33]">
              Pricing FAQs
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-[#1E3A8A]/10">
            {FAQ.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="font-display text-lg font-semibold text-[#0B1B33] mb-2">
                  {f.q}
                </h3>
                <p className="text-[#1E3A8A]/60 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
          Still not sure which plan fits?
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#1E3A8A] font-semibold px-8 py-3.5 rounded-full hover:bg-[#F6F3EC] transition-colors"
        >
          Talk to a consultant
        </Link>
      </section>
    </>
  );
}
