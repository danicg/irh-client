import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import { ObjQueue } from '../../models/queue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  queue$: Observable<ObjQueue[]>;

  constructor(public navCtrl: NavController, private store: Store<fromRoot.State>) {
    this.queue$ = this.store.select(fromRoot.getQueue);
    this.queue$.subscribe(e => console.log(e));
  }

}
