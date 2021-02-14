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
    public title: string = '';
    public urlObject: URL;
    public authLoaded = false;
    private uid: string;
    public friendUid = '';
    public email = '';
    public password = '';
    public friends = [];
    public onlineUsers = [];
    message: string = "";
    element: any;
    public unreads = [];

    constructor (
        private zone: NgZone,
        public authService: AuthService,
        public firebaseService: FirebaseService,
        public chatService: ChatService
    ) { }

    ngOnInit() {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            this.zone.run(() => {
                this.url = tabs[0].url;
                this.title = tabs[0].title;
                this.urlObject = new URL(this.url);
            });

            this.authService.afAuth.user.subscribe(data => {
                this.authLoaded = true;
                this.uid = data.uid;

                this.firebaseService.getFriends(data.uid).subscribe(data => {
                    this.friends = data;
                    this.firebaseService.getOnlineUsers(this.uid, this.friends.map(x => x.uid)).subscribe(data => {
                        this.onlineUsers = data.filter(item => !!item);
                    })
                });
            });

            // TODO for getting unread messages
            // this.chatService.getUnreads().subscribe(data => {
            //     this.unreads = data;
            //     console.error('change');
            //     console.error(data);

            // })

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
            this.firebaseService.addFriend(this.uid, this.friendUid);
            this.friendUid = '';
        }
    }        

    sendMessage() {
        if (this.message.length === 0) {
            return;
        }
        this.chatService
            .addMessage(this.message)
            .then(() => (this.message = ""))
            .catch(error => console.log("error", error));
    }
    

    closeChat() {
        this.chatService.inchat = false;        
    }

    openChat() {
        this.chatService.inchat = true;
    }

    updateRoom(uid_in: string) {
        // roomId is friend's uid and this user's uid, appended
        // in alphabetical order. just a temporary way to hash
        this.chatService.friend_uid = uid_in;
        if (uid_in < this.chatService.user.uid) {
            this.chatService.roomId = uid_in + this.chatService.user.uid;
        }
        else {
            this.chatService.roomId = this.chatService.user.uid + uid_in;
        }
        this.chatService.inchat=true;
    }
}
