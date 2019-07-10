/** Author : Shehzeen B00812551 */
import {	Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

/**
 * Component
 */
@Component({
	selector: 'app-donate-shehzeen',
	templateUrl: './donate-shehzeen.component.html',
	styleUrls: ['./donate-shehzeen.component.scss']
})


export class DonateShehzeenComponent implements OnInit {
  donateForm: FormGroup;
  donateFormRecurring: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

	/**
	 * This code is done by the help  from https://stackblitz.com/edit/numeric-only
	 * This function checks and validates that the amount field lets the user only enter numbers
	 * @param event
	 * @returns  boolean
	 */
	numberOnly(event) {
		const charCode = (event.which) ? event.which : event.keyCode;
		return (charCode > 31 && (charCode < 48 || charCode > 57)) ? false : true;
	}

	/**
	 * on init : This function runs at the component initialization
	 */
	ngOnInit() {

    this.donateForm = this.formBuilder.group({
      donorFirstName:['', [Validators.required]],
      donorLastName:['', [Validators.required]],
      amountOneTime: ['', [Validators.required]],
      organizationOneTime: ['', [Validators.required]]
  });

  this.donateFormRecurring = this.formBuilder.group({
    firstNameRecurring: ['', [Validators.required]],
    lastNameRecurring: ['', [Validators.required]],
    amountRecurring: ['', [Validators.required]],
    organizationRecurring: ['', [Validators.required]],
    frequencyRecurring: ['', [Validators.required]]
  });


  }

/**
 * Gets f this function is the getter for donate form controls
 */
get f() { return this.donateForm.controls; }


/**
 * Gets fr This function is the getter for donateformrecurring controls
 */
get fr() { return this.donateFormRecurring.controls; }




	/**
	 * Ondonates one time This function checks if the amount and organization both are valid then it submits else it remains on the same page.
	 * @returns
	 */
	ondonateOneTime() {
    this.submitted = true;
    if(this.donateForm.invalid){
      return;
    }
    
      alert('Successfully submitted form');
    

  }
  
  show : boolean = false;
  toggle() {
    this.show = true;
  }

	/**
	 * This function verifies if amountRecurring , frequency and oragnization all are given then it submits else it gives errors
	 * @returns
	 */
	onSubmitRecurring() {
	  this.submitted = true;
    if(this.donateFormRecurring.invalid){
      return;
    }
    alert('Form Submitted successfully \n');
  
	}

}
