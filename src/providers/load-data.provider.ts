import { queues } from './../shared/load-queue';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database'
import { shops } from './../shared/load-shops';

@Injectable()
export class LoadDataProvider {

    constructor(private afDataBase: AngularFireDatabase) {}

    createShops() {

      Object.keys(shops).forEach(key => {
        this.afDataBase.database.ref(`/shops`).child(key).set(shops[key]);
      });
    }
    createQueues() {

      Object.keys(queues).forEach(keyShop => {
        queues[keyShop].forEach(data => {
          this.afDataBase.database.ref(`/queues`).child(keyShop).push(data);
        });

      });
    }
}
