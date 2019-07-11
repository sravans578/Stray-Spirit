// Author: Marlee Donnelly (B00710138)

import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {AuthService} from "../auth.sevice";

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.scss']
})
export class AdminUserManagementComponent implements OnInit {

  personalUsers: any = [];
  organizations: any = [];
  currentList: any = [];
  userData: { };

  showAdminTable = false;
  //0 - Users, 1 - Organizations, 2 - Admins
  tabSelected = 0;

  constructor(
    private userService: UserService,
    private authService: AuthService,) { }

  ngOnInit() {
    console.log("OnInit called");
    //Get all users
    this.userService.getPersonalUsers().subscribe(userData =>{
      this.personalUsers = userData;
      this.currentList = this.personalUsers;
    })
    this.userService.getOrganizationUsers().subscribe(orgData => {
      this.organizations = orgData;
    })
    console.log("OnInit finished");
    this.showUsers();
  }

  showUsers(){
    this.currentList = this.personalUsers;
    this.showAdminTable = false;
    this.tabSelected = 0;
  }
  showOrganizations(){
    this.currentList = this.organizations;
    this.showAdminTable = false;
    this.tabSelected = 1;
  }
  showAdmins(){
    var admins = [];
    for (let user of this.personalUsers){
      if(user.isAdmin) {
        admins.push(user);
      }
    }
    for (let user of this.organizations){
      if(user.isAdmin) {
        admins.push(user);
      }
    }
    this.currentList = admins;
    this.showAdminTable = true;
    this.tabSelected = 2;
  }
  //Check whether they're an admin or not and set the new value to the opposite
  toggleAdmin(id){
    // For personal users
    //MARLEE: is this breaking because the put is happening before authservice.subscribe finishes, giving it a null value?
    if(this.tabSelected === 0){
      this.authService.getUserById(id).subscribe(targetUserData => {

          console.log("user type is personal");
          //If removing regular admin status, remove super admin status too
          if (targetUserData['isAdmin']) {
            this.userData = {
              isAdminModel: false,
              isSuperAdminModel: false,
            }
          }
          else {
            this.userData = {
              isAdminModel: true,
            }
          }
        console.log(this.userData);
        this.authService.updateUserData(id,this.userData);
      })
    }
    // If not a personal account, handle the organization account
    else if(this.tabSelected === 1){
      this.authService.getOrgById(id).subscribe(targetOrgData => {
          //If removing regular admin status, remove super admin status too
          if (targetOrgData['isAdmin']) {
            this.userData = {
              isAdminModel: false,
              isSuperAdminModel: false,
            }
          }
          else {
            this.userData = {
              isAdminModel: true,
            }
          }
        console.log(this.userData);
        this.authService.updateOrgData(id,this.userData);
        location.reload();
        //MARLEE: reload with AJAX so the whole page doesn't have to refresh
      })

    }
    else {
      console.log('admin page');
    }

    //The whole change has to happen in the subscribe method because it's asynchronous

    // // MARLEE: use UpdateUserData from auth.sevice.ts
    // for(let user of this.currentList){
    //   if(user.id == id){
    //     //If removing regular admin status, remove super admin status too
    //     if(user.isAdmin){
    //       user.isSuperAdmin = false;
    //     }
    //     user.isAdmin = !user.isAdmin;
    //     break;
    //   }
    // }
  }

  toggleSuperAdmin(id){
    for(let user of this.currentList){
      if(user.id == id){
        user.isSuperAdmin = !user.isSuperAdmin;
        //If giving super admin status, grant regular admin status too
        if(user.isSuperAdmin){
          user.isAdmin = true;
        }
        break;
      }
    }
  }
  updateAdminStatus(id, status){
    var targetUser = this.authService.getUserById(id);
    if(targetUser['user_type']==='personal'){
      this.userData={
        isAdminModel: status,
      }
      console.log(this.userData);
      this.authService.updateUserData(id,this.userData);
      location.reload();
    }
  }
}
