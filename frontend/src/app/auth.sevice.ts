import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';

@Injectable({providedIn:"root"})
export class AuthService{
    
    constructor(private http:HttpClient){}
    
    createUser( firstName:string,
        lastName:string,
        phoneNumber: number,
        email: string,
        password: string,
         org_name:string,
         org_email:string,
         org_phoneNumber:number,
         registrationNumber:string,
         org_password:string
        ){
         const authData:AuthData={ firstName:firstName,
             lastName:lastName,
             phoneNumber: phoneNumber,
            email: email,
             password: password,
             org_name:org_name,
             org_email:org_email,
             org_phoneNumber:org_phoneNumber,
             registrationNumber:registrationNumber,
             org_password:org_password};

        //var userData=[firstName,lastName,phoneNumber,email,password];

        this.http.post("http://localhost:3000/user/signup_user",authData)
        .subscribe(response=>{
            console.log(response);
        });
    }

    createOrganizationUser( firstName:string,
        lastName:string,
        phoneNumber: number,
        email: string,
        password: string,
        org_name:string,
        org_email:string,
        org_phoneNumber:number,
        registrationNumber:string,
        org_password:string){
        const authData:AuthData={ firstName:firstName,
            lastName:lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            org_name:org_name,
            org_email:org_email,
            org_phoneNumber:org_phoneNumber,
            registrationNumber:registrationNumber,
            org_password:org_password};
        this.http.post("http://localhost:3000/user/signup_org",authData)
        .subscribe(response=>{
            console.log(response);
        });
    }

    
}
