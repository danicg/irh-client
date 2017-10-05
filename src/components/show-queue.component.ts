import { Component } from '@angular/core';

@Component({
  selector: 'show-queue-item',
  template: `
  <div class="show-queue-item">

  </div>
  `
})
export class ShowQueueItemComponent {

}

@Component({
  selector: 'show-queue',
  template: `<ng-content></ng-content>
  `
})
export class ShowQueueComponent {

}
