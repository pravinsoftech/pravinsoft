import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Provide placeholder values during build time to prevent "supabaseUrl is required" errors
const createSupabase = () => {
    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn('⚠️ Missing Supabase environment variables. Using placeholders for build.');
        return createClient('https://placeholder.supabase.co', 'placeholder');
    }
    return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabase();
