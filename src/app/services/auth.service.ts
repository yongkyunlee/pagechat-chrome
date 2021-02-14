import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor (public afAuth: AngularFireAuth) { }

    signInViaEmail(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .catch(err => {
                alert(err.code);
            })
    }

    signUpViaEmail(email, password) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .catch(err => {
                alert(err.code);
            });
    }

    signInWithGoogle() {
        return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    signOut() {
        return this.afAuth.signOut();
    }
}