class CarFactory {
    constructor() {
        this.cars = [];
    }

    addCar(year, model, price) {
        this.cars.push({ year, model, price });
    }

    deleteCar(model) {
        this.cars = this.cars.filter(car => car.model !== model);
    }

    updateCar(model, year = null, price = null) {
        for (const car of this.cars) {
            if (car.model === model) {
                if (year !== null) {
                    car.year = year;
                }
                if (price !== null) {
                    car.price = price;
                }
            }
        }
    }

    getAllCars() {
        return this.cars;
    }
}


const randomYear = () => Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010;
const factory = new CarFactory();
factory.addCar(randomYear(), 'Ferrari', 350000);
console.log(factory.getAllCars());
