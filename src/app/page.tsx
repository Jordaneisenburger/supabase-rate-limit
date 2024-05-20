import { getUser } from "@/utils/supabase/server/getUser";
import { ChildComponent } from "./childComponent";
import { getSupabaseClient } from "@/utils/supabase/server/getSupabaseClient";

export default async function Home() {
    const supabase = getSupabaseClient();
    const {id} = await getUser();
    const {data} = await supabase.from('SOME-TABLE').select('*').eq('id', id)

  return (
    <div className="text-xl">
        This is the homepage and here we request user data id:{id}
        <ChildComponent />
    </div>
  );
}
