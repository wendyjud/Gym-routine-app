import { Component, OnInit } from '@angular/core';
import { EjercicioModel } from 'src/app/models/EjercicioModel';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-espalda',
  templateUrl: './espalda.component.html',
  styleUrls: ['./espalda.component.css']
})
export class EspaldaComponent implements OnInit {
  listEjercicios: EjercicioModel[]=[];
  constructor(private _ejercicioService: EjerciciosService) { }

  ngOnInit(): void {
    this.obtenerEspalda();
  }
  obtenerEspalda(){
    this._ejercicioService.obtenerEspalda().subscribe(doc=>{
      this.listEjercicios=[];
      doc.forEach((element:any)=>{
        this.listEjercicios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });

      });
      console.log(this.listEjercicios);
    })
  }

}
