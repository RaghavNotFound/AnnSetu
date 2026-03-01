import { NavLink, useLocation } from "react-router-dom";
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
  const location = useLocation();

  return (
    <aside
      className="fixed left-0 top-0 h-screen bg-[#2B3A2B] flex flex-col z-50"
      style={{ width: 220 }}
    >
      {/* Logo */}
      <div
        style={{ padding: "28px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        className="flex items-center justify-center gap-3"
      >
        <div
          className="rounded-full flex items-center justify-center"
          style={{ width: 44, height: 44, backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <Leaf className="text-green-300" style={{ width: 24, height: 24 }} />
        </div>
        <span className="text-white font-bold text-lg tracking-tight">
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
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));
            const isDashboardActive =
              item.path === "/" && location.pathname === "/";
            const active = isActive || isDashboardActive;

            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
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
                    backgroundColor: active ? "rgba(255,255,255,0.15)" : "transparent",
                    color: active ? "#fff" : "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    }
                  }}
                >
                  <Icon style={{ width: 18, height: 18, flexShrink: 0 }} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
