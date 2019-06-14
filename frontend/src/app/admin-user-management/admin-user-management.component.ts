import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.scss']
})
export class AdminUserManagementComponent implements OnInit {

  allUsers = [{id: 0, name: 'Remus Lupin', isAdmin: true, isSuperAdmin: false },
    {id: 1, name: 'Minerva McGonagall', isAdmin: true, isSuperAdmin: true},
    {id: 2, name: 'Aurora Sinistra', isAdmin: false, isSuperAdmin: false},
    {id: 3, name: 'Sybil Trelawney', isAdmin: true, isSuperAdmin: false},
    {id: 4, name: 'Severus Snape', isAdmin:false, isSuperAdmin: false},
    {id: 5, name: 'Horace Slughorn', isAdmin: false, isSuperAdmin: false},
    {id: 6, name: 'Charity Burbidge', isAdmin: false, isSuperAdmin: false},
    {id: 7, name: 'Rubeus Hagrid',isAdmin:true, isSuperAdmin: false},
    {id: 8, name: 'Pomona Sprout', isAdmin:true, isSuperAdmin: false},
    {id: 9, name: 'Filius Flitwick', isAdmin:true, isSuperAdmin: false},
    {id: 10, name: 'Albus Dumbledore',isAdmin:false, isSuperAdmin: false},
    {id: 11, name: 'Argus Filch', isAdmin: false, isSuperAdmin: false},
    {id: 12, name: 'Dolores Umbridge', isAdmin: false, isSuperAdmin: false},
    {id: 13, name: 'Alecta Carrow', isAdmin: false, isSuperAdmin: false},
    {id: 14, name:'Gilderoy Lockhart', isAdmin: false, isSuperAdmin: false},
    {id: 15, name: 'Alastor Moody', isAdmin:true, isSuperAdmin: false},
    {id: 16, name: 'Irma Pince', isAdmin:true, isSuperAdmin: false},
    {id: 17, name: 'Quirinus Quirrell', isAdmin: false, isSuperAdmin: false}];

  organizations = [{id: 18, name: 'Dalhousie', isAdmin: false, isSuperAdmin: false},
    {id: 19, name: 'StraySpirit', isAdmin:true, isSuperAdmin: false},
    {id: 20, name: 'Hogwarts', isAdmin:false, isSuperAdmin: false},
    {id: 21, name: 'Fake Inc.', isAdmin: true, isSuperAdmin: false},
    {id: 22, name: 'Totally a Real Company', isAdmin:false, isSuperAdmin: false}];

  currentList = this.allUsers;
  showAdminTable = false;
  //0 - Users, 1 - Organizations, 2 - Admins
  tabSelected = 0;

  constructor() { }

  ngOnInit() {
  }

  confirmDelete(){
    alert("Are you sure you want to delete this user?");
  }
  showUsers(){
    this.currentList = this.allUsers;
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
    for (let user of this.allUsers){
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
