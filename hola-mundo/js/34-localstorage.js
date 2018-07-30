'use strict'

//Localstorage
//Comprobar la disponibilidad del localStorage
if(typeof(Storage) != 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("LocalStorage incompatible");
}


//Guardar datos
localStorage.setItem("titulo","Curso de JS cursado por Angel");

//Recuperar elemento del local storage y meterlo en la pagina
var almacenado = localStorage.getItem("titulo");
console.log(almacenado);

    //Incrustarlo en pagina
document.querySelector("#Peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos
var usuario = {
    nombre: "Angelo",
    email: "Angelo@angelo.com",
    web: "angelo.com.es"
};

//Usamos el objeto JSON y empleamos el metodo stringify para convertirlo a string y almacenarlo en local
localStorage.setItem("usuario",JSON.stringify(usuario));

//Convertir string a JSON
var usuarioJSON = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioJSON);

//Anadirlo al documento
document.querySelector("#datos").append(usuarioJSON.web+" - "+usuarioJSON.nombre);

localStorage.removeItem("usuario");
localStorage.clear();
