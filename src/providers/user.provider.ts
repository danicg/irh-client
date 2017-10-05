import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { UserData } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database'
import * as firebase from 'firebase/app';

@Injectable()
export class UserProvider {

    constructor(private afDataBase: AngularFireDatabase) {}

    createUser(user: UserData) {

      return this.afDataBase.database.ref(`/users`).child(user.uid).set({
        uid: user.uid,
        name: user.email.replace(/@.*/, ''),
        email: user.email
      });
    }

    getUsers() {
      return this.afDataBase.list('/users').valueChanges();
    }
}
