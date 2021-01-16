import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute} from '@angular/router';
import { ProductsService } from "../../../services/products.service";
import { Products } from 'src/entities/Products';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public state_name : string | undefined;
  public id : string | undefined;
  public productList: any = [];
  public decimals : any;
  public amount: any;
  
  constructor(private route: ActivatedRoute, private http: HttpClient, private service: ProductsService) {
    this.productList = [{
      author: {
        name: '',
        lastname: ''
      },
      categories: [],
      items: []
    }];
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.getFilteredProducts(params.search);
    });
  }
  
  getFilteredProducts(query: any) {
    this.service.getProducts(query).subscribe((products: any) => {
      let price: any;
      const items : any = [];
      const categories : any = [];
      products.results.forEach((element: Products) => {
        this.state_name = element.address.state_name;
        price = element.price.toString();
        price = price.split(".", 3);
        this.amount = parseInt(price[0]);
        price[1] != undefined ? this.decimals = parseInt(price[1]) : this.decimals = 0;
        let item = {
          id: element.id,
          title: element.title,
          price: {
            currency: element.currency_id,
            amount: this.amount,
            decimals: this.decimals,
          },
          picture: element.thumbnail,
          condition: element.condition,
          free_shiping: element.shipping.free_shipping,
        };
        items.push(item);
        let category = element.category_id;
        categories.push(category);
      });
      this.productList = [{
        author: {
          name: "Orlando",
          lastname: "Romero"
        },
        categories: categories,
        items: items
      }];
      console.log("ProductList: ", this.productList);
    });
  }
}
