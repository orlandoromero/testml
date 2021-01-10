import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public products: any = [];
  
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

  ngOnInit(): void {
  }

}
