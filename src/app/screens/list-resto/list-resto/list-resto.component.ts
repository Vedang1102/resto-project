import { Component, OnInit } from '@angular/core';
import { RestaurantRequest } from 'src/app/models/RestaurantRequest';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent implements OnInit {
  restaurantDetails: RestaurantRequest[] = [];
  error: string | null = null;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.fetchRestaurantDetails();
  }

  fetchRestaurantDetails() {
    this.backendService.getAll().subscribe({
      next: (response: RestaurantRequest[]) => {
        this.restaurantDetails = response;
        console.log(response);
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

  getImageUrl(restaurant: RestaurantRequest): string {
    const images: { [key: string]: string } = {
      'Tuskers - Veg Dining': '../../../../../assets/tuskers.jpeg',
      'Fiona': '../../../../../assets/fiona.jpeg',
      'Koji': '../../../../../assets/koji.jpeg'
    };
    return images[restaurant.name] || '../../../../../assets/bgidk.jpg';
  }

}