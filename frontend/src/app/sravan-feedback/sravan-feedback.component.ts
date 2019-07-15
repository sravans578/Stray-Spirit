import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.sevice';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sravan-feedback',
  templateUrl: './sravan-feedback.component.html',
  styleUrls: ['./sravan-feedback.component.scss']
})
export class SravanFeedbackComponent implements OnInit {
text = '';
Message ={};

  constructor(public authService:AuthService, private toastr: ToastrService) { }


onSubmit(){
   this.Message = {Message: this.text}
   this.authService.sendFeedback(this.Message);
    this.toastr.success('Feedback submitted!', 'Thank You!');


  
}

  ngOnInit() {
  }

}
