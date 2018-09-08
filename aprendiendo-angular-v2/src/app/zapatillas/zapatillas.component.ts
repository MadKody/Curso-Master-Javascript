import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'

})

export class ZapatillasComponent implements OnInit{

    public titulo : string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Clasicas','Reebok','Blanco',80,true),
            new Zapatilla('Air Max','Nike','Negro',70,true),
            new Zapatilla('Adidas Yezzy','Adidas','Gris',120,false),
            new Zapatilla('Black panther','Puma','Asfalto',120,false)
        ];
    
    };

    ngOnInit(){
        console.log(this.zapatillas);
    }

}