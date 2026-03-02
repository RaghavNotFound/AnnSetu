"use client";

import { Search, Plus, Phone, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useFetch from "../hooks/useFetch";
import dashboardService from "../services/dashboardService";

export default function Farmers() {
  const router = useRouter();
  const { data, loading } = useFetch(() => dashboardService.getFarmers());
  const [search, setSearch] = useState("");

  if (loading || !data) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div className="bg-white rounded-xl border border-gray-200 animate-pulse" style={{ padding: "22px 24px", height: 400 }} />
      </div>
    );
  }

  const filtered = data.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.village.toLowerCase().includes(search.toLowerCase())
  );

  const totalFarmers = data.length;
  const activeFarmers = data.filter((f) => f.status === "active").length;
  const totalPending = data.reduce((s, f) => s + f.pendingRent, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { label: "Total Farmers", value: totalFarmers },
          { label: "Active Farmers", value: activeFarmers },
          { label: "Pending Rent", value: `₹${totalPending.toLocaleString("en-IN")}` },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "20px 22px" }}>
            <p style={{ fontSize: 11, marginBottom: 8 }} className="font-semibold text-gray-400 uppercase tracking-wider">{s.label}</p>
            <span style={{ fontSize: 28 }} className="font-bold text-gray-900">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Search + Add */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "22px 24px" }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 17 }} className="font-semibold text-gray-900">All Farmers</h2>
          <div className="flex items-center" style={{ gap: 12 }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search farmers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20"
                style={{ paddingLeft: 40, paddingRight: 16, paddingTop: 9, paddingBottom: 9, width: 260 }}
              />
            </div>
            <button onClick={() => router.push("/farmers/addfarmer")} className="flex items-center gap-2 bg-[#2D5A27] text-white rounded-lg font-medium hover:bg-[#234a1f] transition-colors" style={{ padding: "9px 18px", fontSize: 14 }}>
              <Plus className="w-4 h-4" /> Add Farmer
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr className="border-b border-gray-200">
                {["Name", "Village", "Phone", "Stock", "Rooms", "Pending Rent", "Status", ""].map((h) => (
                  <th key={h} className="text-left font-semibold text-gray-400 uppercase tracking-wider" style={{ padding: "10px 12px", fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((farmer) => (
                <tr key={farmer.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                  <td style={{ padding: "14px 12px" }}>
                    <span style={{ fontSize: 14 }} className="font-medium text-gray-900">{farmer.name}</span>
                  </td>
                  <td style={{ padding: "14px 12px" }}>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span style={{ fontSize: 13 }} className="text-gray-600">{farmer.village}</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 12px" }}>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-gray-400" />
                      <span style={{ fontSize: 13 }} className="text-gray-600">{farmer.phone}</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 12px" }}>
                    <span style={{ fontSize: 14 }} className="font-semibold text-gray-900">{farmer.totalStock}</span>
                  </td>
                  <td style={{ padding: "14px 12px" }}>
                    <span style={{ fontSize: 13 }} className="text-gray-600">{farmer.rooms}</span>
                  </td>
                  <td style={{ padding: "14px 12px" }}>
                    <span style={{ fontSize: 14 }} className={`font-semibold ${farmer.pendingRent > 0 ? "text-red-600" : "text-green-600"}`}>
                      {farmer.pendingRent > 0 ? `₹${farmer.pendingRent.toLocaleString("en-IN")}` : "Nil"}
                    </span>
                  </td>
                  <td style={{ padding: "14px 12px" }}>
                    <span
                      className="rounded-full font-medium"
                      style={{
                        fontSize: 12,
                        padding: "4px 12px",
                        backgroundColor: farmer.status === "active" ? "#E8F5E9" : "#FFF3E0",
                        color: farmer.status === "active" ? "#2D5A27" : "#E65100",
                      }}
                    >
                      {farmer.status}
                    </span>
                  </td>
                  <td style={{ padding: "14px 12px" }}>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
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
