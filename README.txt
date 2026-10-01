# Shinta Selviriani — Taxation Portfolio

Website CV & Portofolio interaktif dan responsif dengan tema elegan (cream, dark green, dan gold).

## Struktur File
- `index.html` — Struktur utama website, section profil, pengalaman, galeri running slide, riset perpajakan, sertifikat, dan kontak.
- `style.css` — Desain, warna, tipografi, animasi running slide (marquee), kartu sertifikat, dan efek modal lightbox.
- `script.js` — Logika interaktif (scroll reveal, kontrol jeda/putar slide, navigasi prev/next, copy email, dan preview foto popup).
- `images/` — Folder tempat menyimpan file foto pendukung, sertifikat, & profil Anda.

---

## Panduan Memasukkan Foto, Sertifikat & Mengubah Deskripsi

### 1. Foto Pendukung di Bagian Experience (03 / EXPERIENCE)
Di setiap item pengalaman (seperti TEAZZI, KPP Pratama Taman Sari, HIMA BINUS, dll.), terdapat blok foto pendukung:
```html
<div class="exp-gallery">
  <div class="exp-photo-card" data-lightbox="true" 
       data-title="Judul Kegiatan" 
       data-desc="Deskripsi singkat kegiatan Anda..." 
       data-tag="KATEGORI" 
       data-meta="Lokasi · Tahun">
    <img src="images/nama-foto-anda.jpg" alt="Keterangan Foto">
    <span class="exp-photo-badge">Label Singkat</span>
  </div>
</div>
```

---

### 2. Section Running Slide Foto (04 / MOMENTS & HIGHLIGHTS)
Section ini berada tepat di bawah Experience, menampilkan slide foto berjalan otomatis (infinite marquee) dengan judul dan deskripsi di bawah setiap foto:
```html
<article class="slide-card" data-lightbox="true" 
         data-title="Judul Kegiatan di Popup" 
         data-desc="Deskripsi lengkap yang muncul saat foto diklik." 
         data-tag="KATEGORI" 
         data-meta="Lokasi · Tahun">
  <div class="slide-img-box">
    <span class="slide-category-pill">Kategori</span>
    <img src="images/foto-kegiatan-1.jpg" alt="Deskripsi Foto">
  </div>
  <div class="slide-content">
    <div class="slide-tag">KATEGORI · 2026</div>
    <h3 class="slide-title">Judul di Bawah Foto</h3>
    <p class="slide-description">Tulis deskripsi singkat kegiatan Anda di sini.</p>
    <div class="slide-footer">
      <span>📍 Lokasi / Instansi</span>
      <span class="slide-view-cta">Lihat foto ↗</span>
    </div>
  </div>
</article>
```

---

### 3. Section Sertifikat & Lisensi (07 / CERTIFICATES & LICENSES)
Section ini menampilkan kartu sertifikat kompetensi, penghargaan lomba, publikasi riset, dan pelatihan:
```html
<article class="cert-card" data-lightbox="true" 
         data-title="Nama Sertifikat Lengkap" 
         data-desc="Keterangan sertifikasi atau penghargaan..." 
         data-tag="KATEGORI SERTIFIKAT" 
         data-meta="Lembaga Penerbit · Tahun">
  <div class="cert-img-wrap">
    <span class="cert-badge">Kategori Singkat</span>
    <span class="cert-year">2026</span>
    <img src="images/sertifikat-anda.jpg" alt="Sertifikat">
  </div>
  <div class="cert-body">
    <span class="cert-issuer">Lembaga / Penyelenggara</span>
    <h3 class="cert-title">Judul Sertifikat</h3>
    <p class="cert-desc">Deskripsi singkat sertifikasi atau capaian Anda.</p>
    <div class="cert-footer">
      <span class="cert-id">ID / No. Sertifikat</span>
      <span class="cert-cta">View certificate ↗</span>
    </div>
  </div>
</article>
```

---

### 4. Section Riset & Perpajakan (05 / TAXATION & ACADEMIC RESEARCH)
Section ini menampilkan *spotlight* publikasi riset ilmiah Anda secara melebar penuh (*full-width featured card*) dengan metrik data empiris, DOI resmi Zenodo, kerangka variabel penelitian, dan proyek akademik perpajakan.

---

### 5. Fitur Interaktif Tambahan
- **Jeda / Putar Otomatis (Pause / Play):** Pengunjung dapat mengklik tombol "⏸ Jeda Slide" untuk membaca dengan santai.
- **Tombol Navigasi Panah (← / →):** Untuk menggeser slide secara manual.
- **Lightbox Popup:** Mengklik foto atau sertifikat akan membuka tampilan penuh resolusi tinggi beserta keterangannya. Tekan tombol `✕` atau tombol `ESC` keyboard untuk menutup.
- **One-Click Copy Email:** Klik tombol di bagian kontak untuk langsung menyalin email ke *clipboard*.

---

## Cara Menjalankan
1. Pastikan semua file berada dalam satu folder.
2. Klik dua kali file `index.html` untuk membukanya di browser (Google Chrome, Microsoft Edge, Safari, dll.).
