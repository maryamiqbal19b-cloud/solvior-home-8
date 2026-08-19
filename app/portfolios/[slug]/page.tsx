import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "../../components/data";
import { PortfolioDetailReveal } from "./PortfolioDetailReveal";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Portfolio — Solvior" };
  return {
    title: `${project.title} — Solvior`,
    description: project.summary,
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = PROJECTS[index];
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 5);

  const overviewPoints = [
    "Develop and propose state-of-the-art solutions, including technology upgrades, process reengineering, and automation strategies, tailored to your business needs.",
    "Oversee the deployment and integration of new systems and technologies, ensuring minimal disruption to your ongoing operations and seamless adaptation.",
    "Provide comprehensive training for your team to ensure effective use of new systems and ongoing support to address any issues or challenges.",
    "Establish metrics and benchmarks to monitor the impact of the new solutions.",
  ];

  return (
    <>
      {/* Hero banner with breadcrumb */}
      <section className="relative bg-[#0B1B33] text-white px-6 md:px-10 py-28 text-center overflow-hidden">
        <Image src="/pheader-bg.webp" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#0B1B33]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B33]/40 via-transparent to-[#0B1B33]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B1B33] to-transparent" />
        <div className="relative">
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto">{project.title}</h1>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 text-sm">
            <Link href="/" className="hover:text-[#60A5FA] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/portfolios" className="hover:text-[#60A5FA] transition-colors">
              Portfolios
            </Link>
            <span>/</span>
            <span className="text-white/70">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Detail content */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <PortfolioDetailReveal>
            <div className="relative h-[320px] md:h-[420px] overflow-hidden mb-12 bg-[#0B1B33]">
              <img src="/portfolio-detail-1.png" alt={project.title} className="w-full h-full object-cover" />
            </div>
          </PortfolioDetailReveal>

          <PortfolioDetailReveal delay={100}>
            <div className="flex gap-2 mb-5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-wider bg-[#F7F9FC] border border-[#0B1B33]/10 text-[#0B1B33] font-semibold px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] hover:-translate-y-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1B33] mb-5 max-w-3xl">
              {project.summary}
            </h2>
            <p className="text-lg text-[#0B1B33]/70 leading-relaxed max-w-3xl mb-5">
              Our mission is to empowers businesses size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptionals the value through strategic inset, innovative approaches. Our consulting of our missing empower businesses of all sizes to thrive. Committed to the delivering exceptional in the values through our strategic inset, i approaches empower. Our mission is to empowers businesses.
            </p>
            <p className="text-lg text-[#0B1B33]/70 leading-relaxed max-w-3xl mb-10">
              Our mission is to empowers businesses size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptionals the value through strategic inset.
            </p>
          </PortfolioDetailReveal>

          {/* Projects overview */}
          <PortfolioDetailReveal delay={250}>
            <div className="mt-4">
              <h2 className="font-display text-2xl font-bold text-[#0B1B33] mb-4">Projects overview</h2>
              <p className="text-[#0B1B33]/60 leading-relaxed max-w-3xl mb-8">
                Develop and propose state-of-the-art solutions, including technology upgrades, process reengineering, and automation strategies, tailored to your business needs. Oversee the deployment and integration of new systems and technologies, ensuring minimal disruption to your ongoing operations and seamless adaptation. Provide comprehensive training for your team to ensure effective use of new systems and ongoing support to address any issues or challenges. Establish metrics and benchmarks to monitor the impact of the new solutions.
              </p>
              <ul className="flex flex-col gap-4 mb-10">
                {overviewPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[#0B1B33]/70">
                    <span className="flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-[#2563EB] text-white mt-0.5">
                      <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 13l3 3L14 9" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Video-style image */}
              <div className="relative h-[280px] md:h-[380px] overflow-hidden mb-4">
               <img src="/h1-service-1.webp" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="#0B1B33" className="w-6 h-6 ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </PortfolioDetailReveal>

          {/* Final result */}
          <PortfolioDetailReveal delay={300}>
            <h2 className="font-display text-2xl font-bold text-[#0B1B33] mt-16 mb-6">Final result</h2>
            <p className="text-[#0B1B33]/70 leading-relaxed max-w-3xl mb-8">
              Our mission is to empowers businesses size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptionals the value through strategic inset, innovative approaches. Our consulting of our missing empower businesses of all sizes to thrive. Committed to the delivering exceptional.
            </p>
          </PortfolioDetailReveal>

          {/* Prev / Next */}
          <PortfolioDetailReveal delay={320}>
            <div className="flex items-center justify-between border-t border-gray-200 mt-10 pt-8">
              <Link
                href={`/portfolios/${prev.slug}`}
                className="inline-flex items-center gap-3 text-[#0B1B33] font-semibold hover:text-[#2563EB] transition-colors"
              >
                <span className="w-9 h-9 rounded-full border border-[#0B1B33]/15 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </span>
                Previous
              </Link>
              <Link
                href="/portfolios"
                className="text-sm text-[#0B1B33]/50 hover:text-[#2563EB] transition-colors"
              >
                All portfolios
              </Link>
              <Link
                href={`/portfolios/${next.slug}`}
                className="inline-flex items-center gap-3 text-[#0B1B33] font-semibold hover:text-[#2563EB] transition-colors"
              >
                Next
                <span className="w-9 h-9 rounded-full border border-[#0B1B33]/15 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </PortfolioDetailReveal>
        </div>
      </section>

      {/* Portfolio info + related + need help */}
      <section className="px-6 md:px-10 pb-20 bg-[#F7F9FC] pt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Portfolio Information */}
          <div className="border border-gray-300 bg-white p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-[#0B1B33] mb-6">Portfolio Information</h2>
            <dl className="flex flex-col divide-y divide-gray-200">
              {[
                ["Client", project.client],
                ["Portfolio", "Financial"],
                ["Service", project.service],
                ["Category", project.category],
                ["Date", project.date],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between py-3 text-sm">
                  <dt className="text-[#0B1B33]/50">{label}</dt>
                  <dd className="text-[#0B1B33] font-medium">{value}</dd>
                </div>
              ))}
              <div className="flex items-center justify-between py-3 text-sm">
                <dt className="text-[#0B1B33]/50">Share</dt>
                <dd className="flex items-center gap-3">
                  {[
                    "M18 8a3 3 0 10-2.83-4H15a3 3 0 000 6h.17c.11.32.17.66.17 1s-.06.68-.17 1H15a3 3 0 102.83 4H18a3 3 0 00-2.83-4 3 3 0 002.83-4z",
                  ].map((d) => (
                    <span key={d} className="w-8 h-8 rounded-full border border-[#0B1B33]/15 flex items-center justify-center text-[#0B1B33] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-colors cursor-pointer">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d={d} />
                      </svg>
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          {/* Related portfolios */}
          <div className="border border-gray-300 bg-white p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-[#0B1B33] mb-6">Related portfolios</h2>
            <div className="flex flex-col gap-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolios/${p.slug}`}
                  className="group flex items-center justify-between bg-[#F7F9FC] hover:bg-[#2563EB] text-[#0B1B33] hover:text-white transition-colors duration-300 px-5 py-4"
                >
                  <span className="font-medium">{p.title}</span>
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Need help CTA box */}
          <div className="border border-gray-300 bg-white p-6 md:p-8">
            <div className="relative h-full min-h-[280px] overflow-hidden flex items-end p-7 bg-[#0B1B33]">
              <img src={project.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33] via-[#0B1B33]/70 to-[#0B1B33]/30" />
              {/* Decorative swirl arrow */}
              <svg
                viewBox="0 0 80 90"
                fill="none"
                className="absolute right-10 bottom-24 w-16 h-20 text-white/70"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M40 5c20 5 30 20 22 35S30 60 35 45s25-10 30 5" strokeLinecap="round" />
                <path d="M55 45l10 5-3 11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="relative text-white flex flex-col gap-4">
                <div>
                  <p className="font-display text-xl md:text-2xl font-bold">Need help?</p>
                  <p className="font-display text-xl md:text-2xl font-bold mt-1">Feel free contact us</p>
                  <p className="text-sm md:text-base text-white/80 mt-3">
                    Our mission is to empower businesses of all sizes.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-[#0B1B33] pl-6 pr-2 py-2 rounded-full font-semibold w-fit hover:bg-[#2563EB] hover:text-white transition-colors duration-300 group"
                >
                  Get in touch
                  <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <svg className="w-4 h-4 text-white group-hover:text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2563EB] text-white px-6 md:px-10 py-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8 text-center md:text-left">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Get consultant now!</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#0B1B33] pl-6 pr-2 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors shrink-0"
          >
            Let&rsquo;s talk now
            <span className="w-9 h-9 rounded-full bg-[#0B1B33] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
