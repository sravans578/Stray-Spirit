import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.scss']
})
export class AdminUserManagementComponent implements OnInit {

  allUsers = [{name: 'Remus Lupin', isAdmin: true }, {name: 'Minerva McGonagall', isAdmin: true}, {name: 'Aurora Sinistra', isAdmin: false},
    {name: 'Sybil Trelawney', isAdmin: true}, {name: 'Severus Snape', isAdmin:false}, {name: 'Horace Slughorn', isAdmin: false},
    {name: 'Charity Burbidge', isAdmin: false}, {name: 'Rubeus Hagrid',isAdmin:true}, {name: 'Pomona Sprout', isAdmin:true},
    {name: 'Filius Flitwick', isAdmin:true}, {name: 'Albus Dumbledore',isAdmin:false}, {name: 'Argus Filch', isAdmin: false},
    {name: 'Dolores Umbridge', isAdmin: false}, {name: 'Alecta Carrow', isAdmin: false}, {name:'Gilderoy Lockhart', isAdmin: false},
    {name: 'Alastor Moody', isAdmin:true}, {name: 'Rolanda Hooch', isAdmin: false}, {name: 'Irma Pince', isAdmin:true},
    {name: 'Quirinus Quirrell', isAdmin: false}];

  constructor() { }

  ngOnInit() {
  }

  confirmDelete(){
    alert("Are you sure you want to delete this user?");
  }
  showUsers(){

  }
}
