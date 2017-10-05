
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserLogin} from '../../models/user.model';
import { AuthProvider } from "../../providers/auth.provider";
import { UserProvider } from "../../providers/user.provider";
import { HomePage } from './../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    user = {
        email : '',
        password: ''
    } as UserLogin;

    error;

    constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private userProvider: UserProvider) {}

    login(user: UserLogin) {

      this.authProvider.login(user).then(result => {
        if(result)
          this.navCtrl.setRoot(HomePage);
      }).catch (e =>  {
        this.error = e;
      })
    }

    register(user: UserLogin) {

      this.authProvider.register(user)
      .then( authData => {
        return this.userProvider.createUser(authData);
      }).then(result =>  {
        this.navCtrl.setRoot(HomePage);
      }).catch (e =>  {
        this.error = e;
      });
    }
}

