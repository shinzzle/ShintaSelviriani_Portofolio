# Shinta Selviriani — Taxation Portfolio

Website CV & Portofolio interaktif dan responsif dengan tema elegan (*cream*, *dark green*, dan *gold*).

---

## 📁 Struktur File & Modularisasi

Untuk memudahkan pemeliharaan (*maintenance*), kode telah dipecah menjadi modul-modul kecil dan terorganisir di dalam folder `src/`:

```text
ShintaSelviriani_Portofolio/
├── src/
│   ├── index.html                   # Master template HTML
│   ├── sections/                    # Modular HTML per section
│   │   ├── navbar.html              # Menu navigasi
│   │   ├── hero.html                # Hero banner & foto profil utama
│   │   ├── about.html               # Tentang diri & fokus karir
│   │   ├── education.html           # Riwayat pendidikan
│   │   ├── experience.html          # Pengalaman profesional & organisasi
│   │   ├── gallery.html             # Running slide marquee momen kegiatan
│   │   ├── tax-journey.html         # Riset perpajakan & proyek akademik
│   │   ├── skills.html              # Keahlian teknis & soft skills
│   │   ├── certificates.html        # Sertifikat & lisensi
│   │   ├── achievements.html        # Prestasi & rekognisi lomba
│   │   ├── contact.html             # Kontak & footer
│   │   └── lightbox.html            # Modal popup preview gambar
│   └── css/                         # Modular CSS per section
│       ├── 00-variables.css         # CSS variables & dasar reset
│       ├── 01-navbar.css            # Desain header & navigasi
│       ├── 02-hero.css              # Style hero section
│       ├── 03-common.css            # Utility classes & common section style
│       ├── 04-education.css         # Kartu pendidikan
│       ├── 05-experience.css        # Timeline pengalaman & foto pendukung
│       ├── 06-gallery.css           # Marquee slide running & kartu foto
│       ├── 07-lightbox.css          # Modal popup preview
│       ├── 08-tax-journey.css       # Spotlight riset perpajakan full-width
│       ├── 09-skills.css            # Panel skill & tags
│       ├── 10-certificates.css      # Kartu sertifikat & badges
│       ├── 11-achievements.css      # Kartu prestasi & foto pendukung
│       ├── 12-contact.css           # Area kontak luxury & footer
│       ├── 13-responsive.css        # Media queries (mobile & tablet)
│       ├── 14-animations.css        # Reveal animations
│       └── main.css                 # Import bundle seluruh file CSS
├── build.js                         # Zero-dependency compiler & file watcher
├── package.json                     # NPM scripts (dev & build)
├── index.html                       # Hasil kompilasi siap dibuka langsung di browser
├── style.css                        # Hasil kompilasi CSS siap pakai
├── script.js                        # JavaScript interaktif
└── images/                          # Folder foto & aset gambar
```

---

## 🚀 Panduan Menjalankan & Maintenance

### 1. Mode Pengembangan Otomatis (Watch Mode)
Jalankan perintah ini di terminal:
```bash
npm run dev
```
*(atau `node build.js --watch`)*

> Setiap kali Anda mengubah atau menambah konten di `src/sections/` atau mengedit tampilan di `src/css/`, sistem akan otomatis mengompilasi ulang `index.html` dan `style.css` dalam hitungan milidetik.

### 2. Build Manual Sekali Saja
```bash
npm run build
```
*(atau `node build.js`)*

### 3. Membuka Website
- File `index.html` dan `style.css` di root selalu siap digunakan secara *standalone*.
- Anda dapat mengklik dua kali file `index.html` di File Explorer, atau menggunakan fitur **Live Server** di text editor Anda.
