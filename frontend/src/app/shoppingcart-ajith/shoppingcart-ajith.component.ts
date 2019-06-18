import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shoppingcart-ajith',
  templateUrl: './shoppingcart-ajith.component.html',
  styleUrls: ['./shoppingcart-ajith.component.scss']
})
export class ShoppingcartAjithComponent implements OnInit {
  product1count:number;
  product2count:number;
  product1mobilecount:number;
  product2mobilecount:number;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.product1count=1;
    this.product2count=1;
    this.product1mobilecount=1;
    this.product2mobilecount=1;
  }
  checkout(){
    if( this.product1count <1 || this.product2count <1 || this.product1mobilecount<1 || this.product2mobilecount<1){
      this.toastr.error('Just a message for Assignment 1 UI', 'Items count should me more than one', {
        timeOut: 5000,
        closeButton: true,
        progressBar: true
      });

    }
    else{
    this.toastr.success('Just a message for Assignment 1 UI', 'Products checkedout successfuly', {
      timeOut: 5000,
      closeButton: true,
      progressBar: true
    });
  }
  }
  removeproduct(){
    this.toastr.success('Just a message for Assignment 1 UI', 'Product removed Successfuly', {
      timeOut: 5000,
      closeButton: true,
      progressBar: true
    });
  }
}
