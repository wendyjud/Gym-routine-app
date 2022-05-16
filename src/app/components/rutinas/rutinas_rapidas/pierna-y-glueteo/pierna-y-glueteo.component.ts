import { Component, OnInit } from '@angular/core';
import { RapidaModel, RutinaModel } from 'src/app/models/RutinaModel';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-pierna-y-glueteo',
  templateUrl: './pierna-y-glueteo.component.html',
  styleUrls: ['./pierna-y-glueteo.component.css']
})
export class PiernaYGlueteoComponent implements OnInit {
  listPiernas: RapidaModel[]=[];
  constructor(private _rutinaService: RutinaService) { }

  ngOnInit(): void {
    this.obtenerPyg();
  }

  obtenerPyg(){
    this._rutinaService.obtenerPyg().subscribe(doc=>{
      this.listPiernas=[];
      doc.forEach((element:any)=>{
        this.listPiernas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });

      });
      console.log(this.listPiernas);
    })
  }
}
