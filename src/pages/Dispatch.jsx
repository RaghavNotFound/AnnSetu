import { Search, Plus, Truck, MapPin } from "lucide-react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import dashboardService from "../services/dashboardService";

const statusConfig = {
  "in-transit": { bg: "#FFF3E0", color: "#E65100", label: "In Transit" },
  delivered: { bg: "#E8F5E9", color: "#2D5A27", label: "Delivered" },
};

export default function Dispatch() {
  const { data, loading } = useFetch(() => dashboardService.getDispatchEntries());
  const [search, setSearch] = useState("");

  if (loading || !data) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div className="bg-white rounded-xl border border-gray-200 animate-pulse" style={{ padding: "22px 24px", height: 500 }} />
      </div>
    );
  }

  const filtered = data.filter(
    (e) =>
      e.id.toLowerCase().includes(search.toLowerCase()) ||
      e.farmer.toLowerCase().includes(search.toLowerCase()) ||
      e.buyer.toLowerCase().includes(search.toLowerCase())
  );

  const inTransit = data.filter((e) => e.status === "in-transit").length;
  const delivered = data.filter((e) => e.status === "delivered").length;
  const totalDispatched = data.reduce((s, e) => s + parseFloat(e.weight), 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { label: "In Transit", value: inTransit },
          { label: "Delivered", value: delivered },
          { label: "Total Dispatched", value: `${totalDispatched} MT` },
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
          <h2 style={{ fontSize: 17 }} className="font-semibold text-gray-900">Dispatch Entries</h2>
          <div className="flex items-center" style={{ gap: 12 }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search dispatches..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20"
                style={{ paddingLeft: 40, paddingRight: 16, paddingTop: 9, paddingBottom: 9, width: 240 }}
              />
            </div>
            <button className="flex items-center gap-2 bg-[#2D5A27] text-white rounded-lg font-medium hover:bg-[#234a1f] transition-colors" style={{ padding: "9px 18px", fontSize: 14 }}>
              <Plus className="w-4 h-4" /> New Dispatch
            </button>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr className="border-b border-gray-200">
                {["Dispatch ID", "Date", "Farmer", "Buyer", "Commodity", "Bags / Weight", "Destination", "Vehicle", "Status"].map((h) => (
                  <th key={h} className="text-left font-semibold text-gray-400 uppercase tracking-wider" style={{ padding: "10px 10px", fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((entry) => {
                const sc = statusConfig[entry.status] || statusConfig.delivered;
                return (
                  <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                    <td style={{ padding: "14px 10px" }}>
                      <div className="flex items-center" style={{ gap: 6 }}>
                        <Truck className="w-4 h-4 text-blue-600" />
                        <span style={{ fontSize: 13 }} className="font-medium text-blue-600">{entry.id}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-600">{entry.date}</td>
                    <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-700 font-medium">{entry.farmer}</td>
                    <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-700 font-medium">{entry.buyer}</td>
                    <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-600">{entry.commodity}</td>
                    <td style={{ padding: "14px 10px", fontSize: 14 }} className="font-semibold text-gray-900">{entry.bags} bags / {entry.weight}</td>
                    <td style={{ padding: "14px 10px" }}>
                      <div className="flex items-center" style={{ gap: 4 }}>
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        <span style={{ fontSize: 13 }} className="text-gray-600">{entry.destination}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-600">{entry.vehicle}</td>
                    <td style={{ padding: "14px 10px" }}>
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
