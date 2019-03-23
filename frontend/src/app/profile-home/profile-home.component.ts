// Developer : Aditya Gadhvi (B00809664)

import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../auth.sevice';
import { empty } from 'rxjs';
import { EventManagementService } from '../event-management.service';



@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})

export class ProfileHomeComponent implements OnInit {

  userData: {  };
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


  constructor(
    private titleService:Title,
    private authService:AuthService
    ){ 
    this.titleService.setTitle("Dashboard - StraySpirit");
   }

  ngOnInit() {
    
    //The following code will get the userId of the logged in user and then it will retrieve all the data of the logged in user and then display it on the profile page.
    var userId=this.authService.getUserId();
    this.authService.getUserById(userId).subscribe(user=>{
    this.userData=user;
      
    this.userData["address"]="";
    this.userData["pincode"]="";
    this.userData["dob"]="";
        
    this.updateProfileForm.controls.firstName.patchValue(this.userData["firstName"]);
    this.updateProfileForm.controls.lastName.patchValue(this.userData["lastName"]);
    this.updateProfileForm.controls.email.patchValue(this.userData["email"]);
    this.updateProfileForm.controls.phone.patchValue(this.userData["phoneNumber"]);
    this.updateProfileForm.controls.address.patchValue(this.userData["address"]);
    this.updateProfileForm.controls.pincode.patchValue(this.userData["pincode"]);
    this.updateProfileForm.controls.dob.patchValue(this.userData["dob"]);
    });
    
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
