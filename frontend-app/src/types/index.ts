export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface City {
    id: string;
    name: string;
}

export interface Bus {
    id: string;
    company: string;
    departureCity: City;
    arrivalCity: City;
    departureTime: string;
    arrivalTime: string;
    seatsAvailable: number;
}

export interface Ticket {
    transactionId: string;
    user: User;
    bus: Bus;
    seatNumbers: string[];
    purchaseDate: Date;
}