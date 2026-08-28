# Frontend Specification --- Dashboard List Lokasi

## 1. Tujuan

Halaman **Dashboard List Lokasi** merupakan salah satu halaman pada
sistem **Dashboard Irigasi** yang digunakan untuk memantau kondisi
lokasi berdasarkan bulan, status, prioritas, aktivitas kali siram, cost,
penggunaan solar, dan tingkat peringatan.

Dokumen ini menjadi acuan implementasi frontend. Tampilan mengikuti
struktur dan layout referensi yang diberikan, tetapi **warna harus
menggunakan color palette yang sudah ditetapkan pada proyek**, bukan
mengambil warna dari screenshot referensi.

> **Scope saat ini:** frontend/UI dan dummy data saja. Belum menggunakan
> database, API, atau backend.

------------------------------------------------------------------------

## 2. Batasan Implementasi

### Saat ini

-   Implementasi hanya pada sisi frontend.
-   Gunakan **dummy/static data**.
-   Data dapat disimpan sementara dalam file data/constant pada
    frontend.
-   Belum ada integrasi database.
-   Belum ada integrasi API.
-   Filter, sorting, pagination, dan grafik dapat bekerja menggunakan
    data dummy di sisi client.
-   Struktur komponen dibuat agar nantinya mudah dihubungkan ke
    API/database.

### Header

**Header/navbar sudah tersedia.**

Jangan membuat ulang header, navbar, sidebar, atau top navigation pada
halaman ini.

Halaman yang dibuat hanya:

``` text
Header yang sudah ada
        ↓
Body Dashboard List Lokasi
```

------------------------------------------------------------------------

# 3. Design System / Color Palette

Gunakan **palette resmi yang sudah digunakan pada proyek**, bukan
mengambil warna dari screenshot.

## 3.1 Primary --- Emerald Green

Identitas utama sistem.

  -----------------------------------------------------------------------
  Token                   Hex                     Penggunaan
  ----------------------- ----------------------- -----------------------
  Primary Green           `#059669`               Primary button, active
                                                  state, accent utama,
                                                  chart utama

  Hover Green             `#047857`               Hover primary
                                                  button/link

  Light Green Surface     `#ECFDF5`               Success/Aman badge,
                                                  active highlight,
                                                  surface

  Border Green            `#A7F3D0`               Border active/highlight
  -----------------------------------------------------------------------

## 3.2 Secondary --- Warm Gold / Yellow

  -----------------------------------------------------------------------
  Token                   Hex                     Penggunaan
  ----------------------- ----------------------- -----------------------
  Secondary Gold          `#FCE27A`               Accent sekunder, chart
                                                  Cost, highlight
                                                  statistik

  Amber Text              `#D97706`               Warning/Siaga text dan
                                                  badge

  Light Yellow Surface    `#FEF3C7`               Background
                                                  Siaga/warning container
  -----------------------------------------------------------------------

## 3.3 Accent --- Terracotta Orange

Gunakan secara terbatas.

  Token                 Hex         Penggunaan
  --------------------- ----------- ----------------------------------
  Vibrant Orange        `#F97316`   Kondisi kritis, perhatian khusus
  Soft Orange Surface   `#FFF7ED`   Background critical alert

## 3.4 Neutral

  -----------------------------------------------------------------------
  Token                   Hex                     Penggunaan
  ----------------------- ----------------------- -----------------------
  Background              `#F8FAFC`               Background halaman

  Card / Surface          `#FFFFFF`               Card, table, filter

  Border                  `#E2E8F0`               Border card, divider,
                                                  table

  Primary Text            `#0F172A` / `#1E293B`   Heading dan content

  Secondary Text          `#64748B` / `#94A3B8`   Label, metadata, helper
                                                  text
  -----------------------------------------------------------------------

### Aturan penggunaan warna

Jangan membuat dashboard seluruhnya berwarna hijau.

Gunakan prinsip:

-   **Emerald** → identitas utama dan primary interaction.
-   **Gold/Yellow** → secondary accent dan Cost.
-   **Amber** → Siaga.
-   **Orange** → Warning/kondisi kritis.
-   **Slate/White** → foundation UI.

Warna pada screenshot hanya digunakan sebagai **referensi layout**,
bukan sebagai sumber color palette.

------------------------------------------------------------------------

# 4. Struktur Halaman

Body halaman menggunakan urutan berikut:

``` text
Global Filter
      ↓
Chart Section
      ↓
Table Section
      ↓
Table Filter
      ↓
Data Table
      ↓
Pagination
```

------------------------------------------------------------------------

# 5. Global Filter

Letakkan global filter pada bagian paling atas body.

