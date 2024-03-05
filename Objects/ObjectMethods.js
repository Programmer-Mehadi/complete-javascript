const myObject = {
  firstName: "Mehadi",
  lastName: "Hossain",
  fullName: function () {
    return this.firstName + " " + this.lastName
  },
}

for (const key in myObject) {
  typeof myObject[key] === "function"
    ? console.log(myObject[key]())
    : console.log(myObject[key])
}
