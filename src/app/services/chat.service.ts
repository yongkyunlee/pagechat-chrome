import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from "firebase/app";
import { Message } from "../interfaces/message.interface";
import { map } from "rxjs/operators";

import firebase from 'firebase/app';

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Message>;
  public user: any = {};
  public chats: Message[] = [];

  constructor(
    private _router: Router,
    private _angularFirestore: AngularFirestore,
    public _angularFireAuth: AngularFireAuth
  ) {
    this._angularFireAuth.authState.subscribe(user => {
      if (!user) {
        this.user = {};
        this._router.navigate(["/"]);
        return;
      }
      this._router.navigate(["/chat"]);
      this.user.name = user.displayName;
      this.user.uid = user.uid;
      this.user.photo = user.photoURL;
    });
  }

  login(provider: string) {
    // switch (provider) {
    //   case "google":
        this._angularFireAuth.signInWithPopup(
          new firebase.auth.GoogleAuthProvider()
        );
    //     break;
    //   case "twitter":
    //     this._angularFireAuth.auth.signInWithPopup(
    //       new firebase.auth.TwitterAuthProvider()
    //     );
    //     break;
    //   default:
    //     this._angularFireAuth.auth.signInWithPopup(
    //       new firebase.auth.FacebookAuthProvider()
    //     );
    //     break;
    // }
  }

  logout() {
    this._angularFireAuth.signOut();
  }

  loadMessage() {
    this.itemsCollection = this._angularFirestore.collection<Message>(
      "chats",
      ref => ref.orderBy("date", "desc").limit(5)
    );
    return this.itemsCollection.valueChanges().pipe(
      map((messages: Message[]) => {
        this.chats = [];
        for (let message of messages) {
          this.chats.unshift(message);
        }
        return this.chats;
      })
    );
  }

  addMessage(text: string) {
    let message: Message = {
      name: this.user.name,
      message: text,
      date: new Date().getTime(),
      uid: this.user.uid
    };
    return this.itemsCollection.add(message);
  }
}
