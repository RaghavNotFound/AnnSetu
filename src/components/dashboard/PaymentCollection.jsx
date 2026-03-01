import { User, Truck, Home, TrendingUp } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import dashboardService from "../../services/dashboardService";

const iconMap = {
  user: User,
  truck: Truck,
  home: Home,
  "trending-up": TrendingUp,
};

export default function PaymentCollection() {
  const { data, loading } = useFetch(() =>
    dashboardService.getPaymentCollection()
  );

  if (loading || !data) {
    return (
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-8 bg-gray-100 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full" style={{ padding: "22px 24px" }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 15 }} className="font-semibold text-gray-900">
          Payment Collection
        </h3>
        <span style={{ fontSize: 17 }} className="font-bold text-gray-900">
          {data.totalValue}
        </span>
      </div>

      {/* Payment Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {data.items.map((item) => {
          const Icon = iconMap[item.icon] || User;

          return (
            <div key={item.id} className="flex items-center" style={{ gap: 12 }}>
              <div className="rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0" style={{ width: 30, height: 30 }}>
                <Icon className="w-3.5 h-3.5 text-gray-400" />
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
                  <span style={{ fontSize: 13 }} className="text-gray-700">{item.label}</span>
                  <span style={{ fontSize: 13 }} className="font-semibold text-gray-900">
                    ₹{item.amount.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full overflow-hidden" style={{ height: 5 }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${item.progress}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
