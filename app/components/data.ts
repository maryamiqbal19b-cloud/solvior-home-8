export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolios", href: "/portfolios" },
  { label: "Pricing", href: "/pricing" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/contact" },
];

// Mobile menu uses a grouped structure: some items are direct links,
// "Pages" is expandable (arrow toggles a sub-list) like the demo.
export const MOBILE_NAV = [
  { label: "Home", href: "/" },
  {
    label: "Pages",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Pricing Plan", href: "/pricing" },
      { label: "Team", href: "/#team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const CORE_FEATURES = [
  {
    title: "Quick Solutions",
    copy: "We move fast on the problems that are costing you money today, without skipping the diagnosis.",
    path: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Expert Advice",
    copy: "Every recommendation is signed by a consultant who has actually run the function you're fixing.",
    path: "M9.663 17h4.673M12 3v1m0 16v1m8-9h1M3 12H2m15.364-6.364l.707-.707M5.929 18.071l-.707.707M18.364 18.364l.707.707M5.929 5.929l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Strategic Planning",
    copy: "We build the roadmap and stay on the hook for it — quarter by quarter, not slide by slide.",
    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Efficient Operations",
    copy: "We tighten the processes underneath the strategy so the gains actually stick.",
    path: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];

export const SERVICES = [
  { n: "01", title: "Business Process Optimization", copy: "We map how work actually flows through your org, then cut the steps that don't earn their keep." },
  { n: "02", title: "Strategic Planning & Execution", copy: "A plan is only as good as the calendar behind it. We build both, together." },
  { n: "03", title: "Leadership Executive Coaching", copy: "One-on-one work with the people whose decisions move the whole organization." },
  { n: "04", title: "Legacy Leadership Institute", copy: "Structured succession planning so institutional knowledge doesn't walk out the door." },
  { n: "05", title: "Executive Growth Solutions", copy: "Scaling playbooks for leadership teams heading into their next stage of growth." },
];

export const PROCESS = [
  { n: "01", title: "Diagnosis & Research", copy: "We dive into your business, uncovering strengths, bottlenecks, and hidden opportunity through structured workshops." },
  { n: "02", title: "Tailored Business Planning", copy: "With a clear picture of where you stand, we build a strategy aligned to your goals — scaling, entering markets, or both." },
  { n: "03", title: "Execution & Support", copy: "We work beside your team to implement the strategy, from hands-on delivery to ongoing performance tracking." },
];

export const PRICING = [
  {
    tier: "Basic",
    blurb: "Perfect for a small team",
    monthly: 20,
    yearly: 16,
    features: ["In-depth consultation sessions", "Standard business performance package", "Quick email support"],
    highlight: false,
  },
  {
    tier: "Business",
    blurb: "Perfect for a medium team",
    monthly: 40,
    yearly: 32,
    features: ["Monthly strategic check-in & review", "Progress reviews & performance optimization", "Priority access to consulting", "24/7 dedicated business support"],
    highlight: true,
  },
  {
    tier: "Enterprise",
    blurb: "Perfect for a large team",
    monthly: 80,
    yearly: 64,
    features: ["Full dedicated consultant", "24/7 dedicated business support", "Custom monthly reports"],
    highlight: false,
  },
];

export const PROJECTS = [
  { title: "Innovate Consultancy", tags: ["Strategy", "Growth"], img: "/h8-project-1.webp" },
  { title: "Strat Edge Solutions", tags: ["Strategy", "Growth"], img: "/h8-project-2.webp" },
  { title: "Prime Strategy Partners", tags: ["Strategy", "Growth"], img: "/h8-project-3.webp" },
  { title: "Elevate Enterprise", tags: ["Strategy", "Growth"], img: "/h8-project-4.webp" },
];

export const TEAM = [
  { name: "Savanah Nguyen", role: "Manager", img: "/team-1.webp" },
  { name: "Esther Howard", role: "Co. Founder", img: "/team-2.webp" },
  { name: "Kristin Watson", role: "Sr. Manager", img: "/team-3.webp" },
  { name: "Guy Hawkins", role: "Sr. Marketer", img: "/team-4.webp" },
];

export const TESTIMONIALS = [
  { name: "Natalie Harry", role: "Sr. Executive", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", quote: "Solvior gave us a plan we could actually run — not another deck that sat in a drawer. The team understood our industry within the first week." },
  { name: "Burdee Nicolas", role: "Business Owner", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80", quote: "What stood out was the follow-through. Every recommendation came with an owner, a date, and a way to measure it." },
  { name: "Michael Desouza", role: "Sr. Manager", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", quote: "They identified inefficiencies we'd stopped noticing after years of working around them. The efficiency gains were immediate." },
];

export const NEWS = [
  { cat: "Branding", date: "Jul 28, 2026", title: "Innovative solutions for business success", img: "https://images.unsplash.com/photo-1745015446589-7ee6f702d8c1?w=700&q=80" },
  { cat: "Business", date: "Nov 06, 2025", title: "What consultants should know about nonprofits", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80" },
  { cat: "Consulting", date: "Aug 24, 2025", title: "Why every entrepreneur needs a real digital strategy", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" },
];

export const KEYWORDS = ["Expertise", "Consulting", "Business", "Growth"];
