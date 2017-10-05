import { ObjQueue } from './../../models/object-queue';
import { QueueService } from './../../shared/queue.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database'


import { ShopService } from '../../shared/shops.service';
import { UserService } from '../../shared/user.service';
import { Shop } from '../../models/shop';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'get-ticket-auth',
  templateUrl: 'get-ticket-auth.html',
  styles: [`
    .box-rsvp {
      margin: 30px;
    }
  `]
})
export class GetTicketAuthPage implements OnInit {
  shops$: Observable<Shop[]>;
  selectedShop: Shop;
  selectedWear: number;
  reserved: boolean = false;

  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>,
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
    const objQueue: ObjQueue = {
      userId: this.userService.user.uid,
      name: this.userService.user.name,
      timestamp: new Date().getTime(),
      wearCount: this.selectedWear,
      wearAvg: !this.userService.user.wearAvg ? this.selectedShop.wearAvg : this.userService.user.wearAvg
    }
    this.afDataBase.database.ref(`/queues`).child(this.selectedShop.id).push(objQueue);
    this.reserved = true;
  }

}
