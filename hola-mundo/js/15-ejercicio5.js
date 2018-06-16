'use strict'

/*
Muestre todos los numeros divisores de nuestro numero
*/

var numero = parseInt(prompt("Introduce tu numero",1));

for(var i = 1; i <= numero; i++){

    if(numero%i == 0){
        console.log("Divisor: "+i);
    }

}