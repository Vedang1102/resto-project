import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestaurantRequest } from "../models/RestaurantRequest";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {}

  onboardRestaurant(restaurantRequest: RestaurantRequest): Observable<any> {
    return this.http.post('https://48c5-2402-e280-3e4b-37f-48ae-2edb-b08c-5420.ngrok-free.app/restro/create', restaurantRequest, {
      responseType: 'text'
    });
  }

  getRestaurantDetails(): Observable<RestaurantRequest[]> {
    return this.http.get<RestaurantRequest[]>('https://48c5-2402-e280-3e4b-37f-48ae-2edb-b08c-5420.ngrok-free.app/restro/getByOwner/ITC Hotels', {
        responseType: 'json',
        headers:new HttpHeaders({
            "ngrok-skip-browser-warning": "true"
           })
    })
  }
}
