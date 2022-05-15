import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { RutinaModel } from '../models/RutinaModel';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  private rutina$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  guardarRutina(rutina:RutinaModel): Promise<any>{
    return this.firestore.collection('rutinas').add(rutina);
  }

  obtenerRutinas():Observable<any>{
   return  this.firestore.collection('rutinas', ref=>ref.orderBy('nombre', 'asc')).snapshotChanges();

  }
  eliminarRutina(id:string):Promise<any>{
    return this.firestore.collection('rutinas').doc(id).delete();
  }
  editarRutina(id:string, rutina:any):Promise<any>{
   return this.firestore.collection('rutinas').doc(id).update(rutina);
  }

  addRutinaEdit(rutina:RutinaModel){
    this.rutina$.next(rutina);

  }
  getRutinaEdit(): Observable<RutinaModel>{
    return this.rutina$.asObservable();
  }
}
