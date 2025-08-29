# VAULT° - Website Lookbook & Koleksi Fashion

**VAULT°** adalah proyek *front-end* yang menampilkan lookbook dan koleksi untuk sebuah brand fashion fiktif. Dibuat dengan **React** dan **Vite**, proyek ini menonjolkan desain yang modern, minimalis, dan kaya akan animasi, memberikan pengalaman visual yang mendalam bagi pengguna.

Website ini berfungsi sebagai platform untuk memamerkan visi dan estetika brand melalui halaman-halaman yang dikurasi dengan baik, seperti lookbook, koleksi, dan jurnal desainer.

## ✨ Fitur Utama

* **Homepage Dinamis**: Halaman utama dengan video *hero section* yang imersif dan *featured section* yang memperkenalkan koleksi terbaru dengan tata letak asimetris yang menarik.
* **Galeri Lookbook Interaktif**: Halaman `/lookbook` dengan tata letak *masonry* (kolom) yang responsif. Setiap gambar dapat diklik untuk membuka *modal* tampilan penuh, memberikan pengalaman galeri yang modern.
* **Halaman Koleksi & Jurnal**: Halaman terstruktur untuk menampilkan koleksi berdasarkan tema (`/collections`) dan artikel jurnal (`/journal`).
* **Routing Dinamis**: Detail untuk setiap koleksi dan artikel jurnal dapat diakses melalui *routing* dinamis (contoh: `/collections/:collectionId`), menampilkan konten yang spesifik untuk item yang dipilih.
* **Animasi Halus**: Penggunaan **Framer Motion** di seluruh situs untuk transisi halaman, efek *fade-in*, dan animasi saat *scroll* (*whileInView*), menciptakan pengalaman pengguna yang elegan dan responsif.
* **Komponen Terstruktur**: Proyek ini menggunakan komponen-komponen yang terorganisir dengan baik, seperti `Header`, `Footer`, dan `ContactModal`, untuk memastikan kode yang bersih dan dapat digunakan kembali.

## 🛠️ Teknologi yang Digunakan

* **Framework**: React.js
* **Build Tool**: Vite
* **Routing**: React Router DOM
* **Animasi**: Framer Motion
* **Styling**: Tailwind CSS (melalui CDN) & CSS dasar
* **Ikon**: Lucide React

## 🚀 Cara Menjalankan Proyek

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repository ini:**
    ```bash
    git clone [https://github.com/yuridazani/vault-lookbook.git](https://github.com/yuridazani/vault-lookbook.git)
    cd vault-lookbook
    ```

2.  **Instal semua dependensi:**
    ```bash
    npm install
    ```

3.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```

4.  Buka browser Anda dan kunjungi `http://localhost:5173` (atau port lain yang ditampilkan di terminal Anda).
