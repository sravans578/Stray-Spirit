import { Component, OnInit } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { NgForm }   from '@angular/forms';
  import {Title} from "@angular/platform-browser";
  import {Router} from "@angular/router"
import { AuthService } from '../auth.sevice';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  namePattern: string = '^([a-zA-Z_\-]*)$';
  emailPattern: string = '^[a-zA-Z0-9*_.-]+@[a-zA-Z]+[.][a-zA-Z]{2,3}$';
  phonePattern: string = '^[\(][0-9]{3}[\)][\-][\(][0-9]{3}[\)][\-][\(][0-9]{4}[\)]$|[0-9]{10}|[0-9]{3}-[0-9]{3}-[0-9]{4}';
  
  submitted: boolean = false;
  
  
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.pattern(this.namePattern)]),
    lastName: new FormControl('', [Validators.required,Validators.pattern(this.namePattern)]),
    email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]),
    number: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  // function matchPassword(FormGroup: AbstractControl): {[key: string]: any} | null{
  //   const emailControl =
  // }

  orgRegisterForm = new FormGroup({
    orgName: new FormControl('', [Validators.required,Validators.pattern(this.namePattern)]),
    orgEmail: new FormControl('', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]),
    orgPhone: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]),
    orgRegNo: new FormControl('', Validators.required),
    orgPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    orgRePassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  constructor(private titleService:Title,private router: Router,public authService:AuthService) { 
    this.titleService.setTitle("Register on StraySpirit");
   }



  ngOnInit() {
  }
  userRegisterSubmit(){
    this.submitted=true;
    setTimeout(()=>{  
      this.submitted = false;
 }, 3000);
 setTimeout(()=>{  
  this.router.navigate(['/login']);
}, 2000);
  }

  onUserSignup(form : NgForm){
    this.authService.createUser(
      form.value.firstName,
      form.value.lastName,
      form.value.phone,
      form.value.email,
      form.value.password,
      null,
      null,
      null,
      null,
      null);
  }

  onOrgSignup(form:NgForm){
    this.authService.createOrganizationUser(
      null,
      null,
      null,
      null,
      null,
      form.value.orgName,
      form.value.orgEmail,
      form.value.orgPhone,
      form.value.orgRegNo,
      form.value.orgPassword
    )
  }
  
}
