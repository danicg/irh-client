import { MicroserviceService } from './../../shared/microservice.service';
import { ShopService } from './../../shared/shops.service';

import { ObjQueue } from './../../models/object-queue';
import { QueueService } from './../../shared/queue.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/timer';


@Component({
  selector: 'rooms',
  templateUrl: 'rooms.html',
  styles: [`
    .container-bussines{
      display: flex;
      flex-direction: row;
    }
    .shop-container{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
    shop-item{
      cursor: pointer;
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
  timer$: Observable<number>;
  timer: any;
  start: number;
  constructor(public navCtrl: NavController, private queueService: QueueService, private shopService: ShopService, private microservice: MicroserviceService) { }

  ngOnInit() {
    this.shops$ = this.shopService.listenShop();
    this.start = 60;
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

  deleteFromQueue(){
    this.queueService.popUser(`/${this.selectedShop}`).then();
  }

  selectShop(shop) {
    this.selectedShop = shop.id;
    this.queue$ = this.queueService.listenQueue(`/${this.selectedShop}`);
    this.rooms$ = this.shopService.listenShop(`/${this.selectedShop}/rooms`);
    this.queueTime$ = this.queueService.getTimeEstimatedQueue(`/${this.selectedShop}`);
    console.log('Obvserva a tu madre', this.rooms$);
    this.rooms$
      .subscribe( (rooms: Array<any>) => rooms.filter( room => !room.occupied ).slice(-1).map(this.setTimer.bind(this)))
  }

  setTimer(){

    this.timer$ = Observable
      .timer(1000,1000)
      .map(i => this.start - i)
      .take(this.start + 1);
  }

  updateQueue($event) {
    this.modifyWears = $event;
  }

}
