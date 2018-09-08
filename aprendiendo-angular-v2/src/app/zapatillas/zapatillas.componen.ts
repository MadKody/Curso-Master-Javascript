import { Component } from '@angular/core'

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent{

    constructor(){
        console.log("Componente de zapatillas cargado");
    };
}