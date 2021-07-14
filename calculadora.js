//Exporto la funcion sumar.
const sumar = require("./sumar");

//Exporto la funcion restar.
const restar = require("./restar");

//Exporto la funcion multiplicar.
const multiplicar = require("./multiplicar");

//Exporto la funcion de dividir.
const dividir = require("./dividir");

//Pongo el resultado.

const resultado1 = sumar(7,3)
const resultado2 = restar(10,7)
const resultado3 = multiplicar(10,7)
const resultado4 = dividir(14,7)

//Comando para que este en la consola.
console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)