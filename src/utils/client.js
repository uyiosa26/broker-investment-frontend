import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_PROJECT,
  import.meta.env.VITE_SUPABASE_KEY
);

export default supabase;
