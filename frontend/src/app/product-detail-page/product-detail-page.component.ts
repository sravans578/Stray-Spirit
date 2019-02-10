// Developer: Aditya Gadhvi (B00809664) (ad742065@dal.ca)

import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Product detail");
   }

  ngOnInit() {
  }

}
