import {Html, Head, Main, NextScript} from "next/document";//5-_document.tsx, aqui se importan las fuentes ej: de fonts.google.com (tambien aqui se puede modificar los tags del body)
export default function Document() {

return (

    <Html>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap" rel="stylesheet" />       
    </Head>
    <body>
    <Main />
    <NextScript />
    </body>   
    </Html>
);    
    
}
