// Marlee Donnelly (B00710138)

import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.sevice';

@Injectable({
  providedIn: 'root'
})

//Used to check for regular admin status when navigating to admin-only pages
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log("is admin: "+this.authService.getIsAdmin());
    return this.authService.getIsAdmin();
  }
}
