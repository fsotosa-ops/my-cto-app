"use client";

import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import MetricsSection from '@/components/dashboard/MetricsSection';
import RoadmapWidget from '@/components/dashboard/RoadmapWidget';
import AcademyWidget from '@/components/dashboard/AcademyWidget';
import StrategyWidget from '@/components/dashboard/StrategyWidget';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      
      {/* 1. NAVEGACIÓN LATERAL */}
      <Sidebar />

      {/* 2. ÁREA DE CONTENIDO (Con padding-left para el sidebar) */}
      <div className="pl-64 transition-all duration-300">
        
        <main className="p-8 lg:p-12 max-w-[1600px] mx-auto">
          
          {/* Header de la Página */}
          <header className="flex justify-between items-end mb-10">
            <div>
              <h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Panel de Control
              </h1>
              <p className="text-slate-500 mt-2 text-lg">
                Visión estratégica de su tecnología.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-xs font-mono text-slate-400 bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-sm">
                Última sincronización: Hace 5 min
              </span>
            </div>
          </header>

          {/* SECCIÓN 1: Rentabilidad (Lo que justifica tu factura) */}
          <section className="mb-10">
            <MetricsSection />
          </section>

          {/* SECCIÓN 2: Grid Principal (Bento Layout) */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            
            {/* Columna Izquierda: Roadmap Operativo (Ocupa 8 columnas) */}
            <div className="xl:col-span-8 space-y-8">
              <RoadmapWidget />
            </div>

            {/* Columna Derecha: Estrategia y Soporte (Ocupa 4 columnas) */}
            <div className="xl:col-span-4 space-y-8 sticky top-8">
              
              {/* CTO COPILOT: Arriba para máxima visibilidad */}
              <StrategyWidget />
              
              {/* ACADEMY: Justo debajo */}
              <AcademyWidget />
              
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}