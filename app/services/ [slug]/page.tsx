import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES_FULL } from "../data";
import { ServiceIcon } from "../ServiceIcon";
import { ServiceDetailReveal } from "./ServiceDetailReveal";

export function generateStaticParams() {
  return SERVICES_FULL.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES_FULL.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service — Solvior" };
  return {
    title: `${service.title} — Solvior`,
    description: service.copy,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const index = SERVICES_FULL.findIndex((s) => s.slug === params.slug);
  if (index === -1) notFound();

  const service = SERVICES_FULL[index];
  const related = SERVICES_FULL.filter((_, i) => i !== index).slice(0, 3);

  return (
    <>
      {/* Hero banner with breadcrumb */}
      <section className="relative bg-[#0B1B33] text-white px-6 md:px-10 py-28 text-center overflow-hidden">
        <Image src="/pheader-bg.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#0B1B33]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B33]/40 via-transparent to-[#0B1B33]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B1B33] to-transparent" />
        <div className="relative">
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto">{service.title}</h1>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 text-sm">
            <Link href="/" className="hover:text-[#60A5FA] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#60A5FA] transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white/70">{service.n}</span>
          </div>
        </div>
      </section>

      {/* Detail content */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <ServiceDetailReveal>
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden mb-12">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/70 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 font-display text-5xl font-bold text-white/40">
                {service.n}
              </span>
            </div>
          </ServiceDetailReveal>

          <ServiceDetailReveal delay={100}>
            <span className="inline-flex w-16 h-16 rounded-full bg-[#EEF2FA] items-center justify-center mb-6 text-[#2563EB]">
              <ServiceIcon icon={service.icon} />
            </span>
          </ServiceDetailReveal>

          <ServiceDetailReveal delay={150}>
            <p className="text-lg text-[#0B1B33]/70 leading-relaxed max-w-3xl mb-10">{service.longCopy}</p>
          </ServiceDetailReveal>

          <ServiceDetailReveal delay={200}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#0B1B33] text-white pl-6 pr-2 py-2 rounded-full font-semibold hover:bg-[#152a4d] transition-colors"
            >
              Get started
              <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </ServiceDetailReveal>
        </div>
      </section>

      {/* Related services */}
      <section className="px-6 md:px-10 pb-20 bg-[#F7F9FC] pt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1B33] mb-10">Other services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white border border-[#0B1B33]/10 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-flex w-12 h-12 rounded-full bg-[#EEF2FA] items-center justify-center mb-4 text-[#2563EB]">
                  <ServiceIcon icon={s.icon} className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-[#0B1B33] mb-2">{s.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB]">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
