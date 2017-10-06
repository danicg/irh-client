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

      //this.timer$.subscribe(e => this.queueService.popUser(`/${this.selectedShop}`).then());
      /*this.shopService.listenShop(`/${this.selectedShop}/rooms`)
      .filter(room => !room.occupied)
      .timer(1000).
      subscribe(e => this.microservice.desoccupateRoom(`${this.selectedShop}`,roomId).subscribe())*/
    }

  }

  selectShop(shop) {
    this.selectedShop = shop;
    this.queue$ = this.queueService.listenQueue(`/${this.selectedShop}`);
    this.rooms$ = this.shopService.listenShop(`/${this.selectedShop}/rooms`);
    this.queueTime$ = this.queueService.getTimeEstimatedQueue(`/${this.selectedShop}`);
    /*const start = 30;
    this.timer$ = this.shopService.listenShop(`/${this.selectedShop}/rooms`)
      .filter(room => room && !room.occupied)
      .switchMap(e => Observable.timer(1000,1000))
      .map(i => start - i)
      .take(start + 1);

    this.timer = this.timer$.subscribe(e => console.log('aaaaa'));*/
  }

  updateQueue($event) {
    this.modifyWears = $event;
  }

}
