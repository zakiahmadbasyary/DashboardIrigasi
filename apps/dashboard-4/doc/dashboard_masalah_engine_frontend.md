# Dashboard Masalah Engine — Frontend Specification

## Tujuan
Implementasikan **body/isi halaman Dashboard Masalah Engine** pada sistem Dashboard Irigasi.

Halaman digunakan untuk memonitor:
- Bulan
- Status
- Wilayah
- Lokasi
- Engine
- Nilai Availability
- Nilai Utilities

Gunakan alur visual:
**Filter → Ringkasan Availability & Utilities → Tabel Detail Engine**

> Scope saat ini hanya frontend/UI dengan dummy/static data. Belum menggunakan database, API, atau backend.

## Batasan
- Header/navbar **sudah tersedia**. Jangan membuat ulang header, navbar, sidebar, atau top navigation.
- Fokus hanya pada body/content area.
- Gunakan dummy/static data.
- Filter dan perhitungan dilakukan di frontend.
- Data chart harus berasal dari dataset yang sama dengan tabel.
- Struktur data dibuat modular agar mudah dihubungkan ke API/database nantinya.

---

# 1. Color Palette

Gunakan **color palette resmi proyek**, bukan warna dari screenshot/reference.

### Primary — Emerald Green

| Token | Hex | Penggunaan |
|---|---|---|
| Primary Green | `#059669` | Primary action, active state, main accent, availability |
| Hover Green | `#047857` | Hover button/link/row |
| Light Green Surface | `#ECFDF5` | Active/selected/success surface |
| Border Green | `#A7F3D0` | Active border/highlight |

### Secondary — Warm Gold / Yellow

| Token | Hex | Penggunaan |
|---|---|---|
| Secondary Gold | `#FCE27A` | Utilities visualization, secondary accent |
| Amber Text | `#D97706` | Warning/attention |
| Light Yellow Surface | `#FEF3C7` | Warning background |

### Accent — Terracotta Orange

| Token | Hex | Penggunaan |
|---|---|---|
| Vibrant Orange | `#F97316` | Critical/attention |
| Soft Orange Surface | `#FFF7ED` | Critical background |

### Neutral

| Token | Hex | Penggunaan |
|---|---|---|
| Page Background | `#F8FAFC` | Background halaman |
| Card / Surface | `#FFFFFF` | Card dan table |
| Border | `#E2E8F0` | Border/divider |
| Primary Text | `#0F172A` / `#1E293B` | Heading/content |
| Secondary Text | `#64748B` / `#94A3B8` | Label/metadata |

Gunakan prinsip:
- **Emerald** → primary system color dan availability
- **Gold** → utilities/secondary visualization
- **Amber** → attention
- **Orange** → critical
- **Slate/White** → foundation

Jangan membuat seluruh dashboard berwarna hijau.

---

# 2. Page Heading

Buat heading compact:

## Masalah Engine

Subtitle:

> Monitoring availability dan utilities engine berdasarkan wilayah, lokasi, dan status.

Jangan membuat hero section besar atau ilustrasi besar.

---

# 3. Information + Filter Card

Buat **satu card besar** dengan dua sisi.

Desktop:
- kiri ±40%
- kanan ±60%

```text
┌─────────────────────────────────────────────────────────────┐
│ TENTANG DASHBOARD              │ FILTER                     │
│                               │                            │
│ Penjelasan dashboard          │ Bulan                      │
│ dan data monitoring           │ [ Januari 2026 ▼ ]         │
│                               │                            │
│                               │ Status                     │
│                               │ [ Semua ▼ ]                │
└─────────────────────────────────────────────────────────────┘
```

## Sisi Kiri — Tentang Dashboard

Judul:

**Tentang Dashboard**

Deskripsi:

> Dashboard Masalah Engine digunakan untuk memantau tingkat availability dan utilities engine pada setiap wilayah dan lokasi. Dashboard membantu pengguna melihat rata-rata performa engine secara regional serta mengidentifikasi engine yang membutuhkan perhatian melalui data detail pada tabel.

