import { createClient } from '@supabase/supabase-js';

const {
    VITE_SUPABASE_URL: url,
    VITE_SUPABASE_ANON_KEY: anon,
    VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY: pubKey,
    MODE
} = import.meta.env;

const key = anon ?? pubKey;
const isConfigured = url && key;

if (!isConfigured) {
    console.warn('Supabase env vars missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
}


const mockAsync = (data = null, error = null) => async () => ({ data, error });
const notConfiguredErr = { message: 'Supabase not configured' };


export const supabase = isConfigured
    ? createClient(url, key)
    : {
        auth: {
            getSession: mockAsync({ session: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
            signInWithPassword: mockAsync(null, notConfiguredErr),
            signOut: mockAsync(null),
        },
        storage: {
            from: () => ({
                list: mockAsync([], null),
                upload: mockAsync(null, notConfiguredErr),
                remove: mockAsync(null, notConfiguredErr),
                getPublicUrl: () => ({ data: { publicUrl: '' } }),
            }),
        },
    };


if (MODE === 'development' && typeof window !== 'undefined') {
    window.supabase = supabase;
    console.info('Supabase exposed on window.supabase (dev only). Configured:', isConfigured);
}