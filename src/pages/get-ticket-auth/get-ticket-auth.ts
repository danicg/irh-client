
import { ObjQueue } from './../../models/object-queue';
import { QueueService } from './../../shared/queue.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database'


import { ShopService } from '../../shared/shops.service';
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
  reserved: false;

  constructor(
    public navCtrl: NavController, 
    private store: Store<fromRoot.State>,
    private shopService: ShopService,
    private afDataBase: AngularFireDatabase,
    private queueService: QueueService) { 
    
    this.shops$ = this.shopService.listenShop();
  }

  ngOnInit() {
    
  }

  selectShop(shop) {
    this.selectedShop = shop;
  }
  
  reserve() {
    const objQueue: ObjQueue = {
      userId: "omgjuasqmelol",
      name: "andyrules putes",
      timestamp: new Date().getTime(),
      wearCount: this.selectedWear,
      wearAvg: 150000
    }
    
    this.afDataBase.database.ref(`/queues`).child(this.selectedShop.id).push(objQueue);
  }
  

}
