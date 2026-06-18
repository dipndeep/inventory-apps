import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import BarangList from "./pages/BarangList";
import BarangForm from "./pages/BarangForm";
import BarangHistory from "./pages/BarangHistory";
import Kategori from "./pages/Kategori";
import StokMasuk from "./pages/StokMasuk";
import StokKeluar from "./pages/StokKeluar";
import Pengaturan from "./pages/Pengaturan";

export default function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/barang" element={<BarangList />} />
          <Route path="/barang/tambah" element={<BarangForm />} />
          <Route path="/barang/edit/:id" element={<BarangForm />} />
          <Route path="/barang/riwayat" element={<BarangHistory />} />
          <Route path="/kategori" element={<Kategori />} />
          <Route path="/stok-masuk" element={<StokMasuk />} />
          <Route path="/stok-keluar" element={<StokKeluar />} />
          <Route path="/pengaturan" element={<Pengaturan />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

