import { Injectable } from '@angular/core';
import {auth} from 'firebase/app';

@Injectable()
export class AuthService {

  constructor() { }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      auth().signInWithRedirect(provider)
        .then(res => {
          resolve(res);
        });
    });
  }
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (auth().currentUser) {
        auth().signOut().then(() => console.log('User Sign Out'));
        resolve();
      } else {
        reject();
      }
    });
  }

  get currentUser() {
    return auth().currentUser;
  }

}
