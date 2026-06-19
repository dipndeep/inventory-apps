# Boltz - Smart Inventory Dashboard

Boltz adalah aplikasi manajemen inventaris modern (Smart Inventory Dashboard) yang dirancang dengan antarmuka pengguna premium, responsif, dan interaktif. Aplikasi ini dibangun menggunakan stack modern berbasis React, Vite, dan Vanilla CSS dengan dukungan sistem tema gelap (Dark Mode) global, visualisasi data adaptif, dan layout bento-grid.

## 📂 Struktur Repositori

Repositori ini terdiri dari folder-folder utama berikut:
* **`frontend/`**: Kode sumber aplikasi antarmuka pengguna (web client) berbasis React dan Vite.
* **`prd.md`**: Dokumen Product Requirement Document yang berisi spesifikasi kebutuhan dan fitur sistem.

---

## ✨ Fitur Utama & Keunggulan

### 1. Notion-Style Collapsed Sidebar (Sidebar Adaptif & Halus)
* **Smooth Animation**: Minimasi sidebar (dari lebar `280px` menjadi `80px`) dan pergeseran konten utama menggunakan transisi matematika padding dan `max-width` 0.3s (`cubic-bezier(0.4, 0, 0.2, 1)`) tanpa adanya hentakan visual (*flicker-free*).
* **Hover Floating Popover**: Menu yang memiliki submenu akan menampilkan panel mengambang (*floating popover*) di sebelah kanan sidebar saat dalam keadaan *collapsed*, lengkap dengan header judul menu, status aktif, dan ikon-ikon Lucide khusus.
* **Floating Toggle Button**: Tombol collapse yang diposisikan secara presisi (`right: -25px` dan `top: 49px`) sehingga tidak tumpang tindih dengan logo.

### 2. Global Dark Mode (Tema Gelap Otomatis & Terintegrasi)
* **Centralized Theme Provider**: Menggunakan React Context (`ThemeContext`) untuk manajemen tema global dengan penyimpanan preferensi di `localStorage`.
* **Dynamic Styling**: Warna latar belakang, teks, kartu metrik, tabel data, select dropdown kustom, dan lencana status (*status badges*) otomatis beradaptasi secara instan ketika tema dialihkan.
* **Responsive Metric Cards & Tables**: Peningkatan estetika dengan warna transparan berpendar (*translucent alpha*) pada status badge dan baris tabel yang interaktif saat di-hover.

### 3. Bento-Style Dashboard & Visualisasi Data Adaptif
* **Auto-Stretch Charts**: Grafik garis perputaran stok (*Stock Flow Line Chart*) meregang secara dinamis mengisi ruang kosong yang ada, sejajar secara proporsional dengan kolom kiri.
* **AI-Driven Stock Insights Card**: Kartu wawasan inventaris baru yang menampilkan metrik cerdas seperti *Turnover Rate* (Rasio Perputaran), *Space Utilization* (Kapasitas Gudang), dan indikator *Restock Alert* dengan animasi denyut visual (*pulsing glow*).
* **Interactive Chart Labels & Controls**: Label sumbu X (`Periode Waktu`) dan sumbu Y (`Jumlah Barang (Unit)`) yang beradaptasi warna sesuai tema. Filter periode dan kategori dirancang menggunakan kapsul modern (*segmented pills*) bershading indah.

### 4. Custom UI Select Component
* Mengganti tag `<select>` bawaan browser dengan komponen kustom `Select.jsx` yang sepenuhnya konsisten secara visual, responsif terhadap tema gelap/terang, serta mendukung deteksi klik di luar komponen (*click-outside detection*).

---

## 🚀 Panduan Memulai (Getting Started)

Untuk menjalankan frontend secara lokal di komputer Anda, ikuti langkah-langkah di bawah ini:

### Prasyarat
* Node.js versi 18 atau lebih baru
* npm (Node Package Manager)

### Instalasi & Pengembangan
1. Masuk ke direktori `frontend`:
   ```bash
   cd frontend
   ```
2. Instal semua dependensi proyek:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
4. Buka browser Anda dan akses alamat yang tertera di terminal (biasanya `http://localhost:5173`).

### Produksi (Build)
Untuk membuat bundle produksi yang dioptimalkan:
```bash
npm run build
```
Hasil build akan berada di direktori `frontend/dist/`.

---

## 🛠️ Stack Teknologi

* **Framework Utama**: React 18
* **Build Tool**: Vite
* **Routing**: React Router DOM v6
* **Visualisasi Grafik**: Recharts
* **Desain & Styling**: Vanilla CSS (Premium & Custom HSL design tokens)
* **Paket Ikon**: Lucide React
