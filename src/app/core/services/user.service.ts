import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
  }


  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(u) {
        if (u) {
          resolve(u);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  updateCurrentUser(value) {
    return new Promise((resolve, reject) => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then((res: any) => {
        resolve(res);
      }, err => reject(err));
    });
  }
}
