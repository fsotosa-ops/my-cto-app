import { Card } from "@/components/ui/Card";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";

export default function RoadmapWidget() {
  const steps = [
    { title: "Descubrimiento de Datos", status: "completed", date: "10 Mar" },
    { title: "Automatización de Cobros", status: "completed", date: "25 Mar" },
    { title: "Conexión con SII", status: "processing", desc: "Verificando protocolos de seguridad..." },
    { title: "Dashboard de Rentabilidad", status: "pending" },
  ];

  return (
    <Card className="h-full">
      <h3 className="font-semibold text-slate-900 mb-6">Estado del Proyecto</h3>
      <div className="relative pl-2 space-y-8">
        {/* Línea conectora */}
        <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-slate-100 -z-10" />

        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <div className="flex-shrink-0 bg-white">
              {step.status === 'completed' && <CheckCircle2 className="w-7 h-7 text-emerald-500 fill-emerald-50" />}
              {step.status === 'processing' && <Loader2 className="w-7 h-7 text-indigo-600 animate-spin bg-white" />}
              {step.status === 'pending' && <Circle className="w-7 h-7 text-slate-300 bg-white" />}
            </div>
            <div className={`${step.status === 'pending' ? 'opacity-50' : 'opacity-100'}`}>
              <div className="flex justify-between w-full gap-4">
                <h4 className="text-sm font-bold text-slate-800">{step.title}</h4>
                {step.date && <span className="text-xs text-slate-400 font-mono">{step.date}</span>}
              </div>
              {step.desc && (
                <p className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded mt-1 inline-block">
                  {step.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}