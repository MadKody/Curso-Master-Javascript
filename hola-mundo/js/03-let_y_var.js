//'use strict'

//Pruebas con Let y Var
alert("Hola");
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero) //valor 50

//Prueba con Let
var texto = "Curso JS victorroblesweb.es";
console.log(texto);

if(true){
    let texto = "Curso Laravel 5";
    console.log(texto);
}

console.log(texto);