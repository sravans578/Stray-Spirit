// Developer : Aditya Gadhvi (B00809664)

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.sevice';
import { Subscription } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit,OnDestroy {
  private authListenerSubs:Subscription;
  private rsub;
  public isUserAuthenticated=false;
  constructor(private authService:AuthService, private router:Router) {

   }

  //This method will be executed when the nav will be launched for the first time. It will check whether the user is logged in or not. If so, it will set isUserAuthenticated to true, or else set to false. 
  ngOnInit() {
    this.isUserAuthenticated=this.authService.getIsAuth();
    this.authListenerSubs=this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated=>
      {
      this.isUserAuthenticated=isAuthenticated;
    }
    );
 
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

  //This method will get executed when the user will click on the logout.
  onLogout(){
    this.authService.logout();
  }

}
