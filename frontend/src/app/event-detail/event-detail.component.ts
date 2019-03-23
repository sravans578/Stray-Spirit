//Authored by Aparna Sridhar [B00799570]
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventManagementService } from '../event-management.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  sub:any;
  event_id:string;
  singleEvent:any;

  constructor(
    private toastr: ToastrService, private eventdetail: EventManagementService,private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.event_id = params['id']; 
      console.log(this.event_id);});
this.eventdetail.getsingleEvent(this.event_id).subscribe( singleModel =>{
 this.singleEvent = singleModel;
});
  }
  //Event registeration toast message
  eventRegister(){
    this.toastr.success('You are registered for the event', 'SUCCESS!', {
      timeOut: 5500,
      closeButton: true,
      progressBar: true
    });
  }

}
