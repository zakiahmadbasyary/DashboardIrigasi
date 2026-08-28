export type StatusEngine = 'NS' | 'NSFC' | 'NSSC';
export type WilayahCode = 'AW01' | 'AW02' | 'AW03' | 'AW04' | 'AW05' | 'AW06' | 'AW07' | 'AW08';

export type MonthPeriod =
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

export interface MasalahEngineRecord {
  id: string;
  wilayah: WilayahCode;
  lokasi: string; // e.g. 00A1
  engine: string; // e.g. ENG01
  status: StatusEngine;
  availability: number; // percentage, e.g. 94
  utilities: number; // percentage, e.g. 82
  bulan: MonthPeriod;
}

export interface FilterState {
  bulan: MonthPeriod;
  status: StatusEngine | 'Semua';
  wilayah: WilayahCode | 'Semua';
  search: string;
}

export interface RegionMetricStats {
  wilayah: WilayahCode;
  shortLabel: string;
  avgAvailability: number;
  avgUtilities: number;
  engineCount: number;
}
