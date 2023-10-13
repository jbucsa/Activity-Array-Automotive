class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("Engine Starts");
        } else {
            return this.started = false;
            console.log("Engine cannot start!!!!");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("Out of gas. Refuel");
                this.stop();
            }
        } else {
            alert("Try restarting the engine.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has come to a stop");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of gas.");
                this.stop();
            }
        } else {
            alert("Try starting the engine first.");
        }
    }
    stop() {
        console.log("Hit the breaks.")
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}


module.exports = {
    Vehicle
}

class Car extends Vehicle {
    constructor(make, model, year, color, mileage, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {

    }

    start() {
        if (this.started) {
            console.log("Car is already started!!!");
            return;
        }
        let enoughGas = this.fuel > 0 ? true : false;
        if (enoughGas) {
            this.started = true;
            console.log("Engine started!")
        }
        else {
            console.log("Tank is EMPTY!")
        }
        return (enoughGas);
    }

    callForService() {
        this.scheduleService = this.mileage > 30000 ? true : false;
        return (this.scheduleService);
    }
}

let newCar = new Car("Dodge", "Stratus", 2006, 10000);

newCar.start();
newCar.start();
newCar.stop();
newCar.callForService();