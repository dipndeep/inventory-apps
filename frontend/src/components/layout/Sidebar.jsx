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
  ChevronLeft,
  Zap,
  Plus,
  List,
  History,
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

const subIconMap = {
  "add-new": Plus,
  "item-list": List,
  history: History,
};

export default function Sidebar({ isCollapsed, onToggle }) {
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
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`} id="sidebar">
      {/* Collapse Toggle Button */}
      <button
        className="sidebar-collapse-btn"
        onClick={onToggle}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <Zap size={22} />
        </div>
        <span className="sidebar-logo-text">Boltz</span>
      </div>

      <div className="sidebar-body">
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
                <div key={item.id} className="nav-item-wrapper">
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
                    <div className="nav-subitems-header">
                      {item.label}
                    </div>
                    {item.submenu.map((sub) => {
                      const subActive = isSubActive(sub);
                      const SubIcon = subIconMap[sub.id];
                      return (
                        <Link
                          key={sub.id}
                          to={sub.path}
                          className={`nav-subitem ${subActive ? "active" : ""}`}
                          id={`nav-${sub.id}`}
                        >
                          {SubIcon && <SubIcon size={14} className="sub-nav-icon" />}
                          <span>{sub.label}</span>
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
      </div>
    </aside>
  );
}
