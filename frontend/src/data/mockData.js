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
  {
    name: "Elektronik",
    value: 66,
    stock: "167,884.21",
    color: "#e07a5f",
  },
  {
    name: "Pakaian",
    value: 50,
    stock: "56,411.33",
    color: "#3f62e7",
  },
  {
    name: "Makanan",
    value: 11,
    stock: "81,981.22",
    color: "#76c356",
  },
  {
    name: "Peralatan",
    value: 23,
    stock: "12,432.51",
    color: "#f60974",
  },
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
  { id: "dashboard", label: "Dashboard", active: true },
  {
    id: "barang",
    label: "Barang",
    hasSubmenu: true,
    submenu: [
      { id: "add-new", label: "Tambah Baru" },
      { id: "item-list", label: "Daftar Barang" },
      { id: "history", label: "Riwayat" },
    ],
  },
  { id: "kategori", label: "Kategori" },
  { id: "stok-masuk", label: "Stok Masuk" },
  { id: "stok-keluar", label: "Stok Keluar" },
  { id: "pengaturan", label: "Pengaturan" },
];

export const notificationCounts = {
  bell: 12,
  messages: 8,
  shortcuts: 2,
};
