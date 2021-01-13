import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Products } from '../entities/Products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(query: string): Observable<Products[]> {
    return this.http.get<Products[]>('https://api.mercadolibre.com/sites/MLA/search?q=' + query);
  }
}
