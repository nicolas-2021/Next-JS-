import type { NextPage } from "next";

import type { Store } from "../types";

import { useEffect, useState } from "react";

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

    return <div>Hello Base</div>;//7-Si previamente  creamos la SubApi en la carpeta api !stores.length = false ya que hubo comunicacion con los Datos existentes que deciamos en el comentario anterior.
};

export default Inicio;