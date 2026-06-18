import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Tags,
  ArrowDownToLine,
  ArrowUpFromLine,
  Settings,
  ChevronRight,
  Zap,
} from "lucide-react";
import { adminProfile, navigationItems } from "../../data/mockData";

const iconMap = {
  dashboard: LayoutDashboard,
  barang: Package,
  kategori: Tags,
  "stok-masuk": ArrowDownToLine,
  "stok-keluar": ArrowUpFromLine,
  pengaturan: Settings,
};

export default function Sidebar() {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <aside className="sidebar" id="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <Zap size={22} />
        </div>
        <span className="sidebar-logo-text">Boltz</span>
      </div>

      {/* Profile */}
      <div className="sidebar-profile">
        <div className="sidebar-avatar">{adminProfile.initials}</div>
        <div className="sidebar-profile-name">
          Hello, {adminProfile.name}
        </div>
        <div className="sidebar-profile-email">{adminProfile.email}</div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navigationItems.map((item) => {
          const Icon = iconMap[item.id];
          return (
            <div key={item.id}>
              <div
                className={`nav-item ${item.active ? "active" : ""} ${
                  openSubmenu === item.id ? "open" : ""
                }`}
                onClick={() => item.hasSubmenu && toggleSubmenu(item.id)}
                id={`nav-${item.id}`}
              >
                {Icon && <Icon className="nav-icon" />}
                <span>{item.label}</span>
                {item.hasSubmenu && (
                  <ChevronRight className="nav-chevron" />
                )}
              </div>
              {item.hasSubmenu && (
                <div
                  className={`nav-subitems ${
                    openSubmenu === item.id ? "open" : ""
                  }`}
                >
                  {item.submenu.map((sub) => (
                    <div
                      key={sub.id}
                      className="nav-subitem"
                      id={`nav-${sub.id}`}
                    >
                      {sub.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div>Smart Inventory Dashboard</div>
        <div>© 2026 All Rights Reserved</div>
        <div style={{ marginTop: 8 }}>
          Made with{" "}
          <span style={{ color: "#f60974" }}>❤</span> by Peterdraw
        </div>
      </div>
    </aside>
  );
}
