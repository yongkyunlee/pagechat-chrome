import { Component, OnInit, NgZone } from '@angular/core';

import { AuthService } from './services/auth.service';
import { FirebaseService } from './services/firebase.service';

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

    constructor (
        private zone: NgZone,
        public authService: AuthService,
        public firebaseService: FirebaseService
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
                    this.onlineUsers = data.filter(item => !!item);
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
            this.firebaseService.addFriend(this.uid, this.friendUid);
            this.friendUid = '';
        }
    }
}
