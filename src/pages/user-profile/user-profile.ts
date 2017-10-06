import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/user.service';
import { ReserveService } from '../../shared/reserve.service';

import { User } from '../../models/user';
import { Reserve } from '../../models/reserve';

@Component({
  selector: 'user-profile',
  styles: [`
    .box-rsvp {
      margin: 30px;
    }
    .number {
      font-size: 35px;
    }
    .shop {
      font-size: 35px;      
    }
  `],
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Tu reserva</ion-title>
      </ion-navbar>
    </ion-header>
    
    <ion-content padding>
     {{ reserve | json }}
      <div *ngIf="reserve">
        <ion-card>
          <ion-card-header class="header">
            Probador reservado
          </ion-card-header>
          <ion-card-content class="content">
            <p>
              Has reservado turno en <span class="shop">{{reserve.shop.name}}</span>
            </p>
            <p>
              Tu número es: <span class="number">{{reserve.number}}</span>
            </p>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  `
})

export class UserProfile {
  user: User;
  reserve: Reserve;

  constructor(
    private userService: UserService,
    private reserveService: ReserveService
  ) {
    this.user = this.userService.user;
  }
  
  ngOnInit() {    
    if(this.reserveService.reserved) {
      this.reserve = this.reserveService.getReserve();
    }
  }
}