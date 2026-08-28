# Dashboard List Engine — Frontend Specification

## 1. Tujuan

Implementasikan **body/isi halaman Dashboard List Engine** pada sistem Dashboard Irigasi.

Halaman digunakan untuk memantau performa engine berdasarkan:
- Bulan
- Metric yang dipilih
- Wilayah
- Engine
- Cost

Gunakan konsep **drill-down bertingkat**:

`Wilayah → Engine → Cost`

**Scope:** frontend/UI dan dummy/static data saja. Belum menggunakan database, API, atau backend.

## 2. Batasan Implementasi

### Header
Header/navbar **sudah tersedia**. Jangan membuat ulang header, navbar, sidebar, atau top navigation. Fokus hanya pada body/content area.

### Data
- Gunakan dummy/static data.
- Tidak menggunakan database.
- Tidak menggunakan API.
- Filtering dilakukan di frontend.
- Drill-down dilakukan menggunakan state frontend.
- Struktur data harus modular agar nantinya mudah dihubungkan ke API/database.

---

# 3. Color Palette

Gunakan **color palette resmi proyek**. Jangan mengambil warna dari screenshot/reference image.

### Primary — Emerald Green

| Token | Hex | Penggunaan |
|---|---|---|
| Primary Green | `#059669` | Primary button, active state, main accent, selected row |
| Hover Green | `#047857` | Hover button/link/row |
| Light Green Surface | `#ECFDF5` | Active/selected state, success/info surface |
| Border Green | `#A7F3D0` | Active border, selected state |

### Secondary — Warm Gold / Yellow

| Token | Hex | Penggunaan |
|---|---|---|
| Secondary Gold | `#FCE27A` | Secondary accent, metric/cost highlight |
| Amber Text | `#D97706` | Warning/attention |
| Light Yellow Surface | `#FEF3C7` | Warning/attention background |

### Accent — Terracotta Orange

| Token | Hex | Penggunaan |
|---|---|---|
| Vibrant Orange | `#F97316` | Critical state, attention |
| Soft Orange Surface | `#FFF7ED` | Critical alert background |

### Neutral

| Token | Hex | Penggunaan |
|---|---|---|
| Page Background | `#F8FAFC` | Background halaman |
| Card / Surface | `#FFFFFF` | Card dan table container |
| Border | `#E2E8F0` | Border/divider |
| Primary Text | `#0F172A` / `#1E293B` | Heading dan content |
| Secondary Text | `#64748B` / `#94A3B8` | Label, metadata, helper text |

### Color Usage

- Emerald → primary system color
- Gold → secondary accent / cost
- Amber → warning / attention
- Orange → critical state
- Slate / White → UI foundation

Jangan membuat seluruh halaman menjadi hijau.

---

# 4. Page Heading

Setelah header aplikasi, buat heading compact:

## List Engine

Subtitle:

> Monitoring performa engine berdasarkan wilayah, periode, dan parameter operasional.

Jangan membuat hero section besar atau ilustrasi besar.

---

# 5. Filter & Information Card

Di bawah page heading, buat **satu card besar** yang terbagi menjadi dua sisi.

Desktop:
- Sisi kiri sekitar 40%.
- Sisi kanan sekitar 60%.

Struktur:

```text
┌─────────────────────────────────────────────────────────────┐
│ INFORMASI DASHBOARD              FILTER                     │
│                                                             │
│ Tentang Dashboard                Bulan                      │
│ Penjelasan singkat               [ Januari 2026 ▼ ]         │
│                                                             │
│                                  Data Ditampilkan            │
│                                  [ Jam Kerja/Hari ]          │
│                                  [ Solar/Jam ]               │
│                                  [ Air/Jam ]                 │
└─────────────────────────────────────────────────────────────┘
```

---

# 6. Sisi Kiri — Informasi Dashboard

Judul:

**Tentang Dashboard**

Isi:

> Dashboard List Engine digunakan untuk memantau performa engine pada setiap wilayah berdasarkan parameter operasional yang dipilih. Data ditampilkan secara bertahap mulai dari performa wilayah, detail engine, hingga cost engine berdasarkan tanggal.

Tambahkan:

```text
Data Monitoring

Wilayah    : AW01–AW08
Periode    : Bulanan
Detail     : Wilayah → Engine → Cost
```

Gunakan typography sederhana. Jangan menggunakan ilustrasi besar.

---

# 7. Sisi Kanan — Filter

## 7.1 Filter Bulan

Label: **Bulan**

Gunakan month picker yang hanya memungkinkan user memilih **satu bulan**.

Contoh:

`[ Januari 2026 ▼ ]`

