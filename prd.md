# Product Requirement Document (PRD)

## Project Name: Sistem Inventaris Barang (Smart Inventory Dashboard)

**Version:** 1.0  
**Status:** Approved

---

## 1. Project Overview & Objectives

### 1.1 Executive Summary

Sistem Inventaris Barang adalah platform manajemen inventaris modern berbasis web yang dirancang untuk melacak, mengelola, dan mengoptimalkan aliran barang (stok masuk dan keluar) serta kategori barang secara real-time. Sistem ini mengadopsi tampilan antarmuka (UI) premium berbasis dashboard analitik modern (terinspirasi dari konsep UI _fintech/crypto dashboard_) untuk memberikan visibilitas penuh terhadap data operasional gudang atau toko kepada pengguna.

### 1.2 Core Learning & Technical Objectives

Berdasarkan spesifikasi kebutuhan, sistem ini dirancang sebagai pemenuhan kapabilitas teknis berikut:

- **CRUD Operations:** Implementasi penuh Create, Read, Update, dan Delete yang aman pada entitas Barang, Kategori, Stok Masuk, dan Stok Keluar.
- **Table Relationships (Relasi Tabel):** Pemodelan basis data relasional yang kokoh untuk menjaga integritas data antar entitas.
- **Advanced Search & Filtering:** Pencarian cepat berbasis teks dan penyaringan data (filter per periode atau kategori).
- **Pagination:** Optimasi performa tampilan data tabel menggunakan sistem pembagian halaman sisi server (server-side pagination).
- **Data Export:** Fitur ekspor laporan instan ke dalam format berkas PDF dan Microsoft Excel.

---

## 2. Technology Stack

### 2.1 Frontend Stack

- **Framework:** ReactJS (dengan Vite atau Next.js Client Components)
- **Styling Engine:** TailwindCSS (untuk utility-first styling yang responsif)
- **Component Library:** shadcn/ui (berbasis Radix UI untuk komponen primitif seperti Dialog, Table, Dropdown, Select, dll.)
- **State Management & Data Fetching:** React Context API / Redux Toolkit & Axios / TanStack Query (React Query)
- **Charts Library:** Recharts atau Chart.js (untuk visualisasi statistik stok pada dashboard)

### 2.2 Backend Stack (Node.js Ecosystem)

Untuk membangun backend Node.js yang cepat, terstruktur, dan mudah dikelola, digunakan komponen tambahan berikut:

- **Runtime Environment:** Node.js
- **Web Framework:** Express.js (ringan, fleksibel, dan memiliki ekosistem middleware yang luas)
- **Database:** PostgreSQL atau MySQL (sangat direkomendasikan untuk integritas data/ACID dan performa tinggi)
- **Object-Relational Mapping (ORM):** Prisma ORM (menjamin keamanan tipe data/type-safe dan mempermudah manajemen migrasi skema basis data)
- **Authentication & Authorization:** JSON Web Tokens (JWT) & bcrypt untuk enkripsi kata sandi pengguna
- **File Generation Libraries (Export Features):**
  - **Excel Export:** `exceljs` atau `xlsx`
  - **PDF Export:** `pdfkit` atau `pdfmake` (untuk pembuatan PDF terstruktur dari sisi server)
- **Request Validation:** `Zod` (berbagi skema validasi dengan shadcn/ui di frontend)

---

## 3. Database Schema & Architecture (Relasi Tabel)

Sistem ini menerapkan basis data relasional dengan skema entitas berikut:

### 3.1 Data Dictionary & Tables

#### 1. Table: `Kategori` (Category Management)

- `id` (String/UUID, Primary Key)
- `nama_kategori` (String, Unique)
- `deskripsi` (Text, Optional)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

#### 2. Table: `Barang` (Item Management)

- `id` (String/UUID, Primary Key)
- `kode_barang` (String, Unique) - Contoh: BRG-001, BRG-002
- `nama_barang` (String)
- `kategori_id` (String/UUID, Foreign Key menunjuk ke `Kategori.id` ON DELETE RESTRICT)
- `stok_minimal` (Integer, Default: 5) - Batas minimum peringatan stok menipis
- `stok_sekarang` (Integer, Default: 0) - Nilai dinamis berdasarkan (Stok Masuk - Stok Keluar)
- `harga_satuan` (Decimal)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

#### 3. Table: `StokMasuk` (Stock-In Ledger)

- `id` (String/UUID, Primary Key)
- `barang_id` (String/UUID, Foreign Key menunjuk ke `Barang.id` ON DELETE CASCADE)
- `jumlah` (Integer)
- `tanggal_masuk` (DateTime)
- `keterangan` (String/Text, Optional) - Contoh: "Supplier PT. Abadi", "Retur Barang"
- `created_at` (Timestamp)

#### 4. Table: `StokKeluar` (Stock-Out Ledger)

