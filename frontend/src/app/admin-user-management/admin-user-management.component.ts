// Author: Marlee Donnelly (B00710138)

import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.scss']
})
export class AdminUserManagementComponent implements OnInit {

  personalUsers: any = [];
  organizations: any = [];
  currentList: any = [];

  showAdminTable = false;
  //0 - Users, 1 - Organizations, 2 - Admins
  tabSelected = 0;

  constructor(
    private userService: UserService,) { }

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
  toggleAdmin(id){
    //TODO: implement more efficiently with queries once there's a real database to search
    for(let user of this.currentList){
      if(user.id == id){
        //If removing regular admin status, remove super admin status too
        if(user.isAdmin){
          user.isSuperAdmin = false;
        }
        user.isAdmin = !user.isAdmin;
        break;
      }
    }
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
}
