// Developer - Dheeraj Varshney B00808467 dh301823@dal.ca 
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormControl } from '@angular/forms';
import { ProductmanagementService } from '../productmanagement.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.scss']
})
export class ProductlistingComponent implements OnInit {
  products: any = [];
  product_newData: any;
  allProducts: any;
  productCategory=new FormControl();
  
  constructor(private toastr: ToastrService,private productService: ProductmanagementService) { }

 
  ngOnInit() {
      this.productService.getProducts().subscribe(productData =>
        {
      this.product_newData=productData;
      this.allProducts=this.product_newData;
      console.log(this.allProducts);
       })
  }
filtCat(cat:string){
  console.log(cat);
  if(cat==='all'){
    this.product_newData=this.allProducts;
  }
  else{
    this.product_newData = this.allProducts.filter(filterProducts =>{
      return filterProducts.productCategory.includes(cat);
    })
  }
}
categoryChange(event){
  if(!event){
    console.log(this.productCategory.value);
    switch(this.productCategory.value){
      case 'atoz':
      console.log("Inside A to z");
      this.product_newData = this.allProducts.sort(this.sortByName);
      break;
      case 'ztoa':
      console.log("Inside Z to A");
      this.product_newData = this.allProducts.sort(this.reverseSortByName);
      break;
      case 'lowtohigh':
      console.log("Inside lowtohigh");
      this.product_newData = this.allProducts.sort(this.lowToHigh);
      break;
      case 'hightolow':
      console.log("Inside hightolow");
      this.product_newData = this.allProducts.sort(this.highToLow);
      break;
    }
  }
}
sortByName(a: any, b:any){
  if(a.productName>b.productName) return 1
  else if(a.productName===b.productName) return 0
  else return -1;
}
lowToHigh(a: any, b:any){
  if(a.productPrice>b.productPrice) return 1
  else if(a.productPrice===b.productPrice) return 0
  else return -1;
}
highToLow(a: any, b:any){
  if(a.productPrice<b.productPrice) return 1
  else if(a.productPrice===b.productPrice) return 0
  else return -1;
}
reverseSortByName(a: any, b:any){
  if(a.productName<b.productName) return 1
  else if(a.productName===b.productName) return 0
  else return -1;
}

onClick()
  {
    window.location.href = '/product-detail-page';
    
  }

  addToCart(){
    this.toastr.error('Just a message for Assignment 4 UI', 'Coming Soon', {
      timeOut: 5000,
      closeButton: true,
      progressBar: true
    });
  }

  share(){
    this.toastr.error('Just a message for Assignment 4 UI', 'Coming Soon', {
      timeOut: 5000,
      closeButton: true,
      progressBar: true
    });
  }
  
}


