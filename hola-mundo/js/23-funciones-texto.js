'use strict'

//Transformaciones de textos

var numero = 444;
var texto1 = "Bienvenido al curso de javascript";
var texto2 = "Avanzando poco a poco";

        /*
        var dato = numero.toString();
            dato = texto1.toUpperCase();
            dato = texto2.toLowerCase();

        console.log(dato);

        //Calcular longitud de TEXTO
        var nombre = "esto es un texto de prueba";
            nombre = ["hoa","hola"]; 

        console.log(nombre.length);

        //Concatenar - Unir textos

            //var textoTotal = texto1+". "+texto2;
        var textoTotal = texto1.concat(". "+texto2);

        console.log(textoTotal);
        */

//Motores de busqueda
        /*
        //Encuentra la primera coincidencia
        var busqueda = texto1.indexOf("curso");
        //Encuentra la ultima coincidencia
        busqueda = texto2.lastIndexOf("poco");
        //Va a devolver un (-1) por que no existe
        //busqueda = texto2.lastIndexOf("Juan")
        
        //Hace una busqueda global, y la hacemos con R.E.
        busqueda = texto2.match(/poco/g);
        
        //A partir del caracter 14, cinco letras.
        busqueda = texto1.substr(14,5);

        //Letra concreta de un string
        busqueda = texto1.charAt(30);
        

        //True or false - Busca coincidencia por el principio
        busqueda = texto1.startsWith("Bienv");

        //True or false del string (caseSensitive)
        busqueda = texto1.includes("Javascript");
        console.log(busqueda);
        */

//REMPLAZOS
var busqueda = texto1.replace("javascript","Symfony");

    //recorta una seccion del string
    busqueda = texto1.slice(12,22);

    //Array con las palabras separadas por lo que le digas
    busqueda = texto1.split(" ");

    //Quita los espacios por delante y detras del string
    busqueda = texto1.trim();
    console.log(busqueda);