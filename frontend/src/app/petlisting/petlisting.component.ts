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
      /** Image is taken from https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?cs=srgb&dl=adorable-animal-breed-356378.jpg&fm=jpg  */
      
       id:1, pettName:"pet1" , petPrice: 200, petImage : "dog1.jpg", petDesc: "petInfo"
    },
    {
      /** Image is taken from https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?cs=srgb&dl=animal-corgi-dog-58997.jpg&fm=jpg */
      id:2, pettName:"pet1" , petPrice: 200, petImage : "dog2.jpg", petDesc: "petInfo"
    },
    {
      /** Image is taken from https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?cs=srgb&dl=adorable-animal-canine-257540.jpg&fm=jpg */
      id:3, pettName:"pet1" , petPrice: 200, petImage : "dog3.jpg", petDesc: "petInfo"
    },
    {
      /**Image is taken from https://as1.ftcdn.net/jpg/01/06/68/72/500_F_106687254_CFfnEhqM4cEx42XU5BexLccLttBrWpyZ.jpg */
      id:4, pettName:"pet1" , petPrice: 200, petImage : "dog4.jpg", petDesc: "petInfo"
    },
    {
      /** Image is taken from https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_1280.jpg */
      id:5, pettName:"pet1" , petPrice: 200, petImage : "dog5.jpg", petDesc: "petInfo"
    },
    {
      /** Image is taken from https://cdn.pixabay.com/photo/2016/11/23/18/06/adorable-1854119_1280.jpg */
      id:6, pettName:"pet1" , petPrice: 200, petImage : "dog6.jpg", petDesc: "petInfo"
    },
    {
      /** Image is taken from https://images-na.ssl-images-amazon.com/images/I/71gwRbpfLoL._SY435_.jpg  */
      id:7, pettName:"pet1" , petPrice: 200, petImage : "cat1.jpg", petDesc: "petInfo"
    },
    {
      /** Image is taken from https://pixabay.com/en/photos/cat/cat.jpg */
      id:8, pettName:"pet1" , petPrice: 200, petImage : "cat2.jpg", petDesc: "petInfo"
    }

  ];
}

onClick(){
  window.location.href = '/pet-profile-page';
}
}


