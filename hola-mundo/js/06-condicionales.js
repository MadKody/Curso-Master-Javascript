"use strict"

//Condicional IF
//Si A es igual a B, entonces haz algo


var edad1 = 30;
var edad2 = 12;

//Si pasa esto
if(edad1>edad2){
    //Ejecuta esto
    console.log("Edad1 es mayor que Edad2");
}else{
  console.log("la Edad es superior a la Edad1");
}

var edad = 30;
var nombre = "David Suarez";

//Operadores relacionales
/*
    Mayor: >
    Menos: <
    Mayor o igual >=
    Menor o igual <=
    Igual ==
    Distinto !=
*/

if(edad >= 18){
    //Es mayor de edad
    console.log(nombre+" tiene "+edad+" anios, por lo que es mayor de edad");

    if(edad <= 33){
        console.log("Todavia eres un milenial");
    }else if(edad >= 70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres milenial");
    }

}else{
    console.log(nombre+" tiene "+edad+" anios, por lo que es menor de edad");
}




//Operadores logicos
/*
AND: &&
OR: ||
Negacion: !
*/

//NEGACION
var year = 2017;

if(year !=2016){
    console.log("El anio no es el 2016, realmente es "+year);
}

//AND
if(year >=2000 && year <= 2020){
    console.log("Estamos en la era actual");
}

// OR: ||
if(year == 2008 || (year >=2018 && year ==2028)){
    console.log("El anio acaba en 8");
}else{
    console.log("anio no registrado");
}