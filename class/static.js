class Vehicle {
  constructor(name, speed, type) {
    this.name = name
    this.speed = speed
    this.type = type
  }
  getDetails() {
    return `Name: ${this.name}, Speed: ${this.speed}, Type: ${this.type}`
  }
  static checkSpeed(speed) {
    return speed > 0
  }
}

class Car extends Vehicle {
  constructor(name, speed, type, price) {
    super(name, speed, type)
    this.price = price
  }
  getFullDetails() {
    return `Name: ${this.name}, Speed: ${this.speed}, Type: ${this.type}, Price: ${this.price}`
  }
}

if (Car.checkSpeed(-100)) {
  const car = new Car("Car", -100, "sedan", 100000)
  console.log(car.getFullDetails())
} else {
  console.log("Invalid Speed")
}
