"use client";

import { ChevronRight } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import dashboardService from "../../services/dashboardService";

export default function InventoryPreview() {
  const { data, loading } = useFetch(() =>
    dashboardService.getInventoryPreview()
  );

  if (loading || !data) {
    return (
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 bg-gray-100 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full" style={{ padding: "22px 24px" }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 15 }} className="font-semibold text-gray-900">Inventory</h3>
        <button className="flex items-center gap-1 font-medium text-gray-500 hover:text-gray-700 transition-colors" style={{ fontSize: 13 }}>
          View All
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Inventory Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            style={{ gap: 14, padding: "10px 12px" }}
          >
            <span style={{ fontSize: 22 }} className="flex-shrink-0">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center" style={{ gap: 8 }}>
                <span style={{ fontSize: 14 }} className="font-medium text-gray-700">
                  {item.ageRange}
                </span>
                {item.count && (
                  <span style={{ fontSize: 12 }} className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                    {item.count}
                  </span>
                )}
                <span style={{ fontSize: 12 }} className="text-gray-400 truncate">
                  {item.location}
                </span>
              </div>
            </div>
            <span style={{ fontSize: 14 }} className="font-semibold text-gray-700 flex-shrink-0">
              {item.quantity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
