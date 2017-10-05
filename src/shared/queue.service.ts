import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireDatabase } from 'angularfire2/database'

//import * as fromRoot from './reducers';
//import firebase = require('nativescript-plugin-firebase');
//import { MONUMENTS_UPDATE } from './reducers/monuments';

@Injectable()
export class QueueService {

  queuesPath: string = '/queues';
  
  constructor(private afDataBase: AngularFireDatabase) {}

  //constructor(private store: Store<fromRoot.State>, private ngZone: NgZone) { }

  // syncMonuments() {
  //   firebase.addValueEventListener(({ value: dataMonuments }) => {
  //     if (dataMonuments) {
  //       const monuments = Object.keys(dataMonuments).map((idMonument) => {
  //         return {
  //           ...dataMonuments[idMonument],
  //           id: idMonument
  //         }
  //       });
  //       this.ngZone.run(() => {
  //         if (monuments && monuments.length > 0) {
  //           this.store.dispatch({ type: MONUMENTS_UPDATE, payload: monuments });
  //         }
  //       });
  //     }
  //   }, this.queue);

  listenQueue() {
    return this.afDataBase.list(this.queuesPath).valueChanges();
  }

    
}

