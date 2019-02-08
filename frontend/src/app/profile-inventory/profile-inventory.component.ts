import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profile-inventory',
  templateUrl: './profile-inventory.component.html',
  styleUrls: ['./profile-inventory.component.scss']
})
export class ProfileInventoryComponent implements OnInit {


  
  addProductForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    productPrice: new FormControl('', [ Validators.required , Validators.pattern('^[0-9]*$') ])
  })

  constructor(private titleService:Title) { 
    this.titleService.setTitle("My Inventory - StraySpirit");
   }

  ngOnInit() {
  }

}
