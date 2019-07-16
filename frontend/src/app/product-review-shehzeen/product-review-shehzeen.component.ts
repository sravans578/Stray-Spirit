/** Author : Shehzeen B00812551 */
import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {  FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { AuthService } from '../auth.sevice';
import { ProductmanagementService } from '../productmanagement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService  } from 'ngx-toastr';

/**
 * Component
 */
@Component({
  selector: 'app-product-review-shehzeen',
  templateUrl: './product-review-shehzeen.component.html',
  styleUrls: ['./product-review-shehzeen.component.scss']
})


export class ProductReviewShehzeenComponent implements OnInit { 
 

  reviewForm: FormGroup;
  submitted = false;
 
  namePattern: string = '';//'/^[\w\s]+$/';  

  product_id: string;
  product_reviews: any;
  sub: any;
  product_data: any;
  currentUserId : any;
  currentUser : any;
  productData : any;

  constructor(
    private titleService:Title,
    private formBuilder: FormBuilder,
    private productService:ProductmanagementService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
    ) {
    this.titleService.setTitle("Product detail");
   }
  
/**
 * on init This function intanciate the review form with all the validators present in the form.
 */
ngOnInit() { 
     
    this.reviewForm = this.formBuilder.group({
      reviewBox: ['', [Validators.required,Validators.pattern(this.namePattern)]],
    });

    this.currentUserId=this.authService.getUserId();
    console.log("This id has logged in: ",this.currentUserId);
    this.authService.getUserById(this.currentUserId).subscribe(currentUserData =>{
      this.currentUser=currentUserData;
      console.log("Logged in user details:",this.currentUser);
    },error=>{
   
      });

    this.sub = this.route.params.subscribe(params => {
      this.product_id = params['id']; 
      
   });

     this.productService.getProductsById(this.product_id).subscribe(product=>{
this.product_data = product;
this.product_reviews = this.product_data.productReview;
//this.product_data.productReview = [];
     });
  }
/**
 * This function validates all the fields on the submit button click of the form
 * @returns  
 */
onSubmit() {

 

    this.submitted = true;
    

    // stop here if form is invalid
    if (this.reviewForm.invalid) {
        return;
    }
    else{
      console.log(this.reviewForm.get('reviewBox'));
      
      this.product_data.productReview.push(
        {
          productUploaderId: this.currentUserId,
          productUploaderfirstName: this.currentUser["firstName"],
          productReview: this.reviewForm.get('reviewBox').value,
        }
      );
      console.log(this.product_data);

      this.productData = {
        productNameModel: this.product_data.productName,
        productDescriptionModel: this.product_data.productDescription,
        productQuantityModel: this.product_data.productQuantity,
        productPriceModel: this.product_data.productPrice,
        productCategoryModel:this.product_data.productCategory,
        productPicModel: this.product_data.productPic,
        productUploaderModel: {
          productUploaderId: this.product_data.productUploader.uId,
          productUploaderfirstName: this.product_data.productUploader.firstName,
          productUploaderlastName: this.product_data.productUploader.lastName

        },
        productReview : this.product_data.productReview 
      };
      var result = this.productService.updateProducts(this.product_id , this.productData);
    
      console.log(this.product_data);
      
      this.toastr.success('Successfully submitted the review for the Product.', 'SUCCESS!', {
        timeOut: 5500,
        closeButton: true,
        progressBar: true
      });
      this.reviewForm.reset();

     // alert('Successfully submitted form');
    }
   // this.reviewForm.controls['reviewBox'].setValue('');
    //this.reviewForm.controls['reviewBox'].markAsTouched({ onlySelf: true });

    
}


}
