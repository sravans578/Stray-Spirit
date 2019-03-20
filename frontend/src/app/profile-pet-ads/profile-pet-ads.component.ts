import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LocationService } from '../location.service';
import { PetmanagementService } from '../petmanagement.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from "@angular/platform-browser";

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
  namePattern: string = '^([a-zA-Z_\-]*)$';

  public petData: any = {}

  constructor(
    private loc: LocationService, 
    private pets: PetmanagementService,
    private toastr: ToastrService,
    private titleService: Title
    ){  
      this.titleService.setTitle("My Ads - StraySpirit");
    }

  addPetsForm = new FormGroup({
    petName: new FormControl('', [Validators.required,Validators.pattern(this.namePattern)]),
    petCategory: new FormControl('', Validators.required),
    petGender: new FormControl('', Validators.required),
    petAge: new FormControl('', Validators.required),
    petHealth: new FormControl('', Validators.required),
    petCity: new FormControl('', Validators.required),
    petState: new FormControl('', Validators.required),
    petCountry: new FormControl('', Validators.required),
    petDescription: new FormControl('', Validators.required),
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
  
  private imageSrc: string = '';
//Image conversion to base64:  https://stackoverflow.com/questions/48216410/angular-4-base64-upload-component
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
    this.showSuccess();
  }
  
  showSuccess() {
    console.log("Toast0");
    this.toastr.success('Good Job!', 'Pet Added!', {
      timeOut: 5500,
      closeButton: true,
      progressBar: true
    });
  }

}
