import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { Reserve } from '../models/reserve';
import { ObjQueue } from '../models/object-queue';

import { QueueService } from '../shared/queue.service';
import { UserService } from '../shared/user.service';

@Injectable()
export class ReserveService {
  reserved: boolean = false;
  reserve: Reserve;
  path: string;
  
  constructor(
      private afDataBase: AngularFireDatabase,
      private userService: UserService,
      private queueService: QueueService
  ) {}

  setReserve(reserve: Reserve) {
    if(!this.reserved) {
      this.reserved = true;
      this.reserve = reserve;
      this.listenShopChanges(reserve.shop.id);           
    } 
  }

  getReserve$(path) {    
    return this.queueService.listenQueue('/' + path)
      .switchMap((obj: ObjQueue[], i) => {
        const auxReserve = obj.find(e => e.userId === this.userService.user.uid);        
        return Observable.of(auxReserve);
      });
  }

  setTurn(turn) {
    this.reserve.number = turn;
  }

  listenShopChanges(path) {
    this.path = path;
    this.queueService.listenQueue(`/${path}`)
      .filter((e: ObjQueue[]) => {
        const auxReserve = e.find(obj => obj.userId === this.userService.user.uid);
        this.setTurn(auxReserve.turn);
        return !!!auxReserve;
      })
      .subscribe(e => {
        this.reserved = false;
      });
  }

  getReserve() {
    return this.reserve;
  }
}

