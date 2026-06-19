# Boltz - Client Frontend

Bagian ini berisi kode sumber antarmuka pengguna (web client) dari aplikasi **Boltz - Smart Inventory Dashboard**. Aplikasi ini dirancang dengan antarmuka web modern, interaktif, dan premium menggunakan React, Vite, Recharts, dan Vanilla CSS.

## 🚀 Cara Menjalankan

### 1. Jalankan Server Dev
Pastikan Anda berada di direktori `frontend/`, lalu jalankan:
```bash
npm run dev
```

### 2. Jalankan Build Produksi
Untuk melakukan kompilasi proyek ke dalam file statis yang siap di-deploy:
```bash
npm run build
```

---

## 🎨 Komponen UI Khusus & Pola Desain

Aplikasi ini tidak menggunakan utility framework CSS eksternal seperti Tailwind, melainkan menggunakan **Vanilla CSS kustom** yang didefinisikan secara terpusat pada `src/index.css`. Hal ini memberikan kontrol penuh terhadap transisi, rendering, dan performa visual aplikasi.

### Modul Kunci Frontend:

* **[ThemeContext.jsx](src/context/ThemeContext.jsx)**: React Context yang mengatur state tema terang/gelap secara dinamis ke elemen `<html>` melalui attribute `data-theme="dark"` atau `data-theme="light"`, serta menyimpan state tersebut di `localStorage`.
* **[Sidebar.jsx](src/components/layout/Sidebar.jsx)**: Panel navigasi kiri yang mendukung transisi Notion-style collapsed (lebar `80px` vs `280px`). Menyertakan tombol toggle dengan transisi yang halus tanpa adanya flicker visual dan popover submenu melayang.
* **[StockFlowLineChart.jsx](src/components/dashboard/StockFlowLineChart.jsx)**: Grafik interaktif berbasis Recharts dengan sumbu berlabel dinamis dan layout auto-stretch yang responsif terhadap kontainer Bento Grid.
* **[Select.jsx](src/components/ui/Select.jsx)**: Komponen pilihan dropdown kustom yang menggantikan elemen `<select>` HTML standar agar serasi dengan sistem desain dark mode dan mendeteksi klik luar (*click-outside detection*).
* **[StockInsightsCard.jsx](src/components/dashboard/StockInsightsCard.jsx)**: Kartu analitik cerdas yang menyajikan metrik rasio perputaran (*turnover rate*), kapasitas ruang (*space utilization*), dan peringatan stok kritis (*restock alert*) dengan visual denyut berpendar.

---

## 📦 Dependensi Utama

* **`react` & `react-dom`**: Inti library React.
* **`react-router-dom`**: Penanganan rute halaman internal.
* **`recharts`**: Pembuat diagram interaktif dan animasi grafik.
* **`lucide-react`**: Set ikon SVG modern dan konsisten.