Filter harus menggunakan konsep **sticky/freeze** sehingga tetap
terlihat ketika halaman di-scroll.

## Filter

### Bulan

Dropdown/select:

-   Jan--Apr 2026
-   Mei--Agu 2026
-   dan periode lainnya sesuai kebutuhan dummy data.

Default dapat menggunakan periode terbaru.

### Status

Dropdown:

-   Semua
-   NSFC
-   NS
-   NSSC

### Prioritas

Dropdown:

-   Semua
-   High
-   Med
-   Low

### Reset Filter

Button:

**Reset Filter**

Gunakan style outline/secondary sehingga tidak lebih dominan daripada
primary action.

## Behavior

Global filter memengaruhi:

-   Pie chart
-   Bar chart Kali Siram
-   Bar chart Cost
-   Data tabel

Saat filter berubah, seluruh data visualisasi harus menyesuaikan
berdasarkan dummy data.

------------------------------------------------------------------------

# 6. Chart Section

Buat tiga card grafik dalam satu row pada desktop.

## 6.1 Distribusi Luas per Wilayah

Gunakan **Donut/Pie Chart**.

Judul:

**Distribusi Luas per Wilayah**

Data berdasarkan:

-   AW01
-   AW02
-   AW03
-   AW04
-   AW05
-   AW06
-   AW07
-   AW08

Tampilkan total luas di tengah chart.

Contoh:

``` text
1,250
Total Ha
```

Legend menampilkan:

-   Kode wilayah
-   Persentase

Gunakan warna chart yang tetap mengikuti design system proyek. Jangan
mengambil warna dari screenshot.

------------------------------------------------------------------------

## 6.2 Kali Siram per Wilayah

Gunakan **Bar Chart**.

Judul:

**Kali Siram per Wilayah**

X-axis:

``` text
AW01 AW02 AW03 AW04 AW05 AW06 AW07 AW08
```

Y-axis:

``` text
Jumlah Kali Siram
```

Gunakan **Primary Green `#059669`** sebagai warna utama bar.

Data harus berasal dari dummy data yang sama dengan tabel.

------------------------------------------------------------------------

## 6.3 Cost per Wilayah

Gunakan **Bar Chart**.

Judul:

**Cost per Wilayah (Rp)**

X-axis:

``` text
AW01 AW02 AW03 AW04 AW05 AW06 AW07 AW08
```

Y-axis:

``` text
Cost (Rp)
```

Gunakan **Secondary Gold `#FCE27A`** sebagai warna utama bar.

Format nilai menggunakan Rupiah.

Contoh:

``` text
Rp 1.250.000
```

------------------------------------------------------------------------

# 7. Section Daftar Lokasi

Setelah grafik, buat card utama untuk tabel.

Header section:

``` text
Daftar Lokasi
```

Pada area header tabel, letakkan filter tabel.

------------------------------------------------------------------------

# 8. Filter Tabel

Filter tabel berbeda dengan global filter.

Filter ini hanya memengaruhi **data pada tabel**.

## Wilayah

Gunakan filter berbentuk chip/select.

Pilihan:

-   Semua
-   AW01
-   AW02
-   AW03
-   AW04
-   AW05
-   AW06
-   AW07
-   AW08

Default:

**Semua**

## Peringatan

Gunakan filter:

-   Semua
-   Aman
-   Siaga
-   Warning

Default:

**Semua**

------------------------------------------------------------------------

# 9. Aturan Status Peringatan

Status **Peringatan tidak boleh berupa data bebas**.

Status harus dihitung berdasarkan nilai **Kali Siram**.

Gunakan aturan berikut:

    Kali Siram Peringatan
  ------------ -------------
         `< 3` **Aman**
         `3–4` **Siaga**
           `5` **Warning**

### Contoh

``` text
Kali Siram = 1 → Aman
Kali Siram = 2 → Aman
Kali Siram = 3 → Siaga
Kali Siram = 4 → Siaga
Kali Siram = 5 → Warning
```

Implementasikan logic ini sebagai fungsi/utility frontend agar tidak
terjadi ketidaksesuaian antara nilai Kali Siram dan badge Peringatan.

Contoh pseudocode:

``` text
if kaliSiram < 3
    return "Aman"

if kaliSiram >= 3 && kaliSiram <= 4
    return "Siaga"

if kaliSiram >= 5
    return "Warning"
```

> Karena saat ini menggunakan dummy data, nilai Kali Siram harus dibuat
> berada pada rentang yang relevan, terutama 1--5, agar ketiga kondisi
> peringatan dapat terlihat pada UI.

------------------------------------------------------------------------

