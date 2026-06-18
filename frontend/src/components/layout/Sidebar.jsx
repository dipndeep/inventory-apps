import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Auto-expand submenu if current path matches a subitem
  useEffect(() => {
    if (location.pathname.startsWith("/barang")) {
      setOpenSubmenu("barang");
    }
  }, [location.pathname]);

  const toggleSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  const isItemActive = (item) => {
    if (item.hasSubmenu) {
      return location.pathname.startsWith("/barang");
    }
    if (item.path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(item.path);
  };

  const isSubActive = (sub) => {
    if (sub.path === "/barang" && location.pathname.startsWith("/barang/edit")) {
      return true;
    }
    return location.pathname === sub.path;
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
          const active = isItemActive(item);

          if (item.hasSubmenu) {
            return (
              <div key={item.id}>
                <div
                  className={`nav-item ${active ? "active" : ""} ${
                    openSubmenu === item.id ? "open" : ""
                  }`}
                  onClick={() => toggleSubmenu(item.id)}
                  id={`nav-${item.id}`}
                >
                  {Icon && <Icon className="nav-icon" />}
                  <span>{item.label}</span>
                  <ChevronRight className="nav-chevron" />
                </div>
                <div
                  className={`nav-subitems ${
                    openSubmenu === item.id ? "open" : ""
                  }`}
                >
                  {item.submenu.map((sub) => {
                    const subActive = isSubActive(sub);
                    return (
                      <Link
                        key={sub.id}
                        to={sub.path}
                        className={`nav-subitem ${subActive ? "active" : ""}`}
                        id={`nav-${sub.id}`}
                        style={{ display: "block", textDecoration: "none" }}
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-item ${active ? "active" : ""}`}
              id={`nav-${item.id}`}
              style={{ textDecoration: "none" }}
            >
              {Icon && <Icon className="nav-icon" />}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div>Smart Inventory Dashboard</div>
        <div>© 2026 DipNDeep</div>
      </div>
    </aside>
  );
}
