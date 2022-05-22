import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RutinaModel } from 'src/app/models/RutinaModel';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.component.html',
  styleUrls: ['./crear-rutina.component.css']
})
export class CrearRutinaComponent implements OnInit {
form: FormGroup;
titulo= 'Crear Rutina';
id: string | undefined;

  constructor(private fb:FormBuilder,
    private _rutinaService:RutinaService,
    private toastr: ToastrService) {
    this.form=this.fb.group({
    nombre:['', Validators.required],
    descripcion:['',Validators.required],
    duracion:['', Validators.required],
    serie:['',Validators.required],
    repeticion:['', Validators.required],
    tiempo:['',Validators.required],
    })
   }
  
  ngOnInit(): void {
    this._rutinaService.getRutinaEdit().subscribe(data=>{
      console.log(data);
      this.id=data.id;
      this.titulo='Editar Rutina';
      this.form.patchValue({
        nombre:data.nombre,
        descripcion:data.descripcion,
        duracion:data.duracion,
        serie:data.serie,
        repeticion:data.repeticion,
        tiempo:data.tiempo,
      })
    })
  }
  guardarRutina(){
    if (this.id=== undefined){//creamos una tarjeta
      this.agregarRutina();
    }else{ //editamos una tarjeta
      this.editarRutina(this.id);
    }
    
  }
  editarRutina(id:string){
    const RUTINA: RutinaModel={
      nombre:this.form.value.nombre,
      descripcion:this.form.value.descripcion,
      duracion:this.form.value.duracion,
      serie:this.form.value.serie,
      repeticion:this.form.value.repeticion,
      tiempo:this.form.value.tiempo,

    }
    this._rutinaService.editarRutina(id,RUTINA).then(()=>{
      this.titulo='Agregar Rutina';
      this.form.reset();
      this.id=undefined;
      this.toastr.info('Tarjeta actualizada correctamente')
    },error=>{
      console.log(error);
    })
  }
  agregarRutina(){
    //console.log(this.form); //podemos ver la salida de los datos
    const RUTINA: RutinaModel={
      nombre:this.form.value.nombre,
      descripcion:this.form.value.descripcion,
      duracion:this.form.value.duracion,
      serie:this.form.value.serie,
      repeticion:this.form.value.repeticion,
      tiempo:this.form.value.tiempo,

    }

    //console.log(RUTINA);
    this._rutinaService.guardarRutina(RUTINA).then(()=>{
      console.log('Rutina Registrada');
      this.toastr.success('La rutina fue registrada con éxito', 'Rutina registrada')
      this.form.reset();
    }, error => {
      this.toastr.error('Opps!, algo salió mal', 'Inténtalo de nuevo');
      console.log(error);
    })

  }
}
