import { Component} from '@angular/core';


@Component({
    selector: 'videojuegos',
    templateUrl: './videojuego.component.html'
})
export  class VideojuegoComponent{

    public titulo: string;
    public listado: string;

    constructor(){
        console.log("Se ha cargado con exito el componente de videojuegos");

        this.titulo = 'Master en Javascript';
        this.listado = 'Listado de videojuegos mas populares: ';
    }
}