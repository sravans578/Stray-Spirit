/** Author : Shehzeen B00812551 */
import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {  FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder) { }
  namePattern: string = '^([a-zA-Z_\-]*)$';
  
/**
 * on init This function intanciate the review form with all the validators present in the form.
 */
ngOnInit() { 
    
    this.reviewForm = this.formBuilder.group({
      reviewBox: ['', [Validators.required,Validators.pattern(this.namePattern)]],
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
      
      alert('Successfully submitted form');
    }

    
}


}
