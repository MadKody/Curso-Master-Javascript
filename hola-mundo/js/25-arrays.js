'use strict'

//arrays, arreglos, matrices

var nombre = "Angel Antonio Teixeira";
var nombre = ["Victor Robles","Angel Teixeira","Javier Cobos", true, 64];

var lenguajes = new Array("PHP","JS","Go","Java","Pascal","Kobol","C#","C++");

console.log(nombre);
console.log(lenguajes);

//Acceder a la posicion concreta de un array
console.log(nombre[2]);

//Longitud de un array
console.log(nombre.length);

//var elemento = parseInt(prompt("Que elemento del array quieres??",0));

/* HACER LA PETICION EN BUCLE
    function pedirElemento(){
        elemento = parseInt(prompt("Que elemento del array quieres??",0));
    };

    if(elemento > nombre.length){
        alert("Introduce un numero del 0 al "+nombre.length);
        pedirElemento();
    }else{
        alert("El elemento seleccionado es "+nombre[elemento]);
    }
*/

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
/*
    for(var i = 0; i < lenguajes.length; i++){
        document.write("<li>"+lenguajes[i]+"</li>");
    }

    //RECORRIENDO EL ARRAY DE FORMA MAS "elegante", pues si...
    lenguajes.forEach((elemento, indice)=>{
        document.write("<li>"+indice+" - "+elemento+"</li>");
    });
*/

//RECORRIENDO ARREGLOS CON EL METODO FOR IN
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguaje+" - "+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");

//BUSQUEDAS DENTRO DE UN ARRAY

var precios = [12,31,50,80,100];


//función de callback
    /*
        var busqueda = lenguajes.find(function(lenguaje){
            return lenguaje == "PHP";
        });
    */

//Funcion de flecha¿? Mas mejor¿? 
//find y findIndex
var busqueda = lenguajes.findIndex(lenguaje => lenguaje =="JS");

//metodo some, busqueda de un elemento que cumpla una condición
var compararPrecios = precios.some(precio => precio > 80);

console.log(busqueda);
console.log(compararPrecios);
