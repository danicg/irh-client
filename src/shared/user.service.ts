import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { User } from '../models/user';

@Injectable()
export class UserService {
  
  user: User;
  user$: Observable<User>;
  userPath: string = '/users'

  constructor(private afDataBase: AngularFireDatabase) {
    
  }

  listenUser(uid) {
    uid = 'oRt6cJAgGDa8VIdo15g1zRLmnxL2';
    return this.afDataBase.object(`${this.userPath}/${uid}`).valueChanges()
      .subscribe(e => console.log(e))
  }
}

