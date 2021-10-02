import { Injectable } from '@angular/core';
import { Products } from './products';
//import { PRODUCTS } from './products.json';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private urlEndPoint: string = 'http://localhost:8080/api/product'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    //return of(PRODUCTS);
    return this.http.get<Products[]>(this.urlEndPoint);
  }
}
