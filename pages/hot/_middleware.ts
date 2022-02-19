import {NextResponse} from "next/server";  //13- Usamos Middleware que se ejecuta antes de getServerSideProps,getStaticProps o getStaticPaths

import api from "../../api";               //nos permite redireccionar,reescribir,agregar headers etc... en una peticion de usuario antes de que esta se ejecute.

export default async function middleware() {

    const hot = await api.hot();

    return NextResponse.rewrite(`/${hot.id}`); //Nota: La conexion con la api "la hace una sola vez". Al actualizar vemos que se ejecuta el random que esta en api.ts
                                              //Pero esto se hace rescribiendo en lo que ya se obtuvo la primer conexion que trajo los datos.
}