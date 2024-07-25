import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RestaurantRequest } from "../models/RestaurantRequest";

@Injectable({
    providedIn: 'root'
})

export class BackendService {
   constructor(private http :HttpClient) {}
    onboardRestaurant(restaurantRequest: RestaurantRequest) {
        console.log(restaurantRequest);
        this.http.post('http://localhost:3000/restro/create', restaurantRequest,{
            responseType: 'text'
        })
   .subscribe({
         next: (response) => {
              console.log(response);
         },
         error: (error) => {
              console.log(error);
         }
   });
}
}