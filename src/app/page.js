"use client";
import Header from "@/components/Header";
import Search from "@/components/Search";

import { createClient } from "@/utils/supabase/server";

export default async function Home() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data: todos } = await supabase.from("todos").select();
    return (
        <>
            {" "}
            <ul>
                {todos?.map((todo) => (
                    <li>{todo}</li>
                ))}
            </ul>
            <Header />
            <Search />
        </>
    );
}
