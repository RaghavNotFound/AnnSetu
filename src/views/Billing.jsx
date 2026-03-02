"use client";

import { Search, Download, IndianRupee, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import dashboardService from "../services/dashboardService";

const statusConfig = {
  paid: { bg: "#E8F5E9", color: "#2D5A27", label: "Paid" },
  pending: { bg: "#FFF3E0", color: "#E65100", label: "Pending" },
  overdue: { bg: "#FFEBEE", color: "#C62828", label: "Overdue" },
};

export default function Billing() {
  const { data, loading } = useFetch(() => dashboardService.getBilling());
  const [search, setSearch] = useState("");

  if (loading || !data) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div className="bg-white rounded-xl border border-gray-200 animate-pulse" style={{ padding: "22px 24px", height: 500 }} />
      </div>
    );
  }

  const { summary, invoices } = data;
  const filtered = invoices.filter(
    (inv) =>
      inv.id.toLowerCase().includes(search.toLowerCase()) ||
      inv.farmer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {[
          { label: "Total Revenue", value: `₹${(summary.totalRevenue / 100000).toFixed(1)}L`, icon: IndianRupee, iconColor: "#2D5A27" },
          { label: "Collected", value: `₹${(summary.totalCollected / 100000).toFixed(1)}L`, icon: CheckCircle, iconColor: "#4CAF50" },
          { label: "Pending", value: `₹${(summary.totalPending / 100000).toFixed(1)}L`, icon: Clock, iconColor: "#E65100" },
          { label: "This Month", value: `₹${(summary.thisMonth / 100000).toFixed(1)}L`, icon: TrendingUp, iconColor: "#1565C0" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "20px 22px" }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
              <p style={{ fontSize: 11 }} className="font-semibold text-gray-400 uppercase tracking-wider">{s.label}</p>
              <div className="rounded-lg flex items-center justify-center" style={{ width: 34, height: 34, backgroundColor: `${s.iconColor}15` }}>
                <s.icon className="w-4.5 h-4.5" style={{ color: s.iconColor, width: 18, height: 18 }} />
              </div>
            </div>
            <span style={{ fontSize: 28 }} className="font-bold text-gray-900">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "22px 24px" }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 17 }} className="font-semibold text-gray-900">Invoices</h2>
          <div className="flex items-center" style={{ gap: 10 }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search invoices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20"
                style={{ paddingLeft: 40, paddingRight: 16, paddingTop: 9, paddingBottom: 9, width: 240 }}
              />
            </div>
            <button className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors" style={{ padding: "9px 14px", fontSize: 13 }}>
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr className="border-b border-gray-200">
                {["Invoice ID", "Date", "Farmer", "Type", "Period", "Amount", "Paid", "Balance", "Status"].map((h) => (
                  <th key={h} className="text-left font-semibold text-gray-400 uppercase tracking-wider" style={{ padding: "10px 10px", fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((inv) => {
                const sc = statusConfig[inv.status] || statusConfig.pending;
                const balance = inv.amount - inv.paid;
                return (
                  <tr key={inv.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                    <td style={{ padding: "14px 10px" }}>
                      <span style={{ fontSize: 13 }} className="font-medium text-[#2D5A27]">{inv.id}</span>
                    </td>
                    <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-600">{inv.date}</td>
                    <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-700 font-medium">{inv.farmer}</td>
                    <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-600">{inv.type}</td>
                    <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-gray-600">{inv.period}</td>
                    <td style={{ padding: "14px 10px", fontSize: 14 }} className="font-semibold text-gray-900">₹{inv.amount.toLocaleString("en-IN")}</td>
                    <td style={{ padding: "14px 10px", fontSize: 13 }} className="text-green-600 font-medium">₹{inv.paid.toLocaleString("en-IN")}</td>
                    <td style={{ padding: "14px 10px", fontSize: 14 }} className={`font-semibold ${balance > 0 ? "text-red-600" : "text-gray-400"}`}>
                      {balance > 0 ? `₹${balance.toLocaleString("en-IN")}` : "—"}
                    </td>
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
