import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../category.service';
import { ProductService } from './../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$;
  product = {} ;
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryservice: CategoryService,
    private productService: ProductService) { 
    this.categories$ = categoryservice.getALL();

    this.id =this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);

  }
  save(product) {
    if (this.id) this.productService.update(this.id, product);
    else
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  delete()  {
    if (!confirm('are u sure you want to delet this product?')) return;
      
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
