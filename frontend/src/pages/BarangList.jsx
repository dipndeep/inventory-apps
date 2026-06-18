import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search, Pencil, Trash2, FileDown } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import Pagination from "../components/ui/Pagination";
import StatusBadge, { getStockStatus } from "../components/ui/StatusBadge";
import { barangList as initialData, kategoriList } from "../data/mockData";

const ITEMS_PER_PAGE = 8;

export default function BarangList() {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [filterKategori, setFilterKategori] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    return data.filter((item) => {
      const matchSearch =
        item.nama_barang.toLowerCase().includes(search.toLowerCase()) ||
        item.kode_barang.toLowerCase().includes(search.toLowerCase());
      const matchKategori = filterKategori
        ? item.kategori === filterKategori
        : true;
      return matchSearch && matchKategori;
    });
  }, [data, search, filterKategori]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus barang ini?")) {
      setData((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const columns = [
    { key: "kode_barang", label: "Kode" },
    { key: "nama_barang", label: "Nama Barang" },
    { key: "kategori", label: "Kategori" },
    {
      key: "stok_sekarang",
      label: "Stok",
      render: (val, row) => (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: 700 }}>{val}</span>
          <StatusBadge status={getStockStatus(val, row.stok_minimal)} />
        </div>
      ),
    },
    {
      key: "harga_satuan",
      label: "Harga Satuan",
      render: (val) => `Rp ${val.toLocaleString("id-ID")}`,
    },
    {
      key: "actions",
      label: "Aksi",
      render: (_, row) => (
        <div className="table-actions">
          <button
            className="table-action-btn edit"
            onClick={() => navigate(`/barang/edit/${row.id}`)}
            title="Edit"
          >
            <Pencil size={15} />
          </button>
          <button
            className="table-action-btn delete"
            onClick={() => handleDelete(row.id)}
            title="Hapus"
          >
            <Trash2 size={15} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div id="barang-list-page">
      <PageHeader
        title="Daftar Barang"
        subtitle={`${filtered.length} barang ditemukan`}
        actions={
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn-outline" id="btn-export-barang">
              <FileDown size={16} />
              Export
            </button>
            <button
              className="btn-primary"
              onClick={() => navigate("/barang/tambah")}
              id="btn-tambah-barang"
            >
              <Plus size={16} />
              Tambah Barang
            </button>
          </div>
        }
      />

      {/* Filters */}
      <div className="card" style={{ padding: "20px 24px", marginBottom: 20 }}>
        <div className="table-filters">
          <div className="table-search">
            <Search size={16} className="table-search-icon" />
            <input
              type="text"
              placeholder="Cari kode atau nama barang..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              id="search-barang"
            />
          </div>
          <select
            className="table-filter-select"
            value={filterKategori}
            onChange={(e) => {
              setFilterKategori(e.target.value);
              setCurrentPage(1);
            }}
            id="filter-kategori"
          >
            <option value="">Semua Kategori</option>
            {kategoriList.map((k) => (
              <option key={k.id} value={k.nama_kategori}>
                {k.nama_kategori}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <DataTable columns={columns} data={paginated} />
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
