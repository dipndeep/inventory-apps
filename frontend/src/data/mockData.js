// Mock data for Smart Inventory Dashboard
// This file contains all dummy data used across the dashboard components

export const adminProfile = {
  name: "William",
  fullName: "William Fancyson",
  email: "william.fancyson@mail.com",
  initials: "WF",
};

export const metricsData = [
  {
    id: "total-items",
    label: "Total Jenis Barang",
    value: "984",
    trend: "+12%",
    trendDirection: "up",
    trendLabel: "Minggu ini",
    iconColor: "blue",
  },
  {
    id: "total-stock",
    label: "Total Stok Barang",
    value: "22,567",
    trend: "+4.5%",
    trendDirection: "up",
    trendLabel: "Minggu ini",
    iconColor: "orange",
  },
  {
    id: "asset-value",
    label: "Nilai Aset Inventaris",
    value: "Rp 168.331.090",
    trend: "-2.1%",
    trendDirection: "down",
    trendLabel: "Minggu ini",
    iconColor: "dark-blue",
  },
  {
    id: "critical-stock",
    label: "Stok Kritis",
    value: "7,784",
    trend: "+8%",
    trendDirection: "down",
    trendLabel: "Minggu ini",
    iconColor: "pink",
  },
];

export const categoryStockData = [
  { name: "Elektronik", value: 66, stock: "167,884.21", color: "#e07a5f" },
  { name: "Pakaian", value: 50, stock: "56,411.33", color: "#3f62e7" },
  { name: "Makanan", value: 11, stock: "81,981.22", color: "#76c356" },
  { name: "Peralatan", value: 23, stock: "12,432.51", color: "#f60974" },
];

export const stockFlowData = [
  { week: "Minggu 01", masuk: 120, keluar: 80 },
  { week: "Minggu 02", masuk: 180, keluar: 150 },
  { week: "Minggu 03", masuk: 200, keluar: 170 },
  { week: "Minggu 04", masuk: 250, keluar: 200 },
  { week: "Minggu 05", masuk: 300, keluar: 280 },
  { week: "Minggu 06", masuk: 350, keluar: 310 },
  { week: "Minggu 07", masuk: 420, keluar: 350 },
  { week: "Minggu 08", masuk: 480, keluar: 380 },
  { week: "Minggu 09", masuk: 450, keluar: 400 },
  { week: "Minggu 10", masuk: 520, keluar: 430 },
];

export const stockFlowCategories = [
  { id: "all", label: "Semua", checked: true },
  { id: "elektronik", label: "Elektronik", checked: false },
  { id: "pakaian", label: "Pakaian", checked: false },
  { id: "makanan", label: "Makanan", checked: false },
];

export const warehouseData = [
  {
    id: "warehouse-main",
    name: "Gudang Utama",
    gradient: "gradient-green",
    value: "$22,466.24",
    valueLabel: "12,466 Unit",
    locationCode: "G-UTM-01",
    locationLabel: "VALID THRU",
    picName: "William Fancyson",
    picLabel: "CARD HOLDER",
  },
  {
    id: "warehouse-backup",
    name: "Gudang Cadangan",
    gradient: "gradient-blue",
    value: "$67,876.32",
    valueLabel: "7,876 Unit",
    locationCode: "G-CDN-02",
    locationLabel: "VALID THRU",
    picName: "William Fancyson",
    picLabel: "CARD HOLDER",
  },
  {
    id: "warehouse-transit",
    name: "Gudang Transit",
    gradient: "gradient-purple",
    value: "$240.56",
    valueLabel: "240 Unit",
    locationCode: "G-TRN-03",
    locationLabel: "VALID THRU",
    picName: "William Fancyson",
    picLabel: "CARD HOLDER",
  },
  {
    id: "warehouse-return",
    name: "Gudang Retur",
    gradient: "gradient-orange",
    value: "$6,786.25",
    valueLabel: "6,786 Unit",
    locationCode: "G-RTR-04",
    locationLabel: "VALID THRU",
    picName: "William Fancyson",
    picLabel: "CARD HOLDER",
  },
];

export const navigationItems = [
  { id: "dashboard", label: "Dashboard", path: "/" },
  {
    id: "barang",
    label: "Barang",
    hasSubmenu: true,
    submenu: [
      { id: "add-new", label: "Tambah Baru", path: "/barang/tambah" },
      { id: "item-list", label: "Daftar Barang", path: "/barang" },
      { id: "history", label: "Riwayat", path: "/barang/riwayat" },
    ],
  },
  { id: "kategori", label: "Kategori", path: "/kategori" },
  { id: "stok-masuk", label: "Stok Masuk", path: "/stok-masuk" },
  { id: "stok-keluar", label: "Stok Keluar", path: "/stok-keluar" },
  { id: "pengaturan", label: "Pengaturan", path: "/pengaturan" },
];

