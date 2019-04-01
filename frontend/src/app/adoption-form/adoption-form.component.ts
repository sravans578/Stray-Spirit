import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.sevice';

@Component({
  selector: 'app-adoption-form',
  templateUrl: './adoption-form.component.html',
  styleUrls: ['./adoption-form.component.scss']
})
export class AdoptionFormComponent implements OnInit {

//https://stackblitz.com/edit/example-angular-material-stepper-single-form?file=app%2Fstepper-overview-example.html


currentUserId: string;
currentUserData: any;
services: {};

//get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }


thirdFormGroup = new FormGroup({
  petBehaviour: new FormControl('', [Validators.required]),
  petHome: new FormControl('', Validators.required),
  travel: new FormControl('', Validators.required),
  vacci: new FormControl('', Validators.required)
})

secondFormGroup = new FormGroup({
  adopterPetFamily: new FormControl('', [Validators.required]),
  firstPet: new FormControl('',Validators.required),
  curPet: new FormControl('',Validators.required),
  prevPet: new FormControl('',Validators.required)
})

firstFormGroup = new FormGroup({
  adopterFirstName: new FormControl('', [Validators.required]),
  adopterLastName: new FormControl('', [Validators.required]),
  adopterAge: new FormControl('', [Validators.required]),
  adopterAddress: new FormControl('', [Validators.required]),
  adopterEmail: new FormControl('', [Validators.required]),
  adopterPhone: new FormControl('', [Validators.required])
})


  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService
    ) { 

  }

  ngOnInit() {
    
    // this.formGroup = this._formBuilder.group({
    //   formArray: this._formBuilder.array([
    //     this._formBuilder.group({
    //       adopterFirstName: ['Test', Validators.required],
    //       petName: ['', Validators.required],
    //       adopterLastName: ['', Validators.required],
    //       adopterAge: ['', Validators.required],
    //       adopterAddress: ['', Validators.required],
    //       adopterEmail: ['', Validators.required],
    //       adopterPhone: ['', Validators.required]
    //     }),
    //     this._formBuilder.group({
    //       adopterPetFamily: ['', Validators.required],
    //       firstPet: ['', Validators.required]
    //     }),
    //     this._formBuilder.group({
    //       petBehaviour: ['', Validators.required],
    //       petHome: ['', Validators.required]
    //     }),
    //   ])
    // });

    this.currentUserId=this.authService.getUserId();
    this.authService.getUserById(this.currentUserId).subscribe( userData=>{
      this.currentUserData=userData;
      this.firstFormGroup.controls.adopterFirstName.patchValue(this.currentUserData["firstName"]);
      
      this.firstFormGroup.controls.adopterLastName.patchValue(this.currentUserData["lastName"]);
    
    
      this.firstFormGroup.controls.adopterFirstName.patchValue(this.currentUserData["firstName"]);
    
      this.firstFormGroup.controls.adopterAddress.patchValue("Hardcoded address");
    
      this.firstFormGroup.controls.adopterEmail.patchValue(this.currentUserData["email"]);
    
      this.firstFormGroup.controls.adopterPhone.patchValue(this.currentUserData["phoneNumber"]);
    
     // this.formArray.value["0"]["adopterFirstName"]=this.currentUserData["firstName"];
      //console.log(this.formArray.value["0"]["adopterFirstName"]);
    })


    // this.firstFormGroup = this._formBuilder.group({
    //   firstNameCtrl: ['', Validators.required],
    //   lastNameCtrl: ['', Validators.required],
    // });

    // this.secondFormGroup = this._formBuilder.group({
    //   emailCtrl: ['', Validators.email]
    // });
  }
  adoptPet(){
    console.log(this.secondFormGroup.get('firstPet').value);
    console.log(this.secondFormGroup.get('curPet').value);
    console.log(this.secondFormGroup.get('prevPet').value);
    console.log(this.secondFormGroup.get('adopterPetFamily').value);
    console.log(this.firstFormGroup.get('adopterFirstName').value);
    console.log(this.firstFormGroup.get('adopterLastName').value);
    console.log(this.firstFormGroup.get('adopterAge').value);
    console.log(this.firstFormGroup.get('adopterAddress').value);
    console.log(this.firstFormGroup.get('adopterEmail').value);
    console.log(this.firstFormGroup.get('adopterPhone').value);
    console.log(this.thirdFormGroup.get('travel').value);
    console.log(this.thirdFormGroup.get('vacci').value);
    console.log(this.thirdFormGroup.get('petBehaviour').value);
    console.log(this.thirdFormGroup.get('petHome').value);
    
  }

}
