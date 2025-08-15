export interface Vehicle{
    make: string;
    model: string;
    year: number;
    isElectric?: boolean; 
    start(): void;
}

export class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
    isElectric?: boolean;

    constructor(make: string, model: string, year: number, isElectric?: boolean) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isElectric = isElectric;
    }

    start(): void {
        console.log(`${this.make} ${this.model} is starting.`);
    }
}

