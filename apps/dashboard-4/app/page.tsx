'use client';

import React, { useState, useMemo } from 'react';
import { MonthPeriod, StatusEngine, WilayahCode } from '../types/masalahEngine';
import { DUMMY_MASALAH_ENGINE_RECORDS } from '../data/dummyMasalahEngineData';
import { filterRecords } from '../utils/masalahEngineUtils';
import { MasalahEngineFilterCard } from '../components/MasalahEngineFilterCard';
import { MasalahEngineChartSection } from '../components/MasalahEngineChartSection';
import { MasalahEngineTableSection } from '../components/MasalahEngineTableSection';

export default function DashboardMasalahEnginePage() {
  // State for Month, Status, and Region filters
  const [selectedMonth, setSelectedMonth] = useState<MonthPeriod>('Januari 2026');
  const [selectedStatus, setSelectedStatus] = useState<StatusEngine | 'Semua'>('Semua');
  const [selectedRegion, setSelectedRegion] = useState<WilayahCode | 'Semua'>('Semua');

  // Filter dataset by Month & Status (affects both Charts and Table)
  const filteredByMonthAndStatus = useMemo(() => {
    return filterRecords(DUMMY_MASALAH_ENGINE_RECORDS, {
      bulan: selectedMonth,
      status: selectedStatus,
    });
  }, [selectedMonth, selectedStatus]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-12">
      {/* 1. Sticky/Freeze Filter Bar with Info on Left & Controls on Right */}
      <MasalahEngineFilterCard
        selectedMonth={selectedMonth}
        onMonthChange={setSelectedMonth}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        totalFilteredCount={filteredByMonthAndStatus.length}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* 2. Chart Section (2 Donut Cards: Availability per Wilayah & Utilities per Wilayah) */}
        <MasalahEngineChartSection records={filteredByMonthAndStatus} />

        {/* 3. Table Section (Daftar Engine Table with Region Filter & Pagination) */}
        <MasalahEngineTableSection
          records={filteredByMonthAndStatus}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />
      </div>
    </div>
  );
}
