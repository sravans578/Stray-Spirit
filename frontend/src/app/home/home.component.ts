import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //TODO: replace with real event objects
  sampleEvents = ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'];
  samplePets = ['Bran', 'Arya', 'Jon', 'Sansa', 'Rickon', 'Robb'];

  constructor() { }

  ngOnInit() {
  }

}
