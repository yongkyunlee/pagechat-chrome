import { Component, OnInit, NgZone } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public url: string;
    public arr = [];
    public authLoaded = false;

    constructor (
        private zone: NgZone,
        public authService: AuthService
    ) { }

    ngOnInit() {
        this.url = 'aa';
        
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            this.zone.run(() => {
                this.url = tabs[0].url;
            });
        })

        this.authService.afAuth.user.subscribe(data => {
            this.authLoaded = true;
        })
        
    }
}
