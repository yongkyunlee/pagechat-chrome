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
                .add({
                    'uid': friendUid,
                    'timestamp': firebase.firestore.FieldValue.serverTimestamp()
                });
        this.afs.collection(FRIENDS_COLLECTION).doc(friendUid).collection(FRIENDS_COLLECTION)
                .add({
                    'uid': myUid,
                    'timestamp': firebase.firestore.FieldValue.serverTimestamp()
                });
    }

    getFirends(uid) {
        return this.afs.collection(FRIENDS_COLLECTION).doc(uid).collection(FRIENDS_COLLECTION)
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            return {
                                uid: a.payload.doc.data().uid
                            };
                        });
                    })
                )
    }

    getOnlineFriends() {
        
    }

    getOnlineUsers() {

    }





    // getTabId(name){
    //     var tabId = name.toLowerCase();
    //     tabId = tabId.replace(" ","_");
    //     return tabId;
    // }

    // getTab(tabUrl){
    //     //return this.db.collection('tabs').doc(tabId).snapshotChanges();
    //     return this.db.collection('tabs', ref => ref.where('url', '==', tabUrl)).snapshotChanges();
    // }

    // createTab(tab: MyTab){
    //     return this.db.collection('tabs').add({
    //     title: tab.title,
    //     url: tab.url,
    //     favIconUrl: tab.favIconUrl,
    //     windowId: tab.windowId,
    //     tabIndex: tab.tabIndex,
    //     dateAdded: Date()
    //     });
    // }

    // getTabs(){
    //     return this.db.collection('tabs').snapshotChanges();
    // }

    // updateTab(tab: MyTab){
    //     tab.url = tab.url.toLowerCase();
    //     return this.db.collection('tabs').doc(tab.id).set(tab);
    // }

    // deleteTab(tab: MyTab){
    //     return this.db.collection('tabs').doc(tab.id).delete();
    // }

    // searchTabs(searchValue){
    //     return this.db.collection('tabs',ref => ref.where('name', '>=', searchValue)
    //     .where('name', '<=', searchValue + '\uf8ff'))
    //     .snapshotChanges()
    // }

    // searchTabsByName(value){
    //     return this.db.collection('tabs',ref => ref.orderBy('name').startAt(value)).snapshotChanges();
    // }
}