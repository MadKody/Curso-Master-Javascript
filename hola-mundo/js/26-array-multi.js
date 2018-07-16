'use strict'

var categorias  = ["Accion","Terror","Comedias"];
var peliculas = ["La verdad duele","La vida es bella","Gran Torino","Batman","Spiderman","Avengers"];

var cine = [categorias,peliculas];

//Ordenar e invertir el orden del array
peliculas.sort();
peliculas.reverse();


/*
        console.log(cine[0][1]);
        console.log(cine[1][2]);
*/
//OPERACIONES CON ARRAYS
/*
    var elemento = "";

    do{
        var elemento = prompt("Introduce tu pelicula:");
        peliculas.push(elemento);

    }while(elemento != "ACABAR");

    //POP REMUEVE EL ULTIMO ELEMENTO DE UN ARRAY
    peliculas.pop();

    //peliculas[0] = undefined;
*/

//Eliminar elemento concreto

var indice = peliculas.indexOf("Gran Torino");

if(indice > -1){
    console.log(indice);
    peliculas.splice(indice, 1);
}

console.log(peliculas);

//ARRAYS A STRING
var peliculas_string = peliculas.join();
console.log(peliculas_string);

//STRING A ARRAY
var cadena = "Texto_1,Texto_2,Texto_2,Texto_3,Texto:_4";
var cadena_array = cadena.split(",");

console.log(cadena_array);



