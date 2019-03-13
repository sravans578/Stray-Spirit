import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profile-pet-ads',
  templateUrl: './profile-pet-ads.component.html',
  styleUrls: ['./profile-pet-ads.component.scss']
})
export class ProfilePetAdsComponent implements OnInit {

  constructor() { }
  addPetsForm = new FormGroup({
    petName: new FormControl('', Validators.required),
    petCategory: new FormControl('', Validators.required),
    petGender: new FormControl('', Validators.required),
    petHealth: new FormControl('', Validators.required),
    petCity: new FormControl('', Validators.required),
    petState: new FormControl('', Validators.required),
    petCountry: new FormControl('', Validators.required)
  })
  ngOnInit() {
  }
  addPet(){
    console.log("Hi");

  }

}
