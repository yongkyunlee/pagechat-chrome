import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
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
  // made from uid, frienduid appended in alpha order
  public roomId: string;
  // if the chat window is (should be) open
  public inchat: boolean;
  // uid of the current friend
  public frienduid: string;

  constructor(
    private _angularFirestore: AngularFirestore,
    public _angularFireAuth: AngularFireAuth
  ) {
    this._angularFireAuth.authState.subscribe(user => {
      if (!user) {
        this.user = {};
        // if user logged out:        
        // this._router.navigate(["/"]);
        return;
      }
      // this._router.navigate(["/"]);
      this.user.name = user.displayName;
      this.user.uid = user.uid;
      this.user.photo = user.photoURL;
      // TODO ask db for the 
      this.roomId = "lobby";
      this.inchat = false;
    });
  }

  
  // below login/logout not used, left to keep login components alive in case
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
      ref => ref.where("roomId", "==", this.roomId).orderBy("date", "desc").limit(10)
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
      uid: this.user.uid,
      roomId: this.roomId
    };
    return this.itemsCollection.add(message);
  }
}