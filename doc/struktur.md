Saya ingin membuat proyek baru menggunakan arsitektur monorepo dengan Next.js dan TypeScript.

# Informasi Proyek

Nama proyek utama: [NAMA-PROYEK]

Tujuan proyek ini adalah membuat sistem dashboard irigasi yang terdiri dari:

- 1 Portal Utama
- 4 Dashboard
- 1 sistem Login
- 1 Halaman Admin terpusat

Untuk tahap saat ini, JANGAN menggunakan:

- Database
- ORM
- API eksternal
- Autentikasi sungguhan
- Backend

Fokus hanya pada setup struktur proyek, routing, layout, shared component, dan tampilan dasar frontend.

Struktur proyek harus disiapkan dengan baik agar nantinya mudah dikembangkan dan dihubungkan dengan database serta sistem autentikasi.

---

# 1. Arsitektur Monorepo

Buat proyek menggunakan arsitektur monorepo.

Gunakan:

- Next.js terbaru
- App Router
- TypeScript
- Tailwind CSS
- Turborepo jika sesuai dan stabil untuk mengelola monorepo
- Package manager yang mendukung workspace dengan baik

Buat struktur konsep seperti berikut:

apps/
├── portal/
├── dashboard-1/
├── dashboard-2/
├── dashboard-3/
├── dashboard-4/
└── admin/

packages/
├── ui/
├── config/
└── types/

Setiap aplikasi harus memiliki struktur folder yang rapi, konsisten, dan scalable.

Jangan membuat struktur terlalu kompleks atau melakukan overengineering.

---

# 2. Portal Utama

Buat aplikasi `portal` sebagai halaman utama sistem.

Portal berfungsi sebagai pintu masuk utama pengguna untuk memilih dashboard yang tersedia.

Tampilan portal cukup sederhana, minimalis, dan profesional.

Halaman utama portal berisi:

- Header atau navbar sederhana
- Nama atau logo sementara proyek
- Judul utama
- Deskripsi singkat sistem
- Empat kartu atau menu dashboard:
  - Dashboard 1
  - Dashboard 2
  - Dashboard 3
  - Dashboard 4
- Setiap kartu memiliki tombol atau link menuju dashboard masing-masing

Gunakan placeholder untuk seluruh konten karena isi sebenarnya belum ditentukan.

Jangan membuat desain terlalu kompleks.

---

# 3. Empat Dashboard

Buat empat aplikasi dashboard yang terpisah:

- `dashboard-1`
- `dashboard-2`
- `dashboard-3`
- `dashboard-4`

Untuk tahap awal, setiap dashboard hanya perlu memiliki:

- Header
- Nama dashboard
- Navigasi sederhana jika diperlukan
- Area konten utama
- Placeholder, misalnya:
  `Dashboard ini sedang dalam pengembangan`

Belum perlu membuat:

- Chart
- Tabel
- Database
- Data dummy yang kompleks
- API
- Fitur bisnis

Tampilan dasar keempat dashboard harus konsisten.

Gunakan shared component dan shared layout jika memungkinkan.

---

# 4. Login

Buat halaman login sebagai tampilan frontend saja.

Login belum perlu terhubung dengan:

- Database
- Auth.js atau NextAuth
- JWT
- API
- Backend autentikasi

Cukup buat tampilan yang berisi:

- Input email atau username
- Input password
- Tombol Login

Gunakan fungsi placeholder atau dummy.

Namun, struktur routing dan kode harus disiapkan agar nantinya autentikasi sungguhan dapat ditambahkan tanpa banyak mengubah struktur aplikasi.

Jangan mengimplementasikan sistem autentikasi sungguhan pada tahap ini.

---

# 5. Admin Terpusat

Buat SATU aplikasi `admin` yang menjadi halaman admin terpusat untuk seluruh sistem.

Jangan membuat halaman admin terpisah di setiap dashboard.

Admin nantinya akan digunakan untuk mengelola seluruh sistem dan keempat dashboard.

Untuk tahap awal, admin hanya perlu memiliki layout dasar yang terdiri dari:

- Header
- Sidebar
- Menu Dashboard atau Overview
- Menu Dashboard 1
- Menu Dashboard 2
- Menu Dashboard 3
- Menu Dashboard 4
- Area konten utama

Contoh struktur routing:

/admin

/admin/dashboard-1

/admin/dashboard-2

/admin/dashboard-3

/admin/dashboard-4

Semua halaman admin masih berupa placeholder.

Jangan membuat:

- CRUD
- Form pengelolaan data
- Database
- API
- Sistem autentikasi sungguhan

Fokus hanya pada struktur, routing, sidebar, header, dan halaman placeholder.

---

# 6. Shared Packages

Buat package bersama untuk komponen dan konfigurasi yang nantinya dapat digunakan oleh seluruh aplikasi.

Contoh:

packages/ui/

Berisi komponen yang dapat digunakan bersama, misalnya:

- Header
- Button
- Card
- Sidebar

Gunakan shared component tersebut jika relevan agar desain seluruh aplikasi dapat dikembangkan secara konsisten.

Buat juga package untuk:

- Shared configuration
- Shared TypeScript types

Contoh konsep:

packages/
├── ui/
│   └── components/
├── config/
└── types/

Jangan membuat package yang belum diperlukan.

Pastikan pemisahan antara:

