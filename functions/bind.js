// call

const person = {
  getDeayils: function (profession) {
    return `Name: ${this.name}, Age: ${this.age} and profession: ${profession}`
  },
}

const person1 = {
  name: "John",
  age: 30,
}

const person2 = {
  name: "Jane",
  age: 25,
}

const personOneFnc = person.getDeayils.bind(person1, "Engineer")

const personTwoFnc = person.getDeayils.bind(person2, "Doctor")

console.log(personOneFnc())

console.log(personTwoFnc())
