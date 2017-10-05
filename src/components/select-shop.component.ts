import { Component } from '@angular/core';

@Component({
  selector: 'select-shop',
  template: `<ion-item>
              <ion-label>Selecciona tienda</ion-label>
              <ion-select [(ngModel)]="shop">
                <ion-option value="granvia">Zara Gran Vía</ion-option>
                <ion-option value="sol">Zara Sol</ion-option>
                <ion-option value="preciados">Zara Preciados</ion-option>
              </ion-select>
            </ion-item>
  `
})
export class SelectShopComponent {

  shop: string;
}
