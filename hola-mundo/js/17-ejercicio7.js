'use strict'

//Tabla de multiplicar


var numero = parseInt(prompt("Introduce tu numero",1));
var producto = 0;
/*
document.write("<h1>"+"Tabla del "+numero+"</h1>");

for(var i = 1; i < 10; i++){
    document.write(i+" x "+numero+" = "+(i*numero)+"</br>");
}
*/

//Todas las tablas de multiplicar

for(var c = 1; c <= 10; c++){
    document.write("<h1>"+"Tabla del "+c+"</h1>");
    for(var i = 1; i <= 10; i++){
        document.write(i+" x "+c+" = "+(i*c)+"</br>");
    }
}