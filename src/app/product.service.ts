import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) {}

  create (product) {
     return this.db.list('/products').push(product);
   }
   getALL(){
     return this.db.list('/products');
   }

   get(productId){
     return this.db.object('/products/' + productId);
   }
   update(producteId, product){
return this.db.object('/products/' + producteId).update(product);
   }

   delete(producteId) {
return this.db.object('/products/' + producteId).remove();
   }
}
