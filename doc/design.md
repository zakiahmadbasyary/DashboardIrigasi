# Design System – Dashboard Irigasi

## 1. Referensi Visual

Gunakan logo yang telah disediakan sebagai referensi utama identitas visual sistem. Seluruh aplikasi dalam monorepo harus memiliki gaya visual yang konsisten dengan karakter logo tersebut:

- Modern
- Bersih dan minimalis
- Profesional
- Berhubungan dengan lingkungan, air, pertanian, dan irigasi
- Menggunakan bentuk yang lembut dan tidak terlalu kaku
- Memiliki kesan digital tetapi tetap natural

Logo digunakan sebagai identitas utama pada Portal, Header Dashboard, halaman Login, dan Admin.

---

## 2. Arah Desain Utama

Ikuti karakter visual logo, terutama perpaduan warna hijau dengan warna aksen alami.

Desain **tidak perlu meniru bentuk logo secara berlebihan**. Gunakan logo sebagai sumber identitas warna dan suasana visual.

Prinsip utama:

- Gunakan banyak ruang kosong.
- Hindari tampilan yang terlalu ramai.
- Gunakan layout yang jelas dan mudah dibaca.
- Gunakan card dengan sudut membulat.
- Gunakan border dan shadow secara halus.
- Hindari efek visual berlebihan.
- Prioritaskan keterbacaan dan kemudahan penggunaan.
- Semua aplikasi harus terlihat sebagai bagian dari satu sistem.

---

## 3. Palet Warna

Gunakan warna yang terinspirasi langsung dari tone logo (Tanpa warna biru).

### 1. Warna Utama – Emerald Green
Hijau menjadi warna identitas utama sistem yang melambangkan pertanian, irigasi, dan kelestarian lingkungan.
- **Primary Green**: `#059669` (`emerald-600`) – Tombol utama, active state, indikator penting.
- **Hover Green**: `#047857` (`emerald-700`) – State hover tombol/link.
- **Light Green / Surface**: `#ECFDF5` (`emerald-50`) – Background ringan, badge info, highlight aktif.
- **Border Green**: `#A7F3D0` (`emerald-200`) – Border tipis untuk komponen aktif.

### 2. Warna Sekunder – Warm Gold / Yellow
Warna sekunder pendamping yang memberi nuansa hangat dan segar.
- **Secondary Yellow**: `#FCE27A` – Aksen sekunder utama, highlight, dan elemen pendukung.
- **Amber Text/State**: `#D97706` (`amber-600`) – Teks badge warning/peringatan.
- **Light Yellow Surface**: `#FEF3C7` (`amber-100`) – Background badge warning.

### 3. Warna Aksen Tambahan
- **Teracotta / Vibrant Orange**: `#F97316` (`orange-500`) – Perhatian, alert, atau status kritis/pompa energi.
- **Soft Orange Surface**: `#FFF7ED` (`orange-50`) – Background highlight alert.

### 4. Warna Netral (Base UI)
- **Background Utama**: `#F8FAFC` (`slate-50`) – Latar belakang halaman dashboard.
- **Card / Surface**: `#FFFFFF` (`white`) – Latar belakang kartu & modal.
- **Border Netral**: `#E2E8F0` (`slate-200`) – Garis pemisah & border kartu.
- **Text Utama**: `#0F172A` (`slate-900`) / `#1E293B` (`slate-800`) – Judul dan isi teks utama.
- **Text Sekunder**: `#64748B` (`slate-500`) / `#94A3B8` (`slate-400`) – Label, subtitle, dan metadata.

> **Catatan Penting:** Penggunaan warna biru ditiadakan dan diganti penuh dengan kombinasi tone hijau emerald, kuning emas `#FCE27A`, dan oranye alami sesuai identitas visual logo.

---

## 4. Tipografi

Gunakan font sans-serif modern yang mudah dibaca.

Karakter tipografi:

- Bersih
- Profesional
- Mudah dibaca pada ukuran kecil
- Cocok untuk dashboard dan data

Gunakan hierarchy yang jelas:

- Heading utama: tegas dan cukup besar.
- Subheading: lebih kecil tetapi tetap jelas.
- Body text: nyaman dibaca.
- Label dan metadata: lebih kecil dan menggunakan warna secondary text.

Jangan menggunakan terlalu banyak jenis font. Gunakan maksimal satu keluarga font utama untuk seluruh sistem.

---

## 5. Bentuk dan Komponen

### Border Radius

Gunakan sudut membulat secara konsisten untuk:

- Card
- Button
- Input
- Dropdown
- Modal

Jangan menggunakan radius yang terlalu ekstrem. Tampilan harus tetap profesional.

### Card

Gunakan card yang:

- Bersih
- Background putih
- Border tipis atau shadow sangat halus
- Padding cukup lega
- Memiliki hierarchy konten yang jelas

### Button

Gunakan:

- Primary button: hijau utama.
- Secondary button: putih dengan border hijau atau abu-abu.
- Hover state yang halus.
- Disabled state yang jelas.

### Input

Input harus:

- Bersih
- Mudah dibaca
- Memiliki border halus
- Memiliki focus state menggunakan warna hijau utama
- Konsisten di halaman Login dan Admin

---

## 6. Header

Dashboard dan halaman utama dapat menggunakan header dengan gaya minimalis.

Header berisi:

- Logo
- Nama sistem atau aplikasi
- Navigasi jika diperlukan
- Area aksi pengguna di sisi kanan jika nanti dibutuhkan

Gunakan background terang, putih, atau surface yang bersih.

Header tidak perlu terlalu tinggi.

Logo harus memiliki ruang yang cukup dan tidak terlihat terlalu kecil atau terdistorsi.

---

## 7. Portal Utama

