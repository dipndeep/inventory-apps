import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import Pagination from "../components/ui/Pagination";
import StatusBadge from "../components/ui/StatusBadge";
import { barangHistoryList } from "../data/mockData";
import Select from "../components/ui/Select";

const ITEMS_PER_PAGE = 10;

export default function BarangHistory() {
  const [search, setSearch] = useState("");
  const [filterAksi, setFilterAksi] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    return barangHistoryList.filter((item) => {
      const matchSearch =
        item.barang.toLowerCase().includes(search.toLowerCase()) ||
        item.detail.toLowerCase().includes(search.toLowerCase());
      const matchAksi = filterAksi
        ? item.aksi.toLowerCase() === filterAksi.toLowerCase()
        : true;
      return matchSearch && matchAksi;
    });
  }, [search, filterAksi]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const columns = [
    { key: "tanggal", label: "Tanggal & Waktu", width: "160px" },
    {
      key: "aksi",
      label: "Aksi",
      width: "100px",
      render: (val) => <StatusBadge status={val} />,
    },
    { key: "barang", label: "Barang" },
    { key: "detail", label: "Detail Perubahan" },
    { key: "user", label: "Oleh", width: "150px" },
  ];

  return (
    <div id="barang-history-page">
      <PageHeader
        title="Riwayat Barang"
        subtitle="Log aktivitas perubahan data barang"
      />

      <div className="card" style={{ padding: "20px 24px", marginBottom: 20 }}>
        <div className="table-filters">
          <div className="table-search">
            <Search size={16} className="table-search-icon" />
            <input
              type="text"
              placeholder="Cari barang atau detail..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              id="search-history"
            />
          </div>
          <Select
            className="table-filter-select"
            value={filterAksi}
            onChange={(val) => {
              setFilterAksi(val);
              setCurrentPage(1);
            }}
            options={[
              { value: "", label: "Semua Aksi" },
              { value: "Tambah", label: "Tambah" },
              { value: "Edit", label: "Edit" },
              { value: "Hapus", label: "Hapus" },
              { value: "Keluar", label: "Keluar" },
            ]}
            id="filter-aksi"
          />
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
    </div>
  );
}
