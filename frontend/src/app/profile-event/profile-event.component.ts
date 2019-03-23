import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { EventManagementService } from '../event-management.service';
import { AuthService } from '../auth.sevice';

@Component({
  selector: 'app-profile-event',
  templateUrl: './profile-event.component.html',
  styleUrls: ['./profile-event.component.scss']
})
export class ProfileEventComponent implements OnInit {

eventModel:any;
userId:string;
currentusers:any;

  constructor(
  private eventService: EventManagementService,
  private authSer: AuthService
  ) { }

  addEventsForm = new FormGroup({
    eventName: new FormControl(''),
    eventDescription: new FormControl(''),
    location: new FormControl(''),
    pincode: new FormControl(''),
    eventDate: new FormControl('')

  })
  ngOnInit() {
    this.userId= this.authSer.getUserId();
    this.authSer.getUserById(this.userId).subscribe(currentuser=>{
           this.currentusers = currentuser;
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

  addEvent(){
    this.eventModel={
      eventNameModel:this.addEventsForm.get('eventName').value,
      eventDescriptionModel:this.addEventsForm.get('eventDescription').value,
      locationModel:this.addEventsForm.get('location').value,
      pincodeModel:this.addEventsForm.get('pincode').value,
      eventDateModel:this.addEventsForm.get('eventDate').value,
      eventPicModel:this.imageSrc,
      eventUploaderModel:{
        eventUploaderId: this.userId ,
        eventUploaderfirstName: this.currentusers["firstName"],
        eventUploaderlastName: this.currentusers["lastName"]
      }
    }
    console.log(this.eventModel);

    this.eventService.saveEvents(this.eventModel);
    
  }

}
