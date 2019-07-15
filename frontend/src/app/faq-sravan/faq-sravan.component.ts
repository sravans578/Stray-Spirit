import { Component, OnInit } from '@angular/core';
import { FAQService } from '../f-aq.service';

@Component({
  selector: 'app-faq-sravan',
  templateUrl: './faq-sravan.component.html',
  styleUrls: ['./faq-sravan.component.scss']
})
export class FaqSravanComponent implements OnInit {
  result: any ;
  constructor(public faq_service:FAQService) { }

// FAQ = [
//   {title: 'question1', answer: 'answer1'},
//   {title: 'question2', answer: 'answer2'},
// ]



  ngOnInit() {


    this.faq_service.getFaq().subscribe(faq =>
      {
    this.result = faq
    console.log(this.result);
     })
}

}


