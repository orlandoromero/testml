import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Products } from '../entities/Products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(query: string): Observable<any> {
    return this.http.get<any>('https://api.mercadolibre.com/sites/MLA/search?q=' + query);
  }

  getProductDetail(id: string): Observable<any> {
    return this.http.get<any>('https://api.mercadolibre.com/items/' + id);
  }

  getProductDescription(id: string): Observable<any> {
    return this.http.get<any>('https://api.mercadolibre.com/items/' + id + '/description');
  }
}

