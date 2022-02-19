import type {GetStaticPaths, GetStaticProps, NextPage} from "next";//12-En rutas dinamicas como esta, es necesario definir getStaticPaths para que funcione el getStaticProps.

import api from "../api"; // importamos api para traer 'datos' de alguna parte (base de datos, o archivo con datos como aca)

import Link from "next/link";

import type { Store } from "../types"; //importamos el tipo Store

import StoreCard from "../components/StoreCard";//importamos las StoreCard

interface Props {
  store: Store;
}

  const Store: NextPage<Props> = ({store}) => {
  return (
    <div>
      <StoreCard store= {store} />
      <Link href="/">LINK</Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({params}) => {

  const store = await api.fetch(params?.id as string); //Quiero ahora un fetch; para una ruta específica. Además como está dentro de Pages tengo el parametro id disponible como string.
  
  return {
      props: {store}
  };
  };

 export const getStaticPaths:  GetStaticPaths = async() => {    //Le digo que genere una ruta 'estática' con la lista de stores.

  const stores = await api.list();

  return {
      paths: stores.map((store) => ({params: {id: store.id}})),    //Le digo que busque en la ruta estatica de stores, 'un' solo store, . por ejemplo:manolo-rivadavia.
      fallback: "blocking",
  };

 };


export default Store;