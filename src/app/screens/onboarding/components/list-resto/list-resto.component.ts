import { Component } from '@angular/core';
import { RestaurantRequest } from 'src/app/models/RestaurantRequest';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent {
  restaurantDetails: RestaurantRequest[] = [];
  error: string | null = null;

  constructor(private backendService: BackendService) {}
  fetchRestaurantDetails() {
    this.backendService.getRestaurantDetails().subscribe({
      next: (response: RestaurantRequest[]) => {
        this.restaurantDetails = response;
        this.error = null;
      },
      error: (err) => {
        if (err.error instanceof ErrorEvent) {
          this.error = `Client-side error: ${err.error.message}`;
        } else {
          this.error = `Server-side error: ${err.status} ${err.message}`;
        }
        console.error(err);
      }
    });
  }

}
