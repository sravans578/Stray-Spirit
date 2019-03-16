import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetmanagementService {

  constructor(private http: HttpClient) { 

   }
   
  getPets(){
    console.log("Inside getPets");
    return this.http.get('http://localhost:3000/pets/');
  }
  newPets(petModel:any){
    console.log(petModel.petNameModel);
    this.http.post('http://localhost:3000/pets/',petModel)
    .subscribe(responseData => {
      console.log("Pet added!");
    });
  }
}
