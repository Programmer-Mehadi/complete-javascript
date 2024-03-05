const myObject = {
  firstName: "Mehadi",
  lastName: "Hossain",
  age: 25,
  fullName: function () {
    return this.firstName + " " + this.lastName
  },
  set setFirstName(firstName) {
    this.firstName = firstName
  },
  get getFirstName() {
    return this.firstName
  },
}

// console.log(myObject.fullName())
// myObject.setFirstName = "Samrat"
// console.log(myObject.fullName())

// ! Object.defineProperty()

const studentObject = {
  firstName: "Mehadi",
  lastName: "Hossain",
  class: "10",
  fullName: function () {
    return this.firstName + " " + this.lastName
  },
  fullDetails: function () {
    return this.firstName + " " + this.lastName + " " + this.class
  },
}

Object.defineProperty(studentObject, "reset", {
  get: function () {
    return () => {
      this.firstName = ""
      this.lastName = ""
      this.class = ""
      this.fullName = function () {
        return this.firstName + " " + this.lastName
      }
      this.fullDetails = function () {
        return this.firstName + " " + this.lastName + " " + this.class
      }
    }
  },
})

console.log("Before Reset: ", studentObject.fullDetails())
studentObject.reset()
console.log("After Reset: ", studentObject.fullDetails())
