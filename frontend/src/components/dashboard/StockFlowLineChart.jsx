import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { stockFlowData, stockFlowCategories } from "../../data/mockData";
import Select from "../ui/Select";
import { useTheme } from "../../context/ThemeContext";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div
      style={{
        background: "#1a1d2c",
        borderRadius: "12px",
        padding: "12px 16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        border: "none",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: 4,
        }}
      >
        {payload[0]?.value?.toLocaleString()} unit
      </div>
      <div style={{ color: "#8a90a2", fontSize: "12px" }}>{label}</div>
    </div>
  );
}

export default function StockFlowLineChart() {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [period, setPeriod] = useState("weekly");

  return (
    <div className="card chart-card" id="stock-flow-chart" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div className="chart-card-header">
        <div>
          <div className="chart-card-title">Aliran Masuk & Keluar</div>
          <div className="chart-card-subtitle">
            Tren stok masuk dan keluar per periode
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "nowrap",
          }}
        >
          <div className="chart-segmented-control">
            {stockFlowCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`chart-segment-btn ${
                  selectedCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <Select
            className="chart-period-select"
            value={period}
            onChange={setPeriod}
            options={[
              { value: "weekly", label: "Mingguan (2026)" },
              { value: "monthly", label: "Bulanan" },
              { value: "yearly", label: "Tahunan" },
            ]}
            id="period-select"
          />
        </div>
      </div>

      <div style={{ width: "100%", flex: 1, minHeight: 320, position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={stockFlowData}
              margin={{ top: 15, right: 15, left: 15, bottom: 15 }}
            >
              <CartesianGrid
                strokeDasharray="5 5"
                stroke={isDarkMode ? "#2a2e3d" : "#f0f2f8"}
                vertical={false}
              />
              <XAxis
                dataKey="week"
                tick={{ fill: "#8a90a2", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                interval={0}
                height={50}
                label={{
                  value: "Periode Waktu",
                  position: "insideBottom",
                  offset: -5,
                  fill: isDarkMode ? "#a3a9be" : "#5c6275",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              />
              <YAxis
                tick={{ fill: "#8a90a2", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)}
                width={75}
                label={{
                  value: "Jumlah Barang (Unit)",
                  angle: -90,
                  position: "insideLeft",
                  offset: -10,
                  fill: isDarkMode ? "#a3a9be" : "#5c6275",
                  fontSize: 12,
                  fontWeight: 600,
                  style: { textAnchor: "middle" },
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="masuk"
                stroke="#3f62e7"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#3f62e7",
                  stroke: isDarkMode ? "#1a1d2c" : "#fff",
                  strokeWidth: 3,
                }}
                name="Stok Masuk"
              />
              <Line
                type="monotone"
                dataKey="keluar"
                stroke="#e07a5f"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#e07a5f",
                  stroke: isDarkMode ? "#1a1d2c" : "#fff",
                  strokeWidth: 3,
                }}
                name="Stok Keluar"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
