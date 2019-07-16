import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FAQService {

  constructor(private http:HttpClient,private router: Router,private toaster:ToastrService) { }

   // Method for passing feedback entered by a user
   sendFeedback (FeedbackPost:any){
    console.log(FeedbackPost);
    // POST call to backend server
    this.http.post("http://localhost:3000/feedback/submitFeedback",FeedbackPost)
    .subscribe(response=>{

        this.toaster.success('Feedback submitted', 'SUCCESS!', {
            timeOut: 5500,
            closeButton: true,
            progressBar: true
          });
       
    });
}

// METHOD FOR Fetching all FAQs 
getFaq (){

    return this.http.get("http://localhost:3000/feedback/getFAQ")
    
}
}
