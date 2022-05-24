import { Component, OnInit } from '@angular/core';
import { EjercicioModel } from 'src/app/models/EjercicioModel';
import { EjerciciosService } from 'src/app/services/ejercicios.service';

@Component({
  selector: 'app-abdomen',
  templateUrl: './abdomen.component.html',
  styleUrls: ['./abdomen.component.css']
})
export class AbdomenComponent implements OnInit {
  listEjercicios: EjercicioModel[]=[];
  constructor(private _ejercicioService: EjerciciosService) { }

  ngOnInit(): void {
    this.obtenerAbdomen();
  }
  obtenerAbdomen(){
    this._ejercicioService.obtenerAbdomen().subscribe(doc=>{
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
