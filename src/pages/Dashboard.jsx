import StatsCard from "../components/dashboard/StatsCard";
import RoomUtilization from "../components/dashboard/RoomUtilization";
import LiveAlerts from "../components/dashboard/LiveAlerts";
import CommodityDistribution from "../components/dashboard/CommodityDistribution";
import StockAging from "../components/dashboard/StockAging";
import PaymentCollection from "../components/dashboard/PaymentCollection";
import RecentActivity from "../components/dashboard/RecentActivity";
import InventoryPreview from "../components/dashboard/InventoryPreview";
import useFetch from "../hooks/useFetch";
import dashboardService from "../services/dashboardService";

export default function Dashboard() {
  const { data: stats, loading } = useFetch(() => dashboardService.getStats());

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Top Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
        {loading || !stats ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse"
            >
              <div className="h-3 bg-gray-200 rounded w-2/3 mb-3" />
              <div className="h-7 bg-gray-200 rounded w-1/2" />
            </div>
          ))
        ) : (
          <>
            <StatsCard
              title="Total Farmers"
              value={stats.totalFarmers.value}
              change={stats.totalFarmers.change}
              changeLabel={stats.totalFarmers.changeLabel}
              trend={stats.totalFarmers.trend}
            />
            <StatsCard
              title="Total Inventory"
              value={stats.totalInventory.value}
              unit="MT"
              progress={stats.totalInventory.progress}
              progressColor="#2D5A27"
            />
            <StatsCard
              title="Occupancy %"
              value={stats.occupancy.value}
              unit="%"
              change={stats.occupancy.change}
              changeLabel={stats.occupancy.changeLabel}
              trend={stats.occupancy.trend}
            />
            <StatsCard
              title="Today's Loading"
              value={stats.todaysLoading.value}
              unit="MT"
              change={`+${stats.todaysLoading.change}%`}
              trend={stats.todaysLoading.trend}
              progress={stats.todaysLoading.progress}
              progressColor="#2D5A27"
            />
            <StatsCard
              title="Pending Rent"
              value={stats.pendingRent.value}
              prefix="₹"
              change={stats.pendingRent.change}
              trend={stats.pendingRent.trend}
            />
          </>
        )}
      </div>

      {/* Second Row: Room Utilization + Live Alerts */}
      <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 16 }}>
        <div>
          <RoomUtilization />
        </div>
        <div>
          <LiveAlerts />
        </div>
      </div>

      {/* Third Row: Commodity Distribution + Stock Aging + Payment Collection */}
      <div style={{ display: "grid", gridTemplateColumns: "3fr 4fr 5fr", gap: 16 }}>
        <div>
          <CommodityDistribution />
        </div>
        <div>
          <StockAging />
        </div>
        <div>
          <PaymentCollection />
        </div>
      </div>

      {/* Fourth Row: Recent Activity + Inventory */}
      <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 16 }}>
        <div>
          <RecentActivity />
        </div>
        <div>
          <InventoryPreview />
        </div>
      </div>
    </div>
  );
}
