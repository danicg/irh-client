import { Component, Input } from '@angular/core';
import { Shop } from '../models/shop';

@Component({
  selector: 'shop-item',
  template: `
    <h4>{{shop.name}}</h4>
    Tiempo de espera aprox en probadores: {{shop.estimatedWaitTime | formatTime}}
  `
})

export class ShopItem {
  @Input() shop: Shop;  
  constructor() {}
}