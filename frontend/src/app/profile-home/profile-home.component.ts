import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {

  userData: any =[];
  editField: boolean = false;
  editRowID: any ='';
  editRowValue: any ='';
  submitted: boolean = false;

  namePattern: string = '^([a-zA-Z_\-]*)$';
  emailPattern: string = '^[a-zA-Z0-9*_.-]+@[a-zA-Z]+[.][a-zA-Z]{2,3}$';
  phoneNumberPattern: string = '^[\(][0-9]{3}[\)][\-][\(][0-9]{3}[\)][\-][\(][0-9]{4}[\)]$|[0-9]{10}|[0-9]{3}-[0-9]{3}-[0-9]{4}';
  datePattern: string = '^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$';

  updateProfileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.pattern(this.namePattern)]),
    lastName: new FormControl('',[Validators.required,Validators.pattern(this.namePattern)]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
    phone: new FormControl('',[Validators.required,Validators.pattern(this.phoneNumberPattern)]),
    address: new FormControl('',Validators.required),
    pincode: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required)
  })


  constructor(private titleService:Title) { 
    this.titleService.setTitle("Dashboard - StraySpirit");
   }

  ngOnInit() {
    this.userData = [
      { id:1, firstName: 'Aadesh', lastName: 'Shah', email:'shahaadesh5@gmail.com', phone:'9876543210', address:'1333 South Park St, Halifax, NS', pincode: 'B3J2K9', dob: '1995-11-05'  }
    ];
    this.updateProfileForm.controls.firstName.patchValue(this.userData[0].firstName);
    this.updateProfileForm.controls.lastName.patchValue(this.userData[0].lastName);
    this.updateProfileForm.controls.email.patchValue(this.userData[0].email);
    this.updateProfileForm.controls.phone.patchValue(this.userData[0].phone);
    this.updateProfileForm.controls.address.patchValue(this.userData[0].address);
    this.updateProfileForm.controls.pincode.patchValue(this.userData[0].pincode);
    this.updateProfileForm.controls.dob.patchValue(this.userData[0].dob);
  }

  updateSubmit(){
    this.submitted=true;
    setTimeout(()=>{  
      this.submitted = false;
 }, 3000);
  }

  Edit(val,rowVal){
    this.editRowID = val; 
    this.editRowValue = rowVal;
    this.editField = true;
  }
}
