import { useState } from "react";
import { User, Bell, Shield, Info, Save, Moon, Check } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import { adminProfile } from "../data/mockData";
import { useTheme } from "../context/ThemeContext";

export default function Pengaturan() {
  const [activeTab, setActiveTab] = useState("profile");
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [profile, setProfile] = useState({
    name: adminProfile.name,
    fullName: adminProfile.fullName,
    email: adminProfile.email,
    phone: "+62 812-3456-7890",
  });
  
  const [pref, setPref] = useState({
    language: "id",
    notifyCritical: true,
    notifyWeekly: false,
    notifyBrowser: true,
  });

  const [saved, setSaved] = useState(false);

  const handleProfileSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handlePrefSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: "profile", label: "Profil Admin", icon: User },
    { id: "pref", label: "Preferensi & Notifikasi", icon: Bell },
    { id: "about", label: "Tentang Aplikasi", icon: Info },
  ];

  return (
    <div id="pengaturan-page">
      <PageHeader
        title="Pengaturan"
        subtitle="Kelola konfigurasi profil dan preferensi sistem"
      />

      <div className="settings-container">
        {/* Left: Tabs */}
        <div className="settings-sidebar card">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`settings-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSaved(false);
                }}
                id={`tab-${tab.id}`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Content Card */}
        <div className="settings-content card">
          {saved && (
            <div className="settings-success-alert">
              <Check size={16} />
              <span>Pengaturan berhasil disimpan!</span>
            </div>
          )}

          {activeTab === "profile" && (
            <form onSubmit={handleProfileSave} className="form-grid">
              <h3 className="settings-section-title">Detail Profil</h3>
              
              <div className="avatar-upload-row">
                <div className="sidebar-avatar big">{adminProfile.initials}</div>
                <div>
                  <h4 style={{ fontWeight: 700 }}>{profile.fullName}</h4>
                  <p style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
                    Administrator Gudang Utama
                  </p>
                  <button type="button" className="btn-outline" style={{ marginTop: 8, padding: "6px 12px", fontSize: 12 }}>
                    Ganti Foto
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Nama Panggilan</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  id="setting-name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Nama Lengkap</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  id="setting-fullname"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Alamat Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  id="setting-email"
                />
              </div>

              <div className="form-group">
                <label className="form-label">No. Telepon</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  id="setting-phone"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary" id="btn-save-profile">
                  <Save size={16} />
                  Simpan Profil
                </button>
              </div>
            </form>
          )}

          {activeTab === "pref" && (
            <form onSubmit={handlePrefSave} className="form-grid">
              <h3 className="settings-section-title">Preferensi & Tampilan</h3>

              <div className="form-group">
                <label className="form-label">Bahasa Sistem</label>
                <select
                  className="form-input"
                  value={pref.language}
                  onChange={(e) => setPref({ ...pref, language: e.target.value })}
                  id="setting-language"
                >
                  <option value="id">Bahasa Indonesia</option>
                  <option value="en">English (US)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Mode Tampilan</label>
                <div className="toggle-row">
                  <span className="toggle-label-desc">Aktifkan Mode Gelap (Dark Mode)</span>
                  <label className="switch-toggle">
                    <input
                      type="checkbox"
                      checked={isDarkMode}
                      onChange={(e) => setIsDarkMode(e.target.checked)}
                      id="setting-dark-mode"
                    />
                    <span className="switch-slider"></span>
                  </label>
                </div>
              </div>

              <h3 className="settings-section-title" style={{ marginTop: 20 }}>Pengaturan Notifikasi</h3>

              <div className="form-group">
                <div className="toggle-row">
                  <div className="toggle-info">
                    <span className="toggle-label-desc">Peringatan Stok Kritis</span>
                    <p className="toggle-help">Kirim notifikasi email ketika stok barang berada di bawah batas minimal.</p>
                  </div>
                  <label className="switch-toggle">
                    <input
                      type="checkbox"
                      checked={pref.notifyCritical}
                      onChange={(e) => setPref({ ...pref, notifyCritical: e.target.checked })}
                      id="setting-notify-critical"
                    />
                    <span className="switch-slider"></span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="toggle-row">
                  <div className="toggle-info">
                    <span className="toggle-label-desc">Laporan Ringkasan Mingguan</span>
                    <p className="toggle-help">Kirim ringkasan mingguan arus barang masuk dan keluar ke email admin.</p>
                  </div>
                  <label className="switch-toggle">
                    <input
                      type="checkbox"
                      checked={pref.notifyWeekly}
                      onChange={(e) => setPref({ ...pref, notifyWeekly: e.target.checked })}
                      id="setting-notify-weekly"
                    />
                    <span className="switch-slider"></span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="toggle-row">
                  <div className="toggle-info">
                    <span className="toggle-label-desc">Notifikasi Push Browser</span>
                    <p className="toggle-help">Izinkan sistem menampilkan notifikasi push di pojok browser.</p>
                  </div>
                  <label className="switch-toggle">
                    <input
                      type="checkbox"
                      checked={pref.notifyBrowser}
                      onChange={(e) => setPref({ ...pref, notifyBrowser: e.target.checked })}
                      id="setting-notify-browser"
                    />
                    <span className="switch-slider"></span>
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary" id="btn-save-pref">
                  <Save size={16} />
                  Simpan Preferensi
                </button>
              </div>
            </form>
          )}

          {activeTab === "about" && (
            <div className="about-section">
              <h3 className="settings-section-title">Tentang Boltz</h3>
              
              <div className="about-branding">
                <div className="sidebar-logo-icon big">⚡</div>
                <div>
                  <h4 style={{ fontSize: "20px", fontWeight: 800 }}>Boltz Smart Inventory</h4>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "13px" }}>Versi 1.0.0 (Build 26.06.18)</p>
                </div>
              </div>

              <div className="about-details">
                <div className="about-row">
                  <span className="about-label">Pembuat</span>
                  <span className="about-value">DipNDeep Team</span>
                </div>
                <div className="about-row">
                  <span className="about-label">Teknologi</span>
                  <span className="about-value">React, Vite, Vanilla CSS, Recharts</span>
                </div>
                <div className="about-row">
                  <span className="about-label">Lisensi</span>
                  <span className="about-value">Commercial Internal Use</span>
                </div>
                <div className="about-row">
                  <span className="about-label">Lingkungan</span>
                  <span className="about-value">Development Sandbox</span>
                </div>
              </div>

              <div className="about-description">
                <p>
                  Boltz Smart Inventory adalah solusi modern manajemen pergudangan yang dirancang
                  untuk mengoptimalkan pelacakan stok barang, analisis perputaran barang masuk-keluar,
                  serta otomasi peringatan stok kritis secara real-time.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
