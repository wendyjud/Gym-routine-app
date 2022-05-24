import { Component, OnInit } from '@angular/core';
import { EjercicioModel } from 'src/app/models/EjercicioModel';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-pectorales',
  templateUrl: './pectorales.component.html',
  styleUrls: ['./pectorales.component.css']
})
export class PectoralesComponent implements OnInit {
  listEjercicios: EjercicioModel[]=[];
  constructor(private _ejercicioService: EjerciciosService) { }

  ngOnInit(): void {
    this.obtenerPectorales();
  }
  obtenerPectorales(){
    this._ejercicioService.obtenerPectorales().subscribe(doc=>{
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


