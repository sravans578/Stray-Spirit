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

  ngOnInit() {
    this.rsub = this.router.events.subscribe(()=>
    {
      this.isUserAuthenticated=this.authService.getIsAuth();
    }
    )
    this.authListenerSubs=this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated=>
      {
        console.log(isAuthenticated);
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
