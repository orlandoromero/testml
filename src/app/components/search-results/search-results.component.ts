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
  public productList: any = [];
  public categoryList: any = [];
  public id : string | undefined;
  
  constructor(private route: ActivatedRoute, private http: HttpClient, private service: ProductsService) {
    // console.log(this.route.snapshot.paramMap.get('query'));
    this.productList = [{
      author: {
        name: '',
        lastname: ''
      },
      categories: [],
      items: []
      }];
  }
  
  getFilteredProducts(query: any) {
    this.service.getProducts(query).subscribe((products: any) => {
      const items : any = [];
      const categories : any = [];
      //console.log("products: ", products);
        products.results.forEach((element: Products) => {
          let item = {
            id: element.id,
            title: element.title,
            price: {
              currency: element.currency_id,
              amount: element.price,
              decimals: '',
            },
            picture: element.thumbnail,
            condition: element.condition,
            free_shiping: element.free_shipping,
          };
          items.push(item);
          let category = element.category_id;
          categories.push(category);
        });
        //console.log("Items: ", items);
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

  ngOnInit(): void {
    this.getFilteredProducts(this.query);
  }

}
