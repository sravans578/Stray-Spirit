// Developer - Dheeraj Varshney B00808467 dh301823@dal.ca
import { Component, OnInit } from '@angular/core';
// Using IPAPI to get users current location, available at - https://ipapi.co/
import { LocationService } from '../location.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { PetmanagementService } from '../petmanagement.service';

@Component({
  selector: 'app-petlisting',
  templateUrl: './petlisting.component.html',
  styleUrls: ['./petlisting.component.scss']
})
export class PetlistingComponent implements OnInit {
  pets: any = [];

  api_location: any;
  pet_newData: any;
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
  
  constructor(private loc: LocationService, private petService: PetmanagementService) { }

  ngOnInit() {
  
    this.loc.getCurrentLocation().subscribe(currentData =>{
      console.log(currentData);
      this.current_location=currentData;
      this.currentCity=currentData.city;
      this.currentState=currentData.region_code;
      this.currentCountry=currentData.country_name;
      console.log(this.currentCity);
      this.inputLocation = this.currentCity+this.comma+this.currentState+this.comma+this.currentCountry;
      this.searchLocation.patchValue(this.inputLocation);
    })

    this.petService.getPets().subscribe(petData =>{
      console.log(petData);
      this.pet_newData=petData;
    })
  
}
onKeydown(event:any) {
    this.city=event.target.value;
    if(this.city.length>2){
    this.loc.getLocation(this.city).subscribe(data =>{
      console.log(data);
      this.api_location = data;
      console.log(this.api_location);
      // for (this.i = 0; this.i < 5; this.i++) {
      //   this.city=this.api_location.suggestions[this.i].label;
      //   console.log(this.city);
      // }
    })
  }

}

onClick(){
  window.location.href = '/pet-profile-page';
}
}


