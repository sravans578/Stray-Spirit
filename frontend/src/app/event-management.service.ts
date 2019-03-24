//Authored by Aparna Sridhar [B00799570]
import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventManagementService {

  constructor(
    private http: HttpClient
  ) { }
// POST request to the server to store the event posting
  saveEvents(model:any){
    console.log(model);
    this.http.post('http://localhost:3000/event/',model)
    .subscribe(responseData => {
      console.log("Event added!");
    });
  }
// Retrieves all the events from the database
  getEvents(){
    return this.http.get('http://localhost:3000/event/');
  }

 // Retrieved single event based on the Event Id passed in GET method 
  getsingleEvent( id: string){
      return this.http.get('http://localhost:3000/event/singleevent/' + id);
  }
}

