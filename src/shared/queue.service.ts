import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { ObjQueue } from '../models/object-queue';

//import * as fromRoot from './reducers';
//import firebase = require('nativescript-plugin-firebase');
//import { MONUMENTS_UPDATE } from './reducers/monuments';

@Injectable()
export class QueueService {

  queuesPath: string = '/queues/granvia';
  
  constructor(private afDataBase: AngularFireDatabase) {}

  getTimeEstimatedAllQueue() {
    return this.afDataBase.list(this.queuesPath).valueChanges()
      .switchMap((e: ObjQueue[]) => {
        return Observable.of(this.formatTime(this.calculateTime(e)));
      });
  }

  listenQueue(): Observable<ObjQueue[]> {
    return this.afDataBase.list(this.queuesPath).valueChanges();
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
    return hrs + ':' + mins + ':' + secs;
  }

}

