import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


import firebase from 'firebase/app';
import { FRIENDS_COLLECTION, STATUS_COLLECTION } from '../constants';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    constructor(
        private afs: AngularFirestore
    ) { }

    addFriend(myUid, friendUid) {
        this.afs.collection(FRIENDS_COLLECTION).doc(myUid).collection(FRIENDS_COLLECTION)
                .doc(friendUid).set({
                    'timestamp': firebase.firestore.FieldValue.serverTimestamp()
                });
        this.afs.collection(FRIENDS_COLLECTION).doc(friendUid).collection(FRIENDS_COLLECTION)
                .doc(myUid).set({
                    'timestamp': firebase.firestore.FieldValue.serverTimestamp()
                });
    }

    getFriends(uid) {
        return this.afs.collection(FRIENDS_COLLECTION).doc(uid).collection(FRIENDS_COLLECTION)
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            return {
                                uid: a.payload.doc.id
                            };
                        });
                    })
                )
    }

    getOnlineUsers(uid: string, friends: String[]) {
        return this.afs.collection(STATUS_COLLECTION,
                ref => ref.where('state', '==', 'online'))
            .snapshotChanges()
            .pipe(
                map(actions => {
                    return actions.map(a => {
                        const status: any = a.payload.doc.data();
                        if (uid !== a.payload.doc.id) {
                            return {
                                uid: a.payload.doc.id,
                                isFriend: friends.includes(a.payload.doc.id),
                                ...status
                            };
                        }
                    });
                })
            )
    }
}