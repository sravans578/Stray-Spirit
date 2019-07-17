// Authored by - Lakshmi Ponnuru [B00811623]

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  // POST request to the server to store the donation details
  newDonation(DonationModel: any) {
    console.log(DonationModel);
    this.http.post('http://localhost:3000/donation/', DonationModel)
      .subscribe(responseData => {
        console.log('Donation record added to the database and mail has been sent!');
      });
  }
}
