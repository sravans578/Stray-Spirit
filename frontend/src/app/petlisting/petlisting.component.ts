// Developer - Dheeraj Varshney B00808467 dh301823@dal.ca
import { Component, OnInit } from '@angular/core';
// Using IPAPI to get users current location, available at - https://ipapi.co/
import { LocationService } from '../location.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { PetmanagementService } from '../petmanagement.service';
import {Title} from "@angular/platform-browser";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-petlisting',
  templateUrl: './petlisting.component.html',
  styleUrls: ['./petlisting.component.scss']
})
export class PetlistingComponent implements OnInit {
  pets: any = [];

  api_location: any;
  pet_newData: [];
  all_Pets: any;
  current_location: any;
  comma: string =', ';
  label_value: any;
  city: any;
  currentCity: string;
  currentState: string;
  currentCountry: string;
  inputLocation: string;
  searchLocation = new FormControl();
  mobile:boolean =false;
  filteredLocation: any;
  searchLocationTerm: any;
  isLoading: boolean = false;
  
  filterPetsForm = new FormGroup({
    searchLocation: new FormControl(''),
    testSearch: new FormControl('') 
  });

  constructor(
    private loc: LocationService, 
    private petService: PetmanagementService,
    private toastr: ToastrService, 
    private titleService:Title) { 
      this.titleService.setTitle("Pets Availble for Adoption near you - StraySpirit");
  }

  ngOnInit() {
  
    this.loc.getCurrentLocation().subscribe(currentData =>{
      //console.log(currentData);
      this.current_location=currentData;
      this.currentCity=currentData.city;
      this.currentState=currentData.region_code;
      this.currentCountry=currentData.country_name;
      //console.log(this.currentCity);
      this.inputLocation = this.currentCity+this.comma+this.currentState+this.comma+this.currentCountry;
      this.searchLocation.patchValue(this.inputLocation);
    })
    this.isLoading = true;
    this.petService.getPets().subscribe(petData =>{
      //console.log(petData);
      this.isLoading=false;
      this.all_Pets=petData;
      this.pet_newData=this.all_Pets.filter(filterPets =>{
        return filterPets.petLocation.petCity.includes(this.currentCity) && filterPets.petLocation.petState.includes(this.currentState) && filterPets.petLocation.petCountry.includes(this.currentCountry);
      });
      console.log(this.all_Pets);
      console.log(this.pet_newData);
    })
  
}
filterPet(searchTerm){
  //console.log(searchTerm);
  this.searchLocationTerm = searchTerm.split(',');
  this.searchLocationTerm[0] =this.searchLocationTerm[0].replace(/\s/g, "");
  this.searchLocationTerm[1] =this.searchLocationTerm[1].replace(/\s/g, "");
  this.searchLocationTerm[2] =this.searchLocationTerm[2].replace(/\s/g, "");
  //console.log(this.searchLocationTerm);
}
onSearch(){
  if(!this.searchLocationTerm){
    console.log("No search term!");
    this.toastr.error('Select different Location or pets are already listed for current location', 'Error!', {
      timeOut: 5500,
      closeButton: true,
      progressBar: true
    });
  }
  else{
    this.isLoading=true;
    setTimeout(()=>{  
      this.isLoading=false;
       }, 2000);
    this.pet_newData = this.all_Pets.filter(filterPets =>{
      
      return filterPets.petLocation.petCity.includes(this.searchLocationTerm[0]) && filterPets.petLocation.petState.includes(this.searchLocationTerm[1]) && filterPets.petLocation.petCountry.includes(this.searchLocationTerm[2]);
    })
  }
  //console.log("Pet data after filter",this.pet_newData);
}
onKeydown(event:any) {
    this.city=event.target.value;
    if(this.city.length>2){
    this.loc.getLocation(this.city).subscribe(data =>{
      //console.log(data);
      this.api_location = data;
      //console.log(this.api_location);
    })
  }

}
reloadPage(){
  window.location.reload();
}

}


