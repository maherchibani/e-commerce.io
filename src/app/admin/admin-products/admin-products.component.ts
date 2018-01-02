import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../../product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit , OnDestroy {
  products: Product [];
  subscription: Subscription;
  items: Product [] = [] ;
  itemCount: number;
  tableResource: DataTableResource<Product> ;

  constructor( private productService: ProductService) {
 this.subscription = this.productService.getALL()
 .subscribe(products => {
    this.products = products;
     this.initializeTable(products);
   });
 }

  private initializeTable( products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }
  
  reloadItems(params){
    if (!this.tableResource) return;
    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  filter(query: string) {
 let filterProducts = (query) ?
    this.products.filter(p => p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())):
    this.products;
    this.initializeTable(filterProducts);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }
  ngOnInit() {
  }

}