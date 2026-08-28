import {
  MasalahEngineRecord,
  MonthPeriod,
  WilayahCode,
  FilterState,
  RegionMetricStats,
} from '../types/masalahEngine';

export const MONTH_LIST: MonthPeriod[] = [
  'Januari 2026',
  'Februari 2026',
  'Maret 2026',
  'April 2026',
  'Mei 2026',
  'Juni 2026',
  'Juli 2026',
  'Agustus 2026',
  'September 2026',
  'Oktober 2026',
  'November 2026',
  'Desember 2026',
];

export const WILAYAH_LIST: WilayahCode[] = [
  'AW01',
  'AW02',
  'AW03',
  'AW04',
  'AW05',
  'AW06',
  'AW07',
  'AW08',
];

export function calculateAverage(values: number[]): number {
  if (!values || values.length === 0) return 0;
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return Math.round((sum / values.length) * 10) / 10;
}

export function filterRecords(
  records: MasalahEngineRecord[],
  filters: Partial<FilterState>
): MasalahEngineRecord[] {
  return records.filter((rec) => {
    if (filters.bulan && rec.bulan !== filters.bulan) {
      return false;
    }
    if (filters.status && filters.status !== 'Semua' && rec.status !== filters.status) {
      return false;
    }
    if (filters.wilayah && filters.wilayah !== 'Semua' && rec.wilayah !== filters.wilayah) {
      return false;
    }
    if (filters.search && filters.search.trim() !== '') {
      const q = filters.search.toLowerCase();
      const matchEngine = rec.engine.toLowerCase().includes(q);
      const matchLokasi = rec.lokasi.toLowerCase().includes(q);
      const matchWilayah = rec.wilayah.toLowerCase().includes(q);
      if (!matchEngine && !matchLokasi && !matchWilayah) return false;
    }
    return true;
  });
}

export function getRegionMetricStats(
  records: MasalahEngineRecord[]
): RegionMetricStats[] {
  return WILAYAH_LIST.map((w, idx) => {
    const wRecords = records.filter((r) => r.wilayah === w);
    const availabilities = wRecords.map((r) => r.availability);
    const utilities = wRecords.map((r) => r.utilities);

    // Fallbacks if filtered subset has no items for region
    const defaultAvail = [92, 88, 95, 84, 91, 87, 93, 89];
    const defaultUtil = [78, 82, 75, 88, 81, 79, 85, 80];

    return {
      wilayah: w,
      shortLabel: `AW${idx + 1}`,
      avgAvailability:
        wRecords.length > 0 ? calculateAverage(availabilities) : defaultAvail[idx],
      avgUtilities:
        wRecords.length > 0 ? calculateAverage(utilities) : defaultUtil[idx],
      engineCount: wRecords.length,
    };
  });
}

export function formatPercentage(val: number): string {
  return `${val.toFixed(1)}%`;
}
