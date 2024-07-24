import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestaurantRequest } from 'src/app/models/RestaurantRequest';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent  {

  // restroDetails = new FormGroup({
  //   name : new FormControl<string>(''),
  //   owner : new FormControl<string>('')
  // });

  restaurantRequest: RestaurantRequest = new RestaurantRequest();

  restroDetails = this.formBuilder.group({
    name: ['',Validators.required],
    owner: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      zipcode: [0]
    }),
    type: [''],
    contact: [0, Validators.required]
  });

  constructor(private formBuilder : FormBuilder) { }

  displayRestroDetails() {
    console.log(this.restroDetails.value);
    this.createRequest(this.restroDetails);
  }

  createRequest(details: FormGroup) {
    this.restaurantRequest.name = details.value['name'];
    this.restaurantRequest.owner = details.value['owner'];
    this.restaurantRequest.street = details.value['address']['street'];
    this.restaurantRequest.city = details.value['address']['city'];
    this.restaurantRequest.zipcode = details.value['address']['zipcode'];
    this.restaurantRequest.type = details.value['type'];
    this.restaurantRequest.contact = details.value['contact'];
    console.log(this.restaurantRequest);
  }

}
