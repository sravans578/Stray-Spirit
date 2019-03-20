import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({providedIn:"root"})
export class AuthService{
    private token:string;
    private isAuthenticated=false;
    private userId:string;
   private authStatusListener=new Subject<boolean>();
    constructor(private http:HttpClient,private router: Router,private toaster:ToastrService){}
    
    getToken(){
       
        return this.token;
    }

    getIsAuth(){
       return this.isAuthenticated;
    }

    getUserId(){
        return this.userId;
    }


    getAuthStatusListener(){
        return this.authStatusListener.asObservable();
    }

     createUser( userData:any ){
        this.http.post("http://localhost:3000/user/signup_user",userData)
        .subscribe(response=>{
            console.log(response);
           
            this.toaster.success('Profile created!!!', 'SUCCESS!', {
                timeOut: 5500,
                closeButton: true,
                progressBar: true
              });
              setTimeout(()=>{  
                this.router.navigate(['/login']);
                 }, 3000);
        });
       
    }

     createOrganizationUser( 
         orgData:any
    ){
        this.http.post("http://localhost:3000/user/signup_org",orgData)
        .subscribe(response=>{
            console.log(response);
            this.toaster.success('Profile created!!!', 'SUCCESS!', {
                timeOut: 5500,
                closeButton: true,
                progressBar: true
              });
              setTimeout(()=>{  
                this.router.navigate(['/login']);
                 }, 3000);
            
        });
    }

    userLogin(loginData:any)
    {
        
        this.http.post<{token:string;userId:string}>("http://localhost:3000/user/login",loginData)
        .subscribe(response =>
            {
                const token=response.token;
                this.token=token;
                if(token !== null && token !== ''){
                    this.isAuthenticated=true;
                    this.userId=response.userId;
                    this.authStatusListener.next(true);
                    this.saveAuthData(token,this.userId);
                    this.router.navigate(['/profile']);
                    

                }
                console.log(this.token);
                
            },error=>{
                this.toaster.error('Invalid credentials!!!', 'ERROR!', {
                    timeOut: 5500,
                    closeButton: true,
                    progressBar: true
                  });
                  
            }
        )
    }

    orgLogin(orgLoginData:any)
    {
        
        this.http.post<{token:string;userId:string}>("http://localhost:3000/user/orgLogin",orgLoginData)
        .subscribe(response =>
            {
                const token=response.token;
                this.token=token;
                if(token !== null && token !== ''){
                this.isAuthenticated=true;
                this.userId=response.userId;
                this.authStatusListener.next(true);
                this.saveAuthData(token,this.userId);
                this.router.navigate(['/profile']);
                }
                
                console.log(this.token);
               
            },error=>{
                this.toaster.error('Invalid credentials!!!', 'ERROR!', {
                    timeOut: 5500,
                    closeButton: true,
                    progressBar: true
                  });
                }
        )
    }

    autoAuthUser(){
        // const authInformation=this.getAuthData();
        // if(this.token){
        //     //this.token=authInformation.token;
        //     this.isAuthenticated=true;
        // this.userId=authInformation.userId;
        // this.authStatusListener.next(true);
        // }
        // else{
        //     return null;
        // }

        const authInformation=this.getAuthData();
        if(authInformation.token){
            this.token=authInformation.token;
            this.isAuthenticated=true;
        this.userId=authInformation.userId;
        this.authStatusListener.next(true);
        }
        else{
            return null;
        }
        
    }

    logout(){
        this.token=null;
        this.isAuthenticated=false;
        this.userId=null;
        this.authStatusListener.next(false);
        this.clearAuthData();
        this.router.navigate(['/']);
        
    }

    getUserById(loggedInUser:any){
        return this.http.get("http://localhost:3000/user/"+loggedInUser);
       
    }

    private saveAuthData(token:string,userId:string){
        localStorage.setItem("token",token);
        localStorage.setItem("userId",userId);
        

    }

    private getAuthData(){
        const token=localStorage.getItem("token");
        const userId=localStorage.getItem("userId");
        if(token==="" && token===null){
            return;
        }
        return{
            token:token,
            userId:userId
        }
    }
    
    private clearAuthData(){
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
    }
}