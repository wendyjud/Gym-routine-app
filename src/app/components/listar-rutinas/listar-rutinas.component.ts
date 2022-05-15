import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RutinaModel } from 'src/app/models/RutinaModel';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-listar-rutinas',
  templateUrl: './listar-rutinas.component.html',
  styleUrls: ['./listar-rutinas.component.css']
})
export class ListarRutinasComponent implements OnInit {
  listRutinas: RutinaModel[]=[];


  constructor(private _rutinaService: RutinaService,
              private _toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerRutinas();
   
  }
  obtenerRutinas(){
    this._rutinaService.obtenerRutinas().subscribe(doc=>{
      this.listRutinas=[];
      doc.forEach((element:any)=>{
        this.listRutinas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });

      });
      console.log(this.listRutinas);
    })
  }

  eliminarRutina(id:any){
    this._rutinaService.eliminarRutina(id).then(()=>{
      this._toastr.error('Rutina eliminada correctamente');
    }, error=>{
      this._toastr.error('Oppss! Algo ha salido mal', 'Intenta de nuevo');
      console.log(error);
    })
  }
  editarRutina(rutina: RutinaModel){
    this._rutinaService.addRutinaEdit(rutina);
  }

}
