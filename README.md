<div align="center">
  <img src="img/logo.png" alt="EMAS Corp Logo" width="300">
  <br><br>
  <a href="https://gialangcahyapupdite.github.io/DEMO/">
    <img src="https://img.shields.io/badge/View_Live_Demo-2563EB?style=for-the-badge&logo=github&logoColor=white" alt="View Live Demo">
  </a>
</div>

<br>

# EMAS Corp - Company Profile Website

Website company profile untuk **PT Era Mulia Abadi Sejahtera (EMAS Corp)** yang dirancang dengan orientasi tampilan premium, elegan, responsif, dan sangat interaktif. Proyek ini menonjolkan profesionalisme perusahaan melalui desain antarmuka modern dan animasi dinamis.

## Bahasa Pemrograman & Teknologi yang Digunakan

Proyek ini murni berbasis **Frontend (Client-Side)** dan dibangun tanpa memerlukan *build-tools* yang kompleks sehingga mudah dikelola dan dimodifikasi:

*   **HTML5**
    Digunakan untuk membangun struktur dan kerangka semantik dasar halaman website.
*   **CSS3 & Tailwind CSS (via CDN)**
    Menggunakan pendekatan kerangka kerja *utility-first* Tailwind CSS untuk memastikan tampilan yang estetik, konsisten, dan responsif (*Mobile, Tablet, Desktop*). Termasuk implementasi efek *glassmorphism*, bayangan, dan transisi halus.
*   **Vanilla JavaScript (ES6)**
    Digunakan untuk mengatur interaktivitas halaman secara murni (tanpa jQuery). Fungsionalitas JS meliputi:
    *   *Intersection Observer* untuk animasi transisi *fade-in* saat pengguna menggulir halaman.
    *   Sistem pergeseran *Slideshow / Carousel* untuk bagian "Business Insights".
    *   Efek cahaya dinamis (*Mouse Follower*) yang bereaksi mengikuti kursor pengguna.
    *   Animasi hitungan (*Count-up counter*) dinamis pada statistik pencapaian.

---

## Aset Lainnya
*   **Google Fonts**: Menggunakan tipografi *Montserrat* (ekstrabold & dinamis untuk judul) dan *Inter* (untuk keterbacaan paragraf teks).
*   **Material Symbols Outlined**: Paket ikon modern dari Google untuk melengkapi seluruh elemen visual dan interaktif website.

## Struktur Direktori Proyek

```text
/
├── css/
│   └── style.css            # Pengaturan CSS kustom, interaksi kursor, dan animasi keyframes
├── img/                     # Berisi semua gambar aset lokal (logo, profil owner, dsb.)
├── js/
│   ├── main.js              # Script logika interaksi, carousel, observer, dan efek mouse
│   └── tailwind-config.js   # Konfigurasi kustom tema, warna emas/navy, dan font Tailwind
└── index.html               # File utama untuk memuat kerangka halaman website
```

## Cara Menjalankan Secara Lokal

Proyek ini siap pakai (*Plug & Play*). 
1. *Clone* atau unduh (*Download*) repository ini ke komputer Anda.
2. Buka folder proyek, lalu klik ganda (*double-click*) pada file `index.html`.
3. Website akan terbuka langsung melalui browser (Google Chrome, Firefox, Safari, dsb.) dengan seluruh fitur dan animasi yang berfungsi penuh. 

Tidak memerlukan instalasi Node.js, server PHP, atau konfigurasi *Localhost* apa pun.

---

## Fitur-Fitur Utama & Pembaruan (Optimasi)

Website ini telah dioptimalkan secara komprehensif dengan berbagai fitur interaktif untuk memanjakan mata pengunjung (User Experience yang maksimal):

1. **Responsive Design (Desain Adaptif Penuh)**
   Tata letak (*layout*) otomatis menyesuaikan secara sempurna dengan ukuran layar apa pun. Dari layar *Smartphone*, Tablet, hingga monitor lebar Desktop, seluruh elemen akan tersusun secara rapi dan proporsional.
   
2. **Interactive Timeline ("Our Journey")**
   Bagian sejarah perusahaan ditampilkan dalam bentuk *timeline* yang sangat interaktif. Terdapat *Hover Effects* di mana titik sejarah akan menyala (*glow*), membesar, warna teks berubah, dan kartu akan bergeser mulus (animasi pop-up) ketika kursor diarahkan.

3. **Dynamic Business Insights (Quotes Carousel)**
   Bagian interaktif yang menampilkan kompilasi nilai-nilai dan filosofi bisnis dari *Founder* (Coach Ridwan Abadi). Komponen ini bergeser otomatis (*auto-slide*) secara cerdas menyesuaikan ukuran layar, serta memiliki efek kartu melayang dengan bayangan saat disentuh kursor.

4. **Rich Micro-Animations & Hover States**
   Setiap kartu "Unit Bisnis" dan tombol pada website memiliki efek *micro-animations*. Elemen akan melayang terangkat (*translate-y*), bayangan semakin dalam (*shadow-xl*), dan garis pinggir (*border*) berubah menjadi warna tema (emas/biru) untuk memberikan respons visual yang memuaskan.

5. **Interactive Mouse Follower**
   Latar belakang ruang utama memiliki efek pendaran cahaya (*radial glow*) keemasan halus yang bereaksi secara '*real-time*' mengikuti posisi pergerakan kursor mouse pengunjung.

6. **Animated Count-up Statistics**
   Bagian metrik kesuksesan perusahaan (Pencapaian) akan melakukan animasi penghitungan angka dinamis (dari 0 ke angka aktual) secara cepat tepat pada saat bagian tersebut terlihat di layar ketika men-*scroll*.

7. **Scroll Fade-In Animation**
   Semua elemen konten (teks, kartu, dan gambar) dilengkapi efek muncul perlahan dari bawah (*fade-in-up*) menggunakan *Intersection Observer*, memunculkan elemen secara sinematik setiap kali pengunjung menggulir (*scroll*) halaman.
