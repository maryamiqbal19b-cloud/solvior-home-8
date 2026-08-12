import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicesGrid } from "./ServicesGrid";

export const metadata: Metadata = {
  title: "Services — Solvior",
  description: "Explore Solvior's business consulting services — strategy, leadership coaching, process optimization, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner with breadcrumb */}
      <section className="relative bg-[#0B1B33] text-white px-6 md:px-10 py-28 text-center overflow-hidden">
        <Image
          src="/pheader-bg.webp"
          alt="Solvior team in a business meeting"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0B1B33]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B33]/40 via-transparent to-[#0B1B33]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B1B33] to-transparent" />
        <div className="relative">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">Services</h1>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 text-sm">
            <Link href="/" className="hover:text-[#60A5FA] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Services</span>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <ServicesGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl bg-[#0B1B33] text-white px-8 md:px-16 py-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Get consultant now!</h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-[#0B1B33] pl-6 pr-2 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              Let&rsquo;s talk now
              <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
