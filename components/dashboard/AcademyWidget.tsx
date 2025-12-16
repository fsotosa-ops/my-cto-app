import { Card } from "@/components/ui/Card";
import { PlayCircle, FileText, ExternalLink } from "lucide-react";

export default function AcademyWidget() {
  const resources = [
    { title: "Video: Cómo leer este reporte", type: "video", duration: "2 min" },
    { title: "Manual de Carga de Datos", type: "doc", format: "PDF" },
    { title: "Acceso al Sistema Facturación", type: "link", url: "#" },
  ];

  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-slate-900">Academy & Recursos</h3>
        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Soporte</span>
      </div>
      
      <div className="space-y-4">
        {resources.map((item, idx) => (
          <div key={idx} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
            <div className="mt-1 text-slate-400 group-hover:text-emerald-600">
              {item.type === 'video' ? <PlayCircle size={20} /> : item.type === 'doc' ? <FileText size={20} /> : <ExternalLink size={20} />}
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-800 group-hover:text-emerald-700">{item.title}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{item.duration || item.format || 'Link externo'}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-100">
        <button className="w-full text-center text-sm text-slate-500 hover:text-slate-800 font-medium">
          Ver todos los tutoriales
        </button>
      </div>
    </Card>
  );
}