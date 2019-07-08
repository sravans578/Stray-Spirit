import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPersonalUsers(){
    //return all users who don't have an organization account
    //MARLEE: check path
    return this.http.get('http://localhost:3000/user');
  }
  getOrganizationUsers(){
    //return all users who have an organization account
    //MARLEE: check path
    return this.http.get('http://localhost:3000/users/');
  }
  getAdminUsers(){
    //return all users, then filter by those who are admins
    //MARLEE: check path
    return this.http.get('http://localhost:3000/users/');
  }
}