Portal menjadi pintu masuk utama sistem.

Desain portal harus sederhana dan tidak terlalu padat.

Susunan yang disarankan:

1. Header dengan logo.
2. Hero atau pengantar singkat sistem.
3. Judul yang jelas.
4. Deskripsi singkat.
5. Empat card pilihan dashboard.

Setiap card dashboard:

- Memiliki judul.
- Memiliki deskripsi singkat placeholder.
- Memiliki icon sederhana jika diperlukan.
- Memiliki tombol atau indikator untuk membuka dashboard.
- Memiliki hover state yang halus.

Gunakan grid yang responsif.

Pada desktop, tampilkan empat dashboard dengan komposisi yang rapi.

Pada tablet dan mobile, grid harus menyesuaikan ukuran layar.

---

## 8. Dashboard 1–4

Untuk tahap awal, tampilan dashboard dibuat sederhana dan masih kosong.

Setiap dashboard minimal memiliki:

- Header.
- Logo kecil atau identitas aplikasi.
- Nama dashboard.
- Area konten utama.
- Placeholder bahwa dashboard masih dalam pengembangan.

Jangan membuat chart atau tabel kompleks sebelum kebutuhan data ditentukan.

Gunakan struktur layout yang nantinya mudah dikembangkan menjadi:

- Filter
- KPI
- Chart
- Tabel
- Peta
- Informasi monitoring

Keempat dashboard harus memiliki design language yang sama, tetapi nantinya dapat memiliki sedikit variasi warna aksen sesuai fungsi masing-masing.

---

## 9. Halaman Login

Halaman login harus minimalis dan profesional.

Gunakan:

- Logo di bagian atas atau samping.
- Judul yang jelas.
- Input username/email.
- Input password.
- Tombol login berwarna hijau utama.

Layout dapat menggunakan card di tengah halaman.

Jangan membuat halaman login terlalu ramai.

Jika menggunakan elemen dekoratif, gunakan bentuk abstrak sederhana yang terinspirasi dari elemen organik pada logo.

---

## 10. Admin Terpusat

Admin menggunakan satu design system yang sama dengan portal dan dashboard.

Struktur utama:

- Header.
- Sidebar.
- Area konten.

### Sidebar

Sidebar harus:

- Bersih.
- Mudah dinavigasi.
- Memiliki logo atau identitas sistem.
- Memiliki menu:
  - Overview
  - Dashboard 1
  - Dashboard 2
  - Dashboard 3
  - Dashboard 4

Gunakan warna hijau sebagai active state.

Jangan menggunakan terlalu banyak warna pada sidebar.

### Area Konten

Untuk tahap awal, halaman admin masih placeholder.

Layout harus disiapkan agar nantinya dapat digunakan untuk:

- Manajemen master data.
- Pengelolaan data Dashboard 1.
- Pengelolaan data Dashboard 2.
- Pengelolaan data Dashboard 3.
- Pengelolaan data Dashboard 4.
- Pengaturan pengguna dan hak akses.

---

## 11. Iconografi

Gunakan icon yang:

- Sederhana.
- Modern.
- Konsisten.
- Memiliki ketebalan stroke yang seragam.

Jangan mencampurkan banyak gaya icon yang berbeda.

Gunakan icon hanya jika membantu pemahaman pengguna.

---

## 12. Responsivitas

Seluruh aplikasi harus responsif.

Prioritas tampilan:

### Desktop

- Memanfaatkan ruang layar dengan baik.
- Dashboard dan admin nyaman digunakan untuk pekerjaan berbasis data.

### Tablet

- Grid menyesuaikan.
- Sidebar dapat diperkecil atau di-collapse.

### Mobile

- Header tetap mudah digunakan.
- Sidebar admin dapat menjadi drawer.
- Card portal ditampilkan dalam satu atau beberapa kolom sesuai ukuran layar.
- Tidak ada elemen yang terpotong secara horizontal.

---

## 13. Konsistensi Antar Aplikasi

Portal, Dashboard 1–4, Login, dan Admin harus terlihat sebagai satu ekosistem.

Gunakan secara konsisten:

- Warna utama.
- Warna aksen.
- Tipografi.
- Border radius.
- Button style.
- Card style.
- Input style.
- Header style.
- Spacing.

Gunakan shared design system melalui package UI pada monorepo jika memungkinkan.

Contoh komponen bersama:

- Logo
- Header
- Button
- Card
- Input
- Sidebar
- Badge
- PageContainer

---

## 14. Batasan Tahap Saat Ini

Untuk tahap awal:

- Jangan membuat desain dashboard yang terlalu kompleks.
- Jangan menambahkan chart palsu yang tidak diperlukan.
- Jangan menambahkan tabel data dummy yang besar.
- Jangan membuat banyak halaman yang belum dibutuhkan.
- Jangan membuat animasi berlebihan.
- Jangan menggunakan terlalu banyak warna.
- Jangan menambahkan dark mode kecuali memang diperlukan.
- Jangan mengubah identitas visual logo.

Fokus pada pembuatan fondasi UI yang bersih, konsisten, minimalis, dan siap dikembangkan ketika kebutuhan masing-masing dashboard sudah ditentukan.

---

## 15. Prioritas Implementasi

Urutan prioritas desain:

1. Setup design tokens berdasarkan identitas logo.
2. Buat shared UI components.
3. Buat Header.
4. Buat Portal sederhana.
5. Buat placeholder Dashboard 1–4.
6. Buat halaman Login.
7. Buat layout Admin dengan Sidebar.
8. Pastikan seluruh aplikasi konsisten dan responsif.

Sebelum menambahkan desain atau komponen baru, gunakan kembali komponen dan aturan design system yang sudah dibuat agar seluruh monorepo tetap konsisten.
