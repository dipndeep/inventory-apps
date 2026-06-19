import { useState, useMemo } from "react";
import { Plus, Search } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import Pagination from "../components/ui/Pagination";
import Modal from "../components/ui/Modal";
import { stokKeluarList as initialData, barangList } from "../data/mockData";
import Select from "../components/ui/Select";

const ITEMS_PER_PAGE = 10;

export default function StokKeluar() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    barang_id: "",
    jumlah: "",
    keterangan: "",
  });
  const [error, setError] = useState("");

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

  const selectedBarang = useMemo(() => {
    if (!form.barang_id) return null;
    return barangList.find((b) => b.id === form.barang_id);
  }, [form.barang_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.barang_id || !form.jumlah) {
      setError("Semua field wajib diisi");
      return;
    }

    const qty = Number(form.jumlah);
    if (qty <= 0) {
      setError("Jumlah keluar harus lebih besar dari 0");
      return;
    }

    if (selectedBarang && qty > selectedBarang.stok_sekarang) {
      setError(
        `Stok tidak mencukupi. Stok saat ini: ${selectedBarang.stok_sekarang} unit`
      );
      return;
    }

    const newItem = {
      id: `SK-${String(data.length + 1).padStart(3, "0")}`,
      barang_id: form.barang_id,
      nama_barang: selectedBarang?.nama_barang || "Unknown",
      jumlah: qty,
      tanggal_keluar: new Date().toISOString().split("T")[0],
      keterangan: form.keterangan,
    };

    setData((prev) => [newItem, ...prev]);
    setForm({ barang_id: "", jumlah: "", keterangan: "" });
    setModalOpen(false);
  };

  const columns = [
    { key: "id", label: "ID", width: "90px" },
    { key: "tanggal_keluar", label: "Tanggal", width: "120px" },
    { key: "nama_barang", label: "Nama Barang" },
    {
      key: "jumlah",
      label: "Jumlah",
      width: "100px",
      render: (val) => (
        <span style={{ fontWeight: 700, color: "var(--color-danger)" }}>
          -{val}
        </span>
      ),
    },
    { key: "keterangan", label: "Keterangan" },
  ];

  return (
    <div id="stok-keluar-page">
      <PageHeader
        title="Stok Keluar"
        subtitle="Riwayat pengeluaran barang dari gudang"
        actions={
          <button
            className="btn-primary"
            onClick={() => setModalOpen(true)}
            id="btn-tambah-stok-keluar"
          >
            <Plus size={16} />
            Tambah Stok Keluar
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
              id="search-stok-keluar"
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
        onClose={() => {
          setModalOpen(false);
          setError("");
        }}
        title="Tambah Stok Keluar"
        width="480px"
      >
        <form onSubmit={handleSubmit} className="form-grid">
          {error && <div className="form-error-summary">{error}</div>}
          <div className="form-group">
            <label className="form-label">Barang</label>
            <Select
              className="form-input"
              value={form.barang_id}
              onChange={(val) => setForm({ ...form, barang_id: val })}
              options={[
                { value: "", label: "Pilih Barang" },
                ...barangList.map((b) => ({
                  value: b.id,
                  label: `${b.kode_barang} — ${b.nama_barang} (Stok: ${b.stok_sekarang})`,
                })),
              ]}
              placeholder="Pilih Barang"
              id="input-barang-keluar"
            />
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
              id="input-jumlah-keluar"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Keterangan</label>
            <input
              type="text"
              className="form-input"
              value={form.keterangan}
              onChange={(e) => setForm({ ...form, keterangan: e.target.value })}
              placeholder="Contoh: Penjualan Online"
              id="input-keterangan-keluar"
            />
          </div>
          <div className="form-actions">
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                setModalOpen(false);
                setError("");
              }}
            >
              Batal
            </button>
            <button
              type="submit"
              className="btn-primary"
              id="btn-simpan-stok-keluar"
            >
              Simpan
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
