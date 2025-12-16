import { Card } from "@/components/ui/Card";
import { Target, AlertTriangle, ChevronRight, BrainCircuit } from "lucide-react";

export default function StrategyWidget() {
  return (
    <div className="space-y-6">
      {/* Tarjeta de IA Activa */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <BrainCircuit size={120} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400">Análisis en Tiempo Real</span>
          </div>
          
          <h3 className="text-lg font-bold mb-2">Atención: Riesgo de Latencia</h3>
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            Detecté que la carga de imágenes en la App está demorando más de 3s. Esto podría afectar el OKR de "Experiencia de Usuario".
          </p>
          
          <button className="flex items-center gap-2 text-xs font-bold bg-white text-slate-950 px-4 py-2.5 rounded-lg hover:bg-slate-200 transition-colors w-full justify-center">
            Ver Diagnóstico y Solución <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Estado de OKRs */}
      <Card>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-slate-900 flex items-center gap-2">
            <Target size={18} className="text-emerald-600"/> OKR Trimestral
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-slate-600 font-medium">Digitalizar Cosecha</span>
              <span className="font-bold text-slate-900">85%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-emerald-500 h-2 rounded-full w-[85%] shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-50">
             <div className="flex items-start gap-3 p-3 bg-amber-50/50 border border-amber-100/50 rounded-lg">
              <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={16} />
              <div>
                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wide">Riesgo Técnico</h4>
                <p className="text-xs text-amber-700 mt-0.5">
                  La migración de la base de datos histórica está retrasada 2 días.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}