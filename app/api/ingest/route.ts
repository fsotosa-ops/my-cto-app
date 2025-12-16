import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase'; // Tu cliente configurado

export async function POST(request: Request) {
  const payload = await request.json();
  const supabase = createClient();

  // Simulación: Normalizar datos de GitHub/Linear
  const taskData = {
    title: payload.issue?.title || payload.data?.title, // Adaptar según venga de Github o Linear
    description: payload.issue?.body,
    source: 'github',
    dev_status: 'done', // Asumimos que solo nos importan los cerrados
    processed_for_client: false
  };

  console.log(`🔧 [Ingest] Recibido: ${taskData.title}`);

  const { error } = await supabase.from('technical_tasks').insert(taskData);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}