import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, signInWithPopup, authState } from '@angular/fire/auth';
import { updateProfile } from 'firebase/auth';
import { from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser$=authState(this.auth);
  
  constructor(private auth:Auth) { }

  /*register({email,password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }*/
  login(email:string, password:string):Observable<any>{
    return from (signInWithEmailAndPassword(this.auth, email, password));
  }
 /* loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }*/
signUp(name: string, email: string, password:string){
  return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
    switchMap(({user})=>updateProfile(user,{displayName:name}))
  );
}

  logout(){
    return from(this.auth.signOut());
  }
}
