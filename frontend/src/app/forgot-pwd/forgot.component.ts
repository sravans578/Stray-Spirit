import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
   /**Created boolean variable */ 
  submitted:boolean = false;
    pwdForgotForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email])
    
  })
    
  constructor() { }

  ngOnInit() {
  }
    /** Function will be triggered onclick */
    pwdForgotbtn()
    {
      this.submitted=true;
    }
  
  }


