'use server'

import { generateText } from '@/lib/openai';
import { createClient } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

// 1. Definimos la forma de los datos para que TypeScript no se queje
interface TechnicalTask {
  title: string;
}

export async function translateMilestone(milestoneId: string) {
  const supabase = createClient();

  // 2. Obtener tareas técnicas sin procesar
  const { data } = await supabase
    .from('technical_tasks')
    .select('title')
    .eq('processed_for_client', false);

  // 3. Forzamos el tipo de dato aquí para corregir el error "implicitly has an 'any' type"
  const tasks = data as TechnicalTask[] | null;

  if (!tasks || tasks.length === 0) {
    return { message: "No hay tareas nuevas para procesar." };
  }

  // 4. Preparamos el contexto para la IA
  // Ahora TypeScript sabe que 't' es de tipo TechnicalTask y tiene un 'title'
  const technicalContext = tasks.map(t => t.title).join('\n');
  
  // 5. Llamamos a la IA (tu función en lib/openai.ts)
  const impactSummary = await generateText(technicalContext); 

  // 6. Guardamos el resultado en la tabla del cliente (Impacto)
  const { error: updateError } = await supabase
    .from('impact_milestones')
    .update({
      impact_description: impactSummary,
      status: 'completed',
      // updated_at: new Date().toISOString() // Descomentar si tienes esta columna
    })
    .eq('id', milestoneId);

  if (updateError) {
    console.error("Error actualizando milestone:", updateError);
    return { success: false, message: "Error guardando el resumen." };
  }

  // 7. Marcamos las tareas técnicas como "Procesadas" para no volver a leerlas
  await supabase
    .from('technical_tasks')
    .update({ processed_for_client: true })
    .in('title', tasks.map(t => t.title));

  // 8. Refrescar la caché para que el cambio aparezca inmediato en el Dashboard
  revalidatePath('/dashboard');
  
  return { success: true };
}