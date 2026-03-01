import { useMemo } from "react";
import { MoreHorizontal, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useFetch from "../../hooks/useFetch";
import dashboardService from "../../services/dashboardService";

export default function RoomUtilization() {
  const { data, loading } = useFetch(() => dashboardService.getRoomUtilization());

  const chartData = useMemo(() => {
    if (!data) return [];
    return [
      { name: "Utilized", value: data.overall },
      { name: "Free", value: 100 - data.overall },
    ];
  }, [data]);

  if (loading || !data) {
    return (
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="h-48 bg-gray-100 rounded" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full" style={{ padding: "22px 24px" }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 15 }} className="font-semibold text-gray-900">Room Utilization</h3>
        <button className="p-1 rounded hover:bg-gray-100 transition-colors">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <div className="flex items-center" style={{ gap: 28 }}>
        {/* Donut Chart */}
        <div className="relative flex-shrink-0" style={{ width: 160, height: 160 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={48}
                outerRadius={68}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#2D5A27" />
                <Cell fill="#E8F5E9" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">{data.overall}%</span>
          </div>
        </div>

        {/* Room List */}
        <div className="flex-1" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {data.rooms.map((room, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: room.color }}
                />
                <span style={{ fontSize: 14 }} className="text-gray-600">{room.name}</span>
              </div>
              <span style={{ fontSize: 14 }} className="font-semibold text-gray-900">
                {room.utilization}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Change indicator */}
      <div className="flex items-center border-t border-gray-100" style={{ gap: 6, marginTop: 14, paddingTop: 10 }}>
        <TrendingUp className="w-3.5 h-3.5 text-green-600" />
        <span style={{ fontSize: 12 }} className="font-medium text-green-600">
          +{data.change}% {data.changeLabel}
        </span>
      </div>
    </div>
  );
}
