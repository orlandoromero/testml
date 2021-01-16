import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductsService } from "../services/products.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public query = '' ;
  
  constructor(private http: HttpClient, private service: ProductsService, private router: Router ) {
  }

  ngOnInit(): void {
  }

  onSearch() {
    if (this.query.trim() === '') return;
    this.router.navigate(['/items'], { queryParams: { search: this.query } });
  }

  cleanQuery() {
    this.query = '' ;
  }
}
