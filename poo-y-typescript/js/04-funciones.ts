//Tipado fuerte y funciones
//Puedo controlar el argumento que llega a la funcion y el resultado de la funcion
function getNumero(numero:number = 12):string{
    return "El numero es "+ numero;
}

console.log(getNumero(55));