# 10. Color Status Peringatan

## Aman

Gunakan:

``` text
Text:       #059669
Background: #ECFDF5
Border:     #A7F3D0
```

## Siaga

Gunakan:

``` text
Text:       #D97706
Background: #FEF3C7
```

## Warning

Gunakan:

``` text
Text:       #F97316
Background: #FFF7ED
```

Badge dibuat compact dan rounded.

------------------------------------------------------------------------

# 11. Data Table

Tabel memiliki kolom:

    No Kolom
  ---- ------------
     1 Lokasi
     2 Wilayah
     3 Luas (Ha)
     4 Status
     5 Prioritas
     6 Kali Siram
     7 Cost (Rp)
     8 Solar (L)
     9 Peringatan

## Lokasi

Gunakan kode dummy:

``` text
00A1
00A2
00A3
00A4
00A5
00A6
00A7
00A8
00A9
00B1
00B2
00B3
...
```

## Wilayah

Gunakan:

``` text
AW01
AW02
AW03
AW04
AW05
AW06
AW07
AW08
```

## Status

Pilihan:

``` text
NSFC
NS
NSSC
```

## Prioritas

Gunakan:

``` text
High
Med
Low
```

## Kali Siram

Gunakan angka integer, terutama rentang:

``` text
1–5
```

Nilai ini menjadi dasar perhitungan Peringatan.

## Cost

Gunakan nilai dummy dalam Rupiah.

## Solar

Gunakan nilai dummy dalam liter.

## Peringatan

**Selalu dihitung dari Kali Siram**, bukan ditulis manual pada dummy
data.

------------------------------------------------------------------------

# 12. Dummy Data

Gunakan static dummy data dan pastikan semua wilayah AW01--AW08
terwakili.

Contoh:

  ------------------------------------------------------------------------------------
  Lokasi   Wilayah         Luas Status   Prioritas   Kali Siram        Cost      Solar
  -------- --------- ---------- -------- ----------- ---------- ----------- ----------
  00A1     AW01            12.5 NSFC     High                 2   1,250,000       45.5

  00A2     AW01            15.0 NS       Med                  3     980,000       32.0

  00A3     AW02             8.2 NSSC     High                 5     450,000       15.0

  00B1     AW03            22.4 NSFC     Low                  2   2,100,000       65.2

  00B2     AW04            18.0 NS       Med                  4   1,400,000       42.0

  00B3     AW05            14.7 NSSC     Low                  1   1,150,000       38.5

  00B4     AW06            20.3 NSFC     High                 5   2,850,000       71.0

  00B5     AW07            11.8 NS       Med                  3     890,000       29.5

  00C1     AW08            17.6 NSSC     Low                  2   1,620,000       47.0

  00C2     AW02            13.4 NSFC     High                 4   1,780,000       53.0

  00C3     AW04             9.6 NS       Low                  1     720,000       24.0

  00C4     AW06            16.2 NSSC     Med                  5   2,350,000       62.5
  ------------------------------------------------------------------------------------

Tambahkan dummy rows secukupnya agar pagination dapat terlihat.

**Penting:** jangan menyimpan kolom `peringatan` sebagai nilai statis
pada data source. Derive status tersebut dari `kaliSiram`.

------------------------------------------------------------------------

# 13. Table Interaction

## Filtering

Tabel dapat difilter berdasarkan:

-   Wilayah
-   Peringatan

Global filter tetap memengaruhi dataset utama.

## Sorting

Sediakan sorting pada kolom:

-   Luas
-   Kali Siram
-   Cost
-   Solar

## Pagination

Gunakan pagination.

Contoh:

``` text
Menampilkan 1–10 dari 125 lokasi

Previous   1   2   3   4   5   Next
```

Pagination hanya menggunakan dummy data untuk saat ini.

------------------------------------------------------------------------

# 14. Sticky / Freeze Behavior

Ada dua area yang perlu diperhatikan:

### Global Filter

Global filter harus:

-   `position: sticky`
-   Menempel di bagian atas content area.
-   Memiliki background `#FFFFFF`.
-   Memiliki border bawah `#E2E8F0`.
-   Memiliki subtle shadow saat berada dalam kondisi sticky.
-   Memiliki `z-index` yang cukup agar berada di atas konten.

### Table Header

Header tabel juga sebaiknya tetap terlihat ketika area tabel memiliki
scroll.

------------------------------------------------------------------------

# 15. Responsive Layout

## Desktop

