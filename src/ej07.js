import { getCurrencyAbbreviation } from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(pais) {
    return (getCurrencyAbbreviation(pais)) ? getCurrencyAbbreviation(pais) : null;
}