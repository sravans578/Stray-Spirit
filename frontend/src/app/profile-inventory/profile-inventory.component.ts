import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ProductmanagementService } from '../productmanagement.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../auth.sevice';

@Component({
  selector: 'app-profile-inventory',
  templateUrl: './profile-inventory.component.html',
  styleUrls: ['./profile-inventory.component.scss']
})
export class ProfileInventoryComponent implements OnInit {
  imagePreview: any;
  namePattern: string = '^([a-zA-Z_\-]*)$';

  public productData: any = {}
  product_newData: any;
  current_User: any;
  userId: string;
  currentuserData: any;
  productFind: boolean = true;
  productListing: any;



  addProductForm = new FormGroup({
    productName: new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]),
    productQuantity: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    productPrice: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    productDescription: new FormControl('', Validators.required),
    productPic: new FormControl('')
  })


  constructor(

    private products: ProductmanagementService,
    private toastr: ToastrService,
    private titleService: Title,
    private authService: AuthService

  ) {
    this.titleService.setTitle("My Inventory - StraySpirit");
  }

  ngOnInit() {

    this.userId = this.authService.getUserId();
    this.authService.getUserById(this.userId).subscribe(currentUser => {
      this.current_User = currentUser;

    })

    this.products.getproductsUser(this.userId).subscribe(currentProductUser => {
      this.product_newData = currentProductUser;
    })
    this.products.getproductsUser(this.userId).subscribe(productData => {

      this.productListing = productData;

      if (this.productListing.length === 0) {
        this.productFind = false;
      }
    }, error => {

      this.productFind = false;
    })

  }




  private imageSrc: string = '';
  //Image conversion to base64:  https://stackoverflow.com/questions/48216410/angular-4-base64-upload-component--this is used to convert image to base 64 which is the format 
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;

  }
  addProduct() {
    this.productData = {
      productName: this.addProductForm.get('productName').value,
      productPrice: this.addProductForm.get('productPrice').value,
      productQuantity: this.addProductForm.get('productQuantity').value,
      productDescription: this.addProductForm.get('productDescription').value,
      productPic: this.imageSrc,
      productUploader: {
        uId: this.userId,
        firstName: this.current_User["firstName"],
        lastName: this.current_User["lastName"]
      }
    }

    this.products.newProducts(this.productData);
    this.showSuccess();
  }





  //Toast taken from https://www.npmjs.com/package/ngx-toastr
  showSuccess() {

    this.toastr.success('Product can be viewed on Shop page', 'Product is added', {
      timeOut: 5000,
      closeButton: true,
      progressBar: true
    });
  }

  edit() {

    this.toastr.error('Just a message for Assignment4 UI', 'Coming Soon', {
      timeOut: 5000,
      closeButton: true,
      progressBar: true
    });
  }
  delete() {

    this.toastr.error('Just a message for Assignment4 UI', 'Coming Soon', {
      timeOut: 5000,
      closeButton: true,
      progressBar: true
    });
  }
}
