export function TopBar() {
  return (
    <div className="w-full bg-[#2563EB] text-white text-sm px-6 md:px-10 py-2 flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span>Trusted partner in business excellence</span>
        <a href="#" className="underline font-medium">Join us now</a>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <span>Mon - Friday : 9:00 - 18:00</span>
        <span>support@solvior.com</span>
        <span>+1 (009) 544-7818</span>
      </div>
    </div>
  );
}