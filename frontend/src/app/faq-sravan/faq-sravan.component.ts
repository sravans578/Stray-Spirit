import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.sevice';

@Component({
  selector: 'app-faq-sravan',
  templateUrl: './faq-sravan.component.html',
  styleUrls: ['./faq-sravan.component.scss']
})
export class FaqSravanComponent implements OnInit {
  result: any ;
  constructor(public authService:AuthService) { }

// FAQ = [
//   {title: 'question1', answer: 'answer1'},
//   {title: 'question2', answer: 'answer2'},
// ]



  ngOnInit() {


    this.authService.getFaq().subscribe(faq =>
      {
    this.result = faq
    console.log(this.result);
     })
}

}


