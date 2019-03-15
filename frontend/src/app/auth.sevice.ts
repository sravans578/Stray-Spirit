import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"
import { Subject } from 'rxjs';

@Injectable({providedIn:"root"})
export class AuthService{
    private token:string;
    private isAuthenticated=false;
    private authStatusListener=new Subject<boolean>();
    constructor(private http:HttpClient,private router: Router){}
    
    getToken(){
       
        return this.token;
    }

    getIsAuth(){
       return this.isAuthenticated;
    }

    getAuthStatusListener(){
        return this.authStatusListener.asObservable();
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

                if(token !== null && token !== ''){
                    this.isAuthenticated=true;
                this.authStatusListener.next(true);
                this.router.navigate(['/profile']);
                }
                console.log(this.token);
                
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
                if(token !== null && token !== ''){
                    this.isAuthenticated=true;
                this.authStatusListener.next(true);
                this.router.navigate(['/profile']);
                }
                
                console.log(this.token);
               
            }
        )
    }

    logout(){
        this.token=null;
        this.isAuthenticated=false;
        this.authStatusListener.next(false);
        this.router.navigate(['/']);
    }
    
}
