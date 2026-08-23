export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
};
export async function supabaseFetch<T>(table: string): Promise<T[]> {
  if (!supabaseConfig.url || !supabaseConfig.anonKey) return [];
  const response = await fetch(`${supabaseConfig.url}/rest/v1/${table}?select=*`, { headers: { apikey: supabaseConfig.anonKey, Authorization: `Bearer ${supabaseConfig.anonKey}` }, next: { revalidate: 60 } });
  if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
  return response.json() as Promise<T[]>;
}
