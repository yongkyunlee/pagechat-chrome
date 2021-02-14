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
    public friends = [];

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

                this.firebaseService.getFirends(data.uid).subscribe(data => {
                    this.friends = data;
                })
            });
        }) 
    }

    addFriend() {
        if (this.uid !== null || this.uid !== undefined) {
            alert(this.friendUid);
            this.firebaseService.addFriend(this.uid, this.friendUid);
        }
    }
}