Metadata:

```text
Wilayah : AW01–AW08
Periode : Bulanan
Data    : Availability & Utilities
Detail  : Wilayah → Lokasi → Engine
```

Jangan menggunakan ilustrasi besar.

## Sisi Kanan — Filter

### Filter Bulan
Label: **Bulan**

Gunakan month picker yang hanya memilih **satu bulan**, bukan date range.

Contoh:
`[ Januari 2026 ▼ ]`

Ketika bulan berubah, chart dan tabel diperbarui.

### Filter Status
Label: **Status**

Pilihan:
- Semua
- NS
- NSFC
- NSSC

Filter status memengaruhi:
- Availability chart
- Utilities chart
- Tabel

---

# 4. Chart Section

Di bawah information/filter card, buat **dua card Pie/Donut Chart** dalam satu row pada desktop.

```text
┌──────────────────────────────┐  ┌──────────────────────────────┐
│ Availability per Wilayah     │  │ Utilities per Wilayah        │
│                              │  │                              │
│            DONUT             │  │            DONUT              │
│                              │  │                              │
│ AW01 ... AW08                │  │ AW01 ... AW08                │
└──────────────────────────────┘  └──────────────────────────────┘
```

## 4.1 Pie Chart Kiri — Availability

Judul:

**Availability per Wilayah**

Tujuan:

Menampilkan **rata-rata availability engine pada setiap wilayah AW01–AW08**.

Jangan menghitung jumlah engine. Nilai harus merupakan rata-rata availability engine yang berada pada wilayah tersebut.

Konsep:

```text
Availability Engine
        ↓
Rata-rata engine pada lokasi
        ↓
Rata-rata seluruh engine/lokasi pada wilayah
        ↓
Availability Wilayah
```

Wilayah:
- AW01
- AW02
- AW03
- AW04
- AW05
- AW06
- AW07
- AW08

Gunakan nilai persentase.

Contoh dummy:
- AW01 → 92%
- AW02 → 88%
- AW03 → 95%
- AW04 → 84%
- AW05 → 91%
- AW06 → 87%
- AW07 → 93%
- AW08 → 89%

Gunakan **Emerald `#059669`** sebagai accent utama availability dan variasi yang tetap harmonis dengan design system.

Legend harus menampilkan kode wilayah dan persentase.

## 4.2 Pie Chart Kanan — Utilities

Judul:

**Utilities per Wilayah**

Menampilkan **rata-rata utilities engine pada setiap wilayah AW01–AW08**.

Contoh dummy:
- AW01 → 78%
- AW02 → 82%
- AW03 → 75%
- AW04 → 88%
- AW05 → 81%
- AW06 → 79%
- AW07 → 85%
- AW08 → 80%

Gunakan **Secondary Gold `#FCE27A`** sebagai accent utama utilities.

Legend menampilkan:
- AW01
- AW02
- AW03
- AW04
- AW05
- AW06
- AW07
- AW08

Jika utilities pada sistem nantinya menggunakan unit tertentu, siapkan struktur data agar unit dapat diganti tanpa mengubah layout.

---

# 5. Perhitungan Chart

Kedua chart harus menggunakan **rata-rata performa**, bukan jumlah engine.

Contoh:

```text
AW01
├── 00A1
│   ├── ENG01 = 94%
│   └── ENG02 = 89%
└── 00A2
    └── ENG03 = 91%
```

Maka:

```text
Availability AW01
= average(94, 89, 91)
```

Utilities menggunakan prinsip yang sama.

Jika filter status dipilih, hanya engine dengan status tersebut yang masuk perhitungan.

Contoh:

```text
Status = NSFC

Availability AW01
= average(availability engine NSFC di AW01)
```

Gunakan utility:
```text
calculateAverageAvailabilityByRegion(data)
calculateAverageUtilitiesByRegion(data)
```

---

# 6. Table Section

Di bawah chart, buat card:

## Daftar Engine

Subtitle:

> Detail availability dan utilities setiap engine berdasarkan wilayah dan lokasi.

Di bagian header card, buat filter wilayah.

## Filter Wilayah

Pilihan:
- Semua
- AW01
- AW02
- AW03
- AW04
- AW05
- AW06
- AW07
- AW08

Default:
**Semua**

Filter ini hanya memengaruhi tabel.

---

# 7. Tabel Detail Engine

Kolom wajib:

| Kolom |
|---|
| Wilayah |
| Lokasi |
| Engine |
| Status |
| Nilai Availability |
| Nilai Utilities |

Contoh:

```text
┌─────────┬────────┬────────┬────────┬────────────────────┬──────────────────┐
│ Wilayah │ Lokasi │ Engine │ Status │ Nilai Availability │ Nilai Utilities  │
├─────────┼────────┼────────┼────────┼────────────────────┼──────────────────┤
│ AW01    │ 00A1   │ ENG01  │ NSFC   │ 94%                │ 82%              │
│ AW01    │ 00A1   │ ENG02  │ NS     │ 89%                │ 78%              │
│ AW01    │ 00A2   │ ENG03  │ NSSC   │ 91%                │ 80%              │
│ AW02    │ 00B1   │ ENG04  │ NS     │ 87%                │ 76%              │
└─────────┴────────┴────────┴────────┴────────────────────┴──────────────────┘
```

---

# 8. Dummy Data

Gunakan kode operasional, bukan nama geografis nyata.

## Wilayah
```text
AW01
AW02
AW03
AW04
AW05
AW06
AW07
AW08
```

## Lokasi
Gunakan kode:
```text
00A1
00A2
00A3
00A4
00A5
00B1
00B2
00B3
00C1
00C2
...
```

## Engine
Gunakan:
```text
ENG01
ENG02
ENG03
ENG04
ENG05
...
```

Contoh:

| Wilayah | Lokasi | Engine | Status | Availability | Utilities |
|---|---|---|---|---:|---:|
| AW01 | 00A1 | ENG01 | NSFC | 94% | 82% |
| AW01 | 00A1 | ENG02 | NS | 89% | 78% |
| AW01 | 00A2 | ENG03 | NSSC | 91% | 80% |
| AW02 | 00B1 | ENG04 | NS | 87% | 76% |
| AW02 | 00B1 | ENG05 | NSFC | 93% | 84% |
| AW03 | 00B2 | ENG06 | NSSC | 95% | 75% |
| AW03 | 00B3 | ENG07 | NS | 90% | 81% |
| AW04 | 00C1 | ENG08 | NSFC | 84% | 88% |
| AW04 | 00C2 | ENG09 | NS | 86% | 85% |
| AW05 | 00C3 | ENG10 | NSSC | 92% | 81% |
| AW06 | 00D1 | ENG11 | NSFC | 88% | 79% |
| AW07 | 00D2 | ENG12 | NS | 93% | 85% |
| AW08 | 00D3 | ENG13 | NSSC | 89% | 80% |

Tambahkan lebih banyak dummy rows agar tabel terlihat production-ready.

Pastikan:
- Semua AW01–AW08 terwakili.
- NS, NSFC, NSSC terwakili.
- Availability bervariasi.
- Utilities bervariasi.
- Satu lokasi dapat memiliki beberapa engine.
- Satu wilayah dapat memiliki beberapa lokasi.
- Data chart konsisten dengan tabel.

---

# 9. Status Badge

Status:
- NS
- NSFC
- NSSC

Gunakan badge compact dan mudah dibaca.

Jangan menggunakan warna terlalu kuat. Gunakan neutral/Emerald sebagai dasar dan Amber/Orange hanya untuk kondisi perhatian bila diperlukan.

---

# 10. Availability Visualization

Gunakan semantic visual:

- Availability tinggi → Emerald
- Availability menengah → Amber
- Availability rendah → Orange