export const notificationCounts = {
  bell: 12,
  messages: 8,
  shortcuts: 2,
};

// ===== DATA HALAMAN CRUD =====

export const kategoriList = [
  { id: "KAT-001", nama_kategori: "Elektronik", deskripsi: "Barang-barang elektronik seperti laptop, HP, kabel", jumlah_barang: 245, created_at: "2026-01-15" },
  { id: "KAT-002", nama_kategori: "Pakaian", deskripsi: "Pakaian pria, wanita, dan anak-anak", jumlah_barang: 189, created_at: "2026-01-15" },
  { id: "KAT-003", nama_kategori: "Makanan", deskripsi: "Makanan ringan, minuman, dan bahan pokok", jumlah_barang: 312, created_at: "2026-02-01" },
  { id: "KAT-004", nama_kategori: "Peralatan", deskripsi: "Peralatan rumah tangga dan kantor", jumlah_barang: 156, created_at: "2026-02-10" },
  { id: "KAT-005", nama_kategori: "Otomotif", deskripsi: "Suku cadang dan aksesoris kendaraan", jumlah_barang: 78, created_at: "2026-03-05" },
  { id: "KAT-006", nama_kategori: "Kesehatan", deskripsi: "Obat-obatan, vitamin, dan alat kesehatan", jumlah_barang: 94, created_at: "2026-03-20" },
];

export const barangList = [
  { id: "BRG-001", kode_barang: "BRG-001", nama_barang: "Laptop ASUS VivoBook 14", kategori: "Elektronik", kategori_id: "KAT-001", stok_sekarang: 45, stok_minimal: 10, harga_satuan: 8500000, created_at: "2026-01-20" },
  { id: "BRG-002", kode_barang: "BRG-002", nama_barang: "Mouse Logitech MX Master 3", kategori: "Elektronik", kategori_id: "KAT-001", stok_sekarang: 120, stok_minimal: 20, harga_satuan: 1200000, created_at: "2026-01-22" },
  { id: "BRG-003", kode_barang: "BRG-003", nama_barang: "Kaos Polos Cotton Combed 30s", kategori: "Pakaian", kategori_id: "KAT-002", stok_sekarang: 500, stok_minimal: 50, harga_satuan: 45000, created_at: "2026-01-25" },
  { id: "BRG-004", kode_barang: "BRG-004", nama_barang: "Kemeja Flannel Unisex", kategori: "Pakaian", kategori_id: "KAT-002", stok_sekarang: 8, stok_minimal: 15, harga_satuan: 125000, created_at: "2026-02-01" },
  { id: "BRG-005", kode_barang: "BRG-005", nama_barang: "Mie Instan Goreng (Karton)", kategori: "Makanan", kategori_id: "KAT-003", stok_sekarang: 200, stok_minimal: 30, harga_satuan: 95000, created_at: "2026-02-05" },
  { id: "BRG-006", kode_barang: "BRG-006", nama_barang: "Kopi Arabica 250g", kategori: "Makanan", kategori_id: "KAT-003", stok_sekarang: 3, stok_minimal: 10, harga_satuan: 85000, created_at: "2026-02-08" },
  { id: "BRG-007", kode_barang: "BRG-007", nama_barang: "Sapu Ijuk Premium", kategori: "Peralatan", kategori_id: "KAT-004", stok_sekarang: 75, stok_minimal: 15, harga_satuan: 35000, created_at: "2026-02-12" },
  { id: "BRG-008", kode_barang: "BRG-008", nama_barang: "Keyboard Mechanical RGB", kategori: "Elektronik", kategori_id: "KAT-001", stok_sekarang: 0, stok_minimal: 5, harga_satuan: 750000, created_at: "2026-02-15" },
  { id: "BRG-009", kode_barang: "BRG-009", nama_barang: "Oli Mesin SAE 10W-40 1L", kategori: "Otomotif", kategori_id: "KAT-005", stok_sekarang: 60, stok_minimal: 20, harga_satuan: 65000, created_at: "2026-02-20" },
  { id: "BRG-010", kode_barang: "BRG-010", nama_barang: "Vitamin C 1000mg (30 Tabs)", kategori: "Kesehatan", kategori_id: "KAT-006", stok_sekarang: 150, stok_minimal: 25, harga_satuan: 55000, created_at: "2026-02-25" },
  { id: "BRG-011", kode_barang: "BRG-011", nama_barang: "Monitor LED 24 inch", kategori: "Elektronik", kategori_id: "KAT-001", stok_sekarang: 12, stok_minimal: 5, harga_satuan: 2100000, created_at: "2026-03-01" },
  { id: "BRG-012", kode_barang: "BRG-012", nama_barang: "Celana Jeans Slim Fit", kategori: "Pakaian", kategori_id: "KAT-002", stok_sekarang: 4, stok_minimal: 10, harga_satuan: 275000, created_at: "2026-03-05" },
  { id: "BRG-013", kode_barang: "BRG-013", nama_barang: "Teh Celup (Box 25 pcs)", kategori: "Makanan", kategori_id: "KAT-003", stok_sekarang: 180, stok_minimal: 40, harga_satuan: 15000, created_at: "2026-03-10" },
  { id: "BRG-014", kode_barang: "BRG-014", nama_barang: "Ember Plastik 20L", kategori: "Peralatan", kategori_id: "KAT-004", stok_sekarang: 90, stok_minimal: 20, harga_satuan: 28000, created_at: "2026-03-15" },
  { id: "BRG-015", kode_barang: "BRG-015", nama_barang: "USB-C Hub 7-in-1", kategori: "Elektronik", kategori_id: "KAT-001", stok_sekarang: 2, stok_minimal: 8, harga_satuan: 350000, created_at: "2026-03-20" },
];

