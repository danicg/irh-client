import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/of';

import { ObjQueue } from '../models/object-queue';

//import * as fromRoot from './reducers';
//import firebase = require('nativescript-plugin-firebase');
//import { MONUMENTS_UPDATE } from './reducers/monuments';

@Injectable()
export class QueueService {

  queuesPath: string = '/queues';

  constructor(private afDataBase: AngularFireDatabase) {}

  getTimeEstimatedQueue(path) {
    return this.afDataBase.list(this.queuesPath + path).valueChanges()
      .switchMap((e: ObjQueue[]) => {
        return Observable.of(this.formatTime(this.calculateTime(e)));
      });
  }

  listenQueue(path): Observable<ObjQueue[]> {
    return this.afDataBase.list(this.queuesPath + path).valueChanges();
  }

  getNextUser(path): any {
    return this.afDataBase.list(this.queuesPath + path).valueChanges()
      .switchMap((e: ObjQueue[]) => Observable.of(e[0]));
  }

  calculateTime(queue: ObjQueue[]) {
    return queue
      .reduce((acum, e) => e.wearAvg * e.wearCount + acum, 0);
  }

  formatTime(s: number) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;
    return this.addZero(hrs) + ':' + this.addZero(mins) + ':' + this.addZero(secs);
  }

  addZero(unitTime) {
    const unitTimeStr = unitTime.toString();
    if(unitTimeStr.length === 1) {
      return '0' + unitTimeStr;
    }
    return unitTimeStr;
  }

  popUser(path: string): Promise<any> {

    return this.afDataBase.database.ref(this.queuesPath + path).once('value').then(value => {
      const object = value.val();
      const key = Object.keys(object)[0];
      const user = object[key];
      this.removeItemFromList(path,key);
      return user;
    })
  }

  removeItemFromList(path: string, key: string) {
    this.afDataBase.list(this.queuesPath + path).remove(key);
  }

}

