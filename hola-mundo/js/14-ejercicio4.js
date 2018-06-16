'use strict'

//13, Mostrando solo los numeros impares


do{

    var numero1 = parseInt (prompt("Introduce el primer numero de la secuencia: ",0));
    var numero2 = parseInt (prompt("Introduce el segundo numero de la secuencia ",0));
    
    
    document.write("<h1>Desde el "+numero1+" al "+numero2+" tenemos los siguientes numeros impares: </h1>")
    for(var i = numero1 ; i < numero2 ; i++){
        if(i % 2 != 0){
        document.write(i+"<br/>");
        }
    }
    
    
    }while(isNaN(numero1 ) || isNaN(numero2));
    