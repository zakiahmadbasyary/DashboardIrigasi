export type StatusLokasi = 'NSFC' | 'NS' | 'NSSC';
export type PrioritasLokasi = 'High' | 'Med' | 'Low';
export type PeringatanStatus = 'Aman' | 'Siaga' | 'Warning';
export type WilayahCode = 'AW01' | 'AW02' | 'AW03' | 'AW04' | 'AW05' | 'AW06' | 'AW07' | 'AW08';
export type PeriodeBulan = 'Jan-Apr 2026' | 'Mei-Agu 2026' | 'Sep-Des 2026';

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
