import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public query = '' ;
  
  constructor(private http: HttpClient, private service: ProductsService) {}

  cleanQuery() {
    this.query = '' ;
  }
  
  ngOnInit(): void {
  }

}

