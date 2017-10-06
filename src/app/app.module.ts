import { MicroserviceService } from './../shared/microservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowRoomComponent, ShowRoomItemComponent } from './../components/show-room.component';
import { SelectWearsComponent } from './../components/select-wears.component';
import { WallNextPerson } from './../components/wall-next-person';
import { ShowQueueComponent, ShowQueueItemComponent } from './../components/show-queue.component';
import { ShopItem } from './../components/shop-item.component';

import { FormatTimePipe } from '../shared/pipes';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { UsersListPage } from './../pages/usersList/usersList';
import { LoadDataPage } from './../pages/load-data/load-data';
import { UserProfile } from './../pages/user-profile/user-profile';
import { AuthProvider } from './../providers/auth.provider';
import { UserProvider } from './../providers/user.provider';
import { LoadDataProvider } from './../providers/load-data.provider';
import { GetTicketAuthPage } from './../pages/get-ticket-auth/get-ticket-auth';
import { RoomsPage } from './../pages/rooms/rooms';

import { QueueService } from '../shared/queue.service';
import { ShopService } from '../shared/shops.service';
import { UserService } from '../shared/user.service';
import { ReserveService } from '../shared/reserve.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UsersListPage,
    LoadDataPage,
    GetTicketAuthPage,
    SelectWearsComponent,
    ShowQueueComponent,    
    ShowRoomComponent,
    ShowRoomItemComponent,
    RoomsPage,
    UserProfile,
    ShopItem,
    WallNextPerson,
    FormatTimePipe,
    ShowQueueItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule
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
    RoomsPage,
    UserProfile
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
    UserService,
    MicroserviceService,
    ReserveService
  ]
})
export class AppModule {}
