import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LocationService } from '../location.service';
import { PetmanagementService } from '../petmanagement.service';

@Component({
  selector: 'app-profile-pet-ads',
  templateUrl: './profile-pet-ads.component.html',
  styleUrls: ['./profile-pet-ads.component.scss']
})
export class ProfilePetAdsComponent implements OnInit {

  currentCity: string;
  currentState: string;
  currentCountry: string;
  current_location: string;
  imagePreview: any;

  public petData: any = {}

  constructor(private loc: LocationService, private pets: PetmanagementService) { }

  addPetsForm = new FormGroup({
    petName: new FormControl(''),
    petCategory: new FormControl(''),
    petGender: new FormControl(''),
    petAge: new FormControl(''),
    petHealth: new FormControl(''),
    petCity: new FormControl(''),
    petState: new FormControl(''),
    petCountry: new FormControl(''),
    petDescription: new FormControl(''),
    petPic: new FormControl('')
  })
  ngOnInit() {
    this.loc.getCurrentLocation().subscribe(currentData =>{
      console.log(currentData);
      this.currentCity=currentData.city;
      this.currentState=currentData.region_code;
      this.currentCountry=currentData.country_name;
      console.log(this.currentCity);
      this.addPetsForm.controls.petCity.patchValue(currentData.city);
      this.addPetsForm.controls.petState.patchValue(this.currentState);
      this.addPetsForm.controls.petCountry.patchValue(this.currentCountry);
    })
    
    this.pets.getPets().subscribe(petData =>{
      console.log(petData);
    })
  }
  // onImagePicked(event: Event){
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.addPetsForm.patchValue({petPic: file});
  //   this.addPetsForm.get('petPic').updateValueAndValidity();
  //   console.log(file);
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imagePreview = reader.result;
  //   };
  //   reader.readAsDataURL(file);

  // }
  private imageSrc: string = '';

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc);
  }
  addPet(){
     this.petData = {
      petNameModel: this.addPetsForm.get('petName').value,
      petCategoryModel: this.addPetsForm.get('petCategory').value,
      petGenderModel: this.addPetsForm.get('petGender').value,
      petAgeModel: this.addPetsForm.get('petAge').value,
      petHealthModel: this.addPetsForm.get('petHealth').value,
      petLocationModel:{
        petCityModel: this.addPetsForm.get('petCity').value,
      petStateModel: this.addPetsForm.get('petState').value,
      petCountryModel: this.addPetsForm.get('petCountry').value
      },
      petDescriptionModel: this.addPetsForm.get('petDescription').value,
      petPicModel: this.imageSrc
    }
    console.log(this.petData);
    this.pets.newPets(this.petData);
  }

}
