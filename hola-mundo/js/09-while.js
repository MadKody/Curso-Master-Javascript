'use strict'


//Bucle while

var year = 2051;

while(year != 2018){
    //ejecuta esto
    console.log("estamos en el anio"+year);

    if(year == 2000){
        break;
    }

    year--;

}

//Do while

var years = 12;

do{
    alert("Solo cuando sea diferente a 20: Quedan "+(20-years))
    years++;
}while(years < 20)