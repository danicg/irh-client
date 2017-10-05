import { Http } from '@angular/http';
import { ShowRoomComponent, ShowRoomItemComponent } from './../components/show-room.component';
import { SelectWearsComponent } from './../components/select-wears.component';
import { SelectShopComponent } from './../components/select-shop.component';
import { GetTicketComponent } from './../components/get-ticket.component';
import { ShowQueueComponent, ShowQueueItemComponent } from './../components/show-queue.component';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { reducers, metaReducers } from '../reducers';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { UsersListPage } from './../pages/usersList/usersList';
import { LoadDataPage } from './../pages/load-data/load-data';
import { AuthProvider } from './../providers/auth.provider';
import { UserProvider } from './../providers/user.provider';
import { LoadDataProvider } from './../providers/load-data.provider';
import { GetTicketAuthPage } from './../pages/get-ticket-auth/get-ticket-auth';
import { RoomsPage } from './../pages/rooms/rooms';

import { QueueService } from '../shared/queue.service';
import { ShopService } from '../shared/shops.service';
import { UserService } from '../shared/user.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UsersListPage,
    LoadDataPage,
    GetTicketAuthPage,
    SelectShopComponent,
    SelectWearsComponent,
    GetTicketComponent,
    ShowQueueComponent,
    ShowQueueItemComponent,
    ShowRoomComponent,
    ShowRoomItemComponent,
    RoomsPage
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UsersListPage,
    LoadDataPage,
    GetTicketAuthPage,
    RoomsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider,
    LoadDataProvider,
    QueueService,
    ShopService,
    Http,
    UserService
  ]
})
export class AppModule {}
