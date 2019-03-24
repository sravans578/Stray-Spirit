// Developed by Aadesh Shah B00802629

import { Component, OnInit } from '@angular/core';

import {Title} from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';
import { PetmanagementService } from '../petmanagement.service';
import { LocationService } from '../location.service';
import { ToastrService } from 'ngx-toastr';

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
  isLoading: boolean = false;
  isPetsLoading: boolean = false;

  constructor(
    private titleService:Title,
    private loc: LocationService,
    private petService: PetmanagementService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
    this.titleService.setTitle("Pet profile");
   }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.profile_id = params['id'];  //Getting id of the pet from route
      console.log(this.profile_id);
   });
   console.log(this.profile_id);
   this.isLoading=true;
   //getting pet details by petid
   this.petService.getPetById(this.profile_id).subscribe(petData =>{
     this.isLoading=false;
     console.log(petData);
     this.petDetails = petData;

   },error =>{
     console.log("Not found!"); // if pet is not found with the id passed
     this.router.navigate(['/pet-not-found']);
   });
   
   this.loc.getCurrentLocation().subscribe(currentData =>{
    this.currentCity=currentData.city;
    this.currentState=currentData.region_code;
    this.currentCountry=currentData.country_name;
   })
   console.log(this.petDetails);
   this.isPetsLoading=true;
   this.petService.getPets().subscribe(petData =>{
    setTimeout(()=>{  
      this.isPetsLoading=false;
       }, 2000);
    this.all_Pets=petData;
    this.pet_newData=this.all_Pets.filter(filterPets =>{
      return filterPets.petLocation.petCity.includes(this.currentCity) && filterPets.petLocation.petState.includes(this.currentState) && filterPets.petLocation.petCountry.includes(this.currentCountry);
    });
  })
  }

  adopt(){
    this.toastr.success('Adoption request sent! (Just a UI)', 'SUCCESS!', {
      timeOut: 5500,
      closeButton: true,
      progressBar: true
    });
  }

}
