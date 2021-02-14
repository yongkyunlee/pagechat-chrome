import { Component, OnInit, NgZone } from '@angular/core';

import { AuthService } from './services/auth.service';
import { FirebaseService } from './services/firebase.service';
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    public url: string = '';
    public authLoaded = false;
    private uid: string;
    public friendUid = '';
    public email = '';
    public password = '';
    public friends = [];
    public onlineUsers = [];
    message: string = "";
    element: any;

    constructor (
        private zone: NgZone,
        public authService: AuthService,
        public firebaseService: FirebaseService,
        public _chatService: ChatService
    ) { }

    ngOnInit() {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            this.zone.run(() => {
                this.url = tabs[0].url;
            });

            this.authService.afAuth.user.subscribe(data => {
                this.authLoaded = true;
                this.uid = data.uid;

                this.firebaseService.getFriends(data.uid).subscribe(data => {
                    this.friends = data;
                })

                this.firebaseService.getOnlineUsers(this.uid, this.friends).subscribe(data => {
                    this.onlineUsers = data;
                })
            });
        }) 
    }

    signInWithEmail() {
        this.authService.signInViaEmail(this.email, this.password);
    }

    signUpWithEmail() {
        this.authService.signUpViaEmail(this.email, this.password);
    }

    addFriend() {
        if (this.uid !== null || this.uid !== undefined) {
            alert(this.friendUid);
            this.firebaseService.addFriend(this.uid, this.friendUid);
        }
    }        

    sendMessage() {
        if (this.message.length === 0) {
            return;
        }
        this._chatService
            .addMessage(this.message)
            .then(() => (this.message = ""))
            .catch(error => console.log("error", error));
    }
    

    closeChat() {
        this._chatService.inchat = false;
    }

    openChat() {
        this._chatService.inchat = true;
    }

    updateRoom(uid_in: string) {
        // roomId is friend's uid and this user's uid, appended
        // in alphabetical order. just a temporary way to hash
        this._chatService.frienduid = uid_in;
        if (uid_in < this._chatService.user.uid) {
            this._chatService.roomId = uid_in + this._chatService.user.uid;
        }
        else {
            this._chatService.roomId = this._chatService.user.uid + uid_in;
        }
        this._chatService.inchat=true;
    }
}
