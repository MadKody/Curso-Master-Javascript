'use strict'

/*
Que nos diga si un numero es par o impar
1.Ventana del prompt
2.Si no es valido que nos pida de nuevo el numero
*/


var number = parseInt(prompt("Introduce tu numero ",0));

while(isNaN(number)){
    number = parseInt(prompt("Introduce tu numero ",0));
}
        
if(number%2 == 0){
    alert("Tu numero es PAR");
}else{
   alert("Tu numero es IMPAR");
}   