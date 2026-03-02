"use client";

import { MoreHorizontal } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import useFetch from "../../hooks/useFetch";
import dashboardService from "../../services/dashboardService";

export default function StockAging() {
  const { data, loading } = useFetch(() => dashboardService.getStockAging());

  if (loading || !data) {
    return (
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="h-40 bg-gray-100 rounded" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full" style={{ padding: "22px 24px" }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 15 }} className="font-semibold text-gray-900">Stock Aging</h3>
        <button className="p-1 rounded hover:bg-gray-100 transition-colors">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Horizontal Bar Chart */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center" style={{ gap: 10 }}>
            <span style={{ fontSize: 12, width: 75 }} className="text-gray-500 flex-shrink-0">
              {item.range}
            </span>
            <div className="flex-1 bg-gray-100 rounded overflow-hidden" style={{ height: 22 }}>
              <div
                className="h-full rounded transition-all duration-700"
                style={{
                  width: `${(item.value / 600) * 100}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
            <span style={{ fontSize: 12, width: 60 }} className="font-semibold text-gray-700 text-right flex-shrink-0">
              {item.value} {item.unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
