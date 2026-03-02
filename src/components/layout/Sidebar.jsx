"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Warehouse,
  PackagePlus,
  Truck,
  CreditCard,
  BarChart3,
  Wifi,
  Settings,
  Leaf,
} from "lucide-react";
import { sidebarMenuItems } from "../../data/mockData";

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  users: Users,
  warehouse: Warehouse,
  "package-plus": PackagePlus,
  truck: Truck,
  "credit-card": CreditCard,
  "bar-chart-3": BarChart3,
  wifi: Wifi,
  settings: Settings,
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="fixed left-0 top-0 h-screen bg-[#33cc33] flex flex-col z-50"
      style={{ width: 220 }}
    >
      {/* Logo */}
      <div
        style={{ padding: "28px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        className="flex items-center justify-center gap-3"
      >
        <div
          className="rounded-full flex items-center justify-center p-2"
          style={{ width: 44, height: 44, backgroundColor: "rgba(255,255,255,0.0)" }}
        >
          <img src="/ann-setu-logo.svg" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <span className="text-black font-bold text-lg tracking-tight">
          Ann Setu
        </span>
      </div>

      {/* Navigation */}
      <nav
        className="flex-1 overflow-y-auto"
        style={{ padding: "32px 20px" }}
      >
        <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {sidebarMenuItems.map((item) => {
            const Icon = iconMap[item.icon] || LayoutDashboard;
            const isActive =
              pathname === item.path ||
              (item.path !== "/" && pathname.startsWith(item.path));
            const isDashboardActive =
              item.path === "/" && pathname === "/";
            const active = isActive || isDashboardActive;

            return (
              <li key={item.id}>
                <Link
                  href={item.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 16px",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "all 0.2s",
                    backgroundColor: active ? "rgba(0,0,0,0.15)" : "transparent",
                    color: active ? "#000" : "rgba(0,0,0,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.08)";
                      e.currentTarget.style.color = "#000";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "rgba(0,0,0,0.6)";
                    }
                  }}
                >
                  <Icon style={{ width: 18, height: 18, flexShrink: 0 }} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
