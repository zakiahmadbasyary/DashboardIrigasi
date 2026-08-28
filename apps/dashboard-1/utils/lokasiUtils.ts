import { PeringatanStatus } from '../types/lokasi';

/**
 * Menghitung status Peringatan berdasarkan nilai Kali Siram:
 * - kaliSiram < 3   => 'Aman'
 * - kaliSiram 3–4   => 'Siaga'
 * - kaliSiram >= 5  => 'Warning'
 */
export function getWarningStatus(kaliSiram: number): PeringatanStatus {
  if (kaliSiram < 3) {
    return 'Aman';
  }
  if (kaliSiram <= 4) {
    return 'Siaga';
  }
  return 'Warning';
}

/**
 * Format angka ke mata uang Rupiah (contoh: Rp 1.250.000)
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format angka ke desimal standar Indonesia (contoh: 12.5 atau 1.250)
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}
