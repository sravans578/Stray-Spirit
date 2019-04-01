import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  constructor(private http: HttpClient) { }

  newAdoption(adoptionModel:any){
    console.log(adoptionModel);
    this.http.post('http://localhost:3000/adoption/',adoptionModel)
    .subscribe(responseData =>{
      console.log("Adoption Request Sent!");
    })
  }

}