Jangan menggunakan date range.

Ketika bulan berubah:
- Data wilayah berubah.
- Data engine berubah.
- Data cost berubah.
- Jumlah kolom tanggal mengikuti jumlah hari pada bulan terpilih.

Contoh:
- Januari → 01–31
- April → 01–30
- Februari 2026 → 01–28

---

# 8. Filter Metric

Label:

**Data yang Ditampilkan**

User hanya dapat memilih satu metric.

Pilihan:
1. **Jam Kerja/Hari**
2. **Solar/Jam**
3. **Air/Jam**

Gunakan segmented control, radio group, atau dropdown yang jelas.

### Jam Kerja/Hari
Unit: `Jam/hari`

### Solar/Jam
Unit: `L/jam`

### Air/Jam
Unit: `m³/jam`

Metric yang dipilih menentukan nilai rata-rata, nilai per tanggal, dan unit yang ditampilkan.

---

# 9. Tabel Level 1 — Performa Wilayah

Setelah filter card, buat section:

## Performa Wilayah

Subtitle:

> Pilih wilayah untuk melihat detail engine.

Tampilkan seluruh wilayah:

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

## Struktur Tabel

Kolom:

```text
Wilayah
Rata-rata
01
02
03
04
05
...
30/31
```

Jumlah tanggal mengikuti bulan yang dipilih.

Contoh:

```text
┌─────────┬──────────┬────┬────┬────┬────┬────┬──────────┐
│ Wilayah │ Rata-rata│ 01 │ 02 │ 03 │ 04 │ 05 │ ... │ 31 │
├─────────┼──────────┼────┼────┼────┼────┼────┼──────────┤
│ AW01    │ 4.20     │4.1 │4.4 │4.0 │4.3 │4.2 │ ...      │
│ AW02    │ 3.85     │3.8 │3.9 │3.7 │4.0 │3.8 │ ...      │
└─────────┴──────────┴────┴────┴────┴────┴────┴──────────┘
```

---

# 10. Interaksi Tabel Wilayah

Setiap row wilayah harus dapat diklik.

### Hover
- Cursor pointer.
- Background subtle `#ECFDF5`.

### Selected
- Background `#ECFDF5`.
- Accent/border `#059669`.
- Indicator kecil bahwa row sedang dipilih.

Helper text:

> Klik salah satu wilayah untuk melihat detail engine.

---

# 11. Tabel Level 2 — Performa Engine

### Initial State

```text
Region Table = visible
Engine Table = hidden
Cost Table = hidden
```

Ketika user memilih wilayah, misalnya `AW03`, munculkan tabel engine di bawah tabel wilayah.

Judul:

## Performa Engine — AW03

Subtitle:

> Data performa engine pada wilayah AW03.

Tambahkan tombol:

**← Kembali ke Semua Wilayah**

---

# 12. Data Engine

Gunakan kode engine dummy:

```text
ENG01
ENG02
ENG03
ENG04
ENG05
ENG06
ENG07
ENG08
ENG09
ENG10
...
```

Contoh relasi:

```text
AW01 → ENG01, ENG02, ENG03
AW02 → ENG04, ENG05
AW03 → ENG06, ENG07, ENG08
AW04 → ENG09, ENG10
AW05 → ENG11, ENG12
AW06 → ENG13, ENG14, ENG15
AW07 → ENG16, ENG17
AW08 → ENG18, ENG19, ENG20
```

Tidak semua wilayah harus memiliki jumlah engine yang sama.

---

# 13. Struktur Tabel Engine

Kolom:

```text
Engine
Rata-rata
01
02
03
04
05
...
30/31
```

Nilai mengikuti metric yang dipilih.

Setiap row engine dapat diklik.

Saat dipilih:
- Row active.
- Background `#ECFDF5`.
- Accent `#059669`.
- Cost table muncul di bawahnya.

Helper text:

> Klik salah satu engine untuk melihat detail cost.

---

# 14. Tabel Level 3 — Cost Engine

Cost table **tidak ditampilkan** sampai user memilih engine.

Setelah memilih, misalnya:

```text
Wilayah: AW03
Engine: ENG06
```

munculkan:

## Cost Engine — ENG06

Subtitle:

> Detail cost engine berdasarkan tanggal.

Struktur:

```text
Engine
Rata-rata Cost
01
02
03
04
05
...
30/31
```

Contoh:

```text
┌─────────┬────────────────┬────┬────┬────┬────┬────┬─────────┐
│ Engine  │ Rata-rata Cost │ 01 │ 02 │ 03 │ 04 │ 05 │ ... 31  │
├─────────┼────────────────┼────┼────┼────┼────┼────┼─────────┤
│ ENG06   │ Rp 1.250.000   │... │... │... │... │... │ ...     │
└─────────┴────────────────┴────┴────┴────┴────┴────┴─────────┘
```

