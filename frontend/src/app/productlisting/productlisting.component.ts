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
        /** image is taken from https://images-na.ssl-images-amazon.com/images/I/61TkTIfQ3RL._SY355_.jpg */
        id:1, productName:"product1" , productPrice: 200, productImage : "product1.jpg", productDesc: "productInfo"
      },
      {
        /** image is taken from https://images-na.ssl-images-amazon.com/images/I/71gwRbpfLoL._SY606_.jpg */
        id:2, productName:"product2" , productPrice: 200, productImage : "product2.jpg", productDesc: "productInfo"
      },
      {
        /** image is taken from https://storage.googleapis.com/stateless-puphq/2017/12/spiked-dog-collar-black.jpg */
        id:3, productName:"product3" , productPrice: 200, productImage : "product3.jpg", productDesc: "productInfo"
      },
      {
        /** image is taken from https://www.petsmart.ca/dog/collars-harnesses-and-leashes/petsafe-3-in-1-dog-harness-50883.html?cgid=100405
 */
        id:4, productName:"product4" , productPrice: 200, productImage : "product4.jpg", productDesc: "productInfo"
      },
      {
        /** image is taken from https://s7d2.scene7.com/is/image/PetSmart/5220954?$sclp-prd-main_large$.jpg
 */
        id:5, productName:"product5" , productPrice: 200, productImage : "product5.jpg", productDesc: "productInfo"
      },
      {
        /** image is taken from https://www.rescueop.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/k/h/kh1650.jpg
 */
        id:6, productName:"product6" , productPrice: 200, productImage : "product6.jpg", productDesc: "productInfo"
      },
      {
        /** image is taken from https://www.rescueop.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/c/v/cvr48t-gy.jpg */
        id:7, productName:"product7" , productPrice: 200, productImage : "product7.jpg", productDesc: "productInfo"
      },
      {
        /** image is taken from https://images-na.ssl-images-amazon.com/images/I/71gwRbpfLoL._SY606_.jpg */
        id:8, productName:"product8" , productPrice: 200, productImage : "product8.jpg", productDesc: "productInfo"
      }

    ];
  }

}
