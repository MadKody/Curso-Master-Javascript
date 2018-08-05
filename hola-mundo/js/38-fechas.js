
var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
//Get minute, get seconds...

//Interpolacion de una variable.
var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El dia del mes es: ${dia}
    La hora del día es: ${hora}
`;

console.log(textoHora);

//Funciones matemáticas
    console.log(Math.random()*1000);

//ceil redondea
    console.log(Math.ceil(Math.random()*10000));