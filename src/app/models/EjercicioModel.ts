export class EjercicioModel{
    id?:string;
    ejercicio: string;
    img:string;
    indicacion:string;
    pasos: string;
    link: string;


    constructor(ejercicio: string,
                img:string,
                indicacion:string,
                pasos: string,
                link: string){
                this.ejercicio=ejercicio;
                this.img=img;
                this.indicacion=indicacion;
                this.pasos=pasos;
                this.link=link;
    }

}