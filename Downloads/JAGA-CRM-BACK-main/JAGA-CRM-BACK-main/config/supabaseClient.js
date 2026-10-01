import { createClient } from "@supabase/supabase-js";
import 'dotenv/config'

const supabaseUrl = process.env.JAGA_APP_SUPABASE_URL
const supabaseKey = process.env.JAGA_APP_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase