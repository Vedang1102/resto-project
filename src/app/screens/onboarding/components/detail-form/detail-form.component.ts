import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantRequest } from 'src/app/models/RestaurantRequest';
import { BackendService } from 'src/app/services/backend.service';
import { AddressDetails } from 'src/app/models/address';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent {
  restaurantRequest: RestaurantRequest = new RestaurantRequest();
  showModal: boolean = false;

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
      email: ['']
    })
  });

  constructor(private formBuilder: FormBuilder, private backendService: BackendService) { }

  openConfirmModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitDetails() {
    this.createRequest(this.restroDetails);
    this.showModal = false;
  }

  createRequest(details: FormGroup) {
    const addressDetails: AddressDetails = {
      id: 0,
      streetName: details.value['address']['street'],
      city: details.value['address']['city'],
      pinCode: details.value['address']['zipCode']
    };
  

    this.restaurantRequest = {
      id: 0,
      name: details.value['name'],
      ownerName: details.value['owner'],
      restroType: details.value['type'],
      addressDetails: addressDetails,
      phone: details.value['contact']['phone'],
      email: details.value['contact']['email']
    };
  
    this.processRequest(this.restaurantRequest);
  }

  processRequest(restaurantRequest: RestaurantRequest) {
    this.backendService.onboardRestaurant(restaurantRequest).subscribe({
      next: () => {
        alert('Details submitted successfully!');
      },
      error: () => {
        alert('Failed to submit details. Please try again.');
      }
    });
  }

}