- `id` (String/UUID, Primary Key)
- `barang_id` (String/UUID, Foreign Key menunjuk ke `Barang.id` ON DELETE CASCADE)
- `jumlah` (Integer)
- `tanggal_keluar` (DateTime)
- `keterangan` (String/Text, Optional) - Contoh: "Penjualan Toko Utama", "Barang Rusak"
- `created_at` (Timestamp)

---

## 4. UI/UX Design System & Color Palette (Premium Fintech/Crypto Style)

Antarmuka pengguna mengadopsi struktur _Premium & Clean Fintech/Crypto Dashboard Layout_ yang terinspirasi oleh dasbor keuangan modern dengan warna-warna harmoni, sudut membulat lebar (rounded corners), bayangan halus (soft shadows), dan layout grid yang teratur.

### 4.1 Color Palette & Design Tokens

Masukkan variabel CSS berikut ke dalam file CSS global (`index.css` atau `@theme`):

```css
:root {
  /* Neutral Colors */
  --bg-primary: #f8f9fd; /* Latar belakang halaman utama */
  --bg-card: #ffffff; /* Latar belakang kartu/komponen */
  --text-primary: #1a1d2c; /* Warna teks utama / Heading */
  --text-secondary: #8a90a2; /* Warna teks sekunder / Subtitle / Muted */
  --border-light: #f0f2f8; /* Batas tipis pemisah */

  /* Accent & Theme Colors */
  --color-primary: #3f62e7; /* Biru utama (Filter Periode / Active Sidebar item) */
  --color-primary-light: #ebf0ff; /* Biru muda transparan untuk background item aktif */
  --color-success: #76c356; /* Hijau (Stok Cukup / Indikator Positif) */
  --color-warning: #e07a5f; /* Oranye (Stok Menipis / Tren Medium) */
  --color-danger: #f60974; /* Neon Pink/Merah (Kritis / Stok Kosong) */

  /* Special Gradients (Untuk Kartu Gudang/Warehouse) */
  --gradient-green: linear-gradient(135deg, #76c356 0%, #5a9e3d 100%);
  --gradient-blue: linear-gradient(135deg, #4463ee 0%, #163ce9 100%);
  --gradient-purple: linear-gradient(135deg, #7909c3 0%, #5a0792 100%);
  --gradient-orange: linear-gradient(135deg, #e07a5f 0%, #c05c3f 100%);

  /* Shadows & Radius */
  --card-shadow: 0px 10px 30px rgba(138, 144, 162, 0.06);
  --card-radius-lg: 24px; /* Untuk kartu utama & sidebar */
  --card-radius-md: 16px; /* Untuk kartu kecil & input */
}
```

### 4.2 Typography

- **Font Family:** `Plus Jakarta Sans`, `Inter`, atau `Outfit` (sans-serif) untuk keterbacaan data yang bersih dan profesional.
- **Font Sizes:**
  - Dashboard Title: `28px` (bold, `--text-primary`)
  - Section Title (Inside Cards): `18px` (semibold, `--text-primary`)
  - Metric Values: `24px` - `32px` (bold, `--text-primary`)
  - Body / Labels: `14px` (regular, `--text-secondary`)

### 4.3 Layout & Structure

Dasbor terbagi menjadi dua area utama:

1. **Left Sidebar (Lebar Tetap - 280px)**:
   - **Branding & Logo:** Di bagian atas terdapat Logo "Boltz" (dengan ikon petir) dan menu toggle.
   - **Profile Card:** Menampilkan avatar bulat administrator dengan teks "Hello, [Nama Admin]" dan email administrator di bawahnya.
   - **Navigation Menu:**
     - Tautan navigasi vertikal: `Dashboard` (Aktif), `Barang` (Dropdown dengan opsi: Tambah Baru, Daftar Barang, Riwayat), `Kategori`, `Stok Masuk`, `Stok Keluar`, dan `Pengaturan`.
     - Tautan aktif memiliki latar belakang `--color-primary-light` dan teks/ikon berwarna `--color-primary`. Tautan tidak aktif menggunakan warna `--text-secondary` dengan efek hover transisi lembut.
   - **Footer Sidebar:** Hak cipta "Smart Inventory Dashboard © 2026" dan pembuat.
2. **Main Content Area (Fluid / Responsive)**:
   - **Header Bar:**
     - Kiri-Tengah: Bilah pencarian melengkung sempurna (`rounded-full`) dengan ikon pencarian dan placeholder "Cari barang atau transaksi...".
     - Kanan: Tautan sekunder (Aktivitas, Bantuan, dll.) serta barisan ikon notifikasi interaktif:
       - Notifikasi Stok Kritis (Bell icon dengan badge merah berisi jumlah barang di bawah stok minimal).
       - Notifikasi Riwayat Masuk/Keluar (Chat/Message icon dengan badge biru).
       - Pintasan Aksi Cepat (Gift/Shortcut icon dengan badge biru).
       - Pengaturan Akun (Gear icon).
   - **Content Grid:** Terbagi menjadi 3 baris utama:
     - **Baris 1: Key Metrics Row (4 Kolom)**
     - **Baris 2: Data Visualizations Row (2 Kolom: Kiri Sempit, Kanan Lebar)**
     - **Baris 3: Warehouse & Storage Cards Row (4 Kolom)**

