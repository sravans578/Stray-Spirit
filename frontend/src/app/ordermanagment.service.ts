import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdermanagmentService {

  constructor(private http: HttpClient) { 

  }
  newOrder(orderModel:any){
    console.log(orderModel);
    this.http.post('http://localhost:3000/order/',orderModel)
    .subscribe(responseData => {
      console.log("Order added!");
    });
  }

  getOrders(){
    console.log("Inside getProducts");
    return this.http.get('http://localhost:3000/order/');
  }
  getOrdersById(oId: any)
  {
    return this.http.get('http://localhost:3000/order/singleorder/'+oId);
  }

  getPOrders(firstName: any)
  {
    return this.http.get('http://localhost:3000/order/normalUser/'+firstName);
  }

  cancelOrder(oId: any){
    return this.http.delete('http://localhost:3000/order/delete/'+oId);
  }

  updateOrder(orderId:any, orderData:any){ 
    
    console.log("From service",orderData);
    this.http.put('http://localhost:3000/order/update/'+orderId,orderData)
    .subscribe(response=>{
      console.log(response);
    });
  }


}
