import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fkwrkvgoojjldoqirlpu.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrd3Jrdmdvb2pqbGRvcWlybHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5ODA0NjIsImV4cCI6MjA0MDU1NjQ2Mn0.jd67_T8tDhSi26YU0NZtAws1kkxp_Yk6DhmkQ2v0NyQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
