import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "../components/Contact";
import { Eyebrow } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us — Solvior",
  description:
    "Have a question or want to work with us? Get in touch with the Solvior team.",
};

const OFFICES = [
  {
    label: "Headquarters — USA",
    address: "993 Renner Burg, West Rond, MT 94251-030",
    phone: "+1 (009) 544-7818",
  },
  {
    label: "Operations — Canada",
    address: "Suite 452 8082 Boner Parge, Elviraton, CA 48998",
    phone: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header banner */}
      <section className="bg-[#0B1B33] text-white px-6 md:px-10 py-20 text-center">
        <Eyebrow dark>Get In Touch</Eyebrow>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
          Contact Us
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          We&apos;d love to hear about your business and how we can help it
          grow. Reach out and a consultant will get back to you shortly.
        </p>
      </section>

      {/* Quick contact info cards */}
      <section className="px-6 md:px-10 -mt-10 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-[#2563EB] mb-2">
              Email
            </p>
            
              href="mailto:support@solvior.com"
              className="font-display text-lg font-semibold hover:text-[#2563EB] transition-colors"
            >
              support@solvior.com
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-[#2563EB] mb-2">
              Phone
            </p>
            
              href="tel:+10095447818"
              className="font-display text-lg font-semibold hover:text-[#2563EB] transition-colors"
            >
              +1 (009) 544-7818
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-[#2563EB] mb-2">
              Hours
            </p>
            <p className="font-display text-lg font-semibold">
              Mon – Friday, 9:00–18:00
            </p>
          </div>
        </div>
      </section>

      {/* Reused contact form */}
      <Contact />

      {/* Offices */}
      <section className="px-6 md:px-10 pb-24 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {OFFICES.map((office) => (
            <div
              key={office.label}
              className="border border-[#1E3A8A]/10 rounded-2xl p-8 bg-[#F6F3EC]"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-[#2563EB] mb-3">
                {office.label}
              </p>
              <p className="text-[#1E3A8A]/70 mb-2">{office.address}</p>
              {office.phone && (
                <p className="font-semibold">{office.phone}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#1E3A8A]/50 mt-10">
          Prefer to explore first?{" "}
          <Link href="/" className="text-[#2563EB] font-medium hover:underline">
            Back to home
          </Link>
        </p>
      </section>
    </>
  );
}
