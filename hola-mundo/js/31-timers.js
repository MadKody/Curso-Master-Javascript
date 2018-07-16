'use strict'


window.addEventListener("load", function(){

    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("Set interval ejecutado");

            var encabezado = document.querySelector("h1");
            console.log("Inicio - seleccionado h1");

            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px";
                console.log("Encabezado en 20px");

            }else{
                encabezado.style.fontSize = "50px";
                console.log("De nuevo en 50px");
            }

        }, 1000);

        return tiempo;
    }
    //Timers
    //setInterval - en bucle
    //setTimeout - solo una vez
    
    var tiempo = intervalo();

    var stop = document.querySelector('#stop');
    stop.addEventListener('click',function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');
    start.addEventListener('click',function(){
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    });
})