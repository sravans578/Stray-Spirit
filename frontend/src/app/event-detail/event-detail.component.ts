import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventManagementService } from '../event-management.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.sevice';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  sub:any;
  event_id:string;
  singleEvent:any;
  currentUserId: string; 
  userDetails: any;
  isLoading: boolean = false;

  constructor(
    private toastr: ToastrService, private eventdetail: EventManagementService,private router: Router,
    private route: ActivatedRoute, private auth: AuthService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.sub = this.route.params.subscribe(params => {
      this.isLoading = false;
      this.event_id = params['id']; 
      console.log(this.event_id);});
this.eventdetail.getsingleEvent(this.event_id).subscribe( singleModel =>{
 this.singleEvent = singleModel;



});

this.currentUserId = this.auth.getUserId(); 
this.auth.getUserById(this.currentUserId).subscribe ( UserDet => {
  this.userDetails = UserDet;
} )
  }

  eventRegister(){
    this.eventdetail.sendEmail({'email': this.userDetails["email"], 'eventName': this.singleEvent.eventName, 
    'eventDate': this.singleEvent.eventDate,
    'eventVenue': this.singleEvent.location
     });
  
    this.toastr.success('You are registered for the event', 'SUCCESS!', {
      timeOut: 5500,
      closeButton: true,
      progressBar: true
    });
  }

}
