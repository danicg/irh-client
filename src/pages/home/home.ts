import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import { ObjQueue } from '../../models/object-queue';
import { QueueService } from '../../shared/queue.service';

import { Shop } from '../../models/shop';
import { ShopService } from '../../shared/shops.service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [`
    wall-next-person {
      margin: 30px;
    }
  `]
})
export class HomePage {
  nextUserGranVia$: Observable<ObjQueue[]>
  nextUserSol$: Observable<ObjQueue[]>
  nextUserPreciados$: Observable<ObjQueue[]>

  constructor(
    public navCtrl: NavController, 
    private store: Store<fromRoot.State>,
    private shopService: ShopService,    
    private queueService: QueueService
  ) {
    this.nextUserGranVia$ = this.queueService.getNextUser('/granvia');
    this.nextUserPreciados$= this.queueService.getNextUser('/preciados');
    this.nextUserSol$ = this.queueService.getNextUser('/sol');
  }

}
