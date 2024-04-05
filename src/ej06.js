import { URL } from 'url';
function parsearUrl(laURL) {
    try {
        const miUrl = new URL(laURL);
        const parametros = {};
        for (const [clave, valor] of miUrl.searchParams.entries()) {
            parametros[clave] = valor;
        }
        return {
            host: miUrl.origin,
            pathname: miUrl.pathname,
            parametros: parametros
        };
    } catch (error) {
        console.error(`Error al parsear la URL: ${error}`);
        return {
            host: null,
            pathname: null,
            parametros: {}
        };
    }
}
let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);
