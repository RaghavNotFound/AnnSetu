import { Search, Filter, Download, Package } from "lucide-react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import dashboardService from "../services/dashboardService";

const statusConfig = {
  fresh: { bg: "#E8F5E9", color: "#2D5A27", label: "Fresh" },
  good: { bg: "#E3F2FD", color: "#1565C0", label: "Good" },
  warning: { bg: "#FFF3E0", color: "#E65100", label: "Warning" },
  aging: { bg: "#FFEBEE", color: "#C62828", label: "Aging" },
};

export default function Inventory() {
  const { data, loading } = useFetch(() => dashboardService.getInventory());
  const [search, setSearch] = useState("");

  if (loading || !data) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div className="bg-white rounded-xl border border-gray-200 animate-pulse" style={{ padding: "22px 24px", height: 500 }} />
      </div>
    );
  }

  const filtered = data.filter(
    (item) =>
      item.commodity.toLowerCase().includes(search.toLowerCase()) ||
      item.farmer.toLowerCase().includes(search.toLowerCase()) ||
      item.room.toLowerCase().includes(search.toLowerCase())
  );

  const totalWeight = data.reduce((s, i) => s + parseFloat(i.weight), 0);
  const totalBags = data.reduce((s, i) => s + i.bags, 0);
  const agingCount = data.filter((i) => i.status === "aging" || i.status === "warning").length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {[
          { label: "Total Stock", value: `${totalWeight} MT` },
          { label: "Total Bags", value: totalBags.toLocaleString("en-IN") },
          { label: "Items Tracked", value: data.length },
          { label: "Aging Alerts", value: agingCount },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "20px 22px" }}>
            <p style={{ fontSize: 11, marginBottom: 8 }} className="font-semibold text-gray-400 uppercase tracking-wider">{s.label}</p>
            <span style={{ fontSize: 28 }} className="font-bold text-gray-900">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "22px 24px" }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 17 }} className="font-semibold text-gray-900">Inventory Details</h2>
          <div className="flex items-center" style={{ gap: 10 }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search inventory..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20"
                style={{ paddingLeft: 40, paddingRight: 16, paddingTop: 9, paddingBottom: 9, width: 240 }}
              />
            </div>
            <button className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors" style={{ padding: "9px 14px", fontSize: 13 }}>
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors" style={{ padding: "9px 14px", fontSize: 13 }}>
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr className="border-b border-gray-200">
                {["Commodity", "Variety", "Farmer", "Room / Rack", "Bags", "Weight", "Age", "Status"].map((h) => (
                  <th key={h} className="text-left font-semibold text-gray-400 uppercase tracking-wider" style={{ padding: "10px 12px", fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => {
                const sc = statusConfig[item.status] || statusConfig.good;
                return (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                    <td style={{ padding: "14px 12px" }}>
                      <div className="flex items-center" style={{ gap: 8 }}>
                        <Package className="w-4 h-4 text-[#2D5A27]" />
                        <span style={{ fontSize: 14 }} className="font-medium text-gray-900">{item.commodity}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px 12px", fontSize: 13 }} className="text-gray-600">{item.variety}</td>
                    <td style={{ padding: "14px 12px", fontSize: 13 }} className="text-gray-700 font-medium">{item.farmer}</td>
                    <td style={{ padding: "14px 12px", fontSize: 13 }} className="text-gray-600">{item.room} / {item.rack}</td>
                    <td style={{ padding: "14px 12px", fontSize: 14 }} className="font-semibold text-gray-900">{item.bags}</td>
                    <td style={{ padding: "14px 12px", fontSize: 14 }} className="font-semibold text-gray-900">{item.weight}</td>
                    <td style={{ padding: "14px 12px", fontSize: 13 }} className="text-gray-600">{item.age} days</td>
                    <td style={{ padding: "14px 12px" }}>
                      <span className="rounded-full font-medium" style={{ fontSize: 12, padding: "4px 12px", backgroundColor: sc.bg, color: sc.color }}>
                        {sc.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
