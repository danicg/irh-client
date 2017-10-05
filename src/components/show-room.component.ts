import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-room-item',
  template: `
  <ion-card>
    <ion-card-header>
      <div class="title"> Probador {{roomId}}</div> <div class="semaphore" [class.occupied]="occupied"></div>
    </ion-card-header>
    <hr *ngIf="occupied">
    <ion-card-content *ngIf="occupied">
      Ticket: {{ timestamp }}
      <br>
      WearCount: {{ wearCount }}
    </ion-card-content>
  </ion-card>
  <!--div class="show-room-item" [class.occupied]="occupied">
    Probador: {{roomId}}
    <div *ngIf="occupied">
      Ticket: {{ timestamp }}
      WearCount: {{ wearCount }}
    </div>

  </div-->
  `,
  styles:[`
    .show-room-item{
      margin: 15px;
    }
    .semaphore {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: green;
      position: relative;
      float:right;
    }
    .title{
      position: relative;
      margin-right: 10px;
      float:left;
    }
    .occupied {
      background-color: red;
    }
  `]
})
export class ShowRoomItemComponent {
  @Input('roomId') roomId: string;
  @Input('occupied') occupied = false;
  @Input('userId') ticket : number;
  @Input('name') userId : string;
  @Input('timestamp') timestamp : number;
  @Input('wearCount') wearCount : number;
  @Input('wearAvg') wearAvg : number;
}

@Component({
  selector: 'show-room',
  template: `
  <div class="show-room">
    <ng-content></ng-content>
  </div>
  `,
  styles:[`
    .show-room{
      display: flex;
    }
`]
})
export class ShowRoomComponent {

}
