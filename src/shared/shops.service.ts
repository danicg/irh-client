import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireDatabase } from 'angularfire2/database'

//import * as fromRoot from './reducers';
//import firebase = require('nativescript-plugin-firebase');
//import { MONUMENTS_UPDATE } from './reducers/monuments';

@Injectable()
export class ShopService {

  shopsPath: string = '/shops';

  constructor(private afDataBase: AngularFireDatabase) { }

  listenShops() {
    return this.afDataBase.list(this.shopsPath).valueChanges();
  }


}

