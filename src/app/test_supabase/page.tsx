import { supabase } from '@/core/config/supabase';

export const dynamic = 'force-dynamic'; // SSR for Next.js app directory

export default async function TestSupabasePage() {
    const { data, error } = await supabase
        .from('test_table')
        .select('*')
        .limit(1);
    const result = error ? error.message : data;

    return (
        <div>
            <h1>Test Supabase (SSR)</h1>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    );
}
