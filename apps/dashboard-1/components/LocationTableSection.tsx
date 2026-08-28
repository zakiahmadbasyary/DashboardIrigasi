'use client';

import React, { useState, useMemo } from 'react';
import {
  LokasiItem,
  WilayahCode,
  PeringatanStatus,
  TableFilterState,
} from '../types/lokasi';
import { getWarningStatus, formatNumber } from '../utils/lokasiUtils';

interface LocationTableSectionProps {
  items: LokasiItem[];
}

type SortField = 'luas' | 'kaliSiram' | 'cost' | 'solar' | null;
type SortOrder = 'asc' | 'desc';

const WILAYAH_OPTIONS: (WilayahCode | 'Semua')[] = [
  'Semua',
  'AW01',
  'AW02',
];

const PERINGATAN_OPTIONS: (PeringatanStatus | 'Semua')[] = [
  'Aman',
  'Siaga',
  'Warning',
];

export const LocationTableSection: React.FC<LocationTableSectionProps> = ({ items }) => {
  // Table Filters State
  const [tableFilter, setTableFilter] = useState<TableFilterState>({
    wilayah: 'Semua',
    peringatan: 'Semua',
    search: '',
  });

  // Sorting state
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  // Handle sort header click
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      if (sortOrder === 'asc') {
        setSortOrder('desc');
      } else {
        setSortField(null);
        setSortOrder('asc');
      }
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // 1. Filter dataset for table
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Wilayah filter
      if (tableFilter.wilayah !== 'Semua' && item.wilayah !== tableFilter.wilayah) {
        return false;
      }

      // Peringatan filter (derived from kaliSiram)
      const warningStatus = getWarningStatus(item.kaliSiram);
      if (tableFilter.peringatan !== 'Semua' && warningStatus !== tableFilter.peringatan) {
        return false;
      }

      // Search filter
      if (tableFilter.search.trim() !== '') {
        const query = tableFilter.search.toLowerCase();
        const matchLokasi = item.lokasi.toLowerCase().includes(query);
        const matchWilayah = item.wilayah.toLowerCase().includes(query);
        if (!matchLokasi && !matchWilayah) return false;
      }

      return true;
    });
  }, [items, tableFilter]);

  // 2. Sort dataset
  const sortedItems = useMemo(() => {
    if (!sortField) return filteredItems;

    return [...filteredItems].sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredItems, sortField, sortOrder]);

  // 3. Paginate dataset
  const totalItems = sortedItems.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = useMemo(() => {
    return sortedItems.slice(startIndex, startIndex + pageSize);
  }, [sortedItems, startIndex, pageSize]);

  // Update filter helper
  const updateTableFilter = (newFilters: TableFilterState) => {
    setTableFilter(newFilters);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-6 space-y-5">
      {/* Table Section Header with Title & Filters (matching target screenshot) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Title */}
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Daftar Lokasi
        </h2>

        {/* Right Filter Chips */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
          {/* Wilayah Filter Chips */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-900 font-bold">Wilayah:</span>
            {WILAYAH_OPTIONS.map((w) => {
              const isActive = tableFilter.wilayah === w;
              return (
                <button
                  key={w}
                  onClick={() =>
                    updateTableFilter({
                      ...tableFilter,
                      wilayah: isActive && w !== 'Semua' ? 'Semua' : w,
                    })
                  }
                  className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {w}
                </button>
              );
            })}
          </div>

          {/* Peringatan Filter Chips */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-900 font-bold">Peringatan:</span>
            {PERINGATAN_OPTIONS.map((p) => {
              const isActive = tableFilter.peringatan === p;
              let chipStyle = 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50';
              if (isActive) {
                if (p === 'Aman') chipStyle = 'bg-emerald-50 text-emerald-700 border-emerald-300 font-bold';
                if (p === 'Siaga') chipStyle = 'bg-amber-50 text-amber-700 border-amber-300 font-bold';
                if (p === 'Warning') chipStyle = 'bg-rose-50 text-rose-700 border-rose-300 font-bold';
              }

              return (
                <button
                  key={p}
                  onClick={() =>
                    updateTableFilter({
                      ...tableFilter,
                      peringatan: isActive ? 'Semua' : p,
                    })
                  }
                  className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${chipStyle}`}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse min-w-[768px]">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left">
                LOKASI
              </th>
              <th className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left">
                WILAYAH
              </th>
              <th
                onClick={() => handleSort('luas')}
                className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider cursor-pointer hover:bg-slate-50 transition-colors text-center"
              >
                LUAS (HA) {sortField === 'luas' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-center">
                STATUS
              </th>
              <th className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-center">
                PRIORITAS
              </th>
              <th
                onClick={() => handleSort('kaliSiram')}
                className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider cursor-pointer hover:bg-slate-50 transition-colors text-center"
              >
                KALI SIRAM {sortField === 'kaliSiram' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th
                onClick={() => handleSort('cost')}
                className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider cursor-pointer hover:bg-slate-50 transition-colors text-center"
              >
                COST (RP) {sortField === 'cost' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th
                onClick={() => handleSort('solar')}
                className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider cursor-pointer hover:bg-slate-50 transition-colors text-center"
              >
                SOLAR (L) {sortField === 'solar' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-center">
                PERINGATAN
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {paginatedItems.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-8 text-center text-slate-400">
                  Tidak ada data lokasi yang sesuai dengan filter.
                </td>
              </tr>
            ) : (
              paginatedItems.map((item) => {
                const warning = getWarningStatus(item.kaliSiram);

                // Row Tint (matching target screenshot red tint for Warning)
                let rowBgStyle = 'hover:bg-slate-50/80';
                if (warning === 'Warning') {
                  rowBgStyle = 'bg-rose-50/50 hover:bg-rose-50/80';
                }

                // Badges per target screenshot
                let warningBadgeStyle = 'bg-emerald-50 text-emerald-600 border-emerald-200';
                if (warning === 'Siaga') warningBadgeStyle = 'bg-amber-50 text-amber-600 border-amber-200';
                if (warning === 'Warning') warningBadgeStyle = 'bg-rose-50 text-rose-600 border-rose-200';

                let prioritasStyle = 'bg-slate-100 text-slate-600 border-slate-200';
                if (item.prioritas === 'High') prioritasStyle = 'bg-amber-50 text-amber-700 border-amber-200';
                if (item.prioritas === 'Med') prioritasStyle = 'bg-amber-50/70 text-amber-700 border-amber-200';

                return (
                  <tr key={item.id} className={`transition-colors ${rowBgStyle}`}>
                    <td className="py-3.5 px-4 font-bold text-slate-900 text-left">{item.lokasi}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-700 text-left">{item.wilayah}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-800 text-center">{formatNumber(item.luas)}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-3 py-0.5 font-semibold rounded-full bg-white text-slate-700 border border-slate-200 text-xs">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`px-3.5 py-0.5 font-semibold rounded-full border text-xs ${prioritasStyle}`}>
                        {item.prioritas}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900 text-center">{item.kaliSiram}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900 text-center">
                      {item.cost.toLocaleString('en-US')}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-800 text-center">{formatNumber(item.solar)}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`px-3.5 py-0.5 font-semibold rounded-full border text-xs ${warningBadgeStyle}`}>
                        {warning}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer with Pagination (matching target screenshot) */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
        <div>
          Menampilkan {totalItems > 0 ? startIndex + 1 : 0}–{Math.min(startIndex + pageSize, totalItems)} dari {totalItems} lokasi
        </div>

        <div className="flex items-center space-x-1.5 self-center sm:self-auto">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                currentPage === page
                  ? 'bg-[#059669] text-white font-bold shadow-2xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
