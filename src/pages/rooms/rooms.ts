import { ShopService } from './../../shared/shops.service';

import { ObjQueue } from './../../models/object-queue';
import { QueueService } from './../../shared/queue.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';

@Component({
  selector: 'rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage implements OnInit {

  queue$: Observable<ObjQueue[]>
  rooms$: Observable<{}>
  constructor(public navCtrl: NavController, private store: Store<fromRoot.State>, private queueService: QueueService, private shopService: ShopService) { }

  ngOnInit() {
    this.rooms$ = this.shopService.listenShop('granvia/rooms');
  }

}
