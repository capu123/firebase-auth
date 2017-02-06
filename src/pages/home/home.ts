import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loggedUser: any;
  constructor(public navCtrl: NavController) {
    window.localStorage.removeItem('currentuser');
    if (!this.isLoggedin()) {
      console.log('You are not logged in');
      this.navCtrl.push(LoginPage);
    }
}

  isLoggedin() {
    if (window.localStorage.getItem('currentuser')) {
      return true;
    }
  }

  check(){
    var tempo = window.localStorage.getItem('currentuser');
    this.loggedUser = JSON.parse(tempo);
    console.log('CHECKING:'+ JSON.stringify(this.loggedUser));
  }

}
