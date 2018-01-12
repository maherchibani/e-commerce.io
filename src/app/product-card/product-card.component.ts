import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../models/product';
import { ChoppingCartService } from '../chopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  constructor(private cartService: ChoppingCartService) { }

 addToCart(product: Product){
   this.cartService.addToCart(product);


 }
}
