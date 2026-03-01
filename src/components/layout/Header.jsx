import {
  Search,
  Bell,
  Users,
  ChevronDown,
  Snowflake,
} from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Left - Location */}
      <div className="flex items-center gap-2">
        <Snowflake className="w-5 h-5 text-[#2D5A27]" />
        <h1 className="text-base font-semibold text-gray-900">
          <span className="font-bold">Manjula</span> Cold Storage – Agra
        </h1>
      </div>

      {/* Center - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20 focus:border-[#2D5A27]/40 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 4h12v1H2V4zm0 4h8v1H2V8zm0 4h10v1H2v-1z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-3">
        {/* Notification Bell */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5 text-gray-500" />
        </button>

        {/* Users */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Users className="w-5 h-5 text-gray-500" />
        </button>

        {/* Notification with badge */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5 text-gray-500" />
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            1
          </span>
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-[#2D5A27] flex items-center justify-center text-white font-semibold text-sm cursor-pointer hover:ring-2 hover:ring-[#2D5A27]/30 transition-all">
          M
        </div>
      </div>
    </header>
  );
}
