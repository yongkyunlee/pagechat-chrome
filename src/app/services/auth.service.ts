import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor (public afAuth: AngularFireAuth) { }

    signInWithGoogle() {
        return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    signOut() {
        return this.afAuth.signOut();
    }
}