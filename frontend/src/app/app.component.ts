import { Component,OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.sevice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'StraySpirit';

  constructor(private authService:AuthService){}

  ngOnInit(){
    this.authService.autoAuthUser();
    
  }
}
