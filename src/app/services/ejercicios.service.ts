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
  obtenerAbdomen():Observable<any>{
    return  this.firestore.collection('abdomen', ref=>ref.orderBy('ejercicio', 'asc')).snapshotChanges();
   }

  obtenerAntebrazo():Observable<any>{
    return  this.firestore.collection('antebrazo', ref=>ref.orderBy('ejercicio', 'asc')).snapshotChanges();
   }
  obtenerBiceps():Observable<any>{
    return  this.firestore.collection('biceps', ref=>ref.orderBy('ejercicio', 'asc')).snapshotChanges();
   }
  obtenerPierna():Observable<any>{
    return  this.firestore.collection('pierna', ref=>ref.orderBy('ejercicio', 'asc')).snapshotChanges();
   }
  obtenerTriceps():Observable<any>{
    return  this.firestore.collection('triceps', ref=>ref.orderBy('ejercicio', 'asc')).snapshotChanges();
   }
  obtenerEspalda():Observable<any>{
    return  this.firestore.collection('espalda', ref=>ref.orderBy('ejercicio', 'asc')).snapshotChanges();
   }
  obtenerGluteos():Observable<any>{
    return  this.firestore.collection('gluetos', ref=>ref.orderBy('ejercicio', 'asc')).snapshotChanges();
   }

}
