import { Component, OnInit } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  // function matchPassword(FormGroup: AbstractControl): {[key: string]: any} | null{
  //   const emailControl =
  // }

  orgRegisterForm = new FormGroup({
    orgName: new FormControl('', Validators.required),
    orgEmail: new FormControl('', [Validators.required, Validators.email]),
    orgPhone: new FormControl('', Validators.required),
    orgRegNo: new FormControl('', Validators.required),
    orgPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    orgRePassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  constructor(private titleService:Title) { 
    this.titleService.setTitle("Register on StraySpirit");
   }

  ngOnInit() {
  }
}
