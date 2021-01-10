import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public products: any = [];
  sortOptions: SelectItem[] | undefined;
  sortOrder: number | undefined;
  sortField: string | undefined;
  
  constructor() { 
    this.products = [
      {
        "id": 1,
        "desc": "iphone",
        "price": 1800,
        "pic": "https://images.dog.ceo/breeds/pekinese/n02086079_9316.jpg"
      },{
        "id": 2,
        "desc": "iphone XS",
        "price": 1000,
        "pic": "https://images.dog.ceo/breeds/pekinese/n02086079_9316.jpg"
      },{
        "id": 3,
        "desc": "iphone 12",
        "price": 2000,
        "pic": "https://images.dog.ceo/breeds/pekinese/n02086079_9316.jpg"
      },{
        "id": 4,
        "desc": "Samsung 20",
        "price": 1900,
        "pic": "https://images.dog.ceo/breeds/pekinese/n02086079_9316.jpg"
      },{
        "id": 5,
        "desc": "Samsung Note",
        "price": 2300,
        "pic": "https://images.dog.ceo/breeds/pekinese/n02086079_9316.jpg"
      },{
        "id": 6,
        "desc": "Xiaomi",
        "price": 1000,
        "pic": "https://images.dog.ceo/breeds/pekinese/n02086079_9316.jpg"
      }
    ]
  }

  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}

