import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.sevice';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit,OnDestroy {
  private authListenerSubs:Subscription;
  public isUserAuthenticated=false;
  constructor(private authService:AuthService) {

   }

  ngOnInit() {
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

  onLogout(){
    console.log("reached");
    this.authService.logout();
  }

}
