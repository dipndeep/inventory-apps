import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import { CloudSun, MapPin, Calendar, Check } from "lucide-react";
import MetricCard from "../components/dashboard/MetricCard";
import CategoryPieChart from "../components/dashboard/CategoryPieChart";
import StockFlowLineChart from "../components/dashboard/StockFlowLineChart";
import WarehouseCard from "../components/dashboard/WarehouseCard";
import { metricsData, warehouseData } from "../data/mockData";

// Datasets mapped for each period option to simulate real database queries
const periodDataMap = {
  "7 Hari Terakhir": {
    metrics: [
      { id: "total-items", label: "Total Jenis Barang", value: "984", trend: "+1%", trendDirection: "up", trendLabel: "7 hari", iconColor: "blue" },
      { id: "total-stock", label: "Total Stok Barang", value: "3,250", trend: "+2.1%", trendDirection: "up", trendLabel: "7 hari", iconColor: "orange" },
      { id: "asset-value", label: "Nilai Aset Inventaris", value: "Rp 24.312.000", trend: "-1.5%", trendDirection: "down", trendLabel: "7 hari", iconColor: "dark-blue" },
      { id: "critical-stock", label: "Stok Kritis", value: "1,450", trend: "-5%", trendDirection: "up", trendLabel: "7 hari", iconColor: "pink" },
    ],
    warehouses: [
      { id: "warehouse-main", name: "Gudang Utama", gradient: "gradient-green", value: "$3,410.50", valueLabel: "2,120 Unit", locationCode: "G-UTM-01", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
      { id: "warehouse-backup", name: "Gudang Cadangan", gradient: "gradient-blue", value: "$4,230.10", valueLabel: "1,030 Unit", locationCode: "G-CDN-02", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
      { id: "warehouse-transit", name: "Gudang Transit", gradient: "gradient-purple", value: "$45.20", valueLabel: "60 Unit", locationCode: "G-TRN-03", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
      { id: "warehouse-return", name: "Gudang Retur", gradient: "gradient-orange", value: "$80.00", valueLabel: "40 Unit", locationCode: "G-RTR-04", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
    ]
  },
  "30 Hari Terakhir": {
    metrics: metricsData,
    warehouses: warehouseData
  },
  "Bulan Ini": {
    metrics: [
      { id: "total-items", label: "Total Jenis Barang", value: "984", trend: "+4%", trendDirection: "up", trendLabel: "Bulan ini", iconColor: "blue" },
      { id: "total-stock", label: "Total Stok Barang", value: "12,840", trend: "+5.2%", trendDirection: "up", trendLabel: "Bulan ini", iconColor: "orange" },
      { id: "asset-value", label: "Nilai Aset Inventaris", value: "Rp 98.420.000", trend: "+3.1%", trendDirection: "up", trendLabel: "Bulan ini", iconColor: "dark-blue" },
      { id: "critical-stock", label: "Stok Kritis", value: "4,820", trend: "-8%", trendDirection: "up", trendLabel: "Bulan ini", iconColor: "pink" },
    ],
    warehouses: [
      { id: "warehouse-main", name: "Gudang Utama", gradient: "gradient-green", value: "$12,466.24", valueLabel: "7,840 Unit", locationCode: "G-UTM-01", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
      { id: "warehouse-backup", name: "Gudang Cadangan", gradient: "gradient-blue", value: "$32,876.32", valueLabel: "4,786 Unit", locationCode: "G-CDN-02", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
      { id: "warehouse-transit", name: "Gudang Transit", gradient: "gradient-purple", value: "$110.56", valueLabel: "110 Unit", locationCode: "G-TRN-03", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
      { id: "warehouse-return", name: "Gudang Retur", gradient: "gradient-orange", value: "$2,786.25", valueLabel: "104 Unit", locationCode: "G-RTR-04", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
    ]
  },
  "Tahun Ini": {
    metrics: [
      { id: "total-items", label: "Total Jenis Barang", value: "984", trend: "+12%", trendDirection: "up", trendLabel: "Tahun ini", iconColor: "blue" },
      { id: "total-stock", label: "Total Stok Barang", value: "145,220", trend: "+18.5%", trendDirection: "up", trendLabel: "Tahun ini", iconColor: "orange" },
      { id: "asset-value", label: "Nilai Aset Inventaris", value: "Rp 1.120.450.000", trend: "+14.2%", trendDirection: "up", trendLabel: "Tahun ini", iconColor: "dark-blue" },
      { id: "critical-stock", label: "Stok Kritis", value: "12,420", trend: "+20%", trendDirection: "down", trendLabel: "Tahun ini", iconColor: "pink" },
    ],
    warehouses: [
      { id: "warehouse-main", name: "Gudang Utama", gradient: "gradient-green", value: "$142,466.24", valueLabel: "82,466 Unit", locationCode: "G-UTM-01", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
      { id: "warehouse-backup", name: "Gudang Cadangan", gradient: "gradient-blue", value: "$367,876.32", valueLabel: "57,876 Unit", locationCode: "G-CDN-02", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
      { id: "warehouse-transit", name: "Gudang Transit", gradient: "gradient-purple", value: "$2,240.56", valueLabel: "2,240 Unit", locationCode: "G-TRN-03", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
      { id: "warehouse-return", name: "Gudang Retur", gradient: "gradient-orange", value: "$36,786.25", valueLabel: "2,638 Unit", locationCode: "G-RTR-04", locationLabel: "VALID THRU", picName: "William Fancyson", picLabel: "CARD HOLDER" },
    ]
  }
};

const periodsList = ["7 Hari Terakhir", "30 Hari Terakhir", "Bulan Ini", "Tahun Ini"];

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("30 Hari Terakhir");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Track the active state of warehouses
  const [activeWarehouses, setActiveWarehouses] = useState({
    "warehouse-main": true,
    "warehouse-backup": true,
    "warehouse-transit": true,
    "warehouse-return": true,
  });

  const activeData = periodDataMap[selectedPeriod];

  const selectPeriod = (period) => {
    setSelectedPeriod(period);
    setIsDropdownOpen(false);
  };

  const handleToggleWarehouse = (id) => {
    setActiveWarehouses((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Adjust metrics calculation according to active warehouses
  const getAdjustedMetrics = (baseMetrics) => {
    let multiplier = 0;
    if (activeWarehouses["warehouse-main"]) multiplier += 0.50;
    if (activeWarehouses["warehouse-backup"]) multiplier += 0.35;
    if (activeWarehouses["warehouse-transit"]) multiplier += 0.02;
    if (activeWarehouses["warehouse-return"]) multiplier += 0.13;

    // Boundary constraint
    multiplier = Math.max(0, Math.min(1, multiplier));

    return baseMetrics.map((metric) => {
      if (metric.id === "total-stock" || metric.id === "critical-stock") {
        const rawNum = parseInt(metric.value.replace(/,/g, ""), 10);
        const adjusted = Math.round(rawNum * multiplier);
        return {
          ...metric,
          value: adjusted.toLocaleString("en-US"),
        };
      }
      if (metric.id === "asset-value") {
        const rawNum = parseInt(metric.value.replace(/Rp\s?|[.]/g, ""), 10);
        const adjusted = Math.round(rawNum * multiplier);
        return {
          ...metric,
          value: `Rp ${adjusted.toLocaleString("id-ID")}`,
        };
      }
      return metric; // "total-items" remains static
    });
  };

  const adjustedMetrics = getAdjustedMetrics(activeData.metrics);

  return (
    <div id="dashboard-page">
      {/* Backdrop click listener to close dropdown */}
      {isDropdownOpen && (
        <div
          className="dropdown-backdrop"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}

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
            
            <div style={{ position: "relative" }}>
              <button
                className="filter-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                id="btn-filter-periode"
              >
                <Calendar size={16} />
                <span>Filter: {selectedPeriod}</span>
              </button>

              {isDropdownOpen && (
                <div className="period-dropdown" id="dropdown-filter-periode">
                  {periodsList.map((period) => (
                    <button
                      key={period}
                      className={`period-option ${selectedPeriod === period ? "active" : ""}`}
                      onClick={() => selectPeriod(period)}
                    >
                      <span>{period}</span>
                      {selectedPeriod === period && <Check size={14} style={{ color: "var(--color-primary)" }} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        }
      />

      {/* Row 1: Key Metrics */}
      <div className="metrics-grid" id="metrics-grid">
        {adjustedMetrics.map((metric) => (
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
        {activeData.warehouses.map((wh) => (
          <WarehouseCard
            key={wh.id}
            data={wh}
            isActive={activeWarehouses[wh.id]}
            onToggle={() => handleToggleWarehouse(wh.id)}
          />
        ))}
      </div>
    </div>
  );
}
