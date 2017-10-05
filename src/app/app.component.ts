import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as queues from '../actions/queues';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthProvider } from './../providers/auth.provider';
import { LoginPage } from './../pages/login/login';
import { UsersListPage } from '../pages/usersList/usersList';
import { LoadDataPage } from '../pages/load-data/load-data';
import { GetTicketAuthPage } from '../pages/get-ticket-auth/get-ticket-auth';
import { RoomsPage } from '../pages/rooms/rooms';

import { QueueService } from '../shared/queue.service';
import { ShopService } from '../shared/shops.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RoomsPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private store: Store<fromRoot.State>,
    private authProvider: AuthProvider,
    private queueService: QueueService,
    private shopService: ShopService
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'UsersList', component: UsersListPage },
      { title: 'LoadData', component: LoadDataPage },
      { title: 'GetTicketAuth', component: GetTicketAuthPage },
      { title: 'Rooms', component: RoomsPage },
    ];

    // Observable queue
    this.queueService.listenQueue()
      .subscribe(e => {
        console.log('queue',e);
      });

    // Observable shops
    this.shopService.listenShops()
      .subscribe(e => {
        console.log('shops',e);
      });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  onLogout() {
    this.authProvider.logout();
    this.nav.setRoot(LoginPage);
  }
}
