import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Shop } from '../models/shop';

@Component({
  selector: 'shop-item',
  host: {
    'class': 'shop-item'
  },
  styles: [`
    .shop-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      margin: 10px;
      border: 1px solid black;
    }
    .time {
      font-size: 18px;
      font-weight: 600;
    }
  `],
  encapsulation: ViewEncapsulation.None,
  template: `
    <h4>{{shop.name}}</h4>
    Tiempo de espera aprox en probadores: <span class="time"> {{shop.estimatedWaitTime | formatTime}} </span>
  `
})

export class ShopItem {
  @Input() shop: Shop;  
  constructor() {}
}