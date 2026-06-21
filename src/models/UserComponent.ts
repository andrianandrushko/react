export interface Hair{
    color: string
    type: string
}

export interface Coordinates{
    lat: number
    lng: number
}
export interface Bank{
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
}

export interface Company{
    department: string
    name: string
    title: string
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    lat: number
    lng: number
}
export interface Address{
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: Coordinates;
    country: string
}

export interface Crypto{
    coin: string
    wallet: string
    network: string
}



export interface UserComponent {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    imageUrl: string;
    bloodGroup: string;
    height: number
    weight: number;
    eyeColor: string;
    hair: Hair;
    body: string;
    ip: string
    address: Address
    coordinates: Coordinates
    macAddress: string;
    university: string;
    bank: Bank
    company: Company
    ssn: string
    userAgent: string
    crypto: Crypto
    role: string
}