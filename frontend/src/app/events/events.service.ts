import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Events } from './events.model'; 

@Injectable({providedIn: 'root'})
export class EventsService {
    private events: Event[] = [];
    
    getEvents(){
        return [...this.events]; 
    }

    /*addEvent(title: string, content: string) {
        const event: Event = {title: title, content: content};
        this.events.push(event);

    }*/
}




