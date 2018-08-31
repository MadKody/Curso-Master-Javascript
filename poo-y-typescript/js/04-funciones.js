//Tipado fuerte y funciones
//Puedo controlar el argumento que llega a la funcion y el resultado de la funcion
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es " + numero;
}
console.log(getNumero(55));
