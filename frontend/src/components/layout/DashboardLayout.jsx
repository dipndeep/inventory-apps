import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div id="app-layout" style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <main className={`main-content ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <Header />
        {children}
      </main>
    </div>
  );
}
