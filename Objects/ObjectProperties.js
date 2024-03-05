const myObject = {
  firstName: "Mehadi",
  lastName: "Hossain",
  age: 25,
  fullName: function () {
    return this.firstName + " " + this.lastName
  },
}

console.log(myObject["firstName"])
console.log(myObject.fullName())

for (const key in myObject) {
  if (key === "fullName") {
    console.log(myObject[key]())
  } else {
    console.log(myObject[key])
  }
}
