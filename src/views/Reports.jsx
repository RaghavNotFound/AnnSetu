"use client";

import { Download, TrendingUp, Users, Package, BarChart3 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import useFetch from "../hooks/useFetch";
import dashboardService from "../services/dashboardService";

export default function Reports() {
  const { data, loading } = useFetch(() => dashboardService.getReports());

  if (loading || !data) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div className="bg-white rounded-xl border border-gray-200 animate-pulse" style={{ padding: "22px 24px", height: 500 }} />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 style={{ fontSize: 20 }} className="font-bold text-gray-900">Reports & Analytics</h2>
        <button className="flex items-center gap-2 bg-[#2D5A27] text-white rounded-lg font-medium hover:bg-[#234a1f] transition-colors" style={{ padding: "9px 18px", fontSize: 14 }}>
          <Download className="w-4 h-4" /> Download Report
        </button>
      </div>

      {/* Revenue + Occupancy Charts */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Monthly Revenue */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "22px 24px" }}>
          <h3 style={{ fontSize: 15, marginBottom: 20 }} className="font-semibold text-gray-900">Monthly Revenue vs Expenses</h3>
          <div style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.monthlyRevenue} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(v) => `₹${v.toLocaleString("en-IN")}`} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="revenue" fill="#2D5A27" radius={[4, 4, 0, 0]} name="Revenue" />
                <Bar dataKey="expenses" fill="#C8E6C9" radius={[4, 4, 0, 0]} name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Occupancy Trend */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "22px 24px" }}>
          <h3 style={{ fontSize: 15, marginBottom: 20 }} className="font-semibold text-gray-900">Occupancy Trend (%)</h3>
          <div style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.occupancyTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} domain={[50, 100]} unit="%" />
                <Tooltip formatter={(v) => `${v}%`} />
                <Line type="monotone" dataKey="occupancy" stroke="#2D5A27" strokeWidth={2.5} dot={{ r: 5, fill: "#2D5A27" }} activeDot={{ r: 7 }} name="Occupancy" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Farmers + Commodity Breakdown */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Top Farmers */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "22px 24px" }}>
          <div className="flex items-center" style={{ gap: 8, marginBottom: 20 }}>
            <Users className="w-5 h-5 text-[#2D5A27]" />
            <h3 style={{ fontSize: 15 }} className="font-semibold text-gray-900">Top Farmers by Revenue</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {data.topFarmers.map((farmer, idx) => (
              <div key={idx} className="flex items-center" style={{ gap: 14 }}>
                <div className="flex items-center justify-center rounded-full bg-gray-100 font-bold text-gray-500" style={{ width: 32, height: 32, fontSize: 13 }}>
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
                    <span style={{ fontSize: 14 }} className="font-medium text-gray-900">{farmer.name}</span>
                    <span style={{ fontSize: 14 }} className="font-semibold text-gray-900">₹{(farmer.revenue / 1000).toFixed(0)}k</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: 12 }} className="text-gray-400">{farmer.stock} in storage</span>
                    <div className="bg-gray-100 rounded-full overflow-hidden" style={{ width: 100, height: 5 }}>
                      <div className="h-full rounded-full" style={{ width: `${(farmer.revenue / data.topFarmers[0].revenue) * 100}%`, backgroundColor: "#2D5A27" }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commodity Breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "22px 24px" }}>
          <div className="flex items-center" style={{ gap: 8, marginBottom: 20 }}>
            <Package className="w-5 h-5 text-[#2D5A27]" />
            <h3 style={{ fontSize: 15 }} className="font-semibold text-gray-900">Commodity Breakdown</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {data.commodityBreakdown.map((item, idx) => {
              const colors = ["#2D5A27", "#4CAF50", "#81C784", "#C8E6C9"];
              return (
                <div key={idx}>
                  <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
                    <span style={{ fontSize: 14 }} className="font-medium text-gray-900">{item.commodity}</span>
                    <span style={{ fontSize: 13 }} className="text-gray-500">{item.stock} ({item.percentage}%)</span>
                  </div>
                  <div className="bg-gray-100 rounded-full overflow-hidden" style={{ height: 10 }}>
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: `${item.percentage}%`, backgroundColor: colors[idx] }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
