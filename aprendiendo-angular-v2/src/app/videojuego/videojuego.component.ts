import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


@Component({
    selector: 'videojuegos',
    templateUrl: './videojuego.component.html'
})
export  class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo: string;
    public listado: string;
    

    constructor(){
        //console.log("Se ha cargado con exito el componente de videojuegos");

        this.titulo = 'Componente de videojuegos';
        this.listado = 'Listado de videojuegos mas populares: ';
    }

    ngOnInit(){
       // console.log("OnInit ejecutado");
    }
    
    ngDoCheck(){
        //console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
        //console.log("OnDestroy ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente";
    }

}