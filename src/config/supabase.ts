import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
});

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          tier: 'free' | 'premium' | 'enterprise';
          is_super_admin: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          tier?: 'free' | 'premium' | 'enterprise';
          is_super_admin?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          tier?: 'free' | 'premium' | 'enterprise';
          is_super_admin?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      vba_templates: {
        Row: {
          id: string;
          title: string;
          description: string;
          code: string;
          tier: 'free' | 'premium';
          weekly_price: number;
          category: string;
          tags: string[];
          created_by: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          code: string;
          tier?: 'free' | 'premium';
          weekly_price?: number;
          category: string;
          tags?: string[];
          created_by: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          code?: string;
          tier?: 'free' | 'premium';
          weekly_price?: number;
          category?: string;
          tags?: string[];
          created_by?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      workflows: {
        Row: {
          id: string;
          title: string;
          description: string;
          nodes: any;
          edges: any;
          tier: 'free' | 'premium';
          weekly_price: number;
          category: string;
          created_by: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          nodes?: any;
          edges?: any;
          tier?: 'free' | 'premium';
          weekly_price?: number;
          category: string;
          created_by: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          nodes?: any;
          edges?: any;
          tier?: 'free' | 'premium';
          weekly_price?: number;
          category?: string;
          created_by?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          status: 'planning' | 'in_progress' | 'testing' | 'completed';
          owner_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          status?: 'planning' | 'in_progress' | 'testing' | 'completed';
          owner_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          status?: 'planning' | 'in_progress' | 'testing' | 'completed';
          owner_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      agency_listings: {
        Row: {
          id: string;
          agency_name: string;
          description: string;
          tier: 'freemium' | 'premium';
          monthly_price: number;
          owner_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          agency_name: string;
          description: string;
          tier?: 'freemium' | 'premium';
          monthly_price?: number;
          owner_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          agency_name?: string;
          description?: string;
          tier?: 'freemium' | 'premium';
          monthly_price?: number;
          owner_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      job_requests: {
        Row: {
          id: string;
          title: string;
          description: string;
          budget: number;
          status: 'open' | 'in_progress' | 'completed';
          client_id: string;
          assigned_to: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          budget: number;
          status?: 'open' | 'in_progress' | 'completed';
          client_id: string;
          assigned_to?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          budget?: number;
          status?: 'open' | 'in_progress' | 'completed';
          client_id?: string;
          assigned_to?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};