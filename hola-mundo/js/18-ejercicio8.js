'use strict'

//Calculadora
/*
1.Nos pide dos numeros
2.Si lo metemos mal, nos lo vuelve a pedir
3.Nos muestra en el body, en alert, y por consola
el resultado de sumar, restar, multiplicar y dividir
esos numeros
*/

var numero1 = parseInt(prompt("Introduce tu numero",0));
var numero2 = parseInt(prompt("Introduce tu numero",0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1)||isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce tu numero",0));
    numero2 = parseInt(prompt("Introduce tu numero",0));
}

var resultado = "La suma es: "+(numero1+numero2)+" <br/>"+
                "La resta es "+(numero1-numero2)+" <br/>"+
                "La multiplicacion es: "+(numero1*numero2)+" <br/>"+
                "La division es: "+(numero1/numero2)+" <br/>";

var resultado2 = "La suma es: " +(numero1+numero2)+ " \n"+
                "La resta es "+(numero1-numero2)+ " \n"+
                "La multiplicacion es: "+(numero1*numero2)+ " \n"+
                "La division es: "+(numero1/numero2)+ " \n";



alert(resultado2);
console.log(resultado2);
document.write(resultado);
