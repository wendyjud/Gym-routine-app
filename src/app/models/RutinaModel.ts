//import { Tracing } from "trace_events";

export class RutinaModel{
    //id?:string;
    nombre: string;
    descripcion:string;
    duracion:number;
    serie: number;
    repeticion: number;
    tiempo: number;

    constructor(nombre: string, descripcion:string, duracion:number, serie: number, repeticion: number, tiempo: number){
        //this.categoria=categoria;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.duracion=duracion;
        this.serie=serie;
        this.repeticion=repeticion;
        this.tiempo=tiempo;
    }

}