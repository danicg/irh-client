import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';

import { Shop } from '../models/shop';

@Injectable()
export class ShopService {

  shopsPath: string = '/shops';

  constructor(private afDataBase: AngularFireDatabase) {}

  listenShop(path = ''): any {
    if(path) {
      return this.afDataBase.object(this.shopsPath + path).valueChanges();
    }
    return this.afDataBase.list(this.shopsPath + path).valueChanges();
  }

}

