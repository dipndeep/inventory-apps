import {
  Package,
  Layers,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const iconComponentMap = {
  blue: Package,
  orange: Layers,
  "dark-blue": DollarSign,
  pink: AlertTriangle,
};

export default function MetricCard({ data }) {
  const IconComponent = iconComponentMap[data.iconColor] || Package;
  const isUp = data.trendDirection === "up";

  return (
    <div className="card metric-card" id={`metric-${data.id}`}>
      <div className={`metric-icon ${data.iconColor}`}>
        <IconComponent size={24} />
      </div>
      <div className="metric-info">
        <div className="metric-value">{data.value}</div>
        <div className={`metric-trend ${isUp ? "up" : "down"}`}>
          {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{data.trend}</span>
          <span className="metric-trend-label">{data.trendLabel}</span>
        </div>
      </div>
    </div>
  );
}
