import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetmanagementService } from '../petmanagement.service';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.sevice';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-pets',
  templateUrl: './edit-pets.component.html',
  styleUrls: ['./edit-pets.component.scss']
})
export class EditPetsComponent implements OnInit {

  sub: any;
  petId: string;
  petData: any;
  namePattern: string = '^([a-zA-Z_\-]*)$';
  imageSrc: string;
  currentUserId: string;
  currentUser: any;

  constructor(
    private titleService:Title,
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetmanagementService,
    private authService: AuthService,
    private toastr: ToastrService
    ) {
      this.titleService.setTitle("Edit Pet Profile - StraySpirit");
     }


  editPetsForm = new FormGroup({
    petName: new FormControl('', [Validators.required,Validators.pattern(this.namePattern)]),
    petCategory: new FormControl('', Validators.required),
    petGender: new FormControl('', Validators.required),
    petAge: new FormControl('', Validators.required),
    petHealth: new FormControl('', Validators.required),
    petCity: new FormControl('', Validators.required),
    petState: new FormControl('', Validators.required),
    petCountry: new FormControl('', Validators.required),
    petDescription: new FormControl('', Validators.required),
    adoptionStatus: new FormControl('', Validators.required),
    petPic: new FormControl('')
  })

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.petId = params['id']; 
      console.log(this.petId);
      this.currentUserId=this.authService.getUserId();
      console.log("This id has logged in: ",this.currentUserId);
      this.authService.getUserById(this.currentUserId).subscribe(currentUserData =>{
        this.currentUser=currentUserData;
        console.log("Logged in user details:",this.currentUser);
      })
   });

  this.petService.getPetById(this.petId).subscribe(petDetail=>{
    this.petData=petDetail;
    console.log(this.petData);
    this.editPetsForm.controls.petName.patchValue(this.petData["petName"]);
    this.editPetsForm.controls.petCategory.patchValue(this.petData["petCategory"]);
    this.editPetsForm.controls.petGender.patchValue(this.petData["petGender"]);
    this.editPetsForm.controls.petAge.patchValue(this.petData["petAge"]);
    this.editPetsForm.controls.petCity.patchValue(this.petData["petLocation"]["petCity"]);
    this.editPetsForm.controls.petState.patchValue(this.petData["petLocation"]["petState"]);
    this.editPetsForm.controls.petCountry.patchValue(this.petData["petLocation"]["petCountry"]);
    this.editPetsForm.controls.petDescription.patchValue(this.petData["petDescription"]);
    this.editPetsForm.controls.petHealth.patchValue(this.petData["petHealth"]);     
    this.editPetsForm.controls.adoptionStatus.patchValue(this.petData["adoptionStatus"]);     
    this.imageSrc=this.petData["petPic"];
  },error=>{
    this.router.navigate(['/pet-not-found']);
  })

  }
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

  editPet(){
    this.petData = {
     petNameModel: this.editPetsForm.get('petName').value,
     petCategoryModel: this.editPetsForm.get('petCategory').value,
     petGenderModel: this.editPetsForm.get('petGender').value,
     petAgeModel: this.editPetsForm.get('petAge').value,
     petHealthModel: this.editPetsForm.get('petHealth').value,
     petAdoptionStatusModel: this.editPetsForm.get('adoptionStatus').value,
     petLocationModel:{
       petCityModel: this.editPetsForm.get('petCity').value,
     petStateModel: this.editPetsForm.get('petState').value,
     petCountryModel: this.editPetsForm.get('petCountry').value
     },
     petDescriptionModel: this.editPetsForm.get('petDescription').value,
     petPicModel: this.imageSrc,
     petUploaderModel: {
       petUploaderId: this.currentUserId,
       petUploaderfirstName: this.currentUser["firstName"],
       petUploaderlastName: this.currentUser["lastName"]
       }
   }
   console.log(this.petData);
   this.petService.updatePets(this.petId,this.petData);
   this.toastr.success('Pet Profile Edited!', 'SUCCESS!', {
    timeOut: 5500,
    closeButton: true,
    progressBar: true
  });
  setTimeout(()=>{  
    this.router.navigate(['/profile/my-pet-ads']);
     }, 2000);
  
 }
}