- Komponen yang digunakan bersama
- Komponen khusus aplikasi

jelas dan mudah dipahami.

---

# 7. Routing dan Navigasi Antar Aplikasi

Untuk sementara, pastikan struktur navigasi antar aplikasi sudah jelas.

Karena belum melakukan deployment dan belum memiliki domain atau subdomain, gunakan konfigurasi development lokal yang sesuai.

Siapkan struktur agar nantinya aplikasi dapat menggunakan konsep URL seperti:

portal.domain.com

dashboard1.domain.com

dashboard2.domain.com

dashboard3.domain.com

dashboard4.domain.com

admin.domain.com

Namun, untuk development lokal, setiap aplikasi dapat menggunakan port yang berbeda.

Jangan hardcode URL secara berlebihan.

Jika diperlukan, gunakan environment variable untuk menyimpan base URL setiap aplikasi.

Buat contoh file:

.env.example

Gunakan environment variable agar URL aplikasi nantinya mudah diubah ketika proyek sudah di-deploy menggunakan domain dan subdomain.

---

# 8. Struktur Database

UNTUK SAAT INI JANGAN MEMBUAT DATABASE.

Jangan menambahkan:

- PostgreSQL
- MySQL
- MongoDB
- Prisma
- Drizzle
- ORM lainnya
- Schema database
- Migration
- Seed data

Namun, struktur aplikasi harus tetap mudah dikembangkan nantinya karena sistem ini direncanakan menggunakan satu database utama.

Database tersebut nantinya kemungkinan akan digunakan bersama oleh:

- Portal
- Dashboard 1
- Dashboard 2
- Dashboard 3
- Dashboard 4
- Admin

Database nantinya akan memiliki konsep master data yang dapat digunakan oleh beberapa dashboard.

Tetapi untuk tahap sekarang, jangan membuat implementasi database apa pun.

---

# 9. Persiapan Pengembangan Berikutnya

Buat struktur proyek yang mudah dikembangkan nantinya untuk:

- Satu database utama
- Master data bersama
- Empat dashboard dengan kebutuhan data berbeda
- Sistem autentikasi
- Login pengguna
- Role
- Permission
- Hak akses pengguna
- Admin terpusat
- API
- Deployment menggunakan subdomain
- Pengamanan akses antar aplikasi

Namun, JANGAN mengimplementasikan fitur-fitur tersebut sekarang.

Cukup buat struktur yang tidak akan menyulitkan pengembangan pada tahap berikutnya.

---

# 10. Standar Kode

Terapkan:

- TypeScript yang rapi
- ESLint
- Struktur folder yang konsisten
- Reusable component
- Shared component jika memang digunakan oleh lebih dari satu aplikasi
- Penamaan file dan folder yang konsisten
- Kode yang mudah dibaca
- Hindari duplikasi kode
- Hindari overengineering
- Jangan membuat fitur yang belum dibutuhkan

Gunakan pendekatan yang sederhana tetapi scalable.

---

# 11. Hasil yang Diharapkan

Setelah setup selesai, proyek harus memenuhi kondisi berikut:

1. Monorepo dapat dijalankan secara lokal.
2. Semua aplikasi Next.js dapat berjalan.
3. Portal dapat menampilkan empat pilihan dashboard.
4. Setiap dashboard memiliki halaman dasar dengan header dan placeholder.
5. Halaman login sudah memiliki tampilan dasar tetapi belum menggunakan autentikasi sungguhan.
6. Admin merupakan satu aplikasi terpusat.
7. Admin memiliki sidebar dan halaman placeholder untuk masing-masing dashboard.
8. Tersedia shared UI package.
9. Belum ada database.
10. Belum ada backend.
11. Belum ada autentikasi sungguhan.
12. Struktur proyek siap dikembangkan pada tahap berikutnya.

---

# 12. Verifikasi Akhir

Setelah implementasi selesai, lakukan pengecekan terhadap seluruh proyek.

Pastikan:

- Tidak ada error TypeScript
- Tidak ada import yang rusak
- Workspace monorepo berjalan dengan benar
- Shared package dapat digunakan oleh aplikasi yang membutuhkan
- Routing setiap aplikasi berjalan
- Portal dapat mengarahkan ke dashboard yang sesuai
- Struktur environment variable sudah disiapkan jika diperlukan
- Tidak ada database, ORM, atau autentikasi sungguhan yang ditambahkan

Jangan menambahkan fitur di luar kebutuhan yang disebutkan di atas tanpa alasan yang jelas.

---

# 13. Dokumentasi Hasil

Setelah implementasi selesai, jelaskan:

1. Struktur folder akhir proyek.
2. Fungsi masing-masing aplikasi.
3. Fungsi masing-masing package.
4. Cara menginstal dependency.
5. Cara menjalankan seluruh proyek.
6. Cara menjalankan aplikasi tertentu.
7. Port atau URL development masing-masing aplikasi.
8. Cara kerja navigasi antar aplikasi.
9. Environment variable yang digunakan.
10. File atau bagian mana yang nantinya perlu dikembangkan ketika database mulai ditambahkan.
11. File atau bagian mana yang nantinya perlu dikembangkan ketika sistem autentikasi mulai ditambahkan.

Fokus utama tahap ini adalah membuat fondasi monorepo yang rapi, sederhana, dapat dijalankan, dan mudah dikembangkan pada tahap berikutnya.