import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RapidaModel, RutinaModel } from 'src/app/models/RutinaModel';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-quemagrasa',
  templateUrl: './quemagrasa.component.html',
  styleUrls: ['./quemagrasa.component.css']
})
export class QuemagrasaComponent implements OnInit {
  listQuemagrasa: RapidaModel[]=[];
  constructor(private _rutinaService: RutinaService,
    private _toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerRapidas();
  }

  obtenerRapidas(){
    this._rutinaService.obtenerRapidas().subscribe(doc=>{
      this.listQuemagrasa=[];
      doc.forEach((element:any)=>{
        this.listQuemagrasa.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });

      });
      console.log(this.listQuemagrasa);
    })
  }
}