Tetap hanya menggunakan palette proyek.

---

# 11. Utilities Visualization

Gunakan:

**Secondary Gold `#FCE27A`**

sebagai accent utama utilities.

---

# 12. Table Behavior

- Compact tetapi nyaman dibaca.
- Subtle divider.
- Sticky table header saat scroll.
- Horizontal scrolling jika diperlukan.
- Kolom kode/text rata kiri.
- Nilai numerik rata kanan.
- Status menggunakan badge.
- Availability dan Utilities ditampilkan jelas.
- Filter wilayah bekerja real-time pada dummy data.
- Tambahkan pagination.

Contoh:

```text
Menampilkan 1–10 dari 64 engine

Previous   1   2   3   4   5   Next
```

---

# 13. Empty State

Jika filter tidak menghasilkan data:

```text
Tidak ada data engine

Tidak ditemukan engine yang sesuai dengan filter yang dipilih.
```

Gunakan neutral UI, bukan error state.

---

# 14. Filter Behavior

### Bulan
Mengubah:
- Availability chart
- Utilities chart
- Table

### Status
Mengubah:
- Availability chart
- Utilities chart
- Table

### Wilayah
Mengubah:
- Table saja

Flow:

```text
Month Filter
      ↓
Status Filter
      ↓
Filtered Dataset
 ├──→ Availability Chart
 ├──→ Utilities Chart
 └──→ Table
           ↑
     Region Filter
```

---

# 15. Responsive Design

## Desktop

```text
Page Heading

┌─────────────────────────────────────────────────────────────┐
│ Informasi Dashboard             │ Filter                    │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────┐ ┌───────────────────────────┐
│ Availability per Wilayah     │ │ Utilities per Wilayah     │
│           DONUT              │ │           DONUT            │
└──────────────────────────────┘ └───────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Daftar Engine                     Filter Wilayah            │
├─────────────────────────────────────────────────────────────┤
│ Wilayah | Lokasi | Engine | Status | Availability | Utility│
└─────────────────────────────────────────────────────────────┘
```

## Tablet
- Information/filter card dapat stacked.
- Dua chart dapat menjadi satu kolom jika ruang tidak cukup.
- Table horizontal scrolling.

## Mobile
- Information dan filter satu kolom.
- Chart satu kolom.
- Filter wilayah full width.
- Table horizontal scrolling.
- Header table sticky.
- Jangan mengecilkan font secara berlebihan.

---

# 16. Component Structure

```text
DashboardMasalahEngine
│
├── PageHeading
│
├── EngineInfoFilterCard
│   ├── DashboardInfo
│   └── EngineFilters
│       ├── MonthPicker
│       └── StatusFilter
│
├── EngineCharts
│   ├── AvailabilityByRegionChart
│   └── UtilitiesByRegionChart
│
└── EngineTableSection
    ├── TableHeader
    │   └── RegionFilter
    ├── EngineTable
    │   ├── TableHeader
    │   └── TableRows
    └── Pagination
```

---

# 17. State

Gunakan state frontend:

```text
selectedMonth
selectedStatus
selectedRegion
```

Derived data:

```text
filteredData
availabilityByRegion
utilitiesByRegion
```

---

# 18. Utility Functions

Buat utility:

```text
calculateAverage(values)
calculateAverageAvailabilityByRegion(data)
calculateAverageUtilitiesByRegion(data)
filterByStatus(data, status)
filterByRegion(data, region)
formatPercentage(value)
```

---

# 19. Data Flow

```text
Dummy Engine Data
        ↓
   Month Filter
        ↓
   Status Filter
        ↓
  Filtered Dataset
       /       /        ↓     ↓
Availability  Utilities
  by Region   by Region
     \         /
      \       /
       ↓     ↓
      Charts
         ↓
       Table
         ↑
   Region Filter
```

Jangan membuat database/API pada tahap ini.

---

# 20. Visual Style

Gunakan gaya yang konsisten dengan Dashboard List Lokasi dan Dashboard List Engine:

