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
    // For personal accounts
    if(this.tabSelected === 0){
      this.authService.getUserById(id).subscribe(targetUserData => {
          this.changeRegularAdmin(id, targetUserData['isAdmin']);
          this.authService.updateUserData(id,this.userData);
          //MARLEE: reload with AJAX so the whole page doesn't have to refresh
          location.reload();
      })
    }
    // If not a personal account, handle the organization account
    else if(this.tabSelected === 1){
      this.authService.getOrgById(id).subscribe(targetOrgData => {
        this.changeRegularAdmin(id, targetOrgData['isAdmin']);
        this.authService.updateOrgData(id,this.userData);
        location.reload();
        //MARLEE: reload with AJAX so the whole page doesn't have to refresh
      })

    }
    else {
      // If the id matches a document in the personal user collection, update them using the personal route
      this.authService.getUserById(id).subscribe(targetUserData => {
        console.log("TARGET USER DATA BITCH: ");
        console.log(targetUserData);
        if(targetUserData != null) {
          this.changeRegularAdmin(id, targetUserData['isAdmin']);
          this.authService.updateUserData(id, this.userData);
        }
      })
      //Otherwise, it's an organization
      this.authService.getOrgById(id).subscribe(targetOrgData => {
        console.log(targetOrgData);
        if(targetOrgData != null) {
          this.changeRegularAdmin(id, targetOrgData['isAdmin']);
          this.authService.updateOrgData(id, this.userData);
        }
      })
    }
  }

  toggleSuperAdmin(id){
    // If the id matches a document in the personal user collection, update them using the personal route
    this.authService.getUserById(id).subscribe(targetUserData => {
      console.log("TARGET USER DATA BITCH: ");
      console.log(targetUserData);
      if(targetUserData != null) {
        this.changeSuperAdmin(id, targetUserData['isSuperAdmin']);
        this.authService.updateUserData(id, this.userData);
      }
    })
    //Otherwise, it's an organization
    this.authService.getOrgById(id).subscribe(targetOrgData => {
      console.log(targetOrgData);
      if(targetOrgData != null) {
        this.changeSuperAdmin(id, targetOrgData['isSuperAdmin']);
        this.authService.updateOrgData(id, this.userData);
      }
    })
  }
  changeRegularAdmin(id, isAdmin){
    if (isAdmin) {
      //If removing regular admin status, remove super admin status too
      this.userData = {
        isAdminModel: false,
        isSuperAdminModel: false,
      }
    }
    else {
      //Make the user a regular admin
      this.userData = {
        isAdminModel: true,
      }
    }
  }
  changeSuperAdmin(id, isSuperAdmin){
    if (isSuperAdmin) {
      console.log("removing super admin status");
      //Just remove super admin status
      this.userData = {
        isSuperAdminModel: false,
      }
    }
    else {
      //If giving super admin status, grant regular admin status too
      console.log("granting super admin status");
      this.userData = {
        isAdminModel: true,
        isSuperAdminModel: true,
      }
    }
  }

}
