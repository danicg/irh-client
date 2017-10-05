import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import { ObjQueue } from '../../models/object-queue';
import { QueueService } from '../../shared/queue.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  queue$: Observable<ObjQueue[]>;
  timeEstimated$: Observable<string>;

  constructor(
    public navCtrl: NavController, 
    private store: Store<fromRoot.State>,
    private queueService: QueueService
  ) {
    this.queue$ = this.queueService.listenQueue();
    this.queue$.subscribe(e => console.log(e));
    this.timeEstimated$ = this.queueService.getTimeEstimatedAllQueue();
  }

}
