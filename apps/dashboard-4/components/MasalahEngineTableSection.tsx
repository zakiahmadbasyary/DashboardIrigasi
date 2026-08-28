'use client';

import React, { useState, useMemo } from 'react';
import { MasalahEngineRecord, WilayahCode } from '../types/masalahEngine';
import { WILAYAH_LIST, filterRecords, formatPercentage } from '../utils/masalahEngineUtils';

interface MasalahEngineTableSectionProps {
  records: MasalahEngineRecord[];
  selectedRegion: WilayahCode | 'Semua';
  onRegionChange: (region: WilayahCode | 'Semua') => void;
}

export const MasalahEngineTableSection: React.FC<MasalahEngineTableSectionProps> = ({
  records,
  selectedRegion,
  onRegionChange,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  // Filter records based on table-specific region filter & search input
  const filteredTableRecords = useMemo(() => {
    return filterRecords(records, {
      wilayah: selectedRegion,
      search: searchQuery,
    });
  }, [records, selectedRegion, searchQuery]);

  // Pagination
  const totalItems = filteredTableRecords.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedRecords = useMemo(() => {
    return filteredTableRecords.slice(startIndex, startIndex + pageSize);
  }, [filteredTableRecords, startIndex, pageSize]);

  const handleRegionSelect = (w: WilayahCode | 'Semua') => {
    onRegionChange(w);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 space-y-5">
      {/* Header Row & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Daftar Engine
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Detail availability dan utilities setiap engine berdasarkan wilayah dan lokasi.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[220px] sm:w-64">
          <input
            suppressHydrationWarning
            type="text"
            placeholder="Cari engine, lokasi, wilayah..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-3 top-2 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Region Filter Chips */}
      <div className="flex items-center gap-2 flex-wrap text-xs font-semibold text-slate-700">
        <span className="text-slate-900 font-bold mr-1">Filter Wilayah:</span>
        <button
          suppressHydrationWarning
          onClick={() => handleRegionSelect('Semua')}
          className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
            selectedRegion === 'Semua'
              ? 'bg-emerald-50 text-emerald-700 border-emerald-300 font-bold shadow-2xs'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Semua Wilayah
        </button>
        {WILAYAH_LIST.map((w) => {
          const isActive = selectedRegion === w;
          return (
            <button
              key={w}
              suppressHydrationWarning
              onClick={() => handleRegionSelect(w)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                isActive
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 font-bold shadow-2xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {w}
            </button>
          );
        })}
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[768px]">
          <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
            <tr>
              <th className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left">
                Wilayah
              </th>
              <th className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left">
                Lokasi
              </th>
              <th className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left">
                Engine
              </th>
              <th className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-center">
                Status
              </th>
              <th className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-right">
                Nilai Availability
              </th>
              <th className="py-3 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-right">
                Nilai Utilities
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {paginatedRecords.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-400">
                  <div className="space-y-1">
                    <p className="font-bold text-slate-600 text-sm">Tidak ada data engine</p>
                    <p className="text-xs text-slate-400">
                      Tidak ditemukan engine yang sesuai dengan filter yang dipilih.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedRecords.map((item) => {
                // Availability Badge Styling
                let availBadgeStyle = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                if (item.availability < 80) {
                  availBadgeStyle = 'bg-orange-50 text-orange-700 border-orange-200';
                } else if (item.availability < 90) {
                  availBadgeStyle = 'bg-amber-50 text-amber-700 border-amber-200';
                }

                // Status Badge Styling
                let statusBadgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';
                if (item.status === 'NSFC') statusBadgeStyle = 'bg-emerald-50 text-emerald-800 border-emerald-200';
                if (item.status === 'NSSC') statusBadgeStyle = 'bg-amber-50 text-amber-800 border-amber-200';

                return (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{item.wilayah}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">{item.lokasi}</td>
                    <td className="py-3.5 px-4 font-extrabold text-slate-900">{item.engine}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`px-3 py-0.5 font-bold rounded-full border text-xs ${statusBadgeStyle}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold border ${availBadgeStyle}`}>
                        {formatPercentage(item.availability)}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        {formatPercentage(item.utilities)}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
        <div>
          Menampilkan {totalItems > 0 ? startIndex + 1 : 0}–{Math.min(startIndex + pageSize, totalItems)} dari {totalItems} engine
        </div>

        <div className="flex items-center space-x-1.5 self-center sm:self-auto">
          <button
            suppressHydrationWarning
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              suppressHydrationWarning
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                currentPage === page
                  ? 'bg-emerald-600 text-white font-bold shadow-2xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            suppressHydrationWarning
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
