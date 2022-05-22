import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { RetoModel } from '../models/RetoModel';



@Injectable({
  providedIn: 'root'
})
export class RetoService {
  private reto$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  guardarRutina(rutina:RetoModel): Promise<any>{
    return this.firestore.collection('retos').add(rutina);
  }

  obtenerRetos():Observable<any>{
    return  this.firestore.collection('retos', ref=>ref.orderBy('nombre', 'asc')).snapshotChanges();
 
   }
  
}
