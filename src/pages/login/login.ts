import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthProviders, AuthMethods, AngularFire} from 'angularfire2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: any;
  password: any;
  loggedUser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.angfire.auth.login({
      email: this.email,
      password: this.password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((response)=> {
      console.log('Login success' + JSON.stringify(response));
      let currentuser = {
        email: response.auth.email,
        picture: response.auth.photoURL
      };
      window.localStorage.setItem('currentuser', JSON.stringify(response));
          this.loggedUser = currentuser;
          console.log('OK:' + this.loggedUser);
      this.navCtrl.pop();
    }).catch((error)=> {
      console.log(error);
    })
  }

  twitterlogin() {
    this.angfire.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    }).then((response) => {
      console.log('Login success with twitter' + JSON.stringify(response));
      let currentuser = {
          name: response.auth.displayName,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
              this.loggedUser = currentuser;
              console.log('name:' + this.loggedUser.name);
              console.log('picture:' + this.loggedUser.picture);
        this.navCtrl.pop();
      }).catch((error) => {
        console.log(error);
    })
    
  }

   fblogin() {
    this.angfire.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then((response) => {
      console.log('Login success with facebook' + JSON.stringify(response));
      let currentuser = {
          name: response.auth.displayName,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        this.navCtrl.pop();
      }).catch((error) => {
        console.log(error);
    })
    
  }

}
