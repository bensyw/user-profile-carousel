export default interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: String;
    website: String;
    company: Company;
}

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

