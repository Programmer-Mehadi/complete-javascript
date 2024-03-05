const myObject = {
  firstName: "Mehadi",
  lastName: "Hossain",
  age: 25,
  fullName: function () {
    return this.firstName + " " + this.lastName
  },
}

console.log(myObject.firstName)
console.log(myObject.fullName())
