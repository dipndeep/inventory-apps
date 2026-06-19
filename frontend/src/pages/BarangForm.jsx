import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Save, X } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import { kategoriList, barangList } from "../data/mockData";

export default function BarangForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const existingItem = isEdit ? barangList.find((b) => b.id === id) : null;

  const [form, setForm] = useState({
    kode_barang: existingItem?.kode_barang || "",
    nama_barang: existingItem?.nama_barang || "",
    kategori_id: existingItem?.kategori_id || "",
    harga_satuan: existingItem?.harga_satuan || "",
    stok_minimal: existingItem?.stok_minimal || 5,
    stok_sekarang: existingItem?.stok_sekarang || 0,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.kode_barang.trim()) newErrors.kode_barang = "Kode barang wajib diisi";
    if (!form.nama_barang.trim()) newErrors.nama_barang = "Nama barang wajib diisi";
    if (!form.kategori_id) newErrors.kategori_id = "Kategori wajib dipilih";
    if (!form.harga_satuan || Number(form.harga_satuan) <= 0)
      newErrors.harga_satuan = "Harga harus lebih dari 0";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Mock save
    alert(isEdit ? "Barang berhasil diperbarui!" : "Barang berhasil ditambahkan!");
    navigate("/barang");
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div id="barang-form-page">
      <PageHeader
        title={isEdit ? "Edit Barang" : "Tambah Barang Baru"}
        subtitle={isEdit ? `Mengubah data ${existingItem?.nama_barang}` : "Isi form di bawah untuk menambahkan barang baru"}
        backTo="/barang"
      />

      <div className="form-split-layout">
        {/* Left: Form Card */}
        <div className="card" style={{ padding: 32 }}>
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
              <label className="form-label">Kode Barang</label>
              <input
                type="text"
                className={`form-input ${errors.kode_barang ? "error" : ""}`}
                value={form.kode_barang}
                onChange={(e) => handleChange("kode_barang", e.target.value)}
                placeholder="Contoh: BRG-016"
                id="input-kode-barang"
              />
              {errors.kode_barang && <span className="form-error">{errors.kode_barang}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Nama Barang</label>
              <input
                type="text"
                className={`form-input ${errors.nama_barang ? "error" : ""}`}
                value={form.nama_barang}
                onChange={(e) => handleChange("nama_barang", e.target.value)}
                placeholder="Nama lengkap barang"
                id="input-nama-barang"
              />
              {errors.nama_barang && <span className="form-error">{errors.nama_barang}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Kategori</label>
              <select
                className={`form-input ${errors.kategori_id ? "error" : ""}`}
                value={form.kategori_id}
                onChange={(e) => handleChange("kategori_id", e.target.value)}
                id="input-kategori"
              >
                <option value="">Pilih Kategori</option>
                {kategoriList.map((k) => (
                  <option key={k.id} value={k.id}>
                    {k.nama_kategori}
                  </option>
                ))}
              </select>
              {errors.kategori_id && <span className="form-error">{errors.kategori_id}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Harga Satuan (Rp)</label>
              <input
                type="number"
                className={`form-input ${errors.harga_satuan ? "error" : ""}`}
                value={form.harga_satuan}
                onChange={(e) => handleChange("harga_satuan", e.target.value)}
                placeholder="0"
                min="0"
                id="input-harga"
              />
              {errors.harga_satuan && <span className="form-error">{errors.harga_satuan}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Stok Minimal</label>
              <input
                type="number"
                className="form-input"
                value={form.stok_minimal}
                onChange={(e) => handleChange("stok_minimal", e.target.value)}
                min="0"
                id="input-stok-minimal"
              />
            </div>

            {isEdit && (
              <div className="form-group">
                <label className="form-label">Stok Sekarang</label>
                <input
                  type="number"
                  className="form-input"
                  value={form.stok_sekarang}
                  disabled
                  id="input-stok-sekarang"
                />
                <span className="form-hint">Stok dikelola melalui menu Stok Masuk/Keluar</span>
              </div>
            )}

            <div className="form-actions">
              <button
                type="button"
                className="btn-outline"
                onClick={() => navigate("/barang")}
              >
                <X size={16} /> Batal
              </button>
              <button type="submit" className="btn-primary" id="btn-simpan-barang">
                <Save size={16} /> Simpan
              </button>
            </div>
          </form>
        </div>

        {/* Right: Informative Guidelines Card */}
        <div className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: "20px" }}>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 700,
              borderBottom: "1px solid var(--color-border-light)",
              paddingBottom: "12px",
              margin: 0,
              color: "var(--color-text-primary)",
            }}
          >
            Panduan Pengisian Barang
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Step 1 */}
            <div style={{ display: "flex", gap: "12px" }}>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--color-primary-light)",
                  color: "var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "12px",
                  flexShrink: 0,
                }}
              >
                1
              </div>
              <div>
                <h4 style={{ fontSize: "13px", fontWeight: 700, margin: "0 0 4px 0", color: "var(--color-text-primary)" }}>
                  Kode Barang
                </h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.4 }}>
                  Gunakan format unik <strong>BRG-XXX</strong> (contoh: BRG-016). Kode barang berfungsi sebagai identitas utama untuk scan barcode internal.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ display: "flex", gap: "12px" }}>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--color-primary-light)",
                  color: "var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "12px",
                  flexShrink: 0,
                }}
              >
                2
              </div>
              <div>
                <h4 style={{ fontSize: "13px", fontWeight: 700, margin: "0 0 4px 0", color: "var(--color-text-primary)" }}>
                  Kategori
                </h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.4 }}>
                  Klasifikasikan barang dengan benar. Jika kategori tidak tersedia, buat baru terlebih dahulu di menu <strong>Kategori</strong> di sidebar.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: "flex", gap: "12px" }}>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--color-primary-light)",
                  color: "var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "12px",
                  flexShrink: 0,
                }}
              >
                3
              </div>
              <div>
                <h4 style={{ fontSize: "13px", fontWeight: 700, margin: "0 0 4px 0", color: "var(--color-text-primary)" }}>
                  Harga Satuan
                </h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.4 }}>
                  Masukkan nilai nominal harga satuan rupiah bersih sebelum pajak. Input hanya menerima nilai angka bulat positif.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div style={{ display: "flex", gap: "12px" }}>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--color-primary-light)",
                  color: "var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "12px",
                  flexShrink: 0,
                }}
              >
                4
              </div>
              <div>
                <h4 style={{ fontSize: "13px", fontWeight: 700, margin: "0 0 4px 0", color: "var(--color-text-primary)" }}>
                  Stok Minimal
                </h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.4 }}>
                  Tentukan batas aman stok di gudang. Sistem akan otomatis memicu peringatan <strong>Stok Kritis</strong> jika barang menyentuh angka ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
