'use strict'

//JSON javascript Object Notation

var pelicula = {
    titulo: "Batman vs Superman",
    year: 2017,
    pais: "Estado Unidos"
};

var peliculas = [
    {titulo: "La verdad duele", year:2016, pais:"Francia"},
];

var caja_peliculas = document.querySelector("#Peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo+" - "+peliculas[index].year);
    caja_peliculas.append(p);
}