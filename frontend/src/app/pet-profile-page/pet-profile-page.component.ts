import { Component, OnInit } from '@angular/core';

import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-pet-profile-page',
  templateUrl: './pet-profile-page.component.html',
  styleUrls: ['./pet-profile-page.component.scss'],
  
})
export class PetProfilePageComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Pet profile");
   }

  ngOnInit() {
  }

}
