import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { EjercicioModel } from '../models/EjercicioModel';


@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {
  private ejercicio$ = new Subject<any>();
  constructor(private firestore: AngularFirestore) { }

  obtenerPectorales():Observable<any>{
    return  this.firestore.collection('pectorales', ref=>ref.orderBy('ejercicio', 'asc')).snapshotChanges();
 
   }
}
