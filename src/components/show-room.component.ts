import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-room-item',
  template: `
  <div class="show-room-item" [class.occupied]="occupied">
    Probador: {{roomId}}
    <div *ngIf="occupied">
      Ticket: {{ timestamp }}
      WearCount: {{ wearCount }}
    </div>

  </div>
  `,
  styles:[`
    .show-room-item{
      padding: 25px;
      margin: 15px;
      border: solid 1px #000;
    }
    .occupied {
      background-color: red;
      color: white;
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
