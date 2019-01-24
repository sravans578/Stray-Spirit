import { Component, OnInit } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit() {
  }

}
