import { Search, Bell, Users } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-[#ffffff] mx-4 rounded-xl px-6 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-black/10 flex items-center justify-center">
          <span className="text-black font-bold text-sm">M</span>
        </div>
        <div>
          <h1 className="text-black font-bold text-sm leading-tight">Manjula</h1>
          <p className="text-black/60 text-[11px] tracking-wide">Cold Storage – Agra</p>
        </div>
      </div>

      {/* Center Search */}
      <div className="flex-1 max-w-lg mx-10">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
          <input
            type="text"
            placeholder="Search chambers, farmers..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/8 text-black text-sm placeholder-black/40 border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/15 focus:bg-black/10 transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <button className="relative p-2 rounded-lg hover:bg-black/10 transition-colors">
          <Users className="w-5 h-5 text-black/70" />
        </button>

        <button className="relative p-2 rounded-lg hover:bg-black/10 transition-colors">
          <Bell className="w-5 h-5 text-black/70" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            1
          </span>
        </button>

        <div className="w-9 h-9 rounded-full bg-black/15 text-black font-bold text-sm flex items-center justify-center cursor-pointer hover:bg-black/20 transition-colors">
          M
        </div>
      </div>
    </header>
  );
}