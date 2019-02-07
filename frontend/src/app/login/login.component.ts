import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.email]),
    passwordLogin: new FormControl('', Validators.required)
  })

  constructor(private titleService:Title) { 
    this.titleService.setTitle("Login to StraySpirit");
   }

  ngOnInit() {
  }

}
