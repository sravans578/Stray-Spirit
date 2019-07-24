import { Component, OnInit } from '@angular/core';
import { RecommendService } from '../recommend.service';

@Component({
  selector: 'app-petrec-sravan',
  templateUrl: './petrec-sravan.component.html',
  styleUrls: ['./petrec-sravan.component.scss']
})
export class PetrecSravanComponent implements OnInit {
  pets : any;
  constructor(public R_service: RecommendService) { }

  ngOnInit() {

    this.R_service.getRecPets().subscribe(result =>
      {
    this.pets = result// assigning to variable to result (JSON object)
    console.log(this.pets);
     })
    }

  }


