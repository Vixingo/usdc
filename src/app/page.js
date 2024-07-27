"use client";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let { data, error } = await supabase.storage.from("cat").select("");
            if (error) console.log("error", error);
            setData(data);
        }
        fetchData();
    });
    console.log(data);

    return (
        <>
            <Header />
            <Search />
        </>
    );
}
