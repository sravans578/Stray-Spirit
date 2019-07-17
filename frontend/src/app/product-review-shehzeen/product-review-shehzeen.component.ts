/** Author : Shehzeen B00812551 */
import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatExpansionModule
} from '@angular/material/expansion';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import {
  Title
} from "@angular/platform-browser";
import {
  AuthService
} from '../auth.sevice';
import {
  ProductmanagementService
} from '../productmanagement.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  ToastrService
} from 'ngx-toastr';
import {
  throwMatDialogContentAlreadyAttachedError
} from '@angular/material';
/**
* Component
*/
@Component({
  selector: 'app-product-review-shehzeen',
  templateUrl: './product-review-shehzeen.component.html',
  styleUrls: ['./product-review-shehzeen.component.scss']
})
export class ProductReviewShehzeenComponent implements OnInit {
//The logic of focusing on the element is taken from : https://coderanch.com/t/675897/languages/programmatically-manage-focus-Angular-app
  @ViewChild('review') inputEl: ElementRef;
  reviewForm: FormGroup;
  submitted = false;
  namePattern: string = ''; //'/^[\w\s]+$/';  
  productIdLocal: string;
  productReviewLocal: any;
  sub: any;
  productDataLocal: any;
  currentUserId: any;
  currentUser: any;
  productData: any;
  dirty: boolean;
  objectIdToBeEdited: 0;
  constructor(
      private titleService: Title,
      private formBuilder: FormBuilder,
      private productService: ProductmanagementService,
      private authService: AuthService,
      private route: ActivatedRoute,
      private router: Router,
      private toastr: ToastrService
  ) {
      this.titleService.setTitle("Product detail");
  }
  /**
   * on init This function intanciate the review form with all the validators present in the form.Also the function fetches the details of the user from the backend for authentication purpose.
   */
  ngOnInit() {
      var that = this;
      this.objectIdToBeEdited = null;
      this.dirty = false;
      this.reviewForm = this.formBuilder.group({
          reviewBox: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      });
      //The logic of fetching details of current User, current User , param fetching from routes is taken from the previously built project stray spirit: https://strayspirit.herokuapp.com/
      //Fetching the user id from the database.
      this.currentUserId = this.authService.getUserId();
      console.log("This id has logged in: ", this.currentUserId);
      //Fetching the user details by the help of user id from the database.
      this.authService.getUserById(this.currentUserId).subscribe(currentUserData => {
          this.currentUser = currentUserData;
          console.log("Logged in user details:", this.currentUser);
      }, error => {});
      this.sub = this.route.params.subscribe(params => {
          this.productIdLocal = params['id'];
      });
      //Fetching the product details from the databse so that the details along with the reviews can be displayed on the screen.
      this.productService.getProductsById(this.productIdLocal).subscribe(product => {
          this.productDataLocal = product;
          this.productDataLocal.productReview.forEach(function(element, i) {
              if (element.productUploaderId == that.currentUserId) {
                  element.editShow = true;
              } else {
                  element.editShow = false;
              }
          });
          this.productReviewLocal = this.productDataLocal.productReview;
          //this.productDataLocal.productReview = [];
      });
  }
  /**
  /* editReview This function gets invoked when the user edits his own previously given reviews.
  */
  editReview(event, i) {
      this.inputEl.nativeElement.focus();
      this.dirty = true;
      this.objectIdToBeEdited = i;
      this.reviewForm.controls.reviewBox.setValue(this.productDataLocal.productReview[i].productReview);
  }
   /**
   * deleteReview This function gets invoked when the user deleted his own previously given review.
   */
  deleteReview(event, i) {
      this.productDataLocal.productReview.splice(i, 1);
      this.productData = {
          productNameModel: this.productDataLocal.productName,
          productDescriptionModel: this.productDataLocal.productDescription,
          productQuantityModel: this.productDataLocal.productQuantity,
          productPriceModel: this.productDataLocal.productPrice,
          productCategoryModel: this.productDataLocal.productCategory,
          productPicModel: this.productDataLocal.productPic,
          productUploaderModel: {
              productUploaderId: this.productDataLocal.productUploader.uId,
              productUploaderfirstName: this.productDataLocal.productUploader.firstName,
              productUploaderlastName: this.productDataLocal.productUploader.lastName
          },
          productReview: this.productDataLocal.productReview
      };
      var result = this.productService.updateProducts(this.productIdLocal, this.productData);
      console.log(this.productDataLocal);
      //Toaster for the successful submission of the form.
      this.toastr.success('Successfully deleted the review for the Product.', 'SUCCESS!', {
          timeOut: 5500,
          closeButton: true,
          progressBar: true
      });
  }
  /**
   * onSubmit This function validates all the fields on the submit button click of the form.If all the fields are validated correctly then the review is submitted in the database. 
   */
  onSubmit() {
      var that = this;
      this.submitted = true;
      // stop here if form is invalid
      if (this.reviewForm.invalid) {
          return;
      } else {
          //If the form is valid user details along with the review is submitted in the database.
          console.log(this.reviewForm.get('reviewBox'));
          if (this.dirty == false) {
              this.productDataLocal.productReview.push({
                  productUploaderId: this.currentUserId,
                  productUploaderfirstName: this.currentUser["firstName"],
                  productReview: this.reviewForm.get('reviewBox').value,
                  editShow: true
              });
          } else {
              this.productDataLocal.productReview.forEach(function(val, i) {
                  if (i == that.objectIdToBeEdited) {
                      val.productReview = that.reviewForm.get('reviewBox').value;
                      that.dirty = false;
                      that.objectIdToBeEdited = null;
                  }
              });
          }
          //Formulating the object for submitting to the database.
          this.productData = {
              productNameModel: this.productDataLocal.productName,
              productDescriptionModel: this.productDataLocal.productDescription,
              productQuantityModel: this.productDataLocal.productQuantity,
              productPriceModel: this.productDataLocal.productPrice,
              productCategoryModel: this.productDataLocal.productCategory,
              productPicModel: this.productDataLocal.productPic,
              productUploaderModel: {
                  productUploaderId: this.productDataLocal.productUploader.uId,
                  productUploaderfirstName: this.productDataLocal.productUploader.firstName,
                  productUploaderlastName: this.productDataLocal.productUploader.lastName
              },
              productReview: this.productDataLocal.productReview
          };
          var result = this.productService.updateProducts(this.productIdLocal, this.productData);
          console.log(this.productDataLocal);
          //Toaster for the successful submission of the form.
          //The toaster is used from the previously present code of stray spirit for maintaining uniformity accross the application : https://strayspirit.herokuapp.com/
          this.toastr.success('Successfully submitted the review for the Product.', 'SUCCESS!', {
              timeOut: 5500,
              closeButton: true,
              progressBar: true
          });
          //Reset the form once the form is successfully submitted.
          this.reviewForm.reset();
      }
  }
}