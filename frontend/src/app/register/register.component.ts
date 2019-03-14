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
  
  public usersData:any ={}
  public orgData:any={}

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

  onUserSignup(){
    this.usersData={
      firstName:this.registerForm.get('firstName').value,
      lastName:this.registerForm.get('lastName').value,
      phone:this.registerForm.get('number').value,
      email:this.registerForm.get('email').value,
      password:this.registerForm.get('password').value
    }
    this.authService.createUser(this.usersData);
  }

  onOrgSignup(form:NgForm){
    this.orgData={
      orgName:this.orgRegisterForm.get('orgName').value,
      email:this.orgRegisterForm.get('orgEmail').value,
      orgPhone:this.orgRegisterForm.get('orgPhone').value,
      orgRegNo:this.orgRegisterForm.get('orgRegNo').value,
      password:this.orgRegisterForm.get('orgPassword').value

    }
    this.authService.createOrganizationUser(
      this.orgData
    )
  }
  
}