### 4.4 Dashboard Components Detail

#### 4.4.1 Key Metrics Cards (Baris 1)

Empat kartu horizontal dengan latar belakang putih (`--bg-card`), sudut bulat (`--card-radius-lg`), dan bayangan halus (`--card-shadow`).

1. **Kartu 1: Total Jenis Barang**
   - Ikon: Sirkular biru (`--color-primary`) dengan ikon boks/barang.
   - Nilai: Jumlah total tipe barang terdaftar (contoh: `984`).
   - Indikator: `+12% Minggu ini` (menunjukkan tren pertumbuhan jenis barang baru).
2. **Kartu 2: Total Stok Barang**
   - Ikon: Sirkular oranye/kuning (`--color-warning`) dengan ikon tumpukan/stok.
   - Nilai: Jumlah akumulasi unit barang di gudang (contoh: `22,567`).
   - Indikator: `+4.5% Minggu ini` (hijau).
3. **Kartu 3: Nilai Aset Inventaris**
   - Ikon: Sirkular biru tua dengan simbol mata uang / Rp.
   - Nilai: Total valuasi rupiah dari seluruh stok saat ini (contoh: `Rp 168.331.090`).
   - Indikator: `-2.1% Minggu ini` (merah/pink jika ada penurunan stok keluar yang masif).
4. **Kartu 4: Stok Kritis / Batas Minimal**
   - Ikon: Sirkular merah/pink (`--color-danger`) dengan ikon peringatan.
   - Nilai: Jumlah produk yang stoknya berada di bawah `stok_minimal` (contoh: `8` barang).
   - Indikator: Tren barang kritis (merah).

#### 4.4.2 Visualisasi Data & Grafik (Baris 2)

1. **Current Statistic (Kiri - Lebar 35%)**:
   - Judul: "Komposisi Stok per Kategori".
   - Grafik: Semi-circular gauge chart (grafik lingkaran konsentris bertumpuk) yang menampilkan persentase distribusi stok untuk kategori teratas (misal: Elektronik, Pakaian, Makanan, Peralatan).
   - Legenda: Nama kategori, persentase porsi stok, dan nilai stok dalam satuan unit barang di sebelah kanan.
2. **Market Overview / Aktivitas Stok (Kanan - Lebar 65%)**:
   - Judul: "Aliran Masuk & Keluar Barang".
   - Kontrol: Filter cepat berbasis Kategori (Checkbox/Radio button) dan Dropdown Periode ("Mingguan", "Bulanan", "Tahunan").
   - Grafik: Line Chart ganda (2 kurva mulus/smooth line chart):
     - Kurva Biru (`--color-primary`): Tren kuantitas Stok Masuk per periode.
     - Kurva Oranye (`--color-warning`): Tren kuantitas Stok Keluar per periode.

#### 4.4.3 Warehouse Summary Cards (Baris 3)

Empat kartu dengan latar belakang gradien penuh (sesuai `--gradient-*`), sudut membulat lebar, dan teks berwarna putih bersih (`#FFFFFF`). Kartu ini memvisualisasikan ringkasan status 4 gudang penyimpanan utama:

1. **Gudang Utama (Gradien Hijau)**
   - Header: Teks "Gudang Utama" dan kapasitas terisi (misal: `82% Terisi`).
   - Body: Nilai total barang di gudang (misal: `12,466 Unit`).
   - Footer: Kode Lokasi (contoh: `G-UTM-01`) dan Nama PIC/Penanggung Jawab (contoh: `William Fancyson`).
2. **Gudang Cadangan (Gradien Biru)**
   - Header: Teks "Gudang Cadangan" dan kapasitas terisi (misal: `45% Terisi`).
   - Body: Nilai total barang (misal: `7,876 Unit`).
   - Footer: Kode Lokasi (contoh: `G-CDN-02`) dan Nama PIC (contoh: `William Fancyson`).
3. **Gudang Transit / Pengiriman (Gradien Ungu)**
   - Header: Teks "Gudang Transit" dan status pengiriman aktif.
   - Body: Nilai total barang (misal: `240 Unit`).
   - Footer: Kode Lokasi (contoh: `G-TRN-03`) dan Nama PIC (contoh: `William Fancyson`).
4. **Gudang Retur & Rusak (Gradien Oranye)**
   - Header: Teks "Gudang Retur" dan persentase klaim barang rusak.
   - Body: Nilai total barang (misal: `6,786 Unit`).
   - Footer: Kode Lokasi (contoh: `G-RTR-04`) dan Nama PIC (contoh: `William Fancyson`).

```

```
