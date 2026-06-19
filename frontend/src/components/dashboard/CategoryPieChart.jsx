import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";
import { categoryStockData } from "../../data/mockData";
import { useTheme } from "../../context/ThemeContext";

export default function CategoryPieChart() {
  const { isDarkMode } = useTheme();

  // Transform data for RadialBarChart — reverse order so largest is outermost
  const chartData = [...categoryStockData]
    .reverse()
    .map((item, index) => ({
      ...item,
      fill: item.color,
      // Scale value to radial bar percentage (max ~270 degrees out of 360)
      uv: item.value * 2.7,
    }));

  return (
    <div className="card chart-card" id="category-pie-chart">
      <div className="chart-card-header">
        <div>
          <div className="chart-card-title">Komposisi Stok</div>
          <div className="chart-card-subtitle">
            Distribusi stok per kategori
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Radial Chart */}
        <div style={{ width: "180px", height: "180px", flexShrink: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="25%"
              outerRadius="95%"
              barSize={12}
              data={chartData}
              startAngle={210}
              endAngle={-30}
            >
              <RadialBar
                background={{ fill: isDarkMode ? "#2a2e3d" : "#f0f2f8" }}
                dataKey="uv"
                cornerRadius={8}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="pie-legend">
          {categoryStockData.map((item) => (
            <div key={item.name} className="pie-legend-item">
              <span
                className="pie-legend-dot"
                style={{ background: item.color }}
              />
              <span className="pie-legend-label">
                {item.name} ({item.value}%)
              </span>
              <span className="pie-legend-value">{item.stock}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
