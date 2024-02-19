class Vehicle {
  constructor(name, speed, type) {
    this.name = name
    this.speed = speed
    this.type = type
  }
  getDetails() {
    return `Name: ${this.name}, Speed: ${this.speed}, Type: ${this.type}`
  }
}

const car = new Vehicle("Car", 100, "sedan")
console.log(car.getDetails())

const bike = new Vehicle("Bike", 200, "scooter")
console.log(bike.getDetails())
