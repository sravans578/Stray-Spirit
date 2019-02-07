import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.scss']
})
export class ProductlistingComponent implements OnInit {
  products: any = [];
  constructor() { }

  ngOnInit() {
    this.products =
    [
      {
        id:1, productName:"product1" , productPrice: 200, productImage : "petproduct1.jpg", productDesc: "productInfo"
      },
      {
        id:2, productName:"product2" , productPrice: 200, productImage : "petproduct1.jpg", productDesc: "productInfo"
      },
      {
        id:3, productName:"product3" , productPrice: 200, productImage : "petproduct1.jpg", productDesc: "productInfo"
      },
      {
        id:4, productName:"product4" , productPrice: 200, productImage : "petproduct1.jpg", productDesc: "productInfo"
      },
      {
        id:5, productName:"product5" , productPrice: 200, productImage : "petproduct1.jpg", productDesc: "productInfo"
      },
      {
        id:6, productName:"product6" , productPrice: 200, productImage : "petproduct1.jpg", productDesc: "productInfo"
      },
      {
        id:7, productName:"product7" , productPrice: 200, productImage : "petproduct1.jpg", productDesc: "productInfo"
      },
      {
        id:8, productName:"product8" , productPrice: 200, productImage : "petproduct1.jpg", productDesc: "productInfo"
      }

    ];
  }

}
