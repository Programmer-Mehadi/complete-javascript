class Vehicle {
  #name
  #speed
  #type
  constructor(name, speed, type) {
    this.#name = name
    this.#speed = speed
    this.#type = type
  }
  getDetails() {
    return `Name: ${this.#name}, Speed: ${this.#speed}, Type: ${this.#type}`
  }
  getName() {
    return this.#name
  }
  setName(name) {
    this.#name = name
  }
  getSpeed() {
    return this.#speed
  }
  setSpeed(speed) {
    this.#speed = speed
  }
  getType() {
    return this.#type
  }
  setType(type) {
    this.#type = type
  }
}

class Car extends Vehicle {
  constructor(name, speed, type, price) {
    super(name, speed, type)
    this.price = price
  }
  getFullDetails() {
    return `Name: ${this.getName()}, Speed: ${this.getSpeed()}, Type: ${this.getType()}, Price: ${
      this.price
    }`
  }
}

const car = new Car("Car", 100, "sedan", 100000)
console.log(car.getFullDetails())
