import { Component, OnInit } from '@angular/core';
import { RapidaModel, RutinaModel } from 'src/app/models/RutinaModel';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-abdominales',
  templateUrl: './abdominales.component.html',
  styleUrls: ['./abdominales.component.css']
})
export class AbdominalesComponent implements OnInit {
  listabdominales: RapidaModel[]=[];
  constructor(private _rutinaService: RutinaService) { }

  ngOnInit(): void {
    this.obtenerAbdominales();
  }

  obtenerAbdominales(){
    this._rutinaService.obtenerAbdominales().subscribe(doc=>{
      this.listabdominales=[];
      doc.forEach((element:any)=>{
        this.listabdominales.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });

      });
      console.log(this.listabdominales);
    })
  }


}
