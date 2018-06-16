'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros
introducidos por el usuario
*/

do{

var numero1 = parseInt (prompt("Introduce el primer numero de la secuencia: ",0));
var numero2 = parseInt (prompt("Introduce el segundo numero de la secuencia ",0));


document.write("<h1>Desde el "+numero1+" al "+numero2+" tenemos los siguientes numeros: </h1>")
for(var i = numero1 ; i < numero2 ; i++){
    //i +=  numero1;
    document.write(i+"<br/>");
}


}while(isNaN(numero1 ) || isNaN(numero2));
