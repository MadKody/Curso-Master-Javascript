'use strict'

//Funciones anonimas
//Es una funcion que no tiene nombre
    /*
    var pelicula = function (nombre){
        return "La pelicula es: "+ nombre;
    }
    */

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar*2);

    return sumar;
}

//Callback, es una funcion anonima que se le pasa como parametro otra funcion
//Funciones de Flecha, con las funciones de callback
sumame(5,7, dato => {
    console.log("La suma es "+ dato);
},
dato =>{
    console.log("La suma por dos es: ", (dato));
});

