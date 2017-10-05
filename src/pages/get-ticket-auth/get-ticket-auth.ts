import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';

@Component({
  selector: 'get-ticket-auth',
  templateUrl: 'get-ticket-auth.html'
})
export class GetTicketAuthPage {

  constructor(public navCtrl: NavController, private store: Store<fromRoot.State>) { }

}