Gunakan format Rupiah.

---

# 15. Drill-down State

Gunakan state frontend:

```text
selectedMonth
selectedMetric
selectedRegion
selectedEngine
```

### Initial

```text
selectedRegion = null
selectedEngine = null

Wilayah Table = visible
Engine Table = hidden
Cost Table = hidden
```

### Setelah memilih AW03

```text
selectedRegion = "AW03"
selectedEngine = null

Wilayah Table = visible
Engine Table = visible
Cost Table = hidden
```

### Setelah memilih ENG06

```text
selectedRegion = "AW03"
selectedEngine = "ENG06"

Wilayah Table = visible
Engine Table = visible
Cost Table = visible
```

---

# 16. Reset / Navigation

Pada Engine level:

**← Kembali ke Semua Wilayah**

Set:

```text
selectedRegion = null
selectedEngine = null
```

Engine table dan cost table kembali hidden.

Pada Cost level:

**← Kembali ke Daftar Engine**

Set:

```text
selectedEngine = null
```

Cost table kembali hidden.

---

# 17. Data Consistency

Data antar level harus konsisten.

Contoh:

```text
AW03
   ↓
ENG06
   ↓
Cost ENG06
```

Jika user memilih AW03:
- Hanya engine milik AW03 yang muncul.

Jika user memilih ENG06:
- Hanya cost ENG06 yang muncul.

Jangan menampilkan data dari wilayah/engine lain.

---

# 18. Dummy Data

Gunakan dummy/static data.

Periode default:

**Januari 2026**

Januari memiliki 31 hari:

```text
01–31
```

Wilayah:

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

Engine:

```text
ENG01–ENG20
```

Setiap engine memiliki data harian:

```text
workingHoursPerDay
solarPerHour
waterPerHour
cost
```

Data harian harus bervariasi.

Contoh struktur:

```text
{
  region: "AW03",
  engines: [
    {
      code: "ENG06",
      dailyData: {
        "2026-01-01": {
          workingHoursPerDay: 4.2,
          solarPerHour: 3.1,
          waterPerHour: 12.4,
          cost: 1250000
        }
      }
    }
  ]
}
```

Tidak perlu database/API.

---

# 19. Perhitungan Rata-rata

Kolom Rata-rata dihitung dari data harian sesuai metric.

### Jam Kerja/Hari

```text
average = total workingHoursPerDay / jumlah hari
```

### Solar/Jam

```text
average = total solarPerHour / jumlah hari
```

### Air/Jam

```text
average = total waterPerHour / jumlah hari
```

Gunakan utility:

```text
calculateAverage(data)
```

---

# 20. Utility yang Disarankan

Buat utility:

```text
getDaysInMonth(month)
getMetricUnit(metric)
getMetricValue(data, metric)
calculateAverage(data)
formatCurrency(value)
```

---

# 21. Table Scrolling

Karena terdapat hingga 31 kolom tanggal:

- Gunakan horizontal scrolling.
- Jangan mengecilkan font secara berlebihan.
- Gunakan column width konsisten.
- Table header sticky saat vertical scrolling.
- Kolom pertama (`Wilayah` atau `Engine`) dapat dibuat sticky saat horizontal scrolling.
- User harus tetap mengetahui wilayah/engine ketika melihat tanggal jauh di kanan.

---

# 22. Visual Style

Gunakan style yang konsisten dengan Dashboard List Lokasi:

- Modern enterprise dashboard
- Clean
- Professional
- Minimal
- Data-centric
- Operational monitoring
- High readability

Gunakan:
- Background `#F8FAFC`
- White cards
- Border `#E2E8F0`
- Moderate border radius
- Subtle shadow
- Consistent spacing
- Compact controls
- Clear typography
- Emerald primary accent

Jangan menggunakan:
- Gradient berlebihan.
- Ilustrasi besar.
- Animasi berlebihan.
- Warna di luar design system.
- Tampilan seperti landing page.

---

# 23. Responsive Design

### Desktop
- Filter/info card dua kolom.
- Table full available width.
- Tanggal menggunakan horizontal scrolling.
- Kolom pertama sticky jika memungkinkan.

### Tablet
- Filter/info card dapat stacked.
- Table tetap horizontal scrolling.

### Mobile
- Information card satu kolom.
- Filter full width.
- Table horizontal scrolling.
- Jangan memaksa 31 tanggal masuk ke layar.
- Pertahankan readability.
- Kolom pertama tetap sticky jika memungkinkan.

