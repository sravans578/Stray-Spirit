// Developer - Dheeraj Varshney B00808467 dh301823@dal.ca 
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormControl } from '@angular/forms';
import { ProductmanagementService } from '../productmanagement.service'
@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.scss']
})
export class ProductlistingComponent implements OnInit {
  products: any = [];
  product_newData: any;
  
  constructor(private productService: ProductmanagementService) { }

 
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
}


