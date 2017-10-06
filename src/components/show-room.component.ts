import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-room-item',
  template: `
  <ion-card>
    <ion-card-header class="room">
      <div class="title"> Probador {{roomId}}</div> <div class="semaphore" [class.occupied]="occupied"></div>
    </ion-card-header>
    <hr *ngIf="occupied">
    <ion-card-content *ngIf="occupied">
      Turno: {{ turn }}
      <br>
      WearCount: {{ wearCount }}
    </ion-card-content>
  </ion-card>
  `,
  styles:[`
    .semaphore {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: green;
    }
    .title{
      position: relative;
      margin-right: 10px;
    }
    .occupied {
      background-color: red;
    }
    .room{
      cursor: pointer;
    }
    .room{
      display:flex;
    }
  `]
})
export class ShowRoomItemComponent {
  @Input('roomId') roomId: string;
  @Input('occupied') occupied = false;
  @Input('turn') turn : number;
  @Input('wearCount') wearCount : number;
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
