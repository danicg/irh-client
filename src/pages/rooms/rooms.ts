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
      flex-direction: row;
    }
  `]
})
export class RoomsPage implements OnInit {

  selectedShop: string;
  queue$: Observable<ObjQueue[]>
  rooms$: Observable<{}>
  shops$: Observable<{}>
  queueTime$: Observable<{}>
  modifyWears: number = null;
  constructor(public navCtrl: NavController, private queueService: QueueService, private shopService: ShopService, private microservice: MicroserviceService) { }

  ngOnInit() {
    this.shops$ = this.shopService.listenShop();
  }

  updateRoom(roomId, occupied) {
    if(!occupied) {
      this.queueService.popUser(`/${this.selectedShop}`).then( user => {
        if(this.modifyWears) {
          user.wearCount = this.modifyWears;
        }
        this.microservice.occupateRoom(`${this.selectedShop}`, roomId, user).subscribe(
          e => this.modifyWears = null
        );
      });
    } else {
      this.microservice.desoccupateRoom(`${this.selectedShop}`,roomId).subscribe();
    }

  }

  selectShop(shop) {
    this.selectedShop = shop;
    this.queue$ = this.queueService.listenQueue(`/${this.selectedShop}`);
    this.rooms$ = this.shopService.listenShop(`/${this.selectedShop}/rooms`);
    this.queueTime$ = this.queueService.getTimeEstimatedQueue(`/${this.selectedShop}`);
  }

  updateQueue($event) {
    this.modifyWears = $event;
  }

}
