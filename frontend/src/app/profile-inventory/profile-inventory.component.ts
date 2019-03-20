import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ProductmanagementService } from '../productmanagement.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profile-inventory',
  templateUrl: './profile-inventory.component.html',
  styleUrls: ['./profile-inventory.component.scss']
})
export class ProfileInventoryComponent implements OnInit {
  imagePreview: any;
  namePattern: string = '^([a-zA-Z_\-]*)$';

  public productData: any = {}


  
  addProductForm = new FormGroup({
    productName: new FormControl('', [Validators.required,Validators.pattern(this.namePattern)]),
    productQuantity: new FormControl('', [ Validators.required , Validators.pattern('^[0-9]*$') ]),
    productPrice: new FormControl('', [ Validators.required , Validators.pattern('^[0-9]*$') ]),
    productDescription: new FormControl('', Validators.required),
    productPic: new FormControl('')
  })
 

  constructor(
  
    private products: ProductmanagementService,
    private toastr: ToastrService,
    private titleService: Title
  ) { 
    this.titleService.setTitle("My Inventory - StraySpirit");
   }

  ngOnInit() {

    this.products.getProducts().subscribe(productData =>{
      console.log(productData);
  })

}

private imageSrc: string = '';
//Image conversion to base64:  https://stackoverflow.com/questions/48216410/angular-4-base64-upload-component
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
    console.log(this.imageSrc);
  }
  addProduct(){
     this.productData = {
      productName: this.addProductForm.get('productName').value,
      productPrice: this.addProductForm.get('productPrice').value,
      productQuantity: this.addProductForm.get('productQuantity').value,
      productDescription: this.addProductForm.get('productDescription').value,
      productPic: this.imageSrc
    }
    console.log(this.productData);
    this.products.newProducts(this.productData);
    this.showSuccess();
  }
  
  showSuccess() {
    console.log("Toast0");
    this.toastr.success('Good Job!', 'Product Added!', {
      timeOut: 5500,
      closeButton: true,
      progressBar: true
    });
  }
}
