import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './products';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private urlEndPoint: string = 'http://localhost:8080/api/product'
  constructor(private http: HttpClient) { }

  getProducts(page: number): Observable<any> {
    
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap( (response:any) => {
        console.log('ProductsService : tap1');
        (response.content as Products[]).forEach( products => {
          console.log(products.name);
        })
      }),
      
      map( (response:any) => {
        (response.content as Products[]).map(products => {
          products.name = products.name.toUpperCase();
          return products;
        });
        return response;
      }),
      
      tap( response => {
        console.log('ProductsService : tap2');
        (response.content as Products[]).forEach( products => {
          console.log(products.name);
        })
      }),
    );
  }
}
