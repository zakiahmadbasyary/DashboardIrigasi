'use client';

import React from 'react';
import { MetricType, MonthPeriod, WilayahCode } from '../types/engine';
import { DUMMY_ENGINES, RegionMappingList } from '../data/dummyEngineData';
import {
  getDaysArray,
  getMetricUnit,
  getMetricValue,
  calculateAverage,
  formatNumber,
} from '../utils/engineUtils';

interface RegionPerformanceTableProps {
  selectedMonth: MonthPeriod;
  selectedMetric: MetricType;
  selectedRegion: WilayahCode | null;
  onSelectRegion: (region: WilayahCode) => void;
}

export const RegionPerformanceTable: React.FC<RegionPerformanceTableProps> = ({
  selectedMonth,
  selectedMetric,
  selectedRegion,
  onSelectRegion,
}) => {
  const daysArray = getDaysArray(selectedMonth);
  const metricUnit = getMetricUnit(selectedMetric);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden mb-6">
      {/* Table Section Header */}
      <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              Performa Wilayah
            </h2>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              Level 1
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Pilih wilayah untuk melihat detail engine. (Data: {selectedMetric} — {selectedMonth})
          </p>
        </div>

        {selectedRegion && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Wilayah Terpilih:</span>
            <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-300">
              {selectedRegion}
            </span>
          </div>
        )}
      </div>

      {/* Horizontal Scrollable Table */}
      <div className="overflow-x-auto relative max-h-[480px] overflow-y-auto">
        <table className="w-full text-left border-collapse min-w-[900px] text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-20">
            <tr>
              {/* Sticky First Column: Wilayah */}
              <th className="sticky left-0 z-30 bg-slate-50 px-4 py-3 font-bold text-slate-900 border-r border-slate-200 shadow-2xs min-w-[120px]">
                Wilayah
              </th>
              {/* Rata-rata Column */}
              <th className="px-4 py-3 font-bold text-emerald-800 bg-emerald-50/50 border-r border-slate-200 text-center min-w-[100px]">
                Rata-rata ({metricUnit})
              </th>
              {/* Daily Date Columns */}
              {daysArray.map((d) => (
                <th key={d.dateKey} className="px-2.5 py-3 font-semibold text-slate-600 text-center min-w-[44px]">
                  {d.dayLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {RegionMappingList.map((region) => {
              const isSelected = selectedRegion === region.code;
              const regionEngines = DUMMY_ENGINES.filter((e) => e.region === region.code);

              // Calculate daily averages for this region across its engines
              const dailyValues: number[] = daysArray.map((d) => {
                const engineVals = regionEngines.map((e) => {
                  const record = e.dailyData[d.dateKey];
                  return getMetricValue(record, selectedMetric);
                });
                return calculateAverage(engineVals);
              });

              // Region Overall Average
              const overallAvg = calculateAverage(dailyValues);

              return (
                <tr
                  key={region.code}
                  onClick={() => onSelectRegion(region.code)}
                  className={`cursor-pointer transition-colors group ${
                    isSelected
                      ? 'bg-[#ECFDF5] font-semibold text-slate-900'
                      : 'hover:bg-[#ECFDF5]/60 text-slate-800'
                  }`}
                >
                  {/* Sticky First Column */}
                  <td
                    className={`sticky left-0 z-10 px-4 py-3.5 border-r border-slate-200 transition-colors ${
                      isSelected
                        ? 'bg-[#ECFDF5] font-extrabold text-emerald-900 border-l-4 border-l-[#059669]'
                        : 'bg-white group-hover:bg-[#ECFDF5]/90 font-bold text-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span>{region.code}</span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#059669] shrink-0" title="Aktif" />
                      )}
                    </div>
                  </td>

                  {/* Rata-rata Column */}
                  <td className="px-4 py-3.5 text-center font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">
                    {formatNumber(overallAvg)}
                  </td>

                  {/* Daily Values */}
                  {dailyValues.map((val, idx) => (
                    <td key={daysArray[idx].dateKey} className="px-2.5 py-3.5 text-center font-medium text-slate-700">
                      {formatNumber(val, 1)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Table Helper Footer */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
        <span>💡 Klik salah satu baris wilayah untuk membuka detail engine.</span>
        <span className="font-semibold text-slate-600">8 Wilayah (AW01–AW08)</span>
      </div>
    </div>
  );
};
