import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-queue-item',
  template: `
  <div class="show-queue-item">
    {{ticket}}
  </div>
  `
})
export class ShowQueueItemComponent {
  @Input('ticket') ticket: string;
  @Input('userId') userId: string;
}

@Component({
  selector: 'show-queue',
  template: `<ng-content></ng-content>
  `
})
export class ShowQueueComponent {

}
