import { SupabaseAdapter } from '@auth/supabase-adapter';
import NextAuth from 'next-auth';

import { supabaseServiceRoleKey, supabaseUrl } from './supabase';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [],
    adapter: SupabaseAdapter({
        url: supabaseUrl,
        secret: supabaseServiceRoleKey,
    }),
});
