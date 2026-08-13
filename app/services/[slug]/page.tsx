import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES_FULL } from "../data";
import { ServiceIcon } from "../ServiceIcon";
import { ServiceDetailReveal } from "./ServiceDetailReveal";
import { FaqAccordion } from "./FaqAccordion";

export function generateStaticParams() {
  return SERVICES_FULL.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_FULL.find((s) => s.slug === slug);
  if (!service) return { title: "Service — Solvior" };
  return {
    title: `${service.title} — Solvior`,
    description: service.copy,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = SERVICES_FULL.findIndex((s) => s.slug === slug);
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
            <span className="text-white/70">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Detail content */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <ServiceDetailReveal>
            <div className="relative h-[320px] md:h-[420px] overflow-hidden mb-12">
              <img src="/tj-service-2.webp" alt={service.title} className="w-full h-full object-cover" />
            </div>
          </ServiceDetailReveal>

          <ServiceDetailReveal delay={100}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1B33] mb-5 max-w-3xl">
              Strategic planning and execution in the comprehensive process of formulating goals
            </h2>
            <p className="text-lg text-[#0B1B33]/70 leading-relaxed max-w-3xl mb-5">
              Our service guides you through the entire strategic planning process, from initial goal formulation to precise execution. Start with a thorough assessment of your current position and market landscape, then help you define clear, actionable objectives aligned with your vision. Our approach includes developing detailed action plans, setting key performance indicators (KPIs), and implementing strategies to ensure seamless execution.
            </p>
            <p className="text-lg text-[#0B1B33]/70 leading-relaxed max-w-3xl mb-10">
              Our Strategic Planning and Execution service offers a thorough approach to formulating and implementing business goals. We begin with an in-depth analysis of your business and market to identify opportunities and challenges. From there, we work with you to define clear, actionable objectives and develop a detailed.
            </p>
          </ServiceDetailReveal>

          <ServiceDetailReveal delay={150}>
            <span className="inline-flex w-16 h-16 rounded-full bg-[#EEF2FA] items-center justify-center mb-10 text-[#2563EB]">
              <ServiceIcon icon={service.icon} />
            </span>
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

          {/* Service overview + checklist */}
          <ServiceDetailReveal delay={250}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 bg-[#F7F9FC] rounded-2xl p-8 md:p-10">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#0B1B33] mb-4">Service overview</h2>
                <p className="text-[#0B1B33]/60 leading-relaxed">
                  Our mission is to empower businesses of every size to thrive in an ever-changing marketplace. We are committed to delivering exceptional value through strategic insight and hands-on execution.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  "Clear vision and direction for your business",
                  "Enhanced ability to anticipate and respond to market changes",
                  "Data-driven decision-making at every step",
                  "A structured approach to achieving your business goals",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-[#0B1B33]/70 border border-gray-300 bg-white p-4"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="relative h-[220px] md:h-[260px] overflow-hidden">
                <img src="/tj-service-3.webp" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-[220px] md:h-[260px] overflow-hidden">
                <img src="/tj-service-4.webp" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </ServiceDetailReveal>

          {/* Key features */}
          <ServiceDetailReveal delay={300}>
            <h2 className="font-display text-2xl font-bold text-[#0B1B33] mt-16 mb-6">Key features</h2>
            <p className="text-[#0B1B33]/70 leading-relaxed max-w-3xl mb-3">
              Our service guides you through the entire strategic planning process, from initial goal formulation to precise execution. Start with a thorough assessment of your current position and market landscape, then help you define clear, actionable objectives aligned with your vision. Our approach includes developing detailed action plans.
            </p>
            <p className="text-[#0B1B33]/70 leading-relaxed max-w-3xl mb-8">
              Formulating and implementing business goals. We begin with an in-depth analysis of your business and market to identify opportunities and challenges. From there, we work with you to define clear, actionable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Quick solutions", copy: "Hands-on guidance and support throughout the execution.", path: "M13 10V3L4 14h7v7l9-11h-7z" },
                { title: "Proven results", copy: "Backed by the expertise of seasoned consultants who deliver.", path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "Personalization", copy: "Strategies tailored so objectives are effectively implemented.", path: "M12 4.5C7 4.5 2.7 7.9 1 12c1.7 4.1 6 7.5 11 7.5s9.3-3.4 11-7.5c-1.7-4.1-6-7.5-11-7.5zM12 15a3 3 0 100-6 3 3 0 000 6z" },
              ].map((f) => (
                <div key={f.title} className="border border-[#0B1B33]/10 rounded-2xl p-7 bg-[#F7F9FC]">
                  <span className="inline-flex w-16 h-16 rounded-full bg-white items-center justify-center mb-5 text-[#2563EB]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.path} />
                    </svg>
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#0B1B33] mb-2">{f.title}</h3>
                  <p className="text-[#0B1B33]/50 text-sm leading-relaxed">{f.copy}</p>
                </div>
              ))}
            </div>
          </ServiceDetailReveal>

          {/* Video / CTA banner */}
          <ServiceDetailReveal delay={320}>
            <div className="relative h-[280px] md:h-[380px] overflow-hidden mt-16">
              <img src="/tj-service-2.webp" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0B1B33]/40" />
              <a
                href="https://www.youtube.com/watch?v=eEzD-Y97ges"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play video"
              >
                <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" fill="#2563EB" className="w-6 h-6 md:w-7 md:h-7 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </a>
            </div>
          </ServiceDetailReveal>

          {/* FAQ */}
          <ServiceDetailReveal delay={350}>
            <h2 className="font-display text-2xl font-bold text-[#0B1B33] mt-16 mb-6">General questions</h2>
            <FaqAccordion />
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
                className="group border border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="bg-white p-7 pb-4">
                  <span className="inline-flex w-12 h-12 rounded-full bg-[#EEF2FA] items-center justify-center text-[#2563EB]">
                    <ServiceIcon icon={s.icon} className="w-5 h-5" />
                  </span>
                </div>
                <div className="bg-[#F7F9FC] p-7 pt-5 flex flex-col gap-4">
                  <h3 className="font-display text-lg font-bold text-[#0B1B33]">{s.title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB]">
                    Learn more
                    <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Need help CTA box */}
          <div className="mt-6 border border-gray-300 bg-white p-6 md:p-8">
            <div className="relative h-[180px] md:h-[220px] overflow-hidden flex items-end p-6">
              <img src="/tj-service-1.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0B1B33]/50" />
              <div className="relative text-white">
                <p className="font-display text-xl md:text-2xl font-bold">Need help?</p>
                <p className="text-sm md:text-base text-white/80 mt-1">Feel free contact us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
