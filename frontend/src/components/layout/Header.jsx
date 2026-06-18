import {
  Search,
  Bell,
  MessageSquare,
  Gift,
  Settings,
} from "lucide-react";
import { notificationCounts } from "../../data/mockData";

export default function Header() {
  return (
    <header className="header" id="header">
      {/* Search Bar */}
      <div className="header-search">
        <Search className="header-search-icon" />
        <input
          type="text"
          placeholder="Cari barang atau transaksi..."
          id="header-search-input"
        />
      </div>

      {/* Links */}
      <div className="header-links">
        <span className="header-link">Aktivitas</span>
        <span className="header-link highlight">Bantuan</span>
        <span className="header-link">Blog</span>
        <span className="header-link">Laporan</span>
      </div>

      {/* Action Buttons */}
      <div className="header-actions">
        <button className="header-action-btn" id="btn-notifications" title="Notifikasi">
          <Bell size={18} />
          <span className="header-badge red">{notificationCounts.bell}</span>
        </button>
        <button className="header-action-btn" id="btn-messages" title="Pesan">
          <MessageSquare size={18} />
          <span className="header-badge blue">{notificationCounts.messages}</span>
        </button>
        <button className="header-action-btn" id="btn-shortcuts" title="Pintasan">
          <Gift size={18} />
          <span className="header-badge blue">{notificationCounts.shortcuts}</span>
        </button>
        <button className="header-action-btn" id="btn-settings" title="Pengaturan">
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
}

