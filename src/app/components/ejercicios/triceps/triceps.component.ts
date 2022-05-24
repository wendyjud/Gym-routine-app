import { Component, OnInit } from '@angular/core';
import { EjercicioModel } from 'src/app/models/EjercicioModel';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-triceps',
  templateUrl: './triceps.component.html',
  styleUrls: ['./triceps.component.css']
})
export class TricepsComponent implements OnInit {
  listEjercicios: EjercicioModel[]=[];
  constructor(private _ejercicioService: EjerciciosService) { }

  ngOnInit(): void {
    this.obtenerTriceps();
  }
  obtenerTriceps(){
    this._ejercicioService.obtenerTriceps().subscribe(doc=>{
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
