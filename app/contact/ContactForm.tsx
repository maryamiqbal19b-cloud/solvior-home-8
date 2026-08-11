"use client";

const SUBJECT_OPTIONS = ["General inquiry", "Business consulting", "Leadership coaching", "Partnership"];

export function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
      <div className="flex flex-col">
        <label className="text-sm text-[#0B1B33]/50 mb-1">Full name*</label>
        <input type="text" required className="border-b border-[#0B1B33]/15 py-2 focus:outline-none focus:border-[#2563EB] bg-transparent" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-[#0B1B33]/50 mb-1">Email address*</label>
        <input type="email" required className="border-b border-[#0B1B33]/15 py-2 focus:outline-none focus:border-[#2563EB] bg-transparent" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-[#0B1B33]/50 mb-1">Phone number*</label>
        <input type="tel" required className="border-b border-[#0B1B33]/15 py-2 focus:outline-none focus:border-[#2563EB] bg-transparent" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-[#0B1B33]/50 mb-1">Choose an option</label>
        <select className="border-b border-[#0B1B33]/15 py-2 focus:outline-none focus:border-[#2563EB] bg-transparent text-[#0B1B33]">
          {SUBJECT_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col sm:col-span-2">
        <label className="text-sm text-[#0B1B33]/50 mb-1">Type message</label>
        <textarea rows={3} className="border-b border-[#0B1B33]/15 py-2 focus:outline-none focus:border-[#2563EB] bg-transparent resize-none" />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-3 bg-[#0B1B33] text-white pl-2 pr-6 py-2 rounded-full font-semibold hover:bg-[#152a4d] transition-colors"
        >
          <span className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          Send message
        </button>
      </div>
    </form>
  );
}
