function Person(first, last, age, eye) {
  this.firstName = first
  this.lastName = last
  this.age = age
  this.eyeColor = eye
}

const myFather = new Person("John", "Doe", 50, "blue")
const myMother = new Person("Sally", "Rally", 48, "green")

myFather.nationality = "English"

myFather.fullName = function () {
  return this.firstName + " " + this.lastName
}

Person.prototype.nationality = "Bengali" //! can set property to Person prototype

console.log(myMother.nationality)
