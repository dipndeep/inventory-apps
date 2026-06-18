export default function WarehouseCard({ data }) {
  return (
    <div
      className={`warehouse-card ${data.gradient}`}
      id={`warehouse-${data.id}`}
    >
      <div className="warehouse-header">
        <span className="warehouse-label">{data.name}</span>
        <div className="warehouse-toggle" />
      </div>
      <div className="warehouse-value">{data.value}</div>
      <div className="warehouse-footer">
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
