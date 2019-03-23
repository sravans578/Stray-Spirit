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

 // Posts all the form data to the database model 
  saveEvents(model:any){
    console.log(model);
    // this.http.post('http://localhost:3000/event/',model)
    // .subscribe(responseData => {
    //   console.log("Event added!");
    // });
  }
 //Gets all the events in the database
  getEvents(){
    return this.http.get('http://localhost:3000/event/');
  }

  // Gets the event by taking id as a parameter
  getsingleEvent( id: string){
      return this.http.get('http://localhost:3000/event/singleevent/' + id);
  }

  
}

