'use client';

import React, { useState, useMemo } from 'react';
import { GlobalFilterState } from '../types/lokasi';
import { DUMMY_LOKASI } from '../data/dummyLokasi';
import { GlobalFilter } from '../components/GlobalFilter';
import { ChartSection } from '../components/ChartSection';
import { LocationTableSection } from '../components/LocationTableSection';

export default function DashboardListLokasiPage() {
  // Global Filter State
  const defaultGlobalFilters: GlobalFilterState = {
    bulan: 'Jan-Apr 2026',
    status: 'Semua',
    prioritas: 'Semua',
  };

  const [globalFilters, setGlobalFilters] = useState<GlobalFilterState>(defaultGlobalFilters);

  // Filter main dataset based on Global Filter
  const filteredData = useMemo(() => {
    return DUMMY_LOKASI.filter((item) => {
      if (globalFilters.bulan !== 'Semua' && item.bulan !== globalFilters.bulan) {
        return false;
      }
      if (globalFilters.status !== 'Semua' && item.status !== globalFilters.status) {
        return false;
      }
      if (globalFilters.prioritas !== 'Semua' && item.prioritas !== globalFilters.prioritas) {
        return false;
      }
      return true;
    });
  }, [globalFilters]);

  const handleResetGlobalFilters = () => {
    setGlobalFilters(defaultGlobalFilters);
  };

  return (
    <div className="bg-[#F2F4F7] min-h-screen pb-8">
      {/* 1. Sticky Global Filter Bar with Info Title on Left & Controls on Right */}
      <GlobalFilter
        filters={globalFilters}
        onFilterChange={setGlobalFilters}
        onReset={handleResetGlobalFilters}
        totalFilteredCount={filteredData.length}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* 2. Chart Section (3 Cards: Donut Luas, Bar Avg Kali Siram, Bar Avg Cost) */}
        <ChartSection items={filteredData} />

        {/* 3. Location Table Section */}
        <LocationTableSection items={filteredData} />
      </div>
    </div>
  );
}
