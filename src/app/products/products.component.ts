import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product';
import'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 products:  Product [] = [];
 filterdProducts:  Product [] = [];
 category: string;

  constructor(
     route: ActivatedRoute,
     productService: ProductService
    ){
     productService
     .getALL()
     .switchMap(products => {
       this.products = products;
       return route.queryParamMap;
     })
       .subscribe(params => {
         this.category = params.get('category');

         this.filterdProducts = (this.category) ?
           this.products.filter(p => p.category.toLocaleLowerCase() === this.category.toLocaleLowerCase()) :
           this.products;

       });
  

   }
        }