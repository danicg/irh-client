import { Component, Input, ViewEncapsulation } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'wall-next-person',
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .header {
    
  }
  .content {
    
  }
  .number {
    font-size: 35px;
  }
  .name {
    font-size: 25px;    
  }
  `],
  template: `
  <ion-card>
    <ion-card-header class="header">
      {{shop}}
    </ion-card-header>
    <ion-card-content class="content">
      <span *ngIf="user" class="number">{{user?.turn}}</span> es tu turno en los probadores durante: 02:00min.
      <span *ngIf="!user">Los probadores están vacios.</span>
    </ion-card-content>
  </ion-card>
  `
})
export class WallNextPerson {
  @Input('nameShop') shop: string;
  @Input('user') user: User;
}