export const stokMasukList = [
  { id: "SM-001", barang_id: "BRG-001", nama_barang: "Laptop ASUS VivoBook 14", jumlah: 20, tanggal_masuk: "2026-06-01", keterangan: "Supplier PT. Abadi Jaya" },
  { id: "SM-002", barang_id: "BRG-002", nama_barang: "Mouse Logitech MX Master 3", jumlah: 50, tanggal_masuk: "2026-06-02", keterangan: "Supplier CV. Tech Indo" },
  { id: "SM-003", barang_id: "BRG-003", nama_barang: "Kaos Polos Cotton Combed 30s", jumlah: 200, tanggal_masuk: "2026-06-03", keterangan: "Pabrik Bandung" },
  { id: "SM-004", barang_id: "BRG-005", nama_barang: "Mie Instan Goreng (Karton)", jumlah: 100, tanggal_masuk: "2026-06-05", keterangan: "Distributor Utama" },
  { id: "SM-005", barang_id: "BRG-007", nama_barang: "Sapu Ijuk Premium", jumlah: 30, tanggal_masuk: "2026-06-06", keterangan: "Supplier Lokal" },
  { id: "SM-006", barang_id: "BRG-009", nama_barang: "Oli Mesin SAE 10W-40 1L", jumlah: 40, tanggal_masuk: "2026-06-08", keterangan: "PT. Pertamina" },
  { id: "SM-007", barang_id: "BRG-010", nama_barang: "Vitamin C 1000mg (30 Tabs)", jumlah: 80, tanggal_masuk: "2026-06-10", keterangan: "Apotek Kimia Farma" },
  { id: "SM-008", barang_id: "BRG-011", nama_barang: "Monitor LED 24 inch", jumlah: 10, tanggal_masuk: "2026-06-11", keterangan: "Supplier PT. Abadi Jaya" },
  { id: "SM-009", barang_id: "BRG-013", nama_barang: "Teh Celup (Box 25 pcs)", jumlah: 150, tanggal_masuk: "2026-06-12", keterangan: "Distributor Utama" },
  { id: "SM-010", barang_id: "BRG-004", nama_barang: "Kemeja Flannel Unisex", jumlah: 25, tanggal_masuk: "2026-06-14", keterangan: "Retur Barang dari Toko" },
  { id: "SM-011", barang_id: "BRG-001", nama_barang: "Laptop ASUS VivoBook 14", jumlah: 15, tanggal_masuk: "2026-06-15", keterangan: "Supplier PT. Abadi Jaya" },
  { id: "SM-012", barang_id: "BRG-006", nama_barang: "Kopi Arabica 250g", jumlah: 60, tanggal_masuk: "2026-06-16", keterangan: "Petani Toraja" },
];

