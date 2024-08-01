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
        this.http.post('https://698d-2402-e280-3e4b-37f-9a83-c328-8736-d8fd.ngrok-free.app/restro/create', restaurantRequest,{
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