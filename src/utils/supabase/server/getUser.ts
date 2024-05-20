'use server';
import { getSupabaseClient } from './getSupabaseClient';

export const getUser = async () => {
    const supabase = getSupabaseClient();
    const res = await supabase.auth.getUser();

    return {
        id: res.data?.user?.id!,
    };
};
