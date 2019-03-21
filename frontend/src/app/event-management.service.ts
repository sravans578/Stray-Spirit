import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventManagementService {

  constructor(
    private http: HttpClient
  ) { }

  saveEvents(model:any){
    console.log(model);
    this.http.post('http://localhost:3000/event/',model)
    .subscribe(responseData => {
      console.log("Event added!");
    });
  }

  getEvents(){
    return this.http.get('http://localhost:3000/event/');
  }
}
