import { Bell, Users } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-[10%] pt-4">
      <div className="h-16 bg-white rounded-xl shadow-sm flex items-center justify-between px-6">
        {/* Left Section (empty for balance) */}
        <div className="w-40" />

        {/* Center – Cold Storage Name */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-black/10 flex items-center justify-center">
            <span className="text-black font-bold text-sm">M</span>
          </div>
          <div>
            <h1 className="text-black font-bold text-sm leading-tight">Manjula</h1>
            <p className="text-black/60 text-[11px] tracking-wide">Cold Storage – Agra</p>
          </div>
        </div>

        {/* Right Section – Profile & Notifications */}
        <div className="w-40 flex items-center justify-end gap-5">
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
      </div>
    </header>
  );
}
