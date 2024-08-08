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
    return this.http.post('https://c5a6-2402-e280-3e4b-37f-b23b-77cd-82b9-2d78.ngrok-free.app/restro/create', restaurantRequest, {
      responseType: 'text'
    });
  }

  getAll(): Observable<RestaurantRequest[]> {
    return this.http.get<RestaurantRequest[]>('https://c5a6-2402-e280-3e4b-37f-b23b-77cd-82b9-2d78.ngrok-free.app/restro/getAll', {
        responseType: 'json',
        headers:new HttpHeaders({
            "ngrok-skip-browser-warning": "true"
           })
    })
  }
}
