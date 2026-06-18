import { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import Modal from "../components/ui/Modal";
import { kategoriList as initialData } from "../data/mockData";

export default function Kategori() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState({ nama_kategori: "", deskripsi: "" });

  const filtered = data.filter(
    (k) =>
      k.nama_kategori.toLowerCase().includes(search.toLowerCase()) ||
      k.deskripsi.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditItem(null);
    setForm({ nama_kategori: "", deskripsi: "" });
    setModalOpen(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    setForm({ nama_kategori: item.nama_kategori, deskripsi: item.deskripsi });
    setModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!form.nama_kategori.trim()) return;

    if (editItem) {
      setData((prev) =>
        prev.map((k) =>
          k.id === editItem.id ? { ...k, ...form } : k
        )
      );
    } else {
      const newItem = {
        id: `KAT-${String(data.length + 1).padStart(3, "0")}`,
        ...form,
        jumlah_barang: 0,
        created_at: new Date().toISOString().split("T")[0],
      };
      setData((prev) => [...prev, newItem]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus kategori ini?")) {
      setData((prev) => prev.filter((k) => k.id !== id));
    }
  };

  const columns = [
    { key: "id", label: "ID", width: "100px" },
    { key: "nama_kategori", label: "Nama Kategori" },
    { key: "deskripsi", label: "Deskripsi" },
    {
      key: "jumlah_barang",
      label: "Jumlah Barang",
      width: "130px",
      render: (val) => <span style={{ fontWeight: 700 }}>{val}</span>,
    },
    { key: "created_at", label: "Dibuat", width: "120px" },
    {
      key: "actions",
      label: "Aksi",
      width: "100px",
      render: (_, row) => (
        <div className="table-actions">
          <button className="table-action-btn edit" onClick={() => openEdit(row)} title="Edit">
            <Pencil size={15} />
          </button>
          <button className="table-action-btn delete" onClick={() => handleDelete(row.id)} title="Hapus">
            <Trash2 size={15} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div id="kategori-page">
      <PageHeader
        title="Kategori Barang"
        subtitle={`${data.length} kategori tersedia`}
        actions={
          <button className="btn-primary" onClick={openAdd} id="btn-tambah-kategori">
            <Plus size={16} />
            Tambah Kategori
          </button>
        }
      />

      <div className="card" style={{ padding: "20px 24px", marginBottom: 20 }}>
        <div className="table-filters">
          <div className="table-search">
            <Search size={16} className="table-search-icon" />
            <input
              type="text"
              placeholder="Cari kategori..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="search-kategori"
            />
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <DataTable columns={columns} data={filtered} />
      </div>

      {/* Modal Add/Edit */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editItem ? "Edit Kategori" : "Tambah Kategori Baru"}
        width="480px"
      >
        <form onSubmit={handleSave} className="form-grid">
          <div className="form-group">
            <label className="form-label">Nama Kategori</label>
            <input
              type="text"
              className="form-input"
              value={form.nama_kategori}
              onChange={(e) => setForm({ ...form, nama_kategori: e.target.value })}
              placeholder="Nama kategori"
              autoFocus
              id="input-nama-kategori"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Deskripsi</label>
            <textarea
              className="form-input"
              rows={3}
              value={form.deskripsi}
              onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
              placeholder="Deskripsi singkat kategori"
              id="input-deskripsi-kategori"
            />
          </div>
          <div className="form-actions">
            <button type="button" className="btn-outline" onClick={() => setModalOpen(false)}>
              Batal
            </button>
            <button type="submit" className="btn-primary" id="btn-simpan-kategori">
              Simpan
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
