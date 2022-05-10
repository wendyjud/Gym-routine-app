import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gym-routine';
  ejercicio=null ;

  exercise={
    id_ej:null,
    categoria: null,
    nom_ejercicio:null,
    info:null,
    instrucciones:null,
    video:null,
    anotacion:null,
    rep:null,
    peso:null
  };

  constructor(){

  }
  
}
