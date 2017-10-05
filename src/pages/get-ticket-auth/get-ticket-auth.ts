
import { ObjQueue } from './../../models/object-queue';
import { QueueService } from './../../shared/queue.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';

@Component({
  selector: 'get-ticket-auth',
  templateUrl: 'get-ticket-auth.html'
})
export class GetTicketAuthPage implements OnInit {

  queue$: Observable<ObjQueue[]>
  constructor(public navCtrl: NavController, private store: Store<fromRoot.State>, private queueService: QueueService) { }

  ngOnInit() {
    this.queue$ = this.queueService.listenQueue();
  }

}
