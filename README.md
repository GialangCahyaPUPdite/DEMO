<div align="center">
  <img src="img/logo.png" alt="EMAS Corp Logo" width="300">
</div>

<br>

# EMAS Corp - Company Profile Website

Website company profile untuk **PT Era Mulia Abadi Sejahtera (EMAS Corp)** yang dirancang dengan orientasi tampilan premium, profesional, responsif, dan interaktif.

## 🚀 Bahasa Pemrograman & Teknologi yang Digunakan

Proyek ini murni berbasis **Frontend (Client-Side)** dan dibangun tanpa memerlukan *build-tools* yang kompleks sehingga mudah dikelola dan dimodifikasi:

*   **HTML5**
    Digunakan untuk membangun struktur dan kerangka dasar halaman website.
*   **CSS3 & Tailwind CSS (via CDN)**
    Digunakan untuk *styling* antarmuka. Proyek ini mengimplementasikan kerangka kerja *utility-first* Tailwind CSS untuk memastikan tampilan yang responsif (*Mobile, Tablet, Desktop*) dan modern.
*   **Vanilla JavaScript (ES6)**
    Digunakan untuk mengatur interaktivitas halaman secara murni (tanpa jQuery atau library berat lainnya). Fungsionalitas JS dalam proyek ini meliputi:
    *   *Intersection Observer* untuk animasi transisi *fade-in* saat di-*scroll*.
    *   Sistem pergeseran *Slideshow / Carousel* Testimoni secara otomatis.
    *   Efek cahaya *Mouse Follower* yang bereaksi terhadap kursor.
    *   Animasi hitungan (*Count-up counter*) dinamis pada angka pencapaian.

---

## 🎨 Aset Lainnya
*   **Google Fonts**: Menggunakan tipografi *Montserrat* (untuk judul) dan *Inter* (untuk paragraf teks).
*   **Material Symbols Outlined**: Paket ikon modern dari Google untuk seluruh ikonografi website.

## 📂 Struktur Direktori Proyek

```text
/
├── css/
│   └── style.css            # Pengaturan CSS kustom dan animasi keyframes
├── img/                     # Berisi semua gambar aset lokal, foto profil, dan logo
├── js/
│   ├── main.js              # Script utama untuk interaksi, slideshow, dan efek mouse
│   └── tailwind-config.js   # Konfigurasi kustom tema, warna, dan font Tailwind
└── index.html               # File utama untuk memuat kerangka website
```

## 🛠️ Cara Menjalankan Secara Lokal

Proyek ini siap pakai (*Plug & Play*). 
1. *Clone* atau *Download* repository ini ke komputer Anda.
2. Cukup klik ganda (*double-click*) pada file `index.html`.
3. File akan terbuka langsung melalui browser (Google Chrome, Firefox, dsb.) dengan tampilan yang sepenuhnya berfungsi. 

Tidak memerlukan instalasi Node.js, PHP, atau konfigurasi *Localhost Server*.

---

## ✨ Fitur-Fitur Utama

Website ini telah dilengkapi dengan berbagai fitur interaktif dan visual yang dirancang untuk meningkatkan pengalaman pengguna (User Experience):

1. **Responsive Design (Desain Adaptif)**
   Tata letak (*layout*) otomatis menyesuaikan secara sempurna dengan ukuran layar. Dari layar *Smartphone* vertikal, Tablet, hingga Desktop resolusi tinggi, seluruh elemen akan tersusun secara presisi.
   
2. **Interactive Mouse Follower**
   Latar belakang website bereaksi secara '*real-time*' terhadap gerakan pengguna. Terdapat efek cahaya pendar keemasan (radial glow) halus yang senantiasa mengikuti pergerakan kursor mouse di layar utama.

3. **Animated Count-up Statistics**
   Untuk menonjolkan capaian atau statistik penting perusahaan, bagian angka pada "Pencapaian" (1017+) menggunakan sistem animasi hitung cepat (dari 0 ke angka tujuan) saat elemen tersebut masuk ke dalam area pandang pengguna.

4. **Dynamic Testimonial Carousel**
   Area ulasan klien tidak statis, melainkan ditampilkan melalui *Grid Card Carousel*. Komponen ini akan bergeser otomatis (slideshow) setiap 4 detik. Secara cerdas, slideshow ini merender jumlah kartu yang berbeda berdasarkan perangkat (1 kartu di HP, 2 di Tablet, 3 di Desktop).

5. **Scroll Fade-In Animation**
   Tidak ada kesan statis yang membosankan. Memanfaatkan API *Intersection Observer*, semua elemen (teks maupun gambar) akan muncul perlahan dan mulus dari bawah ke atas sesaat ketika Anda melakukan '*scrolling*' ke bagian elemen tersebut.

6. **Clean Code Architecture**
   Struktur penulisan dipisahkan dengan sangat rapi (*Separation of Concerns*). Kerangka situs (HTML), tata rias (CSS Tailwind), dan logika interaksi (JavaScript) tersimpan dalam folder khusus secara independen, mempermudah kerja *developer* selanjutnya tanpa tumpang tindih.
