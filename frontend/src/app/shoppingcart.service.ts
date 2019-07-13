import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor(private http: HttpClient) { }

  insertPurchaseDetails(shoppingCartData:any){
    this.http.post('http://localhost:3000/shoppingCart/',shoppingCartData)
    .subscribe(responseData => {
      console.log("Cart deatils added!");
    });
  }
}
