'use strict'

/*
Programa que nos pida dos numeros y que nos diga cual es el mayor, el menor, o si son iguales
Plus: Si los datos introducidos en el prompt no son numeros nos los vuelva a pedir
*/

var numero1 = parseInt (prompt('Introduce el primer numero ',0));
var numero2 = parseInt (prompt('Introduce el segundo numero ',0));

console.log(numero1, numero2);

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt (prompt('Introduce el primer numero ',0));
    numero2 = parseInt (prompt('Introduce el segundo numero ',0));
}

if(numero1 > numero2){
    alert("el numero "+numero1+" es mayor que el "+numero2)
}else if(numero1 < numero2){ 
    alert("el numero "+numero2+" es mayor que el "+numero1)
}else if(numero1 == numero2){
    alert("Los numeros son iguales")
}else{
    alert("Introduzca un caracter valido")
}
