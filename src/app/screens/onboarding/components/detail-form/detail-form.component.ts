import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestaurantRequest } from 'src/app/models/RestaurantRequest';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent  {
  restaurantRequest: RestaurantRequest = new RestaurantRequest();

  restroDetails = this.formBuilder.group({
    name: ['', Validators.required],
    owner: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      zipCode: [0]
    }),
    type: [''],
    contact: this.formBuilder.group({
      phone: [0, Validators.required],
      email: ['']})
  });

  constructor(private formBuilder : FormBuilder, private backendService : BackendService) { }

  displayRestroDetails() {
    this.createRequest(this.restroDetails);
  }

  createRequest(details: FormGroup) {
    this.restaurantRequest.name = details.value['name'];
    this.restaurantRequest.owner = details.value['owner'];
    this.restaurantRequest.street = details.value['address']['street'];
    this.restaurantRequest.city = details.value['address']['city'];
    this.restaurantRequest.zipCode = details.value['address']['zipCode'];
    this.restaurantRequest.type = details.value['type'];
    this.restaurantRequest.phone = details.value['contact']['phone'];
    this.restaurantRequest.email = details.value['contact']['email'];
    this.processRequest(this.restaurantRequest);
  }

  processRequest(restaurantRequest: RestaurantRequest) {
    this.backendService.onboardRestaurant(restaurantRequest);
  }
}
