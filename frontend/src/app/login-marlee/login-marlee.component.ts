import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-marlee',
  templateUrl: './login-marlee.component.html',
  styleUrls: ['./login-marlee.component.scss']
})
export class LoginMarleeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  loginForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.required ]
    })
  }

  get validationChecks(){
    return this.loginForm.controls;
  }

  attemptLogin(){
    this.submitted = true;
    if(this.loginForm.invalid){
      console.log('Login failed.');
      return
    }
    else{
      console.log('Login successful!');
    }
  }

}