``` text
Global Filter
────────────────────────────────────

┌────────────┐ ┌────────────┐ ┌────────────┐
│ Pie Chart  │ │ Bar Chart  │ │ Bar Chart  │
│            │ │ Kali Siram │ │ Cost       │
└────────────┘ └────────────┘ └────────────┘

┌──────────────────────────────────────────┐
│ Daftar Lokasi   Filter Wilayah | Alert  │
├──────────────────────────────────────────┤
│ Table                                    │
└──────────────────────────────────────────┘
```

Gunakan tiga kolom chart pada desktop.

## Tablet

Gunakan 2 kolom untuk chart dan wrap filter jika diperlukan.

## Mobile

-   Chart menjadi satu kolom.
-   Global filter menjadi stacked atau horizontal scroll.
-   Filter tabel dapat menjadi horizontal scroll.
-   Tabel menggunakan horizontal scrolling.
-   Sticky global filter tetap dipertahankan.

------------------------------------------------------------------------

# 16. Component Structure

Struktur komponen frontend yang disarankan:

``` text
DashboardListLokasi
├── GlobalFilter
│   ├── MonthFilter
│   ├── StatusFilter
│   ├── PriorityFilter
│   └── ResetFilterButton
│
├── ChartSection
│   ├── LuasWilayahChart
│   ├── KaliSiramWilayahChart
│   └── CostWilayahChart
│
└── LocationTableSection
    ├── TableHeader
    │   ├── LocationTitle
    │   ├── WilayahFilter
    │   └── PeringatanFilter
    │
    ├── LocationTable
    │   ├── TableHeader
    │   └── TableRows
    │
    └── Pagination
```

Utility:

``` text
getWarningStatus(kaliSiram)
```

Utility tersebut menghasilkan:

``` text
Aman
Siaga
Warning
```

berdasarkan aturan Kali Siram.

------------------------------------------------------------------------

# 17. Data Flow Frontend

Untuk tahap awal:

``` text
Dummy Data
    ↓
Global Filter
    ↓
Filtered Dataset
    ├──→ Pie Chart
    ├──→ Kali Siram Chart
    ├──→ Cost Chart
    └──→ Table
              ↓
        Table Filter
              ↓
           Pagination
```

Jangan membuat API/database pada tahap ini.

Namun struktur data dan component dibuat modular agar nantinya sumber
data dapat diganti menjadi:

``` text
API / Backend / Database
```

tanpa perlu mengubah struktur UI secara besar.

------------------------------------------------------------------------

# 18. Visual Reference Rules

Screenshot yang diberikan digunakan sebagai **referensi layout dan
hierarchy**, terutama:

-   Posisi global filter.
-   Susunan tiga chart.
-   Bentuk card.
-   Posisi filter tabel.
-   Struktur tabel.
-   Pagination.
-   Kepadatan informasi.

Namun:

**Jangan menyalin warna dari screenshot.**

Gunakan color palette proyek:

``` text
Primary:
#059669
#047857
#ECFDF5
#A7F3D0

Secondary:
#FCE27A
#D97706
#FEF3C7

Accent:
#F97316
#FFF7ED

Neutral:
#F8FAFC
#FFFFFF
#E2E8F0
#0F172A
#1E293B
#64748B
#94A3B8
```

------------------------------------------------------------------------

# 19. Acceptance Criteria

Implementasi dianggap sesuai apabila:

-   [ ] Header tidak dibuat ulang.
-   [ ] Body halaman memiliki global filter.
-   [ ] Global filter bersifat sticky/freeze.
-   [ ] Terdapat Pie/Donut Chart Distribusi Luas per Wilayah.
-   [ ] Terdapat Bar Chart Kali Siram per Wilayah.
-   [ ] Terdapat Bar Chart Cost per Wilayah.
-   [ ] Terdapat filter Wilayah pada tabel.
-   [ ] Terdapat filter Peringatan pada tabel.
-   [ ] Tabel memiliki seluruh kolom yang ditentukan.
-   [ ] Wilayah hanya menggunakan AW01--AW08.
-   [ ] Lokasi menggunakan format kode seperti 00A1, 00A2, dst.
-   [ ] Data masih berupa dummy/static data.
-   [ ] Belum ada database/API.
-   [ ] Peringatan dihitung otomatis dari Kali Siram.
-   [ ] Kali Siram `< 3` menghasilkan **Aman**.
-   [ ] Kali Siram `3–4` menghasilkan **Siaga**.
-   [ ] Kali Siram `5` menghasilkan **Warning**.
-   [ ] Warna menggunakan palette proyek, bukan warna screenshot.
-   [ ] Tabel memiliki pagination.
-   [ ] Tabel memiliki sorting pada kolom numerik yang relevan.
-   [ ] Tampilan responsive untuk desktop, tablet, dan mobile.
