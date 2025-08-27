import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Using fallback mode.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para o banco de dados
export interface PortfolioLike {
  id: number;
  user_id: string;
  is_liked: boolean;
  created_at: string;
  updated_at: string;
}

export interface PortfolioStats {
  id: number;
  total_likes: number;
  total_visitors: number;
  last_updated: string;
}
