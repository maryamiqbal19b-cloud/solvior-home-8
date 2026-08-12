export type ServiceItem = {
  slug: string;
  n: string;
  title: string;
  copy: string;
  longCopy: string;
  image: string;
  icon: "orbit" | "grid" | "person" | "gear" | "pie" | "bolt";
};

export const SERVICES_FULL: ServiceItem[] = [
  {
    slug: "business-process-optimization",
    n: "01",
    title: "Business process optimization",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    longCopy:
      "We map how work actually flows through your organization — every handoff, approval, and bottleneck — then redesign the process around what truly moves the needle. The result is fewer steps, faster cycle times, and a team that spends more energy on the work that matters.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    icon: "orbit",
  },
  {
    slug: "strategic-planning-execution",
    n: "02",
    title: "Strategic planning & execution",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    longCopy:
      "A plan is only as good as the calendar behind it. We work with your leadership team to set clear priorities, then build the roadmap, milestones, and accountability structure that turn strategy into results — not just a slide deck that gets shelved.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    icon: "grid",
  },
  {
    slug: "leadership-executive-coaching",
    n: "03",
    title: "Leadership executive coaching",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    longCopy:
      "One-on-one coaching for the people whose decisions move the whole organization. We help executives sharpen judgment, communicate with clarity, and lead through change with confidence — grounded in real business context, not generic frameworks.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    icon: "person",
  },
  {
    slug: "legacy-leadership-institute",
    n: "04",
    title: "Legacy leadership institute",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    longCopy:
      "Structured succession planning so institutional knowledge doesn't walk out the door. We identify future leaders early, build development paths around them, and create the documentation and mentorship structures that protect what your organization has built.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    icon: "gear",
  },
  {
    slug: "executive-growth-solutions",
    n: "05",
    title: "Executive growth solutions",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    longCopy:
      "Scaling playbooks for leadership teams heading into their next stage of growth. From org design to hiring plans to performance systems, we help you build the operating foundation that keeps pace as headcount and complexity increase.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    icon: "pie",
  },
  {
    slug: "empowered-leadership-journey",
    n: "06",
    title: "Empowered leadership journey",
    copy: "In today's dynamic business environment, the key to success lies in strategic planning and operational excellence.",
    longCopy:
      "A guided development track for rising managers stepping into bigger roles. We combine coaching, peer learning, and applied projects so new leaders build real capability — not just theory — before the stakes get higher.",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1200&q=80",
    icon: "bolt",
  },
];
