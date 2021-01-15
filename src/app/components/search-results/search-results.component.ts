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
  public query = this.route.snapshot.paramMap.get('query');
  public id : string | undefined;
  public productList: any = [];
  public decimalsLenght: any;
  public decimals = '';
  public amount = '';
  
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
    this.getFilteredProducts(this.query);
  }
  
  getFilteredProducts(query: any) {
    this.service.getProducts(query).subscribe((products: any) => {
      let price: any;
      const items : any = [];
      const categories : any = [];
      products.results.forEach((element: Products) => {
        price = element.price.toString();
        price = price.split(".", 3);
        this.amount = price[0];
        price[1] != undefined ? this.decimals = price[1] : this.decimals = "0";
        this.decimalsLenght = this.decimals.length;
        let item = {
          id: element.id,
          title: element.title,
          price: {
            currency: element.currency_id,
            amount: parseInt(this.amount),
            decimals: parseInt(this.decimals),
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
      console.log("ProductsList: ", this.productList);
    });
  }
}
