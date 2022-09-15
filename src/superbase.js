import { createClient } from '@supabase/supabase-js'

const superbaseURL = import.meta.env.VITE_PUBLIC_SUPERBASE_URL;
const superbaseKey = import.meta.env.VITE_PUBLIC_SUPERBASE_KEY;

export const superbase = createClient(superbaseURL, superbaseKey)
