import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petlisting',
  templateUrl: './petlisting.component.html',
  styleUrls: ['./petlisting.component.scss']
})
export class PetlistingComponent implements OnInit {
  pets: any = [];
  constructor() { }

  ngOnInit() {
  
  this.pets =
  [
    {
      id:1, pettName:"pet1" , petPrice: 200, petImage : "dog1.jpg", petDesc: "petInfo"
    },
    {
      id:2, pettName:"pet1" , petPrice: 200, petImage : "dog2.jpg", petDesc: "petInfo"
    },
    {
      id:3, pettName:"pet1" , petPrice: 200, petImage : "dog3.jpg", petDesc: "petInfo"
    },
    {
      id:4, pettName:"pet1" , petPrice: 200, petImage : "dog4.jpg", petDesc: "petInfo"
    },
    {
      id:5, pettName:"pet1" , petPrice: 200, petImage : "dog5.jpg", petDesc: "petInfo"
    },
    {
      id:6, pettName:"pet1" , petPrice: 200, petImage : "dog6.jpg", petDesc: "petInfo"
    },
    {
      id:7, pettName:"pet1" , petPrice: 200, petImage : "cat1.jpg", petDesc: "petInfo"
    },
    {
      id:8, pettName:"pet1" , petPrice: 200, petImage : "cat2.jpg", petDesc: "petInfo"
    }

  ];
}
}

