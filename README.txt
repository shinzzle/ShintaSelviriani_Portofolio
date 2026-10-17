# Shinta Selviriani — Taxation Portfolio

Website CV & Portofolio interaktif dan responsif dengan tema elegan (cream, dark green, dan gold).

## Struktur File & Modularisasi (Mudah di-Maintenance)

Proyek ini telah dipecah menjadi modul-modul kecil agar sangat mudah dirawat:
- `src/index.html` — Template utama yang memuat potongan section via `<!-- @include "sections/..." -->`.
- `src/sections/` — Potongan tiap bagian halaman HTML:
  - `navbar.html` — Menu navigasi atas
  - `hero.html` — Bagian pembuka profil & foto utama
  - `about.html` — Tentang diri & filosofi karir
  - `education.html` — Riwayat pendidikan
  - `experience.html` — Pengalaman organisasi & profesional
  - `gallery.html` — Running slide / marquee foto kegiatan
  - `tax-journey.html` — Publikasi riset & proyek akademik perpajakan
  - `skills.html` — Keahlian teknis & soft skills
  - `certificates.html` — Grid sertifikat & lisensi
  - `achievements.html` — Prestasi & foto rekognisi
  - `contact.html` — Bagian kontak & footer
  - `lightbox.html` — Modal popup zoom foto
- `src/css/` — Potongan style CSS per section:
  - `00-variables.css`, `01-navbar.css`, `02-hero.css`, `03-common.css`, `04-education.css`, `05-experience.css`, `06-gallery.css`, `07-lightbox.css`, `08-tax-journey.css`, `09-skills.css`, `10-certificates.css`, `11-achievements.css`, `12-contact.css`, `13-responsive.css`, `14-animations.css`.
  - `main.css` — Mengimpor seluruh modul CSS via `@import`.
- `build.js` — Compiler ringan (tanpa dependensi eksternal) untuk menyatukan `src/` ke `index.html` dan `style.css`.
- `index.html` & `style.css` — File hasil build siap pakai (bisa langsung dibuka di browser tanpa server).
- `script.js` — Logika interaktif (scroll reveal, kontrol slide, popup lightbox, copy email).
- `images/` — Folder aset foto, sertifikat, dan ilustrasi.

---

## Cara Maintenance & Pengembangan
1. **Mode Otomatis (Watch Mode):**
   Jalankan perintah ini di terminal:
   ```bash
   npm run dev
   ```
   Setiap kali Anda mengedit file di dalam `src/sections/*.html` atau `src/css/*.css`, file `index.html` dan `style.css` utama akan langsung otomatis ter-update dalam hitungan milidetik!

2. **Build Sekali (Single Build):**
   ```bash
   npm run build
   ```
   atau:
   ```bash
   node build.js
   ```

3. **Membuka Website:**
   Cukup klik dua kali `index.html` seperti biasa, atau gunakan Live Server di VS Code / Antigravity IDE.

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
