const statusConfig = {
  cukup: { label: "Cukup", className: "badge-success" },
  menipis: { label: "Menipis", className: "badge-warning" },
  kritis: { label: "Kritis", className: "badge-danger" },
  kosong: { label: "Kosong", className: "badge-danger" },
  aktif: { label: "Aktif", className: "badge-success" },
  nonaktif: { label: "Nonaktif", className: "badge-secondary" },
  masuk: { label: "Masuk", className: "badge-info" },
  keluar: { label: "Keluar", className: "badge-warning" },
  tambah: { label: "Tambah", className: "badge-success" },
  edit: { label: "Edit", className: "badge-info" },
  hapus: { label: "Hapus", className: "badge-danger" },
};

export function getStockStatus(stokSekarang, stokMinimal) {
  if (stokSekarang === 0) return "kosong";
  if (stokSekarang <= stokMinimal) return "kritis";
  if (stokSekarang <= stokMinimal * 2) return "menipis";
  return "cukup";
}

export default function StatusBadge({ status }) {
  const config = statusConfig[status?.toLowerCase()] || {
    label: status,
    className: "badge-secondary",
  };

  return <span className={`status-badge ${config.className}`}>{config.label}</span>;
}
