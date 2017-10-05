import { ObjQueue } from './../../models/object-queue';
import { QueueService } from './../../shared/queue.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database'

import { ShopService } from '../../shared/shops.service';
import { UserService } from '../../shared/user.service';
import { Shop } from '../../models/shop';

@Component({
  selector: 'get-ticket-auth',
  templateUrl: 'get-ticket-auth.html',
  styles: [`
    .box-rsvp {
      margin: 30px;
    }
    .number {
      font-size: 35px;
    }
    .shop {
      font-size: 35px;      
    }
  `]
})
export class GetTicketAuthPage {
  shops$: Observable<Shop[]>;
  selectedShop: Shop;
  selectedWear: number;
  reserved: boolean = false;
  objQueue: ObjQueue;

  constructor(
    public navCtrl: NavController,
    private shopService: ShopService,
    private afDataBase: AngularFireDatabase,
    private userService: UserService,
    private queueService: QueueService) {

    this.shops$ = this.shopService.listenShop();
  }

  selectShop(shop) {
    this.selectedShop = shop;
  }

  reserve() {
    this.objQueue = {
      userId: this.userService.user.uid,
      name: this.userService.user.name,
      timestamp: new Date().getTime(),
      wearCount: this.selectedWear,
      wearAvg: !this.userService.user.wearAvg ? this.selectedShop.wearAvg : this.userService.user.wearAvg
    };
    this.reserved = true;
    this.afDataBase.database.ref(`/queues`).child(this.selectedShop.id).push(this.objQueue);
  }

}
