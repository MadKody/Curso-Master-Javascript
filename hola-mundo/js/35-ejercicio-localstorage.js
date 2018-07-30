'use strict'

var formularioPeliculas = document.querySelector("#formularioPeliculas");

formularioPeliculas.addEventListener("submit", function(){
    console.log("Entra");
    var titulo = document.querySelector('#addpeliculas').value;

    if(titulo.length >= 1){
        localStorage.setItem(titulo,titulo);
    }
});


var ul = document.querySelector('#peliculas-list');    
for(var i in localStorage){
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
};

var formularioPeliculas = document.querySelector("#formularioPeliculas");

formularioPeliculas.addEventListener("submit", function(){
    console.log("Entra");
    var titulo = document.querySelector('#addpeliculas').value;

    if(titulo.length >= 1){
        localStorage.setItem(titulo,titulo);
    }
});