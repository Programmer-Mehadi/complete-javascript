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

console.log(person.getDeayils.call(person1, "Engineer"))

console.log(person.getDeayils.call(person2, "Doctor"))
