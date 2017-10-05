import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import { Category } from '../../models/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories$: Observable<Category[]>;

  constructor(public navCtrl: NavController, private store: Store<fromRoot.State>) {
    this.categories$ = this.store.select(fromRoot.getCategories);
    this.categories$.subscribe(e => console.log(e));
  }

}
