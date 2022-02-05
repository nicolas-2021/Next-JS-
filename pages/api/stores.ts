import { NextApiRequest, NextApiResponse } from "next";//6-Carpeta api que hace de SubApi intermediaria para comunicarnos con datos de ua BD,por ejemplo.

import api from "../../api";

export default async function handler(req:NextApiRequest, res: NextApiResponse){
    const stores = await api.list();//En este ejemplo se llama un conjunto de datos de api.ts donde hay un modelo que sigue un Schema de types.ts

    return res.json(stores);// stores.ts seria el codigo que ejecuta nuestra SubApi.
}