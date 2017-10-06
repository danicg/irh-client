import { ObjQueue } from './../../models/object-queue';
import { QueueService } from './../../shared/queue.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database'

import { UserProfile } from '../user-profile/user-profile';
import { ShopService } from '../../shared/shops.service';
import { UserService } from '../../shared/user.service';
import { ReserveService } from '../../shared/reserve.service';
import { Shop } from '../../models/shop';
import { Reserve } from '../../models/reserve';

@Component({
  selector: 'get-ticket-auth',
  templateUrl: 'get-ticket-auth.html',
  styles: [`
    .box-rsvp {
      margin: 30px;
      display: flex;
      flex-direction: column;
    }
    .number {
      font-size: 35px;
    }
    .shop {
      font-size: 35px;      
    }
    .bold {
      font-size: 17px;            
      font-weight: 600px;
    }
    .shop-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;      
    }
  `]
})
export class GetTicketAuthPage {
  shops$: Observable<Shop[]>;
  queue$: Observable<Shop[]>;
  reserve$: Observable<ObjQueue>;
  selectedShop: Shop;
  selectedWear: number;
  reserved: boolean = false;
  objQueue: ObjQueue;

  constructor(
    public navCtrl: NavController,
    private shopService: ShopService,
    private afDataBase: AngularFireDatabase,
    private userService: UserService,
    private reserveService: ReserveService,
    private queueService: QueueService) {

    this.shops$ = this.shopService.listenShop();    
  }

  ngOnInit() {
    if(this.reserveService.reserved) {
      this.reserved = true;
      this.selectedShop = this.reserveService.getReserve().shop;
      this.objQueue = {
        timestamp: this.reserveService.getReserve().number
      }
    }
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
    this.reserveService.setReserve({
      shop: this.selectedShop,
      number: this.objQueue.turn
    });
    this.reserve$ = this.reserveService.getReserve$(this.selectedShop.id);
    this.afDataBase.database.ref(`/queues`).child(this.selectedShop.id).push(this.objQueue);
    this.reserved = true;
  }

}
