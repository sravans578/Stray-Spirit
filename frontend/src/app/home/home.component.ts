import { Component, OnInit } from '@angular/core';
import { EventManagementService } from '../event-management.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
allevents:any;
  constructor( 
    private eventser: EventManagementService, private toaster: ToastrService
  ) { }

  ngOnInit() {
    this.eventser.getEvents().subscribe(events => {
       this.allevents = events;
       console.log(this.allevents);
    })
  }

  register(){
    
    this.toaster.success('Your registeration was successful', 'Success', {
      timeOut: 5500,
      closeButton: true,
      progressBar: true
    });
  }

  share(){
    this.toaster.success('Event shared!!!', 'Success', {
      timeOut: 5500,
      closeButton: true,
      progressBar: true
    });
  }
}
