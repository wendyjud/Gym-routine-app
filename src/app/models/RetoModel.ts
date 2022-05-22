export class RetoModel{
    id?:string;
    numRet: string;
    reto: string;
    descripcion:string;
    dias:number;


    constructor(numRet: string, reto: string, descripcion:string, dias:number){
        this.numRet=numRet;
        this.reto=reto;
        this.descripcion=descripcion;
        this.dias=dias;
 
    }

}