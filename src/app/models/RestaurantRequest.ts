import { AddressDetails } from './address';

export class RestaurantRequest {
    id: number = 0;
    name: string = '';
    ownerName: string = '';
    restroType: string = '';
    addressDetails: AddressDetails = new AddressDetails();
    phone: number = 0;
    email: string = '';
}
