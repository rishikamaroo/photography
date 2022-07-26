export interface ICreditCard {
  cc_number: String;
}

export interface IEvent {
  type: String[]; 
}

export interface ISubscription {
  plan: String;
  status: String;
  payment_method: string;
  term: String;
}

export interface IAddress {
  city: string;
  zip_code: string;
  street_name: string;
  street_address: string;
  country: string;
  coordinates: {
    lat: string;
    lng: string;
  }
}

export interface IPhotographer {
  id: number;
  uid: string;
  password?: string;
  first_name: string;
  last_name: string;
  username?: string;
  email?: string;
  avatar?: string;
  gender?: Date;
  social_insurance_number?: string;
  phone_number?: String;
  date_of_birth?: String;
  credit_card?: ICreditCard;
  subscription?: ISubscription;
  event_type?: {
    type: String[];
  };
  address?: IAddress;


  // "uid": "c7204a53-77be-4ba6-b446-8f92921060a0",
  // "password": "uDQXExV6pr",
  // "first_name": "Lorenzo",
  // "last_name": "Fay",
  // "username": "lorenzo.fay",
  // "email": "lorenzo.fay@email.com",
  // "avatar": "https://robohash.org/autconsecteturlabore.png?size=300x300&set=set1",
  // "gender": "Polygender",
  // "phone_number": "+503 758-280-5371 x9138",
  // "social_insurance_number": "770448660",
  // "date_of_birth": "1993-01-18",
  // "event_type": {
  //     "type": ["wedding", "bridal showers","food","sports"]
  // },
  // "address": {
  //     "city": "Noemouth",
  //     "street_name": "Eusebio Point",
  //     "street_address": "4999 Alfredia Station",
  //     "zip_code": "71586",
  //     "state": "Arizona",
  //     "country": "United States",
  //     "coordinates": {
  //         "lat": -63.81164074947457,
  //         "lng": 119.54873167874729
  //     }
  // },
  // "credit_card": {
  //     "cc_number": "4425-3666-4612-3889"
  // },
  // "subscription": {
  //     "plan": "Platinum",
  //     "status": "Blocked",
  //     "payment_method": "Alipay",
  //     "term": "Full subscription"
  // }
}