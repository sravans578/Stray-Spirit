import { Component, OnInit, Input } from '@angular/core';
import { Events } from '../events/events.model';
import { EventsService } from '../events/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  events = [
    { title: "Event One", content: "This is my first Event"},
    { title: "Event Two", content: "This is my Second Event"},
    { title: "Event Three", content: "This is my Third Event"},
    

  
  ];

  /*@Input() events: Events[] = []; 

  constructor(public eventsService: EventsService) {}*/

  ngOnInit(){
    //this.events = this.eventsService.getEvents();
  }
}
