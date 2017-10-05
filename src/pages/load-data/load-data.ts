import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from './../../providers/user.provider';
import { LoadDataProvider } from './../../providers/load-data.provider';

@Component({
  selector: 'load-data',
  templateUrl: 'load-data.html'
})
export class LoadDataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadDataProvider: LoadDataProvider) {

  }

  loadShops() {
    this.loadDataProvider.createShops();
  }
  loadQueues() {
    this.loadDataProvider.createQueues();
  }
}
