// Developer: Aditya Gadhvi (B00809664) (ad742065@dal.ca)

import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ProductmanagementService } from '../productmanagement.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  product_id: string;
  sub: any;
  product_data: any;

  constructor(
    private titleService:Title,
    private productService:ProductmanagementService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.titleService.setTitle("Product detail");
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.product_id = params['id']; 
      console.log(this.product_id);
   });
     this.productService.getProductsById(this.product_id).subscribe(product=>{
this.product_data = product;
     },error=>{
     this.router.navigate(["/product-not-found"]);
     })
  }

}
