'use client';

import React, { useState } from 'react';
import { MasalahEngineRecord, WilayahCode } from '../types/masalahEngine';
import {
  getRegionMetricStats,
  calculateAverage,
  formatPercentage,
} from '../utils/masalahEngineUtils';

interface MasalahEngineChartSectionProps {
  records: MasalahEngineRecord[];
}

const DONUT_COLORS_AVAIL: Record<WilayahCode, string> = {
  AW01: '#046A38',
  AW02: '#059669',
  AW03: '#10B981',
  AW04: '#34D399',
  AW05: '#047857',
  AW06: '#065F46',
  AW07: '#022C22',
  AW08: '#6EE7B7',
};

const DONUT_COLORS_UTIL: Record<WilayahCode, string> = {
  AW01: '#D97706',
  AW02: '#F59E0B',
  AW03: '#FBBF24',
  AW04: '#FCE27A',
  AW05: '#B45309',
  AW06: '#92400E',
  AW07: '#FACC15',
  AW08: '#FEF08A',
};

export const MasalahEngineChartSection: React.FC<MasalahEngineChartSectionProps> = ({ records }) => {
  const [hoveredAvailRegion, setHoveredAvailRegion] = useState<WilayahCode | null>(null);
  const [hoveredUtilRegion, setHoveredUtilRegion] = useState<WilayahCode | null>(null);

  const regionStats = getRegionMetricStats(records);

  // Overall averages for center donut label
  const overallAvgAvail = calculateAverage(regionStats.map((s) => s.avgAvailability));
  const overallAvgUtil = calculateAverage(regionStats.map((s) => s.avgUtilities));

  // Active hover items
  const activeAvailItem = regionStats.find((s) => s.wilayah === hoveredAvailRegion);
  const activeUtilItem = regionStats.find((s) => s.wilayah === hoveredUtilRegion);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {/* 1. Donut Chart Left — Availability per Wilayah */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs flex flex-col justify-between min-h-[360px]">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Availability per Wilayah
            </h3>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Rata-rata: {formatPercentage(overallAvgAvail)}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mb-2">
            Rata-rata persentase availability engine pada setiap wilayah AW01–AW08.
          </p>

          {/* Donut Graphic */}
          <div className="relative w-40 h-40 mx-auto my-3 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              {(() => {
                let cumulative = 0;
                const totalVal = regionStats.reduce((acc, s) => acc + s.avgAvailability, 0) || 100;

                return regionStats.map((s) => {
                  const pct = (s.avgAvailability / totalVal) * 100;
                  const strokeDasharray = `${pct * 2} ${200 - pct * 2}`;
                  const strokeDashoffset = -cumulative * 2;
                  cumulative += pct;
                  const isHovered = hoveredAvailRegion === s.wilayah;

                  return (
                    <circle
                      key={s.wilayah}
                      cx="50"
                      cy="50"
                      r="31.83"
                      fill="transparent"
                      stroke={DONUT_COLORS_AVAIL[s.wilayah]}
                      strokeWidth={isHovered ? '17' : '14'}
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      onMouseEnter={() => setHoveredAvailRegion(s.wilayah)}
                      onMouseLeave={() => setHoveredAvailRegion(null)}
                      className="transition-all duration-200 cursor-pointer"
                      style={{ opacity: hoveredAvailRegion && !isHovered ? 0.4 : 1 }}
                    />
                  );
                });
              })()}
            </svg>

            {/* Donut Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-2">
              {activeAvailItem ? (
                <>
                  <span className="text-xs font-black text-emerald-700 uppercase tracking-wider">
                    {activeAvailItem.wilayah}
                  </span>
                  <span className="text-xl font-black text-slate-900 leading-tight">
                    {formatPercentage(activeAvailItem.avgAvailability)}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">
                    Availability
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xl font-black text-slate-900 leading-tight">
                    {formatPercentage(overallAvgAvail)}
                  </span>
                  <span className="text-[11px] font-bold text-slate-700 tracking-tight">
                    Avg Availability
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Horizontal Legend Below Donut */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs font-medium text-slate-700">
            {regionStats.map((s) => {
              const isHovered = hoveredAvailRegion === s.wilayah;
              return (
                <div
                  key={s.wilayah}
                  onMouseEnter={() => setHoveredAvailRegion(s.wilayah)}
                  onMouseLeave={() => setHoveredAvailRegion(null)}
                  className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md cursor-pointer transition-all ${
                    isHovered ? 'bg-slate-100 font-bold scale-105' : 'hover:bg-slate-50'
                  }`}
                  title={`${s.wilayah}: ${formatPercentage(s.avgAvailability)}`}
                >
                  <span className="w-2.5 h-2.5 rounded-xs shrink-0" style={{ backgroundColor: DONUT_COLORS_AVAIL[s.wilayah] }} />
                  <span className="text-slate-800 font-semibold">{s.wilayah}</span>
                  <span className="text-slate-500 font-medium">({formatPercentage(s.avgAvailability)})</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Donut Chart Right — Utilities per Wilayah */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs flex flex-col justify-between min-h-[360px]">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Utilities per Wilayah
            </h3>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              Rata-rata: {formatPercentage(overallAvgUtil)}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mb-2">
            Rata-rata persentase utilities engine pada setiap wilayah AW01–AW08.
          </p>

          {/* Donut Graphic */}
          <div className="relative w-40 h-40 mx-auto my-3 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              {(() => {
                let cumulative = 0;
                const totalVal = regionStats.reduce((acc, s) => acc + s.avgUtilities, 0) || 100;

                return regionStats.map((s) => {
                  const pct = (s.avgUtilities / totalVal) * 100;
                  const strokeDasharray = `${pct * 2} ${200 - pct * 2}`;
                  const strokeDashoffset = -cumulative * 2;
                  cumulative += pct;
                  const isHovered = hoveredUtilRegion === s.wilayah;

                  return (
                    <circle
                      key={s.wilayah}
                      cx="50"
                      cy="50"
                      r="31.83"
                      fill="transparent"
                      stroke={DONUT_COLORS_UTIL[s.wilayah]}
                      strokeWidth={isHovered ? '17' : '14'}
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      onMouseEnter={() => setHoveredUtilRegion(s.wilayah)}
                      onMouseLeave={() => setHoveredUtilRegion(null)}
                      className="transition-all duration-200 cursor-pointer"
                      style={{ opacity: hoveredUtilRegion && !isHovered ? 0.4 : 1 }}
                    />
                  );
                });
              })()}
            </svg>

            {/* Donut Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-2">
              {activeUtilItem ? (
                <>
                  <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
                    {activeUtilItem.wilayah}
                  </span>
                  <span className="text-xl font-black text-slate-900 leading-tight">
                    {formatPercentage(activeUtilItem.avgUtilities)}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">
                    Utilities
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xl font-black text-slate-900 leading-tight">
                    {formatPercentage(overallAvgUtil)}
                  </span>
                  <span className="text-[11px] font-bold text-slate-700 tracking-tight">
                    Avg Utilities
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Horizontal Legend Below Donut */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs font-medium text-slate-700">
            {regionStats.map((s) => {
              const isHovered = hoveredUtilRegion === s.wilayah;
              return (
                <div
                  key={s.wilayah}
                  onMouseEnter={() => setHoveredUtilRegion(s.wilayah)}
                  onMouseLeave={() => setHoveredUtilRegion(null)}
                  className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md cursor-pointer transition-all ${
                    isHovered ? 'bg-slate-100 font-bold scale-105' : 'hover:bg-slate-50'
                  }`}
                  title={`${s.wilayah}: ${formatPercentage(s.avgUtilities)}`}
                >
                  <span className="w-2.5 h-2.5 rounded-xs shrink-0" style={{ backgroundColor: DONUT_COLORS_UTIL[s.wilayah] }} />
                  <span className="text-slate-800 font-semibold">{s.wilayah}</span>
                  <span className="text-slate-500 font-medium">({formatPercentage(s.avgUtilities)})</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
