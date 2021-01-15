import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute} from '@angular/router';
import { ProductsService } from "../../../services/products.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  public id = this.route.snapshot.paramMap.get('id');
  public productInfo: any = [];
  public description = '';
  public decimals: any;
  public picture = '';
  public amount : any;
  public title = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private service: ProductsService) {
  }

  ngOnInit(): void {
    this.getDescription(this.id);
    this.getDetail(this.id);
  }

  getDetail(id: any) {
    this.service.getProductDetail(id).subscribe((details: any) => {
      let price: any = details.price;
      this.picture = details.thumbnail;
      this.title = details.title;
      price = price.toString();
      price = price.split(".", 3);
      this.amount = parseInt(price[0]);
      price[1] != undefined ? this.decimals = parseInt(price[1]) : this.decimals = 0;
      this.productInfo = [{
        author: {
          name: "Orlando",
          lastname: "Romero"
        },
        item: {
          id: this.id,
          title: details.title,
          price: {
            currency: details.currency_id,
            amount: this.amount,
            decimals: this.decimals,
          },
          picture: details.thumbnail,
          condition: details.condition,
          free_shiping: details.shipping.free_shipping,
          sold_quantity: details.sold_quantity,
          description: this.description
        }
      }];
      console.log("productInfo: ", this.productInfo);
    });
  }

  getDescription(id: any) {
    this.service.getProductDescription(id).subscribe((description: any) => {
      this.description = description.plain_text;
    });
  }
}
