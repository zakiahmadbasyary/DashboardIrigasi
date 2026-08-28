export type MetricType = 'Jam Kerja/Hari' | 'Solar/Jam' | 'Air/Jam';

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

export interface DailyRecord {
  workingHoursPerDay: number;
  solarPerHour: number;
  waterPerHour: number;
  cost: number;
}

export interface EngineItem {
  code: string; // e.g. ENG01
  name: string; // e.g. Engine Pump #1
  region: WilayahCode;
  dailyData: Record<string, DailyRecord>; // Key: "YYYY-MM-DD"
}

export interface RegionData {
  code: WilayahCode;
  name: string;
  engines: EngineItem[];
}
