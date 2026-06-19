import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  MessageSquare,
  Gift,
  AlertTriangle,
  ArrowDownToLine,
  ArrowUpFromLine,
  Plus,
  User,
  X,
} from "lucide-react";
import { notificationCounts } from "../../data/mockData";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'notifications', 'messages', 'shortcuts', null
  const [unreadNotifications, setUnreadNotifications] = useState(notificationCounts.bell);
  const [unreadMessages, setUnreadMessages] = useState(notificationCounts.messages);

  // Chat window states
  const [activeChat, setActiveChat] = useState(null); // { name: string }
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  const toggleDropdown = (type) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  const handleMarkNotificationsRead = () => {
    setUnreadNotifications(0);
  };

  const handleMarkMessagesRead = () => {
    setUnreadMessages(0);
  };

  const startChat = (contactName, initialMsg) => {
    setActiveChat({ name: contactName });
    setChatMessages([
      {
        id: 1,
        text: initialMsg,
        sender: "them",
        timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setActiveDropdown(null); // close dropdown
    setUnreadMessages((prev) => Math.max(0, prev - 1));
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = {
      id: Date.now(),
      text: chatInput,
      sender: "me",
      timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    const sentText = chatInput;
    setChatInput("");

    // Simulate auto-reply after 1.5 seconds
    setTimeout(() => {
      const replyMsg = {
        id: Date.now() + 1,
        text:
          contactNameReply(activeChat?.name, sentText),
        sender: "them",
        timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      };
      setChatMessages((prev) => [...prev, replyMsg]);
    }, 1500);
  };

  const contactNameReply = (name, text) => {
    if (name === "William Fancyson") {
      return "Baik, terima kasih atas laporannya. Tolong kabari saya lagi jika sudah selesai di-input ya.";
    }
    return "Siap, terima kasih konfirmasinya. Barang sudah kami letakkan di rak depan Gudang Utama.";
  };

  return (
    <>
      {activeDropdown && (
        <div
          className="dropdown-backdrop"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      <header className="header" id="header">
        {/* Action Buttons */}
        <div className="header-actions">
          {/* Notifications Button */}
          <div className="header-action-wrapper">
            <button
              className={`header-action-btn ${activeDropdown === "notifications" ? "active" : ""}`}
              onClick={() => toggleDropdown("notifications")}
              id="btn-notifications"
              title="Notifikasi"
            >
              <Bell size={18} />
              {unreadNotifications > 0 && (
                <span className="header-badge red">{unreadNotifications}</span>
              )}
            </button>

            {activeDropdown === "notifications" && (
              <div className="header-dropdown" id="dropdown-notifications">
                <div className="dropdown-header">
                  <span className="dropdown-title">Notifikasi Terbaru</span>
                  {unreadNotifications > 0 && (
                    <button
                      className="dropdown-action-link"
                      onClick={handleMarkNotificationsRead}
                    >
                      Tandai dibaca
                    </button>
                  )}
                </div>
                <div className="dropdown-body">
                  <div className="dropdown-item">
                    <div className="dropdown-icon-wrapper" style={{ background: "#fee6f1", color: "var(--color-danger)" }}>
                      <AlertTriangle size={15} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Stok Kritis!</span>
                      <span className="dropdown-item-desc">Keyboard Mechanical RGB tersisa 0 unit di Gudang Utama.</span>
                      <span className="dropdown-item-time">10 menit yang lalu</span>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <div className="dropdown-icon-wrapper" style={{ background: "#e8f7e2", color: "var(--color-success)" }}>
                      <ArrowDownToLine size={15} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Stok Masuk Baru</span>
                      <span className="dropdown-item-desc">Laptop ASUS VivoBook +15 unit telah diterima di Gudang Utama.</span>
                      <span className="dropdown-item-time">1 jam yang lalu</span>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <div className="dropdown-icon-wrapper" style={{ background: "#fff0ec", color: "var(--color-warning)" }}>
                      <AlertTriangle size={15} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Stok Menipis</span>
                      <span className="dropdown-item-desc">Celana Jeans Slim Fit tersisa 4 unit (minimal 10).</span>
                      <span className="dropdown-item-time">3 jam yang lalu</span>
                    </div>
                  </div>
                </div>
                <div className="dropdown-footer">
                  <button className="dropdown-footer-btn" onClick={() => setActiveDropdown(null)}>
                    Tutup Notifikasi
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Messages Button */}
          <div className="header-action-wrapper">
            <button
              className={`header-action-btn ${activeDropdown === "messages" ? "active" : ""}`}
              onClick={() => toggleDropdown("messages")}
              id="btn-messages"
              title="Pesan"
            >
              <MessageSquare size={18} />
              {unreadMessages > 0 && (
                <span className="header-badge blue">{unreadMessages}</span>
              )}
            </button>

            {activeDropdown === "messages" && (
              <div className="header-dropdown" id="dropdown-messages">
                <div className="dropdown-header">
                  <span className="dropdown-title">Pesan Masuk</span>
                  {unreadMessages > 0 && (
                    <button
                      className="dropdown-action-link"
                      onClick={handleMarkMessagesRead}
                    >
                      Tandai dibaca
                    </button>
                  )}
                </div>
                <div className="dropdown-body">
                  <div
                    className="dropdown-item"
                    onClick={() =>
                      startChat(
                        "William Fancyson",
                        "Tolong segera proses input stok kemeja flannel retur kemarin."
                      )
                    }
                  >
                    <div className="dropdown-icon-wrapper" style={{ background: "#ebf0ff", color: "var(--color-primary)" }}>
                      <User size={15} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">William Fancyson</span>
                      <span className="dropdown-item-desc">"Tolong segera proses input..."</span>
                      <span className="dropdown-item-time">25 menit yang lalu</span>
                    </div>
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() =>
                      startChat(
                        "Admin Gudang B",
                        "Oli mesin SAE 10W-40 1L sudah kami transfer 20 unit ke Gudang Utama."
                      )
                    }
                  >
                    <div className="dropdown-icon-wrapper" style={{ background: "#f0f2f8", color: "var(--color-text-secondary)" }}>
                      <User size={15} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Admin Gudang B</span>
                      <span className="dropdown-item-desc">"Oli mesin SAE 10W-40 1L sudah..."</span>
                      <span className="dropdown-item-time">2 jam yang lalu</span>
                    </div>
                  </div>
                </div>
                <div className="dropdown-footer">
                  <button className="dropdown-footer-btn" onClick={() => setActiveDropdown(null)}>
                    Tutup Pesan
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Shortcuts Button */}
          <div className="header-action-wrapper">
            <button
              className={`header-action-btn ${activeDropdown === "shortcuts" ? "active" : ""}`}
              onClick={() => toggleDropdown("shortcuts")}
              id="btn-shortcuts"
              title="Pintasan Cepat"
            >
              <Gift size={18} />
            </button>

            {activeDropdown === "shortcuts" && (
              <div className="header-dropdown" id="dropdown-shortcuts" style={{ width: "240px" }}>
                <div className="dropdown-header">
                  <span className="dropdown-title">Pintasan Cepat</span>
                </div>
                <div className="dropdown-body">
                  <Link
                    to="/barang/tambah"
                    className="dropdown-item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="dropdown-icon-wrapper" style={{ background: "#ebf0ff", color: "var(--color-primary)" }}>
                      <Plus size={15} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Tambah Barang</span>
                    </div>
                  </Link>
                  <Link
                    to="/stok-masuk"
                    className="dropdown-item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="dropdown-icon-wrapper" style={{ background: "#e8f7e2", color: "var(--color-success)" }}>
                      <ArrowDownToLine size={15} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Input Stok Masuk</span>
                    </div>
                  </Link>
                  <Link
                    to="/stok-keluar"
                    className="dropdown-item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="dropdown-icon-wrapper" style={{ background: "#fff0ec", color: "var(--color-warning)" }}>
                      <ArrowUpFromLine size={15} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Input Stok Keluar</span>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Floating Chat Window */}
      {activeChat && (
        <div className="floating-chat-window card" id="chat-window">
          <div className="chat-window-header">
            <div className="chat-contact-info">
              <div className="chat-avatar">{activeChat.name[0]}</div>
              <div>
                <h4 className="chat-contact-name">{activeChat.name}</h4>
                <span className="chat-contact-status">Online</span>
              </div>
            </div>
            <button
              className="chat-close-btn"
              onClick={() => setActiveChat(null)}
              title="Tutup Chat"
            >
              <X size={16} />
            </button>
          </div>
          <div className="chat-window-body">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`chat-bubble-row ${msg.sender}`}>
                <div className={`chat-bubble ${msg.sender}`}>
                  <p className="chat-text">{msg.text}</p>
                  <span className="chat-time">{msg.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendChat} className="chat-window-footer">
            <input
              type="text"
              placeholder="Tulis pesan..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="chat-input"
              id="chat-message-input"
              autoComplete="off"
            />
            <button type="submit" className="chat-send-btn" id="btn-send-chat">
              Kirim
            </button>
          </form>
        </div>
      )}
    </>
  );
}
