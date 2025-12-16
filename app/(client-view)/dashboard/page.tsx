"use client";

import React from 'react';
import { ShieldCheck, Clock, FileText, CheckCircle2, AlertCircle, ChevronRight } from 'lucide-react';

// --- MOCK DATA (Simulando un cliente Agro) ---
const projectData = {
  clientName: "Fundo Los Maitenes",
  projectName: "Digitalización de Cosecha 2025",
  status: "healthy", // options: healthy, attention, critical
  lastUpdate: "Hace 2 horas por Tu Asistente IA",
  summary: "Esta semana hemos logrado conectar las tablets de los capataces con el servidor central. Aunque se corte internet en el campo, los datos de las cajas de fruta quedan guardados y se envían solos cuando vuelve la señal.",
  nextAction: {
    required: true,
    text: "Validar lista de capataces autorizados",
    type: "document"
  }
};

const timelineEvents = [
  { id: 1, title: "Inicio del Proyecto", date: "1 Mar", status: "completed", desc: "Reunión inicial y definición de objetivos." },
  { id: 2, title: "Diseño de Pantallas", date: "15 Mar", status: "completed", desc: "Aprobación de cómo se verá la app en las tablets." },
  { id: 3, title: "Conexión Offline", date: "Hoy", status: "current", desc: "Asegurando que funcione sin internet en el huerto." },
  { id: 4, title: "Prueba con Usuarios", date: "Est. 10 Abr", status: "upcoming", desc: "Ir a terreno a probar con un capataz real." },
  { id: 5, title: "Lanzamiento", date: "Est. 30 Abr", status: "upcoming", desc: "Puesta en marcha oficial." },
];

// --- COMPONENTS ---

// 1. Header Simple
const Header = () => (
  <header className="flex justify-between items-center py-6 px-4 md:px-8 bg-white border-b border-slate-100 sticky top-0 z-10">
    <div>
      <h1 className="text-xl font-serif font-bold text-slate-800">Ulan<span className="text-emerald-700">Studio</span></h1>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-xs">
        FL
      </div>
      <span className="hidden md:block text-sm font-medium text-slate-600">{projectData.clientName}</span>
    </div>
  </header>
);

// 2. El "Semáforo Emocional" (Status Hero)
const StatusHero = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-8">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-emerald-50 rounded-xl">
        <ShieldCheck className="w-8 h-8 text-emerald-600" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-lg font-semibold text-slate-800">Todo marcha según el plan</h2>
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wide">
            En Curso
          </span>
        </div>
        <p className="text-slate-600 leading-relaxed max-w-2xl">
          {projectData.summary}
        </p>
        <p className="text-xs text-slate-400 mt-3 flex items-center gap-1">
          <Clock className="w-3 h-3" /> {projectData.lastUpdate}
        </p>
      </div>
    </div>
  </div>
);

// 3. Widget "¿Qué tengo que hacer?"
const ActionWidget = () => {
  if (!projectData.nextAction.required) return null;

  return (
    <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-3">
        <AlertCircle className="w-6 h-6 text-amber-600" />
        <div>
          <h3 className="text-sm font-bold text-amber-900">Se requiere su atención</h3>
          <p className="text-sm text-amber-800">{projectData.nextAction.text}</p>
        </div>
      </div>
      <button className="px-4 py-2 bg-white border border-amber-200 text-amber-900 text-sm font-medium rounded-lg shadow-sm hover:bg-amber-50 transition-colors flex items-center gap-2">
        <FileText className="w-4 h-4" />
        Revisar Documento
      </button>
    </div>
  );
};

// 4. Línea de Tiempo Vertical "The Amazon Tracker"
const Timeline = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
    <h3 className="text-base font-serif font-bold text-slate-800 mb-6">Hoja de Ruta</h3>
    <div className="relative border-l-2 border-slate-100 ml-3 space-y-8">
      {timelineEvents.map((event, idx) => {
        const isCompleted = event.status === 'completed';
        const isCurrent = event.status === 'current';
        
        return (
          <div key={event.id} className="relative pl-8">
            {/* El punto en la línea */}
            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 
              ${isCompleted ? 'bg-emerald-500 border-emerald-500' : 
                isCurrent ? 'bg-white border-emerald-500 ring-4 ring-emerald-50' : 
                'bg-slate-100 border-slate-300'}`} 
            />
            
            <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-start ${!isCompleted && !isCurrent ? 'opacity-50' : ''}`}>
              <div>
                <h4 className={`text-sm font-bold ${isCurrent ? 'text-emerald-900' : 'text-slate-700'}`}>
                  {event.title}
                </h4>
                <p className="text-sm text-slate-500 mt-1 max-w-md">{event.desc}</p>
              </div>
              <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0 whitespace-nowrap bg-slate-50 px-2 py-1 rounded">
                {event.date}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

// 5. Asistente IA Minimalista
const AiChatTeaser = () => (
    <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-white flex items-center justify-between shadow-lg shadow-slate-200">
        <div>
            <h3 className="font-semibold text-lg mb-1">¿Dudas sobre el proyecto?</h3>
            <p className="text-slate-300 text-sm">Pregúntame sobre costos, plazos o tecnología.</p>
        </div>
        <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
            <ChevronRight className="w-6 h-6 text-white" />
        </button>
    </div>
)

// --- MAIN PAGE LAYOUT ---

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-8">
        {/* Saludo Personalizado */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-serif text-slate-900 mb-2">
            Hola, Juan Carlos
          </h1>
          <p className="text-slate-500">Aquí tienes el estado actual de tu proyecto.</p>
        </div>

        {/* Componentes Principales */}
        <StatusHero />
        <ActionWidget />
        <Timeline />
        
        {/* Chat IA */}
        <AiChatTeaser />

      </main>
    </div>
  );
}