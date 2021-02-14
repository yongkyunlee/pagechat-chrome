import { Component, OnInit, NgZone } from '@angular/core';

import { AuthService } from './services/auth.service';
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    public url: string;
    public arr = [];
    public authLoaded = false;
    message: string = "";
    element: any;

    constructor (
        private zone: NgZone,
        public authService: AuthService,
        public _chatService: ChatService
    ) { }

    ngOnInit() {
        this.url = 'aa';
        this.authService.afAuth.user.subscribe(data => {
            this.authLoaded = true;
            // this._chatService.inchat = false;
        });
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

    updateRoom(uid: string) {
        // roomId is friend's uid and this user's uid, appended
        // in alphabetical order. just a temporary way to hash
        this._chatService.frienduid = uid;
        if (uid < this._chatService.user.uid) {
            this._chatService.roomId = uid + this._chatService.user.uid;
        }
        else {
            this._chatService.roomId = this._chatService.user.uid + uid;
        }
        this._chatService.inchat=true;
    }
}
