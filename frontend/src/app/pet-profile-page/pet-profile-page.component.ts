// Developer: Aditya Gadhvi (B00809664) (ad742065@dal.ca)

import { Component, OnInit } from '@angular/core';

import {Title} from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';
import { PetmanagementService } from '../petmanagement.service';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-pet-profile-page',
  templateUrl: './pet-profile-page.component.html',
  styleUrls: ['./pet-profile-page.component.scss'],
  
})
export class PetProfilePageComponent implements OnInit {

  profile_id: string;
  sub: any;
  petDetails: { };
  all_Pets: any;
  pet_newData: any;
  petDetailCity: string;
  petDetailCountry: string;
  petDetailState: string;
  petDetailCategory: string;
  currentCity: string;
  currentState: string;
  currentCountry: string;

  constructor(
    private titleService:Title,
    private loc: LocationService,
    private petService: PetmanagementService,
    private router: Router,
    private route: ActivatedRoute) {
    this.titleService.setTitle("Pet profile");
   }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.profile_id = params['id']; 
      console.log(this.profile_id);
   });
   console.log(this.profile_id);
   this.petService.getPetById(this.profile_id).subscribe(petData =>{
     console.log(petData);
     this.petDetails = petData;

   },error =>{
     console.log("Not found!");
     this.router.navigate(['/pet-not-found']);
   });
   
   this.loc.getCurrentLocation().subscribe(currentData =>{
    //console.log(currentData);
    this.currentCity=currentData.city;
    this.currentState=currentData.region_code;
    this.currentCountry=currentData.country_name;
   })
   console.log(this.petDetails);
   this.petService.getPets().subscribe(petData =>{
    //console.log(petData);
    this.all_Pets=petData;
    this.pet_newData=this.all_Pets.filter(filterPets =>{
      return filterPets.petLocation.petCity.includes(this.currentCity) && filterPets.petLocation.petState.includes(this.currentState) && filterPets.petLocation.petCountry.includes(this.currentCountry);
    });
  })
  }

}
