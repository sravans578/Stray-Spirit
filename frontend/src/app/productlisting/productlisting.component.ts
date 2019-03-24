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
  
  constructor(private toastr: ToastrService,private productService: ProductmanagementService) { }

 
  ngOnInit() {
      this.productService.getProducts().subscribe(productData =>
        {
      this.product_newData=productData;
       })
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


