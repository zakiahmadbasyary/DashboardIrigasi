import { MetricType, MonthPeriod, DailyRecord } from '../types/engine';

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

const MONTH_MAP: Record<MonthPeriod, { year: number; monthNum: number; days: number }> = {
  'Januari 2026': { year: 2026, monthNum: 1, days: 31 },
  'Februari 2026': { year: 2026, monthNum: 2, days: 28 },
  'Maret 2026': { year: 2026, monthNum: 3, days: 31 },
  'April 2026': { year: 2026, monthNum: 4, days: 30 },
  'Mei 2026': { year: 2026, monthNum: 5, days: 31 },
  'Juni 2026': { year: 2026, monthNum: 6, days: 30 },
  'Juli 2026': { year: 2026, monthNum: 7, days: 31 },
  'Agustus 2026': { year: 2026, monthNum: 8, days: 31 },
  'September 2026': { year: 2026, monthNum: 9, days: 30 },
  'Oktober 2026': { year: 2026, monthNum: 10, days: 31 },
  'November 2026': { year: 2026, monthNum: 11, days: 30 },
  'Desember 2026': { year: 2026, monthNum: 12, days: 31 },
};

export function getDaysInMonth(month: MonthPeriod): number {
  return MONTH_MAP[month]?.days || 31;
}

export function getMonthInfo(month: MonthPeriod) {
  return MONTH_MAP[month] || { year: 2026, monthNum: 1, days: 31 };
}

export function getDaysArray(month: MonthPeriod): { dayLabel: string; dateKey: string }[] {
  const { year, monthNum, days } = getMonthInfo(month);
  const mStr = String(monthNum).padStart(2, '0');

  const result = [];
  for (let i = 1; i <= days; i++) {
    const dStr = String(i).padStart(2, '0');
    result.push({
      dayLabel: dStr,
      dateKey: `${year}-${mStr}-${dStr}`,
    });
  }
  return result;
}

export function getMetricUnit(metric: MetricType): string {
  switch (metric) {
    case 'Jam Kerja/Hari':
      return 'Jam/hari';
    case 'Solar/Jam':
      return 'L/jam';
    case 'Air/Jam':
      return 'm³/jam';
    default:
      return '';
  }
}

export function getMetricValue(record: DailyRecord | undefined, metric: MetricType): number {
  if (!record) return 0;
  switch (metric) {
    case 'Jam Kerja/Hari':
      return record.workingHoursPerDay;
    case 'Solar/Jam':
      return record.solarPerHour;
    case 'Air/Jam':
      return record.waterPerHour;
    default:
      return 0;
  }
}

export function calculateAverage(values: number[]): number {
  if (!values || values.length === 0) return 0;
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return Math.round((sum / values.length) * 100) / 100;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(val: number, decimals: number = 2): string {
  return val.toFixed(decimals);
}
