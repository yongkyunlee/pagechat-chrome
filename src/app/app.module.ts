import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [ FirebaseService, AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
