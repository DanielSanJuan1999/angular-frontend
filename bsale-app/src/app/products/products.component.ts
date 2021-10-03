import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { Products } from './products';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {

  products: Products[];
  paginator: any;

  constructor(private productsService: ProductService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      
      let page:number = +params.get('page')! | 0;

      this.productsService.getProducts(page).pipe(
      tap(response => {
        this.products = response.content as Products[];
        this.paginator = response;
      })
    ).subscribe();})
  }
}
