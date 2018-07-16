'use strict'

//DOM Document Object Model
// guardar elemento en variable, sacando su valor, y dandole otro valor

    function cambiaColor(color){
        caja.style.color = color;
    }

//var caja = document.getElementById("micaja");
// seleccionar id con #, seleccionamos una clase con el punto (.)
// (.micaja) -> clase caja (#micaja) -> selector caja

    var caja = document.querySelector("#micaja");

    caja.innerHTML = "TEXTO EN CAJA DESDE JS!"
    caja.style.background = "red";
    caja.style.padding = "15px";
    caja.style.color = "white";
    caja.className = "hola hola2";

    console.log(caja);

    // Como conseguir elementos por sus etiquetas

    var todosLosDivs = document.getElementsByTagName("div");

    //todosLosDivs.forEach((valor, indice) =>{});

    var seccion = document.querySelector("#miSeccion");
    var hr = document.createElement("hr");


    var valor;

    for(valor in todosLosDivs){
        if(typeof todosLosDivs[valor].textContent == "string"){
            var parrafo = document.createElement("p");
            var texto = document.createTextNode(todosLosDivs[valor].textContent);
            parrafo.append(texto);
            seccion.append(parrafo);
            }
    }

    seccion.append(hr);


//Conseguir elementos por su clase
    var divRojos = document.getElementsByClassName("rojo");

    var divAmarillos = document.getElementsByClassName("amarillo");

    console.log(divAmarillos);

    divAmarillos[0].style.background = "yellow";

    //Me trae un array

    var div;
    for(div in divRojos){
        //Saca en el array el numero total de elementos por lo que:
        if(divRojos[div].className == "rojo"){
            divRojos[div].style.background = "red";
        }
    }

//Query selector - Seleccionar id, elemento en concreto

    var id = document.querySelector("#encabezado");
    console.log(id);

    var claseRojo = document.querySelector("div.rojo");
    console.log(claseRojo);

    var etiqueta = document.querySelector("div");
    console.log(etiqueta);
