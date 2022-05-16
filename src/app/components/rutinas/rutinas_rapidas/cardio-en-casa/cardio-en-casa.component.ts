import { RapidaModel, RutinaModel } from 'src/app/models/RutinaModel';
import { RutinaService } from 'src/app/services/rutina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardio-en-casa',
  templateUrl: './cardio-en-casa.component.html',
  styleUrls: ['./cardio-en-casa.component.css']
})
export class CardioEnCasaComponent implements OnInit {
  listcardioc: RapidaModel[]=[];
  constructor(private _rutinaService: RutinaService) { }

  ngOnInit(): void {
    this.obtenerCardioc();
  }

  obtenerCardioc(){
    this._rutinaService.obtenerCardioc().subscribe(doc=>{
      this.listcardioc=[];
      doc.forEach((element:any)=>{
        this.listcardioc.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });

      });
      console.log(this.listcardioc);
    })
  }

}
