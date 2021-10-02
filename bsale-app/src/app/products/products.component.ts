import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { Products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {

  products: Products[];

  constructor(private productsService: ProductService) {

  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      products => this.products = products
    );
  }

}
