import { useMemo } from "react";
import { MoreHorizontal } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useFetch from "../../hooks/useFetch";
import dashboardService from "../../services/dashboardService";

export default function CommodityDistribution() {
  const { data, loading } = useFetch(() =>
    dashboardService.getCommodityDistribution()
  );

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
        <h3 style={{ fontSize: 15 }} className="font-semibold text-gray-900">
          Commodity Distribution
        </h3>
        <button className="p-1 rounded hover:bg-gray-100 transition-colors">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <div className="flex items-center" style={{ gap: 16 }}>
        {/* Donut Chart */}
        <div className="relative flex-shrink-0" style={{ width: 120, height: 120 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={28}
                outerRadius={48}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Center percentage */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span style={{ fontSize: 12 }} className="font-semibold text-gray-500">45%</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center" style={{ gap: 8 }}>
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span style={{ fontSize: 13 }} className="text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
