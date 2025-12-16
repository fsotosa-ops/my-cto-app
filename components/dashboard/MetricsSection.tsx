import { Card } from "@/components/ui/Card";
import { TrendingUp, Clock, Zap } from "lucide-react";

export default function MetricsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Card>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Rentabilidad Proyectada</p>
            <h3 className="text-2xl font-bold text-slate-900">+18%</h3>
            <p className="text-xs text-emerald-600 mt-1">vs. Trimestre anterior</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Horas Ahorradas (Mes)</p>
            <h3 className="text-2xl font-bold text-slate-900">24 hrs</h3>
            <p className="text-xs text-slate-400 mt-1">En gestión manual de datos</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
            <Zap size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Procesos Automatizados</p>
            <h3 className="text-2xl font-bold text-slate-900">3/5</h3>
            <p className="text-xs text-slate-400 mt-1">Sistema operando al 60%</p>
          </div>
        </div>
      </Card>
    </div>
  );
}