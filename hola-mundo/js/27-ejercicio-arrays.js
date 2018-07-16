/*
Programa
1.- Pida 6 numeros por pantalla
2.- Mostrar el array entero en el cuerpo de la pagina y en la consola
3.- Ordenar la matriz y mostrarla
4.- Invertir su orden y mostrarlo
5.- Cuantos elementos tiene el array
6.- Busqueda de un valor introducido por el usuario, y que nos diga si lo encuenta
y su indice.
*/

//funcion definida a posteriori
function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+index+" - "+elemento+"</li>");
    });
}

//1.-
//var numeros = new Array(6);
var numeros = [];

for(var i = 0; i <= 5;i ++){
      //numeros[i] = parseInt(prompt("escribe tus números: ",0));
    numeros.push(parseInt(prompt("escribe tus números: ",0)));
}
//mostrando el array por la consola
console.log(numeros);

//mostrar en el cuerpo de la pagina
mostrarArray(numeros);
    /*
    document.write("<h1>Contenido del array</h1>");
    numeros.forEach((numero, index) =>{
        document.write("<strong>"+index+" - "+numero+"</strong><br/>");
    })
*/


//2.- Ordenar y mostrar
//Sort ordena alfabéticamente y con esta funcion lo hace numericamente
numeros.sort(function(a,b){return a-b});
console.log(numeros);
mostrarArray(numeros,"Ordenado");

//3.- Invertir y mostrar
numeros.reverse();
mostrarArray(numeros,"Invertida");

//4.- Cuantos numeros tiene un arra, contar elementos
document.write("<h1>El array tiene "+numeros.length+" elementos</h1>");

//5.-Busqueda

var busqueda = (parseInt(prompt("Busca tu número: ",0)));

var posicion = numeros.findIndex(buscado => buscado == busqueda);

if(posicion && posicion != -1){
    document.write("<hr><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1></hr>");
}else{
    document.write("<hr><h1>NO ENCONTRADO</h1></hr>");
}


