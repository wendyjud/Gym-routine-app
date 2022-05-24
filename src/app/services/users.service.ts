import { Injectable } from '@angular/core';
import {
  collection,
  doc,
  docData,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { User } from 'firebase/auth';
import { filter, from, map, Observable, of, switchMap } from 'rxjs';
import { ProfileUser } from '../models/User';
import { UserService } from './user.service'; 

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore, private userService: UserService) { }
  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.userService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }

        const ref = doc(this.firestore, 'users', user?.uid);
        return docData(ref) as Observable<ProfileUser>;
      })
    );
  }

  addUser(user: ProfileUser): Observable<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return from(setDoc(ref, user));
  }

  updateUser(user: ProfileUser): Observable<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return from(updateDoc(ref, { ...user }));
  }

}
