import {
  MoreHorizontal,
  Package,
  Truck,
  CheckCircle,
  Bookmark,
} from "lucide-react";
import useFetch from "../../hooks/useFetch";
import dashboardService from "../../services/dashboardService";

const iconMap = {
  package: Package,
  truck: Truck,
  "check-circle": CheckCircle,
};

export default function RecentActivity() {
  const { data, loading } = useFetch(() =>
    dashboardService.getRecentActivity()
  );

  if (loading || !data) {
    return (
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 bg-gray-100 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full" style={{ padding: "22px 24px" }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 15 }} className="font-semibold text-gray-900">Recent Activity</h3>
        <button className="p-1 rounded hover:bg-gray-100 transition-colors">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Activity Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.map((activity) => {
          const Icon = iconMap[activity.icon] || Package;

          return (
            <div
              key={activity.id}
              className="flex items-start rounded-lg hover:bg-gray-50 transition-colors group"
              style={{ gap: 14, padding: "12px 14px" }}
            >
              <div
                className="rounded-full flex items-center justify-center flex-shrink-0"
                style={{ width: 36, height: 36, backgroundColor: `${activity.color}20` }}
              >
                <Icon
                  className="w-4.5 h-4.5"
                  style={{ color: activity.color, width: 18, height: 18 }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: 14 }} className="text-gray-700">
                  <span className="font-medium">{activity.title}</span>{" "}
                  {activity.description}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span style={{ fontSize: 12 }} className="text-gray-400">{activity.date}</span>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Bookmark className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
