//Strings
let cadena: string = "angelteixeira.es";

//Number
let numero: number = 12;

//Boolean

let verdadero_falso: boolean = true;

//Any

let cualquiera: any = "hola";
cualquiera = 77;

//Arrays- definimos entre <--> si queremos tiparlo

let lenguajes: Array<string> = ["php","js","Css"];

//Otra forma de declarar arrays

let years: number[] = [12,13,14,15];


//Mutiples tipos
let cadena_numero: string | number = "angelteixeira.es";
cadena_numero = 17;

//Tipos de datos personalizados

type alfanumerico = string | number;
let todo: alfanumerico = "61";
todo = "Si";

//Let vs var

var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 =  44;
    var numero2 = 55;

    console.log(numero1, numero2);
}
console.log(numero1, numero2);