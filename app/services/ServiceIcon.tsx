import type { ServiceItem } from "./data";

export function ServiceIcon({ icon, className = "w-7 h-7" }: { icon: ServiceItem["icon"]; className?: string }) {
  const common = { className, fill: "none" as const, stroke: "currentColor", strokeWidth: 1.8, viewBox: "0 0 24 24" };

  switch (icon) {
    case "orbit":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" d="M12 2c-3 3-3 17 0 20M12 2c3 3 3 17 0 20M2 12h20" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common} strokeWidth={0} fill="currentColor">
          <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
          <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" opacity="0.5" />
          <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" opacity="0.5" />
          <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
        </svg>
      );
    case "person":
      return (
        <svg {...common} strokeWidth={0} fill="currentColor">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7v1H4v-1z" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" />
          <path strokeLinecap="round" d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7 5.6 5.6" />
        </svg>
      );
    case "pie":
      return (
        <svg {...common} strokeWidth={0} fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 2.06A8 8 0 0119.94 11H13V4.06z" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common} strokeWidth={0} fill="currentColor">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    default:
      return null;
  }
}
