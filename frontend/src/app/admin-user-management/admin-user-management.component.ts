import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.scss']
})
export class AdminUserManagementComponent implements OnInit {

  allUsers = [{id: 0, name: 'Remus Lupin', isAdmin: true }, {id: 1, name: 'Minerva McGonagall', isAdmin: true}, {id: 2, name: 'Aurora Sinistra', isAdmin: false},
    {id: 3, name: 'Sybil Trelawney', isAdmin: true}, {id: 4, name: 'Severus Snape', isAdmin:false}, {id: 5, name: 'Horace Slughorn', isAdmin: false},
    {id: 6, name: 'Charity Burbidge', isAdmin: false}, {id: 7, name: 'Rubeus Hagrid',isAdmin:true}, {id: 8, name: 'Pomona Sprout', isAdmin:true},
    {id: 9, name: 'Filius Flitwick', isAdmin:true}, {id: 10, name: 'Albus Dumbledore',isAdmin:false}, {id: 11, name: 'Argus Filch', isAdmin: false},
    {id: 12, name: 'Dolores Umbridge', isAdmin: false}, {id: 13, name: 'Alecta Carrow', isAdmin: false}, {id: 14, name:'Gilderoy Lockhart', isAdmin: false},
    {id: 15, name: 'Alastor Moody', isAdmin:true}, {id: 16, name: 'Irma Pince', isAdmin:true}, {id: 17, name: 'Quirinus Quirrell', isAdmin: false}];

  organizations = [{id: 18, name: 'Dalhousie', isAdmin: false}, {id: 19, name: 'StraySpirit', isAdmin:true}, {id: 20, name: 'Hogwarts', isAdmin:false},
    {id: 21, name: 'Fake Inc.', isAdmin: true}, {id: 22, name: 'Totally a Real Company', isAdmin:false}];

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
        user.isAdmin = !user.isAdmin;
        break;
      }
    }
  }
}
