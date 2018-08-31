//Clase (molde del objeto)
interface CamisetaBase{
    setColor(color);
    getColor();
}

class Camiseta implements CamisetaBase{
    //Propiedades (caracteristicas del objeto) - Public - protected - Private
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Constructor
    constructor(color, modelo:string, marca:string, talla:string, precio:number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio; 
    }

    //Metodos(funciones o acciones del objeto)
    public setColor(color:string){
        this.color = color;
    }
    
    public getColor(){
        return this.color;
    }

}

//Clase hija

class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    
    getCapucha():boolean{
        return this.capucha;
    }
}


var camiseta = new Camiseta ("123","123","123","123",12);
console.log(camiseta);

var sudadera_nike = new Sudadera("Rojo","Manga larga","Nike","L",30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Verde");

console.log(sudadera_nike);