---

# 24. Component Structure

```text
DashboardListEngine
│
├── PageHeading
│
├── EngineFilterInfoCard
│   ├── DashboardInfo
│   └── EngineFilters
│       ├── MonthPicker
│       └── MetricSelector
│
├── RegionPerformanceTable
│   ├── RegionTableHeader
│   └── RegionTableRows
│
├── EnginePerformanceTable
│   ├── SelectedRegionHeader
│   ├── BackToRegionButton
│   └── EngineTableRows
│
└── EngineCostTable
    ├── SelectedEngineHeader
    ├── BackToEngineButton
    └── CostTableRows
```

State:

```text
selectedMonth
selectedMetric
selectedRegion
selectedEngine
```

---

# 25. Data Flow

```text
Dummy Data
    ↓
Month Filter
    ↓
Metric Filter
    ↓
Region Performance Table
    ↓
Select Region
    ↓
Engine Performance Table
    ↓
Select Engine
    ↓
Engine Cost Table
```

Jangan membuat database/API pada tahap ini.

Struktur frontend harus siap dihubungkan ke backend nantinya.

---

# 26. Acceptance Criteria

- [ ] Header/navbar tidak dibuat ulang.
- [ ] Hanya body Dashboard List Engine yang dibuat.
- [ ] Menggunakan color palette proyek.
- [ ] Ada page heading.
- [ ] Ada card informasi + filter.
- [ ] Card terbagi menjadi sisi kiri informasi dan sisi kanan filter.
- [ ] Filter bulan hanya memilih satu bulan.
- [ ] Metric: Jam Kerja/Hari, Solar/Jam, Air/Jam.
- [ ] Tabel wilayah menampilkan AW01–AW08.
- [ ] Tabel wilayah memiliki Rata-rata.
- [ ] Tabel wilayah memiliki tanggal sesuai bulan terpilih.
- [ ] Klik wilayah membuka tabel engine.
- [ ] Tabel engine hanya menampilkan engine wilayah terpilih.
- [ ] Tabel engine memiliki Rata-rata dan tanggal.
- [ ] Klik engine membuka tabel cost.
- [ ] Tabel cost hanya menampilkan cost engine terpilih.
- [ ] Cost memiliki Rata-rata dan tanggal.
- [ ] Perubahan bulan mengubah jumlah kolom tanggal.
- [ ] Perubahan metric mengubah nilai dan unit.
- [ ] Rata-rata dihitung dari data harian.
- [ ] Data masih dummy/static.
- [ ] Tidak ada database/API.
- [ ] Data antar level konsisten.
- [ ] Table mendukung horizontal scrolling.
- [ ] Table header sticky.
- [ ] Responsive desktop/tablet/mobile.
- [ ] Drill-down menggunakan state frontend.

---

# 27. Final UI Flow

```text
LIST ENGINE
Monitoring performa engine berdasarkan wilayah,
periode, dan parameter operasional.

┌─────────────────────────────────────────────────────────────┐
│ Tentang Dashboard             │ FILTER                      │
│                               │                             │
│ Monitoring engine             │ Bulan                       │
│ berdasarkan wilayah           │ [ Januari 2026 ▼ ]          │
│                               │                             │
│ Data Monitoring               │ Data Ditampilkan             │
│ • AW01–AW08                   │ [ Jam Kerja/Hari ]           │
│ • Bulanan                     │ [ Solar/Jam ]                │
│ • Wilayah → Engine → Cost     │ [ Air/Jam ]                  │
└─────────────────────────────────────────────────────────────┘

PERFORMA WILAYAH

AW01 | Rata-rata | 01 | 02 | 03 | ... | 31
AW02 | Rata-rata | 01 | 02 | 03 | ... | 31
AW03 | Rata-rata | 01 | 02 | 03 | ... | 31
...
AW08 | Rata-rata | 01 | 02 | 03 | ... | 31

          ↓ Klik AW03

PERFORMA ENGINE — AW03

ENG06 | Rata-rata | 01 | 02 | 03 | ... | 31
ENG07 | Rata-rata | 01 | 02 | 03 | ... | 31
ENG08 | Rata-rata | 01 | 02 | 03 | ... | 31

          ↓ Klik ENG06

COST ENGINE — ENG06

ENG06 | Rata-rata Cost | 01 | 02 | 03 | ... | 31
```

**Fokus implementasi pada filter, tabel, dan drill-down Wilayah → Engine → Cost. Jangan menambahkan chart atau fitur lain yang tidak disebutkan dalam spesifikasi ini.**
