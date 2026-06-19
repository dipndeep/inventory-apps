import { Activity, HardDrive, Sparkles, TrendingUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function StockInsightsCard() {
  const { isDarkMode } = useTheme();

  return (
    <div className="card insights-card" id="stock-insights">
      <div className="insights-card-header">
        <div className="insights-title-wrapper">
          <Sparkles size={16} className="insights-spark-icon" />
          <div className="insights-card-title">Wawasan & Prediksi</div>
        </div>
        <div className="insights-card-subtitle">
          Analisis AI kondisi stok saat ini
        </div>
      </div>

      <div className="insights-bento-grid">
        {/* Item 1: Turnover Rate */}
        <div className="insights-bento-item">
          <div className="insights-item-top">
            <div className="insights-icon-circle blue">
              <TrendingUp size={16} />
            </div>
            <span className="insights-badge success">Stabil</span>
          </div>
          <div className="insights-item-value">4.8x</div>
          <div className="insights-item-label">Rasio Perputaran</div>
        </div>

        {/* Item 2: Space Utilization */}
        <div className="insights-bento-item">
          <div className="insights-item-top">
            <div className="insights-icon-circle orange">
              <HardDrive size={16} />
            </div>
            <span className="insights-badge warning">Optimal</span>
          </div>
          <div className="insights-item-value">78%</div>
          <div className="insights-item-label">Utilitas Ruang</div>
        </div>
      </div>

      {/* Quick alert bar */}
      <div className="insights-alert-bar">
        <Activity size={14} className="insights-alert-pulse" />
        <span>3 item restock otomatis direkomendasikan hari ini</span>
      </div>
    </div>
  );
}
