import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {

  userData: any =[];
  editField: boolean = false;
  editRowID: any ='';
  constructor() { }

  ngOnInit() {
    this.userData = [
      { id:1, firstName: 'Aadesh', lastName: 'Shah', email:'shahaadesh5@gmail.com', phone:'9876543210', address:'1333 South Park St, Halifax, NS', pincode: 'B3J2K9', dob: '1995-11-05'  }
    
    ];
  }

  Edit(val){
    this.editRowID = val; 
  }
}
