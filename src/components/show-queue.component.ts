import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-queue-item',
  template: `
  <div class="show-queue-item">
    {{ticket}}
  </div>
  `,
  styles:[`
  .show-queue-item {
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: solid 1px #eee;
  }`]

})
export class ShowQueueItemComponent {
  @Input('ticket') ticket: string;
  @Input('userId') userId: string;
}

@Component({
  selector: 'show-queue',
  template: `
    <ion-card *ngIf="length || length === 0">
      <ion-card-header *ngIf="length<=0">Cola vacia</ion-card-header>
      <ion-card-header *ngIf="length>0">{{length}} restantes<br>Tiempo estimado: {{time}}</ion-card-header>
      <hr *ngIf="length>0">
      <ion-card-content *ngIf="length>0">
          <ng-content></ng-content>
      </ion-card-content>
    </ion-card>

  `,
  styles:[`
  `]
})
export class ShowQueueComponent {
  @Input('length') length = null;
  @Input('time') time =  null;
}
