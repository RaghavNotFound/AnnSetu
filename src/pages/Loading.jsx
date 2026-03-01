import { Search, Plus, PackagePlus, CheckCircle } from "lucide-react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import dashboardService from "../services/dashboardService";

export default function Loading() {
  const { data, loading } = useFetch(() => dashboardService.getLoadingEntries());
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
      e.commodity.toLowerCase().includes(search.toLowerCase())
  );

  const todayEntries = data.filter((e) => e.date === "2025-03-01").length;
  const totalBags = data.reduce((s, e) => s + e.bags, 0);
  const totalWeight = data.reduce((s, e) => s + parseFloat(e.weight), 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { label: "Today's Entries", value: todayEntries },
          { label: "Total Bags Loaded", value: totalBags },
          { label: "Total Weight", value: `${totalWeight} MT` },
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
          <h2 style={{ fontSize: 17 }} className="font-semibold text-gray-900">Loading Entries</h2>
          <div className="flex items-center" style={{ gap: 12 }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search entries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20"
                style={{ paddingLeft: 40, paddingRight: 16, paddingTop: 9, paddingBottom: 9, width: 240 }}
              />
            </div>
            <button className="flex items-center gap-2 bg-[#2D5A27] text-white rounded-lg font-medium hover:bg-[#234a1f] transition-colors" style={{ padding: "9px 18px", fontSize: 14 }}>
              <Plus className="w-4 h-4" /> New Entry
            </button>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr className="border-b border-gray-200">
                {["Entry ID", "Date", "Farmer", "Commodity", "Bags", "Weight", "Room / Rack", "Vehicle", "Gate Pass", "Status"].map((h) => (
                  <th key={h} className="text-left font-semibold text-gray-400 uppercase tracking-wider" style={{ padding: "10px 10px", fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((entry) => (
                <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                  <td style={{ padding: "14px 10px" }}>
                    <div className="flex items-center" style={{ gap: 6 }}>
                      <PackagePlus className="w-4 h-4 text-[#2D5A27]" />
                      <span style={{ fontSize: 13 }} className="font-medium text-[#2D5A27]">{entry.id}</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-600">{entry.date}</td>
                  <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-700 font-medium">{entry.farmer}</td>
                  <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-600">{entry.commodity} ({entry.variety})</td>
                  <td style={{ padding: "14px 10px", fontSize: 14 }} className="font-semibold text-gray-900">{entry.bags}</td>
                  <td style={{ padding: "14px 10px", fontSize: 14 }} className="font-semibold text-gray-900">{entry.weight}</td>
                  <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-600">{entry.room} / {entry.rack}</td>
                  <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-600">{entry.vehicle}</td>
                  <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-600">{entry.gatePass}</td>
                  <td style={{ padding: "14px 10px" }}>
                    <div className="flex items-center" style={{ gap: 4 }}>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span style={{ fontSize: 12, color: "#2D5A27" }} className="font-medium">{entry.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
