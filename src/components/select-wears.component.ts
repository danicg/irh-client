import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'select-wears',
  template: `
    <ion-label>Selecciona el número de prendas</ion-label>
    <div class="select-wears">
      <button ion-button (click)="numWear.emit(1) && selected = 1">1</button>
      <button ion-button (click)="numWear.emit(2) && selected = 2">2</button>
      <button ion-button (click)="numWear.emit(3) && selected = 3">3</button>
      <button ion-button (click)="numWear.emit(4) && selected = 4">4</button>
      <button ion-button (click)="numWear.emit(5) && selected = 5">5</button>
    </div>
  `,
  styles:[`
    .select-wears{
      display: flex;
    }
  `]
})
export class SelectWearsComponent {
  @Output() numWear = new EventEmitter();
  selected: number;
}
