import { Thermometer, Droplets, Zap, AlertTriangle, CheckCircle, Activity } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetch from "../hooks/useFetch";
import dashboardService from "../services/dashboardService";

const compressorStyles = {
  running: { bg: "#E8F5E9", color: "#2D5A27", label: "Running" },
  warning: { bg: "#FFF3E0", color: "#E65100", label: "Warning" },
  stopped: { bg: "#FFEBEE", color: "#C62828", label: "Stopped" },
};

const severityStyles = {
  warning: { bg: "#FFF3E0", color: "#E65100", border: "#FFE0B2" },
  info: { bg: "#E3F2FD", color: "#1565C0", border: "#BBDEFB" },
  critical: { bg: "#FFEBEE", color: "#C62828", border: "#FFCDD2" },
};

export default function IoTMonitoring() {
  const { data, loading } = useFetch(() => dashboardService.getIoTData());

  if (loading || !data) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div className="bg-white rounded-xl border border-gray-200 animate-pulse" style={{ padding: "22px 24px", height: 500 }} />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Power Status Bar */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "16px 24px" }}>
        <div className="flex items-center justify-between flex-wrap" style={{ gap: 20 }}>
          <div className="flex items-center" style={{ gap: 8 }}>
            <Zap className="w-5 h-5 text-green-600" />
            <span style={{ fontSize: 14 }} className="font-semibold text-gray-900">Power: {data.powerStatus.source}</span>
          </div>
          {[
            { label: "Backup", value: data.powerStatus.backup },
            { label: "Voltage", value: `${data.powerStatus.voltage}V` },
            { label: "Frequency", value: `${data.powerStatus.frequency} Hz` },
            { label: "Daily Consumption", value: data.powerStatus.dailyConsumption },
          ].map((item) => (
            <div key={item.label} className="flex items-center" style={{ gap: 6 }}>
              <span style={{ fontSize: 12 }} className="text-gray-400">{item.label}:</span>
              <span style={{ fontSize: 13 }} className="font-medium text-gray-700">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Room Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {data.rooms.map((room) => {
          const cs = compressorStyles[room.compressorStatus] || compressorStyles.running;
          const tempDiff = Math.abs(room.temperature - room.setTemp).toFixed(1);
          const tempOk = tempDiff <= 1;

          return (
            <div key={room.id} className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "22px 24px" }}>
              {/* Room Header */}
              <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
                <h3 style={{ fontSize: 16 }} className="font-semibold text-gray-900">{room.name}</h3>
                <span className="rounded-full font-medium" style={{ fontSize: 12, padding: "4px 12px", backgroundColor: cs.bg, color: cs.color }}>
                  {cs.label}
                </span>
              </div>

              {/* Temperature & Humidity */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                <div className="rounded-lg" style={{ padding: "14px 16px", backgroundColor: tempOk ? "#F0FFF0" : "#FFF8F0" }}>
                  <div className="flex items-center" style={{ gap: 6, marginBottom: 6 }}>
                    <Thermometer className="w-4 h-4" style={{ color: tempOk ? "#2D5A27" : "#E65100" }} />
                    <span style={{ fontSize: 11 }} className="font-semibold text-gray-400 uppercase">Temp</span>
                  </div>
                  <span style={{ fontSize: 24, color: tempOk ? "#2D5A27" : "#E65100" }} className="font-bold">{room.temperature}°C</span>
                  <p style={{ fontSize: 11, marginTop: 4 }} className="text-gray-400">Set: {room.setTemp}°C</p>
                </div>
                <div className="rounded-lg" style={{ padding: "14px 16px", backgroundColor: "#F0F4FF" }}>
                  <div className="flex items-center" style={{ gap: 6, marginBottom: 6 }}>
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <span style={{ fontSize: 11 }} className="font-semibold text-gray-400 uppercase">Humidity</span>
                  </div>
                  <span style={{ fontSize: 24, color: "#1565C0" }} className="font-bold">{room.humidity}%</span>
                  <p style={{ fontSize: 11, marginTop: 4 }} className="text-gray-400">Set: {room.setHumidity}%</p>
                </div>
              </div>

              {/* Temperature History Chart */}
              <div style={{ height: 120 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={room.history}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                    <XAxis dataKey="time" tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} domain={["auto", "auto"]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="temp" stroke="#2D5A27" strokeWidth={2} dot={{ r: 3 }} name="Temp °C" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <p style={{ fontSize: 11, marginTop: 10 }} className="text-gray-400">Last maintenance: {room.lastMaintenance}</p>
            </div>
          );
        })}
      </div>

      {/* Active Alerts */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm" style={{ padding: "22px 24px" }}>
        <div className="flex items-center" style={{ gap: 8, marginBottom: 16 }}>
          <AlertTriangle className="w-5 h-5 text-orange-500" />
          <h3 style={{ fontSize: 15 }} className="font-semibold text-gray-900">Active IoT Alerts</h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {data.alerts.map((alert) => {
            const ss = severityStyles[alert.severity] || severityStyles.info;
            return (
              <div
                key={alert.id}
                className="flex items-center rounded-lg border"
                style={{ gap: 14, padding: "12px 16px", backgroundColor: ss.bg, borderColor: ss.border }}
              >
                <Activity className="w-4 h-4 flex-shrink-0" style={{ color: ss.color }} />
                <div className="flex-1">
                  <span style={{ fontSize: 14 }} className="text-gray-800">{alert.message}</span>
                </div>
                <span style={{ fontSize: 12 }} className="text-gray-400 flex-shrink-0">{alert.room} · {alert.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
