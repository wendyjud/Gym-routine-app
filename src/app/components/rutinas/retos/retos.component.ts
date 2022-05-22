import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RetoModel } from 'src/app/models/RetoModel';
import { RutinaService } from 'src/app/services/rutina.service';
import { RetoService } from 'src/app/services/reto.service';

@Component({
  selector: 'app-retos',
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.css']
})
export class RetosComponent implements OnInit {
  listRetos: RetoModel[]=[];
  constructor(private _retoService: RutinaService,
    private _toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerRetos();
  }

  obtenerRetos(){
    this._retoService.obtenerRetos().subscribe(doc=>{
      this.listRetos=[];
      doc.forEach((element:any)=>{
        this.listRetos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });

      });
      console.log(this.listRetos);
    })
  }
}
