import {
  Thermometer,
  Zap,
  CreditCard,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import useFetch from "../../hooks/useFetch";
import dashboardService from "../../services/dashboardService";

const iconMap = {
  thermometer: Thermometer,
  zap: Zap,
  "credit-card": CreditCard,
  "alert-triangle": AlertTriangle,
};

const typeStyles = {
  danger: {
    bg: "bg-red-50",
    icon: "text-red-500",
    border: "border-red-100",
  },
  warning: {
    bg: "bg-orange-50",
    icon: "text-orange-500",
    border: "border-orange-100",
  },
  info: {
    bg: "bg-red-50",
    icon: "text-red-400",
    border: "border-red-100",
  },
  caution: {
    bg: "bg-yellow-50",
    icon: "text-yellow-600",
    border: "border-yellow-100",
  },
};

export default function LiveAlerts() {
  const { data, loading } = useFetch(() => dashboardService.getLiveAlerts());

  if (loading || !data) {
    return (
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
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
        <h3 style={{ fontSize: 15 }} className="font-semibold text-gray-900">Live Alerts</h3>
        <span style={{ fontSize: 18 }} className="font-bold text-gray-900">{data.totalValue}</span>
      </div>

      {/* Alert List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {data.alerts.map((alert) => {
          const Icon = iconMap[alert.icon] || AlertTriangle;
          const style = typeStyles[alert.type] || typeStyles.info;

          return (
            <div
              key={alert.id}
              className={`flex items-center rounded-lg ${style.bg} border ${style.border} cursor-pointer hover:shadow-sm transition-all group`}
              style={{ gap: 12, padding: "10px 14px" }}
            >
              <div className={`rounded-full flex items-center justify-center ${style.bg}`} style={{ width: 32, height: 32 }}>
                <Icon className={`w-4 h-4 ${style.icon}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: 14 }} className="text-gray-700 truncate">
                  {alert.message}
                  {alert.location && (
                    <span className="font-medium ml-1">{alert.location}</span>
                  )}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
