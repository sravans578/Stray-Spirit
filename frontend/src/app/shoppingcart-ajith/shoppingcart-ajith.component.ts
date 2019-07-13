import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShoppingcartService} from '../shoppingcart.service';
import {formatDate } from '@angular/common';
import { AuthService } from '../auth.sevice';

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
  cart_items:any=[];
  initial_cart_details:any=[];
  grand_total:number=0;
  first_name:string="";
  last_name:string="";
  email:string="";
  address_line1:string="";
  pincode:string="";
  phone_number:number;
  first_name_validation:boolean=true;
  last_name_validation:boolean=true;
  email_validation:boolean=true;
  address_line1_validation:boolean=true;
  pincode_validation:boolean=true;
  phone_number_validation=true;
  finaldata_shoppingCart={};
  current_data= new Date();
  todays_date = '';
  estimated_date_object= new Date();
  estimated_shipping_date= '';
  userId: string;
  current_User: any;
  constructor(private toastr: ToastrService,private _formBuilder: FormBuilder,private shoppingCartService: ShoppingcartService,private authService: AuthService ) { }

  ngOnInit() {
    this.product1count=1;
    this.product2count=1;
    this.product1mobilecount=1;
    this.product2mobilecount=1;
    this.initial_cart_details=[];
    this.cart_items=[];
    this.grand_total=0;
    this.first_name_validation=true;
    this.last_name_validation=true;
    this.email_validation=true;
    this.address_line1_validation=true;
    this.pincode_validation=true;
    this.phone_number_validation=true;
    this.first_name="";
    this.last_name="";
    this.email="";
    this.address_line1="";
    this.pincode="";
    this.phone_number=0;
    this.finaldata_shoppingCart={};
    this.modify_cache_details();
    this.todays_date = formatDate(this.current_data, 'dd MMMM yyyy', 'en-US', '+0530');
    this.estimated_date_object =  new Date(this.current_data.setDate(this.current_data.getDate() + 7));
    this.estimated_shipping_date = formatDate(this.estimated_date_object, 'dd MMMM yyyy', 'en-US', '+0530');
    this.userId = this.authService.getUserId();
    this.authService.getUserById(this.userId).subscribe(currentUser => {
      this.current_User = currentUser;
    })
    debugger;
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
  modify_cache_details(){
    this.cart_items =JSON.parse(localStorage.getItem("shopping_cart"));
    this.update_grand_total();
  }
  update_grand_total(){
    this.grand_total=0;
    for( var item in this.cart_items){
      this.grand_total = this.grand_total+(this.cart_items[item]["itemcount"] * this.cart_items[item]["productprice"]);
    }
  }
  count_items_update(productpic,productname,productcount){
    for( var item in this.cart_items){
      if(this.cart_items[item]["productpic"] == productpic && this.cart_items[item]["productname"] == productname){
        this.cart_items[item]["itemcount"] = productcount;
        localStorage.removeItem("shopping_cart");
        localStorage.setItem("shopping_cart",JSON.stringify(this.cart_items));
        this.update_grand_total();
      }
      
    }
    
  }
  removeproduct(productpic,productname){
    for( var item in this.cart_items){
      if(this.cart_items[item]["productpic"] == productpic && this.cart_items[item]["productname"] == productname){
      this.cart_items.splice(item,1);
      localStorage.removeItem("shopping_cart");
      localStorage.setItem("shopping_cart",JSON.stringify(this.cart_items));
      this.update_grand_total();
    }
  }
  }
  onAddressSubmit(){
    debugger;    
    if(this.first_name == ""){
      this.first_name_validation=false;
    }
    else{
      this.first_name_validation=true;   
    }
    if(this.last_name == ""){
      this.last_name_validation=false;
    }
    else{
      this.last_name_validation=true;
    }
    if(this.email == ""){
      this.email_validation=false;
    }
    else{
      this.email_validation=true;
    }
    if(this.address_line1 == ""){
      this.address_line1_validation=false;
    }
    else{
      this.address_line1_validation=true;
    }
    if(this.pincode == ""){
      this.pincode_validation=false;
    }
    else{
      this.pincode_validation=true;
    }
    if(this.phone_number == null){
    this.phone_number_validation=false;
    }
    else{
      this.phone_number_validation=true;
    }
    this.finaldata_shoppingCart={
      products:JSON.parse(localStorage.getItem("shopping_cart")),
      firstName:this.current_User["firstName"],
      lastName:this.current_User["lastName"],
      email:this.email,
      addressLine1:this.address_line1,
      addressLine2:this.address_line1,
      pincode:this.pincode,
      phoneNumber:this.phone_number,
      totalPrice:this.grand_total,
      orderPlacedDate:this.todays_date,
      estimatedDeliveryDate:this.estimated_shipping_date,
      orderStatus:"pending",
      uID:this.userId
    }
    debugger;
    this.shoppingCartService.insertPurchaseDetails(this.finaldata_shoppingCart);
  }
}
