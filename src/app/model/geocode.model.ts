export class Geocode {
  streetNumber: string;
  route: string;
  locality: string;
  administrativeAreaLevel1: string;
  administrativeAreaLevel2: string;
  country: string;
  postCode: string;

  constructor(addressComponents: AddressComponent[]) {
    addressComponents.map(addressComponent => {
      if (!(addressComponent.types?.length > 0)) {
        return;
      }
      switch (addressComponent.types[0]) {
        case 'street_number': this.streetNumber = addressComponent.long_name;
                              break;
        case 'route': this.route = addressComponent.long_name;
                      break;
        case 'locality': this.locality = addressComponent.long_name;
                         break;
        case 'administrative_area_level_2': this.administrativeAreaLevel2 = addressComponent.long_name;
                                            break;
        case 'administrative_area_level_1': this.administrativeAreaLevel1 = addressComponent.long_name;
                                            break;
        case 'country': this.country = addressComponent.long_name;
                        break;
        case 'postal_code': this.postCode = addressComponent.long_name;
                            break;
      }
    });
  }
}


export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}
