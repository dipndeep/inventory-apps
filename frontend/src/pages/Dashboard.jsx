import PageHeader from "../components/ui/PageHeader";
import { CloudSun, MapPin, Calendar } from "lucide-react";
import MetricCard from "../components/dashboard/MetricCard";
import CategoryPieChart from "../components/dashboard/CategoryPieChart";
import StockFlowLineChart from "../components/dashboard/StockFlowLineChart";
import WarehouseCard from "../components/dashboard/WarehouseCard";
import { metricsData, warehouseData } from "../data/mockData";

export default function Dashboard() {
  return (
    <div id="dashboard-page">
      {/* Title Row */}
      <PageHeader
        title="Dashboard"
        actions={
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className="location-info">
              <CloudSun size={18} />
              <span>21°</span>
              <MapPin size={14} />
              <span>Jakarta, IDN</span>
            </div>
            <button className="filter-btn" id="btn-filter-periode">
              <Calendar size={16} />
              Filter Periode
            </button>
          </div>
        }
      />

      {/* Row 1: Key Metrics */}
      <div className="metrics-grid" id="metrics-grid">
        {metricsData.map((metric) => (
          <MetricCard key={metric.id} data={metric} />
        ))}
      </div>

      {/* Row 2: Charts */}
      <div className="charts-row" id="charts-row">
        <CategoryPieChart />
        <StockFlowLineChart />
      </div>

      {/* Row 3: Warehouse Cards */}
      <div className="warehouse-grid" id="warehouse-grid">
        {warehouseData.map((wh) => (
          <WarehouseCard key={wh.id} data={wh} />
        ))}
      </div>
    </div>
  );
}
