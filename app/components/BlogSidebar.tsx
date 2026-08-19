import Link from "next/link";
import { NEWS, KEYWORDS } from "./data";

const CATEGORIES = [
  { label: "Branding", count: 6 },
  { label: "Business", count: 4 },
  { label: "Consulting", count: 8 },
  { label: "Innovations", count: 3 },
  { label: "Managements", count: 5 },
  { label: "Marketing", count: 7 },
];

export function BlogSidebar() {
  return (
    <aside className="flex flex-col gap-8">
      {/* Search */}
      <div className="border border-gray-200 p-6">
        <div className="flex items-center bg-[#F6F3EC] rounded-full px-5 py-3">
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none flex-1 text-sm text-[#0B1B33] placeholder-[#0B1B33]/40"
          />
          <button aria-label="Search">
            <svg className="w-4 h-4 text-[#0B1B33]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="border border-gray-200 p-6">
        <h4 className="font-display text-lg font-bold text-[#0B1B33] mb-5">Categories</h4>
        <ul className="flex flex-col gap-3">
          {CATEGORIES.map((c) => (
            <li key={c.label}>
              <button className="w-full flex items-center justify-between text-sm text-[#0B1B33]/70 hover:text-[#2563EB] transition-colors">
                <span>{c.label}</span>
                <span className="text-[#0B1B33]/40">({c.count})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent posts */}
      <div className="border border-gray-200 p-6">
        <h4 className="font-display text-lg font-bold text-[#0B1B33] mb-5">Recent posts</h4>
        <div className="flex flex-col gap-4">
          {NEWS.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="flex gap-3 group">
              <img
                src={post.img}
                alt={post.title}
                className="w-16 h-16 object-cover shrink-0 rounded"
              />
              <div>
                <p className="text-xs text-[#0B1B33]/40 mb-1">{post.date}</p>
                <p className="text-sm font-semibold text-[#0B1B33] leading-snug group-hover:text-[#2563EB] transition-colors">
                  {post.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="border border-gray-200 p-6">
        <h4 className="font-display text-lg font-bold text-[#0B1B33] mb-5">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {[...KEYWORDS, "Strategy", "Finance", "Leadership", "Digital"].map((tag) => (
            <button
              key={tag}
              className="border border-gray-300 text-[#0B1B33]/70 text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#0B1B33] hover:text-white hover:border-[#0B1B33] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0B1B33] text-white p-8 text-center">
        <h4 className="font-display text-xl font-bold mb-3">Need expert advice?</h4>
        <p className="text-white/60 text-sm mb-6">
          Talk to a Solvior consultant about your business challenges today.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-[#2563EB] text-white pl-6 pr-2 py-2 rounded-full font-semibold hover:bg-[#1D4ED8] transition-colors"
        >
          Contact us
          <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>
      </div>
    </aside>
  );
}
