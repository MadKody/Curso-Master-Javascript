'use strict'

//FUNCIONES
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//PARAMETROS
//Recibidos por la funcion y alteran la lógica de la función

function porConsola(numero1, numero2){
    console.log("Suma " + (numero1+numero2));
        console.log("Resta " + (numero1-numero2));
        console.log("Multiplicacion " + (numero1*numero2));
        console.log("Division " + (numero1/numero2));
        console.log("************************************");
}

function porPantalla(numero1,numero2){
    document.write("Suma " + (numero1+numero2)+"<br/>");
    document.write("Resta " + (numero1-numero2)+"<br/>");
    document.write("Multiplicacion " + (numero1*numero2)+"<br/>");
    document.write("Division " + (numero1/numero2)+"<br/>");
    document.write("************************************");
}


function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }    
    return true;
}



calculadora(2, 5);
//Al pasarle el 3ª parametro, el cual hace de bandera
//Mostrar ya no es igual a false y se ejecuta mi bloque de codigo porPantalla
calculadora(14,10,true);


/*
for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i,8);
}
*/



