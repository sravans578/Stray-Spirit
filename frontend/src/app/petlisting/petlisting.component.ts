// Developer - Dheeraj Varshney B00808467 dh301823@dal.ca
import { Component, OnInit } from '@angular/core';
// Using IPAPI to get users current location, available at - https://ipapi.co/
import { LocationService } from '../location.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

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
  
  constructor(private loc: LocationService) { }

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

    this.loc.getPets().subscribe(petData =>{
      console.log(petData);
      this.pet_newData=petData;
    })
  this.pets =
  
  [
    
    { 
      /** Image is taken from https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?cs=srgb&dl=adorable-animal-breed-356378.jpg&fm=jpg  */
      
       id:1, petName:"pet1" , petImage : "dog1.jpg", petDesc: "petInfo", petCity: "Mumbai", petState: "MH", petCountry: "India"
    },
    {
      /** Image is taken from https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?cs=srgb&dl=animal-corgi-dog-58997.jpg&fm=jpg */
      id:2, petName:"pet1" , petImage : "dog2.jpg", petDesc: "petInfo", petCity: "Halifax", petState: "NS", petCountry: "Canada"
    },
    {
      /** Image is taken from https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?cs=srgb&dl=adorable-animal-canine-257540.jpg&fm=jpg */
      id:3, petName:"pet1" , petImage : "dog3.jpg", petDesc: "petInfo", petCity: "Mumbai", petState: "MH", petCountry: "India"
    },
    {
      /**Image is taken from https://as1.ftcdn.net/jpg/01/06/68/72/500_F_106687254_CFfnEhqM4cEx42XU5BexLccLttBrWpyZ.jpg */
      id:4, petName:"pet1" , petImage : "dog4.jpg", petDesc: "petInfo", petCity: "Mumbai", petState: "MH", petCountry: "India"
    },
    {
      /** Image is taken from https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_1280.jpg */
      id:5, petName:"pet1" , petImage : "dog5.jpg", petDesc: "petInfo", petCity: "Mumbai", petState: "MH", petCountry: "India"
    },
    {
      /** Image is taken from https://cdn.pixabay.com/photo/2016/11/23/18/06/adorable-1854119_1280.jpg */
      id:6, petName:"pet1" , petImage : "dog6.jpg", petDesc: "petInfo", petCity: "Mumbai", petState: "MH", petCountry: "India"
    },
    {
      /** Image is taken from https://images-na.ssl-images-amazon.com/images/I/71gwRbpfLoL._SY435_.jpg  */
      id:7, petName:"pet1" , petImage : "cat1.jpg", petDesc: "petInfo", petCity: "Mumbai", petState: "MH", petCountry: "India"
    },
    {
      /** Image is taken from https://pixabay.com/en/photos/cat/cat.jpg */
      id:8, petName:"pet1" , petImage : "cat2.jpg", petDesc: "petInfo", petCity: "Mumbai", petState: "MH", petCountry: "India"
    }

  ];
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


