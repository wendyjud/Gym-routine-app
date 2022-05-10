import { Tracing } from "trace_events";

export class RutinaModel{
    id?:string;
    categoria: string;
    calentamiento:Text;
    ejercicio:string;
    duracion:number;
    series: number;
    rep: number;
    descanso: number;

    constructor(categoria: string, calentamiento:Text,ejercicio:string, duracion:number, series: number, rep: number, descanso: number){
        this.categoria=categoria;
        this.calentamiento=calentamiento;
        this.ejercicio=ejercicio;
        this.duracion=duracion;
        this.series=series;
        this.rep=rep;
        this.descanso=descanso;
    }

}