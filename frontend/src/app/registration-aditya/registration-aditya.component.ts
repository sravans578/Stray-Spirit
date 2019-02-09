import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registration-aditya',
  templateUrl: './registration-aditya.component.html',
  styleUrls: ['./registration-aditya.component.scss']
})
export class RegistrationAdityaComponent implements OnInit {
  

  userForm = new FormGroup({
    firstNameInput : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
    lastNameInput : new FormControl ('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
    numberInput:new FormControl('',[Validators.required,Validators.pattern("^[\(][0-9]{3}[\)][\-][\(][0-9]{3}[\)][\-][\(][0-9]{4}[\)]$|[0-9]{10}|[0-9]{3}-[0-9]{3}-[0-9]{4}")]),
    emailInput : new FormControl('',[Validators.required,Validators.email,Validators.pattern("^[a-zA-Z0-9*_.-]+@[a-zA-Z]+[.][a-zA-Z]{2,3}$")]),
    passwordInput : new FormControl('',Validators.required),
    cPasswordInput : new FormControl('',Validators.required)
    
  });
  

  constructor() { }

  ngOnInit() {
    
  }

 onSubmit() {
  
  var password:string=this.userForm.get('passwordInput').value;
  var cPassword:string=this.userForm.get('cPasswordInput').value;

  if(password.match(cPassword)){
    document.getElementById("errorDiv").setAttribute("style","display:none");
  }
  else{
    document.getElementById("errorDiv").setAttribute("style","display:block");
    document.getElementById("errorDiv").innerHTML="Passwords do not match";
    
  }

   if(this.userForm.invalid){
  document.getElementById("errorDiv").setAttribute("style","display:block");
   }
   else{
    document.getElementById("errorDiv").setAttribute("style","display:none");
   }
 }

 

}

// function confirmPassword(control:AbstractControl):{[key:string]:any} | null{
//   var cPassword:string=control.value;
//   var password:any=this.userForm.get('passwordInput').value;
  
//   if(cPassword.match(password.toString())){
//     return null;
//   }
//   else{
//     return {'confirmPassword':true};
//   }
//  }

 
 
 
// setPassword(control:AbstractControl):{[key:string]:any} | null{
  
//   this.mainpassword=control.value;

//   return null;
//  }
 
//  confirmPassword(control:AbstractControl):{[key:string]:any} | null{
//   var cPassword:string=control.value;
  
  
//   if(cPassword.match(this.mainpassword)){
//     return null;
//   }
//   else{
//     return {'confirmPassword':true};
//   }
//  }