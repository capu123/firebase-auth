import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAlzAFU2QQEOacaI3M-SejkPDICtoOQjSA",
    authDomain: "myapp-ba3b4.firebaseapp.com",
    databaseURL: "https://myapp-ba3b4.firebaseio.com",
    storageBucket: "myapp-ba3b4.appspot.com",
    messagingSenderId: "343215957111"
  };
  

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
