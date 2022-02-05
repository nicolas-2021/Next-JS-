import type { NextPage } from "next";          //9- Nueva respuesta del if, que muestra la 'StoreCard' Linkeada a /Loquesea

import type { Store } from "../types";

import { useEffect, useState } from "react";
import { Main } from "next/document";
import StoreCard from "../components/StoreCard";

import Link from "next/link";

const Inicio: NextPage = () => {

    const [stores, setStores] = useState<Store[]>([]);

    useEffect(()=>{
        fetch("/api/stores")
        .then((res)=> res.json())

        .then((stores: Store[])=> setStores(stores));
    },[]);

    if (!stores.length) {  
        return <span>cargando...</span>;
    }

    return (
    <main style={{display: "flex", flexDirection: "column", gap: 12  }}>
        {stores.map((store) => (
        <Link key={store.id} href={`/${store.id}`}>
        <a>
        <StoreCard store={store} />
        </a>
        </Link>
        ))}
    </main>
    );
};

export default Inicio;