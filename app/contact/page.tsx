import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Solvior",
  description: "Have a question or want to work with us? Get in touch with the Solvior team.",
};

const INFO_CARDS = [
  {
    label: "Email us",
    lines: ["solvior@gmail.com", "support@solvior.com"],
    href: "mailto:support@solvior.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    label: "Call us",
    lines: ["+1 (009) 544-7818", "+1 (226) 356-2552"],
    href: "tel:+10095447818",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    label: "Our location",
    lines: ["993 Renner Burg, West Rond,", "MT 94251-030"],
    href: undefined,
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
  {
    label: "Live chat",
    lines: ["livechat@solvior.com", "Need help?"],
    href: "mailto:livechat@solvior.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
  },
];

export default function ContactPage() {
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
        <div className="absolute inset-0 bg-[#0B1B33]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1B33]" />
        <div className="relative">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">Contact</h1>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 text-sm">
            <Link href="/" className="hover:text-[#60A5FA] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact info cards — 2x2 grid */}
      <section className="px-6 md:px-10 py-20 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="flex items-center justify-center gap-2 text-[#2563EB] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Contact Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0B1B33]">Our contact information</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {INFO_CARDS.map((c) => {
              const content = (
                <div className="bg-white border border-[#0B1B33]/10 rounded-2xl p-10 text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-flex w-14 h-14 rounded-full bg-[#EEF2FA] items-center justify-center mb-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth={1.8} className="w-6 h-6">
                      {c.icon}
                    </svg>
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#0B1B33] mb-3">{c.label}</h3>
                  {c.lines.map((line) => (
                    <p key={line} className="text-[#0B1B33]/60 text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={c.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="px-6 md:px-10 pb-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1B33] mb-8 leading-snug">
              Feel free to <span className="text-[#2563EB]">get in touch</span> or visit our location.
            </h2>
            <ContactForm />
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[420px] lg:h-full min-h-[420px] border border-[#0B1B33]/10">
            <iframe
              title="Office location map"
              src="https://www.google.com/maps?q=New+York,NY&output=embed"
              className="w-full h-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
