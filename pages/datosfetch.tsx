
import type { Store } from "../types"; //10-En lugar de useEffect importamos GetServerSideProps agregando las <Props>. (El Resultado es el mismo de 9)

import { Main } from "next/document";

import StoreCard from "../components/StoreCard";

import Link from "next/link";

import type {GetServerSideProps, NextPage} from "next";

import api from "../api";

interface Props {
    stores: Store[];
}

const Inicio: NextPage<Props> = ({stores}) => {

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

export const getServerSideProps: GetServerSideProps = async () => {

const stores = await api.list();


return {
        props: {stores}
};
};
export default Inicio;
