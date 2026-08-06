import { Eyebrow } from "./Reveal";

const BLOG_IMAGES = ["/blog-thumb-1.webp", "/h2-blog-2.webp", "/h2-blog-3.webp"];

const POSTS = [
  {
    day: "28",
    month: "JUL",
    category: "Branding",
    title: "Innovative solutions for business success dynamic",
    excerpt:
      "In today dynamic business environment, the key to success lies. In today dnamic business environment.",
  },
  {
    day: "06",
    month: "NOV",
    category: "Business",
    title: "What consultants should know about working with nonprofits",
    excerpt:
      "In today dynamic business environment, the key to success lies. In today dnamic business environment.",
  },
  {
    day: "24",
    month: "AUG",
    category: "Consulting",
    title: "Why every entrepreneur needs a real digital strategy",
    excerpt:
      "In today dynamic business environment, the key to success lies. In today dnamic business environment.",
  },
];

export function Blog() {
  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <div className="text-center mb-16">
        <Eyebrow>Latest News</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0B1B33]">
          Tips and tricks for success
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {POSTS.map((post, i) => (
          <div
            key={post.title}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 overflow-hidden bg-white"
          >
            {/* Image with date badge */}
            <div className="relative h-64 md:h-full">
              <img
                src={BLOG_IMAGES[i % BLOG_IMAGES.length]}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0B1B33] text-white text-center px-4 py-3">
                <div className="text-2xl font-bold leading-none">{post.day}</div>
                <div className="text-xs tracking-wider mt-1">{post.month}</div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="border border-gray-300 text-[#0B1B33]/70 text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-[#0B1B33]/40 text-xs">03 Comments</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#0B1B33] mb-4 leading-snug">
                {post.title}
              </h3>
              <p className="text-[#0B1B33]/60 text-sm leading-relaxed mb-6 max-w-md">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-3 bg-[#0B1B33] text-white pl-2 pr-6 py-2 rounded-full font-semibold hover:bg-[#1E3A8A] transition-colors group w-fit">
                <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}