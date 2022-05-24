import { Component, OnInit } from '@angular/core';
import { EjercicioModel } from 'src/app/models/EjercicioModel';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-pierna',
  templateUrl: './pierna.component.html',
  styleUrls: ['./pierna.component.css']
})
export class PiernaComponent implements OnInit {
  listEjercicios: EjercicioModel[]=[];
  constructor(private _ejercicioService: EjerciciosService) { }

  ngOnInit(): void {
    this.obtenerPierna();
  }
  obtenerPierna(){
    this._ejercicioService.obtenerPierna().subscribe(doc=>{
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
