# 🌾 Sistem Dashboard Irigasi Terpadu (Monorepo)

Sistem Dashboard Irigasi Terpadu adalah platform monitoring dan kontrol jaringan irigasi modern berbasis **Monorepo** yang dibangun menggunakan **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **pnpm Workspaces**, dan **Turborepo**.

Sistem ini dirancang untuk menghubungkan beberapa modul dashboard irigasi, portal utama, halaman autentikasi, serta konsol admin terpusat dalam satu ruang kerja (workspace) yang terstruktur, efisien, dan scalable.

---

## 🏛️ Arsitektur Monorepo

```text
.
├── apps/
│   ├── portal/            # Port 3006 (Portal Utama Sistem)
│   ├── dashboard-1/        # Port 3007 (List Lokasi)
│   ├── dashboard-2/        # Port 3008 (Evaluasi Engine)
│   ├── dashboard-3/        # Port 3009 (List Engine)
│   ├── dashboard-4/        # Port 3010 (Masalah Engine)
│   ├── admin/              # Port 3011 (Konsol Admin Terpusat)
│   └── login/              # Port 3012 (Halaman Login Frontend)
│
├── packages/
│   ├── assets/            # Aset gambar & identitas visual (logo.png)
│   ├── config/            # Konfigurasi terpusat Tailwind CSS & TypeScript
│   ├── types/             # Kontrak tipe data TypeScript terpusat
│   └── ui/                # Library komponen UI bersama (Header, Sidebar, Logo, Card, dll.)
│
├── .env.example           # Konfigurasi variabel lingkungan base URL
├── pnpm-workspace.yaml    # Definisi workspace pnpm
├── turbo.json             # Konfigurasi pipeline build & dev Turborepo
└── package.json           # Dependensi & skrip utama monorepo
```

---

<!-- ## 🚀 Fitur Utama & Modul Aplikasi

### 1. 🌐 Portal Utama (`apps/portal` - Port 3006)
- Pintu masuk utama sistem bagi pengguna untuk memilih 4 modul dashboard irigasi.
- Tampilan minimalis, profesional, dan responsif dengan kartu navigasi interaktif.

### 2. 💧 Dashboard 1 - Alokasi Air (`apps/dashboard-1` - Port 3007)
- Monitoring pasokan air, jadwal penggiliran, dan efisiensi penyaluran ke petak tersier.

### 3. 🌤️ Dashboard 2 - Tanah & Iklim (`apps/dashboard-2` - Port 3008)
- Telemetri sensor kelembapan tanah (Soil Moisture) dan Stasiun Iklim Otomatis (AWS).

### 4. 🚰 Dashboard 3 - Pintu Air (`apps/dashboard-3` - Port 3009)
- Monitoring ketinggian air bendung (AWLR), kontrol bukaan pintu air, dan peringatan siaga banjir.

### 5. ⚡ Dashboard 4 - Pompa & Energi (`apps/dashboard-4` - Port 3010)
- Status operasional stasiun pompa irigasi, konsumsi daya energi (kWh), dan pemeliharaan.

### 6. 🛠️ Konsol Admin Terpusat (`apps/admin` - Port 3011)
- Pengelolaan terpusat untuk seluruh 4 modul dashboard dan pengaturan hak akses pengguna.
- Layout terang (Light Theme) dengan sidebar navigasi interaktif (`/admin`, `/admin/dashboard-1` s.d. `4`).

### 7. 🔑 Halaman Login (`apps/login` - Port 3012)
- Tampilan autentikasi terpusat frontend untuk simulasi login pengguna.

--- -->

## 💻 Panduan Memulai (Getting Started)

### Prasyarat System
- **Node.js**: `v20.0.0` atau yang lebih baru
- **pnpm**: `v10.0.0` atau yang lebih baru

### 1. Kloning Repositori
```bash
git clone https://github.com/zakiahmadbasyary/DashboardIrigasi.git
cd DashboardIrigasi
```

### 2. Instalasi Dependensi
Jalankan perintah berikut di folder akar monorepo:
```bash
pnpm install
```

### 3. Menjalankan Seluruh Aplikasi (Paralel)
Untuk menjalankan **seluruh 7 aplikasi** sekaligus secara bersamaan:
```bash
pnpm dev
```

Aplikasi akan aktif di URL lokal berikut:
- **Portal**: [http://localhost:3006](http://localhost:3006)
- **Dashboard 1**: [http://localhost:3007](http://localhost:3007)
- **Dashboard 2**: [http://localhost:3008](http://localhost:3008)
- **Dashboard 3**: [http://localhost:3009](http://localhost:3009)
- **Dashboard 4**: [http://localhost:3010](http://localhost:3010)
- **Admin**: [http://localhost:3011](http://localhost:3011)
- **Login**: [http://localhost:3012](http://localhost:3012)

### 4. Menjalankan Aplikasi Tertentu (Spesifik)
Jika ingin menjalankan hanya satu aplikasi tertentu:
```bash
# Menjalankan Portal saja
pnpm --filter portal dev

# Menjalankan Admin Console saja
pnpm --filter admin dev

# Menjalankan Dashboard 1 saja
pnpm --filter dashboard-1 dev
```

---

## 🛠️ Skrip Pembangunan (Build & Lint)

```bash
# Melakukan build produksi untuk seluruh paket dan aplikasi
pnpm build

# Menjalankan verifikasi linting TypeScript di seluruh monorepo
pnpm lint
```

---

## 🔗 Konfigurasi Variabel Lingkungan (.env)

Navigasi antardashboard menggunakan variabel lingkungan yang didefinisikan pada file `.env`:
```env
NEXT_PUBLIC_PORTAL_URL=http://localhost:3006
NEXT_PUBLIC_DASHBOARD1_URL=http://localhost:3007
NEXT_PUBLIC_DASHBOARD2_URL=http://localhost:3008
NEXT_PUBLIC_DASHBOARD3_URL=http://localhost:3009
NEXT_PUBLIC_DASHBOARD4_URL=http://localhost:3010
NEXT_PUBLIC_ADMIN_URL=http://localhost:3011
NEXT_PUBLIC_LOGIN_URL=http://localhost:3012
```

---

## 📝 Lisensi

Hak Cipta © 2026 **Sistem Irigasi Terpadu**.
