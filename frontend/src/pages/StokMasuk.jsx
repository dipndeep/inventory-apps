import { useState, useMemo } from "react";
import { Plus, Search } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import Pagination from "../components/ui/Pagination";
import Modal from "../components/ui/Modal";
import { stokMasukList as initialData, barangList } from "../data/mockData";

const ITEMS_PER_PAGE = 10;

export default function StokMasuk() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    barang_id: "",
    jumlah: "",
    keterangan: "",
  });

  const filtered = useMemo(() => {
    return data.filter(
      (item) =>
        item.nama_barang.toLowerCase().includes(search.toLowerCase()) ||
        item.keterangan.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.barang_id || !form.jumlah) return;

    const barang = barangList.find((b) => b.id === form.barang_id);
    const newItem = {
      id: `SM-${String(data.length + 1).padStart(3, "0")}`,
      barang_id: form.barang_id,
      nama_barang: barang?.nama_barang || "Unknown",
      jumlah: Number(form.jumlah),
      tanggal_masuk: new Date().toISOString().split("T")[0],
      keterangan: form.keterangan,
    };
    setData((prev) => [newItem, ...prev]);
    setForm({ barang_id: "", jumlah: "", keterangan: "" });
    setModalOpen(false);
  };

  const columns = [
    { key: "id", label: "ID", width: "90px" },
    { key: "tanggal_masuk", label: "Tanggal", width: "120px" },
    { key: "nama_barang", label: "Nama Barang" },
    {
      key: "jumlah",
      label: "Jumlah",
      width: "100px",
      render: (val) => (
        <span style={{ fontWeight: 700, color: "var(--color-success)" }}>
          +{val}
        </span>
      ),
    },
    { key: "keterangan", label: "Keterangan" },
  ];

  return (
    <div id="stok-masuk-page">
      <PageHeader
        title="Stok Masuk"
        subtitle="Riwayat penerimaan barang ke gudang"
        actions={
          <button className="btn-primary" onClick={() => setModalOpen(true)} id="btn-tambah-stok-masuk">
            <Plus size={16} />
            Tambah Stok Masuk
          </button>
        }
      />

      <div className="card" style={{ padding: "20px 24px", marginBottom: 20 }}>
        <div className="table-filters">
          <div className="table-search">
            <Search size={16} className="table-search-icon" />
            <input
              type="text"
              placeholder="Cari nama barang atau keterangan..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              id="search-stok-masuk"
            />
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <DataTable columns={columns} data={paginated} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Modal Tambah */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Tambah Stok Masuk"
        width="480px"
      >
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label className="form-label">Barang</label>
            <select
              className="form-input"
              value={form.barang_id}
              onChange={(e) => setForm({ ...form, barang_id: e.target.value })}
              id="input-barang-masuk"
            >
              <option value="">Pilih Barang</option>
              {barangList.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.kode_barang} — {b.nama_barang}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Jumlah</label>
            <input
              type="number"
              className="form-input"
              value={form.jumlah}
              onChange={(e) => setForm({ ...form, jumlah: e.target.value })}
              placeholder="0"
              min="1"
              id="input-jumlah-masuk"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Keterangan</label>
            <input
              type="text"
              className="form-input"
              value={form.keterangan}
              onChange={(e) => setForm({ ...form, keterangan: e.target.value })}
              placeholder="Contoh: Supplier PT. Abadi"
              id="input-keterangan-masuk"
            />
          </div>
          <div className="form-actions">
            <button type="button" className="btn-outline" onClick={() => setModalOpen(false)}>
              Batal
            </button>
            <button type="submit" className="btn-primary" id="btn-simpan-stok-masuk">
              Simpan
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
