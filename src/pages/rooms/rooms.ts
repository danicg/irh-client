import { MicroserviceService } from './../../shared/microservice.service';
import { ShopService } from './../../shared/shops.service';

import { ObjQueue } from './../../models/object-queue';
import { QueueService } from './../../shared/queue.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'rooms',
  templateUrl: 'rooms.html',
  styles: [`
    .container-bussines{
      display: flex;
    }
  `]
})
export class RoomsPage implements OnInit {

  selectedShop: string;
  queue$: Observable<ObjQueue[]>
  rooms$: Observable<{}>
  shops$: Observable<{}>
  constructor(public navCtrl: NavController, private queueService: QueueService, private shopService: ShopService, private micoservice: MicroserviceService) { }

  ngOnInit() {
    this.shops$ = this.shopService.listenShop();
  }

  updateRoom(roomId, occupied) {
    if(!occupied) {
      this.queueService.popUser('/granvia').then( user => {
        this.micoservice.occupateRoom('granvia',roomId,user).subscribe(e=>console.log(e));
      });
    } else {
      this.micoservice.desoccupateRoom('granvia',roomId).subscribe(e=>console.log(e));
    }

  }

  selectShop(shop) {
    this.selectedShop = shop;
    this.queue$ = this.queueService.listenQueue(`/${this.selectedShop}`);
    this.rooms$ = this.shopService.listenShop(`/${this.selectedShop}/rooms`);
  }

}
