import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { async } from '@angular/core/testing';
import { Product } from './models/product';
import 'rxjs/add/operator/take';
@Injectable()
export class ChoppingCartService {

  constructor(private db: AngularFireDatabase) { }
 private create() {
     return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
 }
 private getCart ( cartId : string){ 
   return this.db.object('/shopping-cartes/' + cartId);
 }

 private getItem(cartId: string, productId: string){
   return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);

 }
 
  private async getOrCreateCartId(){

   let cartId = localStorage.getItem('cartId');
   if( cartId) return cartId;
   
     let result = await this.create();
     localStorage.setItem('cartId', result.key);
     return cartId;
   }
 async addToCart( product: Product){
   let cartId = await this.getOrCreateCartId();
  let item$ = this.getItem(cartId, product.$key);
  item$.take(1).subscribe(item => {
      item$.update({ Product: product, quantity: (item.quantity || 0) + 1 });

  });
 }


}
