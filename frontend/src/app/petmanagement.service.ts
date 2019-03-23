import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetmanagementService {

  constructor(private http: HttpClient) { 

   }
   
  getPets(){
    //console.log("Inside getPets");
    return this.http.get('http://localhost:3000/pets/');
  }
  getPetById(id:any){
    return this.http.get('http://localhost:3000/pets/singlepet/'+id);
  }
  newPets(petModel:any){
    console.log(petModel.petNameModel);
    this.http.post('http://localhost:3000/pets/',petModel)
    .subscribe(responseData => {
      console.log("Pet added!");
    });
  }
  petUser(userId:any){
    return this.http.get('http://localhost:3000/pets/uploader/'+userId);
  }
  updatePets(petId:any, petData:any){
    console.log("From service",petData);
    this.http.put('http://localhost:3000/pets/update/'+petId,petData)
    .subscribe(response=>{
      console.log(response);
    });
  }
  deletePet(petId:any){
    this.http.delete('http://localhost:3000/pets/delete/'+petId)
    .subscribe(response=>{
      console.log(response);
    });
  }
}
