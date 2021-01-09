import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public product: any = [];

  constructor () { 
    this.product = [
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

}

