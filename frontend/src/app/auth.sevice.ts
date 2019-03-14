import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"

@Injectable({providedIn:"root"})
export class AuthService{
    private token:string;
    constructor(private http:HttpClient,private router: Router){}
    
    getToken(){
       
        return this.token;
    }

     createUser( userData:any ){
        this.http.post("http://localhost:3000/user/signup_user",userData)
        .subscribe(response=>{
            console.log(response);
        });
    }

     createOrganizationUser( 
         orgData:any
    ){
        this.http.post("http://localhost:3000/user/signup_org",orgData)
        .subscribe(response=>{
            console.log(response);
        });
    }

    userLogin(loginData:any)
    {
        
        this.http.post<{token:string}>("http://localhost:3000/user/login",loginData)
        .subscribe(response =>
            {
                const token=response.token;
                this.token=token;
                console.log(this.token);
                setTimeout(()=>{  
                    this.router.navigate(['/profile']);
                  }, 1000);
            }
        )
    }

    orgLogin(orgLoginData:any)
    {
        
        this.http.post<{token:string}>("http://localhost:3000/user/orgLogin",orgLoginData)
        .subscribe(response =>
            {
                const token=response.token;
                this.token=token;
                console.log(this.token);
                setTimeout(()=>{  
                    this.router.navigate(['/profile']);
                  }, 1000);
            }
        )
    }
    
}
