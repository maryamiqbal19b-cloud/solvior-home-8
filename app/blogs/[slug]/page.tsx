import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS } from "../../components/data";
import { BlogSidebar } from "../../components/BlogSidebar";
import { BlogDetailReveal } from "./BlogDetailReveal";

function getPost(slug: string) {
  const bySlug = NEWS.find((p) => p.slug === slug);
  if (bySlug) return bySlug;

  const asIndex = Number(slug);
  if (Number.isInteger(asIndex) && asIndex >= 1 && asIndex <= NEWS.length) {
    return NEWS[asIndex - 1];
  }
  return undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog — Solvior" };
  return {
    title: `${post.title} — Solvior`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return NEWS.map((post) => ({ slug: post.slug })).concat(
    NEWS.map((_, i) => ({ slug: String(i + 1) }))
  );
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const otherPosts = NEWS.filter((p) => p.slug !== post.slug).slice(0, 2);

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
        <div className="relative max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-5">{post.title}</h1>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 text-sm">
            <Link href="/" className="hover:text-[#60A5FA] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-[#60A5FA] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/70">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Blog detail + sidebar */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
          {/* Main content */}
          <div>
            <BlogDetailReveal>
              <div className="relative h-72 md:h-[420px] mb-8 overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6 bg-[#0B1B33] text-white text-center px-4 py-3">
                  <div className="text-2xl font-bold leading-none">{post.day}</div>
                  <div className="text-xs tracking-wider mt-1">{post.month}</div>
                </div>
              </div>
            </BlogDetailReveal>

            <BlogDetailReveal delay={80}>
              <div className="flex flex-wrap items-center gap-5 mb-6 text-sm text-[#0B1B33]/50">
                <span className="border border-gray-300 text-[#0B1B33]/70 text-xs font-semibold px-3 py-1 rounded-full">
                  {post.cat}
                </span>
                <span>{post.date}</span>
                <span>By Admin</span>
                <span>03 Comments</span>
              </div>
            </BlogDetailReveal>

            <BlogDetailReveal delay={120}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1B33] mb-6 leading-snug">
                {post.title}
              </h2>
            </BlogDetailReveal>

            <BlogDetailReveal delay={160}>
              <div className="text-[#0B1B33]/70 text-base leading-relaxed space-y-5">
                <p>
                  In today&rsquo;s dynamic business environment, the key to success lies in
                  strategic planning. {post.excerpt} Companies that invest early in a clear
                  roadmap consistently outperform those that improvise, because every decision
                  downstream has something firm to check itself against.
                </p>
                <p>
                  Our consultants work alongside your leadership team to diagnose the real
                  bottlenecks, not just the symptoms. That means structured workshops, direct
                  access to operational data, and a willingness to challenge assumptions that
                  have gone unexamined for years.
                </p>

                <blockquote className="border-l-4 border-[#2563EB] pl-6 py-2 italic text-[#0B1B33] text-lg">
                  &ldquo;A strategy is only as strong as the team&rsquo;s willingness to execute
                  it consistently, quarter after quarter.&rdquo;
                </blockquote>

                <p>
                  From there, we build a tailored plan with clear owners and measurable
                  milestones, then stay on the hook for delivery &mdash; not just the slide deck.
                  The result is a business that moves with intention instead of reacting to
                  whatever comes next.
                </p>
              </div>
            </BlogDetailReveal>

            {/* Tags + share */}
            <BlogDetailReveal delay={200}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-10 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-[#0B1B33] mr-1">Tags:</span>
                  {["Consulting", "Growth", post.cat].map((tag) => (
                    <span
                      key={tag}
                      className="border border-gray-300 text-[#0B1B33]/70 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#0B1B33]">Share:</span>
                  {["f", "tw", "in", "ig"].map((s) => (
                    <span
                      key={s}
                      className="w-9 h-9 rounded-full bg-[#0B1B33]/5 hover:bg-[#2563EB] hover:text-white flex items-center justify-center text-xs font-bold text-[#0B1B33] transition-colors cursor-pointer"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </BlogDetailReveal>

            {/* Next / prev posts */}
            {otherPosts.length > 0 && (
              <BlogDetailReveal delay={240}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                  {otherPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blogs/${p.slug}`}
                      className="group flex gap-4 border border-gray-200 p-4"
                    >
                      <img src={p.img} alt={p.title} className="w-20 h-20 object-cover shrink-0" />
                      <div>
                        <p className="text-xs text-[#0B1B33]/40 mb-1">{p.date}</p>
                        <p className="text-sm font-semibold text-[#0B1B33] leading-snug group-hover:text-[#2563EB] transition-colors">
                          {p.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </BlogDetailReveal>
            )}

            {/* Comment form */}
            <BlogDetailReveal delay={280}>
              <div className="mt-14 pt-10 border-t border-gray-200">
                <h3 className="font-display text-xl font-bold text-[#0B1B33] mb-6">
                  Leave a comment
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="border border-gray-300 rounded-full px-5 py-3 text-sm outline-none focus:border-[#2563EB]"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="border border-gray-300 rounded-full px-5 py-3 text-sm outline-none focus:border-[#2563EB]"
                  />
                </div>
                <textarea
                  placeholder="Write your comment..."
                  rows={5}
                  className="w-full border border-gray-300 rounded-2xl px-5 py-3 text-sm outline-none focus:border-[#2563EB] mb-5"
                />
                <button className="inline-flex items-center gap-3 bg-[#0B1B33] text-white pl-6 pr-2 py-2 rounded-full font-semibold hover:bg-[#1E3A8A] transition-colors">
                  Post comment
                  <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </BlogDetailReveal>
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