export const stokKeluarList = [
  { id: "SK-001", barang_id: "BRG-001", nama_barang: "Laptop ASUS VivoBook 14", jumlah: 5, tanggal_keluar: "2026-06-02", keterangan: "Penjualan Toko Utama" },
  { id: "SK-002", barang_id: "BRG-002", nama_barang: "Mouse Logitech MX Master 3", jumlah: 15, tanggal_keluar: "2026-06-03", keterangan: "Penjualan Online" },
  { id: "SK-003", barang_id: "BRG-003", nama_barang: "Kaos Polos Cotton Combed 30s", jumlah: 80, tanggal_keluar: "2026-06-04", keterangan: "Order Grosir" },
  { id: "SK-004", barang_id: "BRG-005", nama_barang: "Mie Instan Goreng (Karton)", jumlah: 30, tanggal_keluar: "2026-06-06", keterangan: "Penjualan Toko Cabang" },
  { id: "SK-005", barang_id: "BRG-008", nama_barang: "Keyboard Mechanical RGB", jumlah: 8, tanggal_keluar: "2026-06-07", keterangan: "Barang Rusak - Disposal" },
  { id: "SK-006", barang_id: "BRG-010", nama_barang: "Vitamin C 1000mg (30 Tabs)", jumlah: 20, tanggal_keluar: "2026-06-09", keterangan: "Penjualan Apotek Partner" },
  { id: "SK-007", barang_id: "BRG-012", nama_barang: "Celana Jeans Slim Fit", jumlah: 12, tanggal_keluar: "2026-06-10", keterangan: "Penjualan Online" },
  { id: "SK-008", barang_id: "BRG-006", nama_barang: "Kopi Arabica 250g", jumlah: 25, tanggal_keluar: "2026-06-11", keterangan: "Penjualan Café Partner" },
  { id: "SK-009", barang_id: "BRG-015", nama_barang: "USB-C Hub 7-in-1", jumlah: 6, tanggal_keluar: "2026-06-13", keterangan: "Penjualan Online" },
  { id: "SK-010", barang_id: "BRG-014", nama_barang: "Ember Plastik 20L", jumlah: 18, tanggal_keluar: "2026-06-15", keterangan: "Penjualan Toko Utama" },
];

export const barangHistoryList = [
  { id: "LOG-001", tanggal: "2026-06-16 14:32", aksi: "Tambah", barang: "Laptop ASUS VivoBook 14", detail: "Stok masuk +15 unit dari Supplier PT. Abadi Jaya", user: "William Fancyson" },
  { id: "LOG-002", tanggal: "2026-06-15 10:15", aksi: "Edit", barang: "Mouse Logitech MX Master 3", detail: "Harga satuan diubah dari Rp 1.100.000 ke Rp 1.200.000", user: "William Fancyson" },
  { id: "LOG-003", tanggal: "2026-06-14 09:45", aksi: "Tambah", barang: "Kemeja Flannel Unisex", detail: "Stok masuk +25 unit (Retur Barang dari Toko)", user: "Admin Gudang" },
  { id: "LOG-004", tanggal: "2026-06-13 16:20", aksi: "Keluar", barang: "USB-C Hub 7-in-1", detail: "Stok keluar -6 unit (Penjualan Online)", user: "Admin Gudang" },
  { id: "LOG-005", tanggal: "2026-06-12 11:00", aksi: "Tambah", barang: "Teh Celup (Box 25 pcs)", detail: "Stok masuk +150 unit dari Distributor Utama", user: "William Fancyson" },
  { id: "LOG-006", tanggal: "2026-06-11 13:30", aksi: "Keluar", barang: "Kopi Arabica 250g", detail: "Stok keluar -25 unit (Penjualan Café Partner)", user: "Admin Gudang" },
  { id: "LOG-007", tanggal: "2026-06-10 08:50", aksi: "Hapus", barang: "Snack Keripik (Expired)", detail: "Barang dihapus dari sistem (kadaluarsa)", user: "William Fancyson" },
  { id: "LOG-008", tanggal: "2026-06-09 15:10", aksi: "Keluar", barang: "Vitamin C 1000mg (30 Tabs)", detail: "Stok keluar -20 unit (Penjualan Apotek Partner)", user: "Admin Gudang" },
  { id: "LOG-009", tanggal: "2026-06-08 10:25", aksi: "Tambah", barang: "Oli Mesin SAE 10W-40 1L", detail: "Stok masuk +40 unit dari PT. Pertamina", user: "William Fancyson" },
  { id: "LOG-010", tanggal: "2026-06-07 14:00", aksi: "Keluar", barang: "Keyboard Mechanical RGB", detail: "Stok keluar -8 unit (Barang Rusak - Disposal)", user: "Admin Gudang" },
  { id: "LOG-011", tanggal: "2026-06-06 09:15", aksi: "Edit", barang: "Sapu Ijuk Premium", detail: "Stok minimal diubah dari 10 ke 15", user: "William Fancyson" },
  { id: "LOG-012", tanggal: "2026-06-05 11:40", aksi: "Tambah", barang: "Mie Instan Goreng (Karton)", detail: "Stok masuk +100 unit dari Distributor Utama", user: "William Fancyson" },
];
