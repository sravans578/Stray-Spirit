import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  city: string;
  region: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {
   }
   getLocation(){
    return this.http.get<Location>('https://ipapi.co/json/')
  }
}
