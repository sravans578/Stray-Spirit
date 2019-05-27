import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-marlee',
  templateUrl: './home-marlee.component.html',
  styleUrls: ['./home-marlee.component.scss']
})
export class HomeMarleeComponent implements OnInit {

  //TODO: replace with real event objects
  sampleEvents = ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'];
  samplePets = ['Bran', 'Arya', 'Jon', 'Sansa', 'Rickon', 'Robb'];

  constructor() { }

  ngOnInit() {
  }

}
