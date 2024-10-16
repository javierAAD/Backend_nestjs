export class Student{

    constructor( id:number ,
                mon:string, 
                edad:number, 
                c:string){
        this.identificacion = id;
        this.nombre = mon;
        this.edad = edad;
        this.ciudad = c;
    }
    identificacion:number;
    nombre:string;
    edad:number;
    ciudad:string;


}