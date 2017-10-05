import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from './../../providers/user.provider';

@Component({
  selector: 'users-list',
  templateUrl: 'usersList.html'
})
export class UsersListPage {
  selectedItem: any;
  users$: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
    this.users$ = this.userProvider.getUsers();
  }
}
