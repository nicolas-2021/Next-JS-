
import type { Store } from "../types";//11-Otra forma en lugar de GetServerSideProps que ejecuta en tiempo de ejecucion es usar getStaticProps que ejecuta en tiempo de Compilacion.

import { Main } from "next/document";

import StoreCard from "../components/StoreCard";

import Link from "next/link";

import type {GetStaticProps, NextPage} from "next";

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

export const getStaticProps: GetStaticProps = async () => {

const stores = await api.list();


return {
        props: {stores}
};
};
export default Inicio;
