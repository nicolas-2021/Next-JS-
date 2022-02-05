import type {NextPage} from "next";//3-lo que este en [id].tsx se ve reflejado en cualquier path ej: /Loquesea

import {NextRouter, withRouter} from "next/router";

import Link from "next/link";

interface Props {
  router: NextRouter;
}

  const Store: NextPage<Props> = ({router}) => {
  return (
    <div>
      <p>presione el Ancla</p>
      <a href="/">ANCLA</a> 
      <br></br>
      <p>presione el Boton</p>
      <button onClick={() => router.push("/")}>BOTON</button>
      <br></br>
      <p>presione el Link</p>
      <Link href="/">LINK</Link>
    </div>
  );//1ro: hay un ancla tipica html, 2do: boton que usa un router de esta manera, 3ro: etiqueta Link (los 3 hacen la misma accion ir a '/')
};


export default withRouter(Store);