'use strict'

//Altura y anchura

function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    console.log(screen.width);
    console.log(screen.height);

    console.log(window.location);
    //Puedo sacar cada una de las propiedades de window
}

//Cambiamos la propiedad de href cambiando de url
function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width = 400","height = 300");
}

getBom();
