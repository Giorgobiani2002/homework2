class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, batteryLevel) {
        super(make, model, year);
        this.batteryLevel = batteryLevel;
    }
}

const myElectricCar = new ElectricCar('prius', 'prime', 2020, 80);
console.log(myElectricCar);
