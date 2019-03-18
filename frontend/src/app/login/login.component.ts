import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailPattern: string = '^[a-zA-Z0-9*_.-]+@[a-zA-Z]+[.][a-zA-Z]{2,3}$';

  submitted: boolean = false;

  loginForm = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    passwordLogin: new FormControl('', Validators.required)
  })

  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle("Login to StraySpirit");
  }

  ngOnInit() {
  }
  loginSubmit() {
    
    this.router.navigate(['/profile']);
    
  }
}
