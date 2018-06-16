'use strict'

//Parametros REST y SPREAD

//Variable REST, recoge los "restos" de los parametros que se salgan de los definidos y los mete en un array

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(resto_de_frutas);
}

//listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melon", "Coco");

var frutas = ["Naranja","Manzana"]
//Si paso como argumento "frutas" me saldrá como parametro 1 el array
//Si lo paso con los puntos suspensivos delante, me separa los argumentos

listadoFrutas(...frutas, "Sandía", "Pera", "Melon", "Coco");

