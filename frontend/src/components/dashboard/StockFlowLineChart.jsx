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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [period, setPeriod] = useState("weekly");

  return (
    <div className="card chart-card" id="stock-flow-chart">
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
            flexWrap: "wrap",
          }}
        >
          <div className="chart-filters">
            {stockFlowCategories.map((cat) => (
              <label
                key={cat.id}
                className={`chart-filter-radio ${
                  selectedCategory === cat.id ? "checked" : ""
                }`}
              >
                <input
                  type="radio"
                  name="category-filter"
                  checked={selectedCategory === cat.id}
                  onChange={() => setSelectedCategory(cat.id)}
                />
                {cat.label}
              </label>
            ))}
          </div>
          <select
            className="chart-period-select"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            id="period-select"
          >
            <option value="weekly">Mingguan (2026)</option>
            <option value="monthly">Bulanan</option>
            <option value="yearly">Tahunan</option>
          </select>
        </div>
      </div>

      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={stockFlowData}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="5 5"
              stroke="#f0f2f8"
              vertical={false}
            />
            <XAxis
              dataKey="week"
              tick={{ fill: "#8a90a2", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#8a90a2", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)}
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
                stroke: "#fff",
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
                stroke: "#fff",
                strokeWidth: 3,
              }}
              name="Stok Keluar"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
