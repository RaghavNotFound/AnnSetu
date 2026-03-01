import { TrendingUp, TrendingDown } from "lucide-react";

/**
 * Reusable stats card component for the top row.
 * Props:
 *  - title: card title
 *  - value: main number
 *  - unit: optional suffix (MT, %)
 *  - prefix: optional prefix (₹)
 *  - change: change value
 *  - changeLabel: text after change (e.g. "from yesterday")
 *  - trend: "up" | "down"
 *  - progress: optional progress bar percentage
 *  - progressColor: color for progress bar
 */
export default function StatsCard({
  title,
  value,
  unit = "",
  prefix = "",
  change,
  changeLabel = "",
  trend = "up",
  progress,
  progressColor = "#2D5A27",
}) {
  const formattedValue =
    typeof value === "number" && !prefix
      ? value.toLocaleString("en-IN")
      : prefix
      ? `${prefix}${value.toLocaleString("en-IN")}`
      : value;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between h-full hover:shadow-md transition-shadow" style={{ padding: "20px 22px" }}>
      <p style={{ fontSize: 11, marginBottom: 10 }} className="font-semibold text-gray-400 uppercase tracking-wider">
        {title}
        {unit && title.includes("Inventory") && (
          <span className="text-gray-400 normal-case tracking-normal"> ({unit})</span>
        )}
      </p>

      <div className="flex items-end gap-1">
        <span style={{ fontSize: 28 }} className="font-bold text-gray-900 leading-none">
          {formattedValue}
        </span>
        {unit && !title.includes("Inventory") && (
          <span className="text-sm font-medium text-gray-400 mb-0.5">{unit}</span>
        )}
      </div>

      {/* Progress bar */}
      {progress !== undefined && (
        <div className="w-full bg-gray-100 rounded-full overflow-hidden" style={{ height: 5, marginTop: 12 }}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${progress}%`, backgroundColor: progressColor }}
          />
        </div>
      )}

      {/* Change indicator */}
      {change !== undefined && (
        <div className="flex items-center gap-1" style={{ marginTop: 10 }}>
          {trend === "up" ? (
            <TrendingUp className="w-3.5 h-3.5 text-green-600" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5 text-red-500" />
          )}
          <span
            className={`font-medium ${
              trend === "up" ? "text-green-600" : "text-red-500"
            }`}
            style={{ fontSize: 12 }}
          >
            {prefix && typeof change === "number"
              ? `${prefix}${change.toLocaleString("en-IN")}`
              : typeof change === "number"
              ? change.toLocaleString("en-IN")
              : change}
            {changeLabel ? ` ${changeLabel}` : ""}
          </span>
        </div>
      )}
    </div>
  );
}
