import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-dheeraj',
  templateUrl: './login-dheeraj.component.html',
  styleUrls: ['./login-dheeraj.component.scss']
})
export class LoginDheerajComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.nullValidator])

  })

  constructor() { }

  ngOnInit() {

    
    
  }

}