- Modern enterprise dashboard
- Clean
- Professional
- Minimal
- Data-centric
- Operational monitoring
- High readability

Gunakan:
- Background `#F8FAFC`
- Card `#FFFFFF`
- Border `#E2E8F0`
- Primary `#059669`
- Secondary `#FCE27A`
- Amber `#D97706`
- Orange `#F97316`
- Text `#0F172A` / `#1E293B`
- Secondary text `#64748B`

---

# 21. Acceptance Criteria

- [ ] Header/navbar tidak dibuat ulang.
- [ ] Hanya body Dashboard Masalah Engine yang dibuat.
- [ ] Menggunakan color palette proyek.
- [ ] Ada page heading.
- [ ] Ada information + filter card.
- [ ] Card memiliki sisi kiri informasi dan sisi kanan filter.
- [ ] Filter bulan hanya memilih satu bulan.
- [ ] Filter status: NS, NSFC, NSSC.
- [ ] Ada dua Pie/Donut Chart.
- [ ] Chart kiri menampilkan rata-rata availability per wilayah AW01–AW08.
- [ ] Chart kanan menampilkan rata-rata utilities per wilayah AW01–AW08.
- [ ] Availability dan utilities dihitung berdasarkan data engine.
- [ ] Filter status memengaruhi chart dan tabel.
- [ ] Ada filter wilayah AW01–AW08 untuk tabel.
- [ ] Tabel memiliki kolom Wilayah, Lokasi, Engine, Status, Nilai Availability, Nilai Utilities.
- [ ] Semua data masih dummy/static.
- [ ] Tidak ada database/API.
- [ ] Semua AW01–AW08 terwakili.
- [ ] Data chart konsisten dengan tabel.
- [ ] Table memiliki pagination.
- [ ] Table memiliki sticky header.
- [ ] Table mendukung horizontal scrolling.
- [ ] Responsive desktop/tablet/mobile.
- [ ] Tidak menambahkan chart atau fitur lain yang tidak diminta.

---

# FINAL UI FLOW

```text
MASALAH ENGINE

Monitoring availability dan utilities engine
berdasarkan wilayah, lokasi, dan status.

┌─────────────────────────────────────────────────────────────┐
│ Tentang Dashboard              │ Filter                     │
│                               │                            │
│ Penjelasan dashboard          │ Bulan                      │
│                               │ [ Januari 2026 ▼ ]         │
│ Data Monitoring               │                            │
│ • AW01–AW08                   │ Status                     │
│ • Bulanan                     │ [ Semua ▼ ]                │
│ • Availability & Utilities    │                            │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────┐ ┌──────────────────────────────┐
│ Availability per Wilayah     │ │ Utilities per Wilayah        │
│            DONUT             │ │            DONUT              │
│ AW01 ... AW08                │ │ AW01 ... AW08                │
└──────────────────────────────┘ └──────────────────────────────┘

DAFTAR ENGINE

Filter Wilayah:
[ Semua ] [ AW01 ] [ AW02 ] ... [ AW08 ]

┌─────────┬────────┬────────┬────────┬──────────────┬─────────────┐
│ Wilayah │ Lokasi │ Engine │ Status │ Availability │ Utilities   │
├─────────┼────────┼────────┼────────┼──────────────┼─────────────┤
│ AW01    │ 00A1   │ ENG01  │ NSFC   │ 94%          │ 82%         │
│ AW01    │ 00A1   │ ENG02  │ NS     │ 89%          │ 78%         │
│ AW02    │ 00B1   │ ENG04  │ NS     │ 87%          │ 76%         │
│ ...     │ ...    │ ...    │ ...    │ ...          │ ...         │
└─────────┴────────┴────────┴────────┴──────────────┴─────────────┘
```

**Fokus utama: information card → filter bulan/status → dua pie chart rata-rata per wilayah → filter wilayah → tabel detail engine. Jangan menambahkan chart atau fitur lain di luar spesifikasi ini.**
