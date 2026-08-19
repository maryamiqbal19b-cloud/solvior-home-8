import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NEWS } from "../components/data";
import { BlogSidebar } from "../components/BlogSidebar";

export const metadata: Metadata = {
  title: "Blog Sidebar — Solvior",
  description: "Tips, insights, and news from the Solvior consulting team.",
};

export default function BlogSidebarPage() {
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
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-5">Blog sidebar</h1>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 text-sm">
            <Link href="/" className="hover:text-[#60A5FA] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Blog sidebar</span>
          </div>
        </div>
      </section>

      {/* Blog list + sidebar */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
          {/* Main list */}
          <div className="flex flex-col gap-8">
            {NEWS.map((post) => (
              <article
                key={post.slug}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 overflow-hidden bg-white"
              >
                <div className="relative h-64 md:h-full">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#0B1B33] text-white text-center px-4 py-3">
                    <div className="text-2xl font-bold leading-none">{post.day}</div>
                    <div className="text-xs tracking-wider mt-1">{post.month}</div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="border border-gray-300 text-[#0B1B33]/70 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.cat}
                    </span>
                    <span className="text-[#0B1B33]/40 text-xs">03 Comments</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0B1B33] mb-4 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#0B1B33]/60 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-3 bg-[#0B1B33] text-white pl-2 pr-6 py-2 rounded-full font-semibold hover:bg-[#1E3A8A] transition-colors group w-fit"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    Read more
                  </Link>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#0B1B33]/50 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-semibold">01</button>
              <button className="w-10 h-10 rounded-full border border-gray-300 text-[#0B1B33]/70 font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">02</button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#0B1B33]/50 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <BlogSidebar />
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
