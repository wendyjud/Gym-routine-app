import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutinaModel } from 'src/app/models/RutinaModel';

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.component.html',
  styleUrls: ['./crear-rutina.component.css']
})
export class CrearRutinaComponent implements OnInit {
form: FormGroup;

  constructor(private fb:FormBuilder) {
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
  }
  crearRutina(){
    //console.log(this.form); //podemos ver la salida de los datos
    const RUTINA: RutinaModel={
      nombre:this.form.value.nombre,
      descripcion:this.form.value.descripcion,
      duracion:this.form.value.duracion,
      serie:this.form.value.serie,
      repeticion:this.form.value.repeticion,
      tiempo:this.form.value.tiempo,

    }

    console.log(RUTINA);
  }

}
