import { DashboardTitleRow } from "../components/layout/Header";
import MetricCard from "../components/dashboard/MetricCard";
import CategoryPieChart from "../components/dashboard/CategoryPieChart";
import StockFlowLineChart from "../components/dashboard/StockFlowLineChart";
import WarehouseCard from "../components/dashboard/WarehouseCard";
import { metricsData, warehouseData } from "../data/mockData";

export default function Dashboard() {
  return (
    <div id="dashboard-page">
      {/* Title Row */}
      <DashboardTitleRow />

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
