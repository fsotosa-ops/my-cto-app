import React from 'react';
import { 
  LayoutDashboard, 
  Target, 
  Map as MapIcon, 
  BookOpen, 
  Settings, 
  MessageSquareText
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-950 text-white h-screen flex flex-col fixed left-0 top-0 border-r border-slate-800 z-50">
      
      {/* 1. Logo de la Agencia */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400">
          <div className="w-6 h-6 bg-current rounded-md flex items-center justify-center text-slate-950 font-bold text-xs">S</div>
          <span className="font-bold text-lg text-white tracking-tight">CTO Assistant</span>
        </div>
      </div>

      {/* 2. Menú de Navegación */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <MenuItem icon={<LayoutDashboard size={20}/>} label="Resumen" active />
        <MenuItem icon={<Target size={20}/>} label="Estrategia & OKRs" />
        <MenuItem icon={<MapIcon size={20}/>} label="Hoja de Ruta" />
        <MenuItem icon={<BookOpen size={20}/>} label="Academy" />
        
        <div className="my-6 border-t border-slate-800/50 mx-2"></div>
        
        {/* Call to Action: Copilot */}
        <div className="px-3">
          <button className="w-full flex items-center gap-3 px-3 py-3 text-sm font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-900/60 rounded-xl hover:bg-emerald-900/60 transition-all group">
            <MessageSquareText size={18} className="group-hover:scale-110 transition-transform"/>
            Chat con CTO
          </button>
        </div>
      </nav>

      {/* 3. Footer de Usuario (Ajustado para no chocar con el botón de Vercel) */}
      <div className="p-4 border-t border-slate-800 pb-8"> 
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold border border-slate-700">
            FL
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Fundo Maitenes</p>
            <p className="text-xs text-slate-400 truncate">Plan Enterprise</p>
          </div>
          <Settings size={16} className="text-slate-500" />
        </div>
      </div>
    </aside>
  );
}

function MenuItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`
      flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200
      ${active 
        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' 
        : 'text-slate-400 hover:text-white hover:bg-slate-900'}
    `}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}