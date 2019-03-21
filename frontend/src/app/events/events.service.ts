import { Injectable } from '@angular/core';
//import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

import { Events } from './events.model'; 

@Injectable({providedIn: 'root'})
export class EventsService {
    private events: Events[] = [];
    //private eventsUpdated: new Subject<Events[]> ();

    constructor(private http: HttpClient) {}
   
    getEvents(){
        this.http.get('http://localhost:3000/api/events')
           .subscribe(() => {
               
           });
        ;
        //return [...this.events]; 
    }

    addEvent(id: string,  uploader: string, location: string, created: string, name: string, eventdesc: string) {
        const events: Events = {
        name: name, 
        eventdesc: eventdesc,
        id: id,
        location:location,
        created: created,
        uploader: uploader
        };
        this.events.push(events);

    }
}




