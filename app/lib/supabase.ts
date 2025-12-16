import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Usamos variables de entorno para seguridad
export const createClient = () => {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // Usa la Service Role Key para el backend (admin)
  );
};