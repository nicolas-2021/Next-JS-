import { AppProps } from "next/app";//4- _app.tsx, Es el contenedor de todos los archivos que estan en Page.

import Head from "next/head";

import Page from "../components/Page";

import "../globals.css";

function App ({Component, pageProps}: AppProps) {
    return ( 
<Page> 
<Head>
<title> Timbita </title>
</Head>
< Component {...pageProps} />
</Page>
);
    
}//Se agrego el Head Timbita y luego un estilo global.css; para toda path dentro de Pages.

export default App;