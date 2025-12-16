import { redirect } from 'next/navigation';

export default function Home() {
  // Por ahora, redirigimos directamente al dashboard del cliente
  redirect('/dashboard');
}