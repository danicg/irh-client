import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import 'rxjs/add/operator/filter';

import { Reserve } from '../models/reserve';
import { ObjQueue } from '../models/object-queue';

import { QueueService } from '../shared/queue.service';
import { UserService } from '../shared/user.service';

@Injectable()
export class ReserveService {
  reserved: boolean = false;
  reserve: Reserve;

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

  listenShopChanges(path) {
    this.queueService.listenQueue(`/${path}`)
      .filter((e: ObjQueue[]) => {       
        return !!!e.find(obj => obj.userId === this.userService.user.uid);
      })
      .subscribe(e => {
        this.reserved = false;
      });
  }

  getReserve() {
    return this.reserve;
  }
}

