import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { CategoryService } from './../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 products$;

 categories$;
 category: string;

  constructor(
    route: ActivatedRoute,
    ProductService : ProductService, 
    categoryService: CategoryService)  { 
    this.products$ =ProductService.getALL();
        this.categories$ = categoryService.getALL();

    
  }

}