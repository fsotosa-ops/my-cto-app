'use server'
import { createClient } from '@/lib/supabase';

export async function getClientTimeline() {
  const supabase = createClient();
  
  // Solo traemos lo que el cliente DEBE ver
  const { data } = await supabase
    .from('impact_milestones')
    .select('*')
    .order('display_order', { ascending: true });

  return data;
}