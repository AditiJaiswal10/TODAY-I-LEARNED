import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://xjytfzwpcnewtxwsddno.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqeXRmendwY25ld3R4d3NkZG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NjcxMTcsImV4cCI6MjA1ODI0MzExN30.y8WMEdg3itRV6zzl_y8EYwFXb2ivb4rY3O0RZQVQbNI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;