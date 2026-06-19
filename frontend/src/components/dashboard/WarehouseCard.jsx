export default function WarehouseCard({ data, isActive = true, onToggle }) {
  return (
    <div
      className={`warehouse-card ${data.gradient} ${isActive ? "" : "disabled"}`}
      id={`warehouse-${data.id}`}
      style={{
        transition: "all 0.3s ease",
        ...(isActive
          ? {}
          : {
              filter: "grayscale(70%) brightness(0.85)",
              opacity: 0.85,
            }),
      }}
    >
      <div className="warehouse-header">
        <span
          className="warehouse-label"
          style={{
            opacity: isActive ? 0.9 : 0.6,
            transition: "opacity 0.3s ease",
          }}
        >
          {data.name}
        </span>
        <div
          className={`warehouse-toggle ${isActive ? "" : "inactive"}`}
          onClick={onToggle}
          title={isActive ? "Nonaktifkan Gudang" : "Aktifkan Gudang"}
          style={{
            cursor: "pointer",
            boxShadow: isActive
              ? "none"
              : "0 0 0 2px rgba(255, 255, 255, 0.95), 0 0 12px rgba(255, 255, 255, 0.5)",
            transform: isActive ? "scale(1)" : "scale(1.06)",
            transition: "all 0.2s ease",
          }}
        />
      </div>
      
      {/* Middle of Card: Active Value vs. Large Inactive Status Text */}
      {isActive ? (
        <div
          className="warehouse-value"
          style={{
            opacity: 1,
            transition: "opacity 0.3s ease",
          }}
        >
          {data.value}
        </div>
      ) : (
        <div
          style={{
            fontSize: "18px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: "12px 0 16px 0",
            letterSpacing: "0.5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            height: "42px", // Matches height of active value for layout alignment
            animation: "dropdownFadeIn 0.3s ease-out",
          }}
        >
          🔒 Terkunci Sementara
        </div>
      )}
      
      <div
        className="warehouse-footer"
        style={{
          opacity: isActive ? 0.85 : 0.5,
          transition: "opacity 0.3s ease",
        }}
      >
        <div className="warehouse-footer-group">
          <span className="warehouse-footer-label">{data.locationLabel}</span>
          <span className="warehouse-footer-value">{data.locationCode}</span>
        </div>
        <div className="warehouse-footer-group" style={{ textAlign: "right" }}>
          <span className="warehouse-footer-label">{data.picLabel}</span>
          <span className="warehouse-footer-value">{data.picName}</span>
        </div>
      </div>
    </div>
  );
}
