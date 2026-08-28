export type StatusLokasi = 'NSFC' | 'NS' | 'NSSC';
export type PrioritasLokasi = 'High' | 'Med' | 'Low';
export type PeringatanStatus = 'Aman' | 'Siaga' | 'Warning';
export type WilayahCode = 'AW01' | 'AW02' | 'AW03' | 'AW04' | 'AW05' | 'AW06' | 'AW07' | 'AW08';

export type PeriodeBulan =
  | 'Januari 2026'
  | 'Februari 2026'
  | 'Maret 2026'
  | 'April 2026'
  | 'Mei 2026'
  | 'Juni 2026'
  | 'Juli 2026'
  | 'Agustus 2026'
  | 'September 2026'
  | 'Oktober 2026'
  | 'November 2026'
  | 'Desember 2026';

export interface LokasiItem {
  id: string;
  lokasi: string;
  wilayah: WilayahCode;
  luas: number;
  status: StatusLokasi;
  prioritas: PrioritasLokasi;
  kaliSiram: number;
  cost: number;
  solar: number;
  bulan: PeriodeBulan;
}

export interface GlobalFilterState {
  bulan: PeriodeBulan | 'Semua';
  status: StatusLokasi | 'Semua';
  prioritas: PrioritasLokasi | 'Semua';
}

export interface TableFilterState {
  wilayah: WilayahCode | 'Semua';
  peringatan: PeringatanStatus | 'Semua';
  search: string;
}
