import { Component } from '@angular/core';

@Component({
  selector: 'select-wears',
  template: `
    <ion-label>Selecciona el número de prendas</ion-label>
    <div class="select-wears">
      <button ion-button>1</button>
      <button ion-button>2</button>
      <button ion-button>3</button>
      <button ion-button>4</button>
      <button ion-button>5</button>
    </div>
  `,
  styles:[`
    .select-wears{
      display: flex;
    }
  `]
})
export class SelectWearsComponent {

  shop: string;
}
