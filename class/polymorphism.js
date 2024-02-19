class Person {
  constructor(name) {
    this.name = name
  }
  getDetails() {
    return `Name: ${this.name}`
  }
  checkType(type) {
    return `Type: ${type}`
  }
}

class Employee extends Person {
  constructor(name, salary) {
    super(name)
    this.salary = salary
  }
  // Overriding the getDetails method
  getDetails() {
    return `Name: ${this.name}, Salary: ${this.salary}`
  }
}

const employee = new Employee("John", 50000)
console.log(employee.getDetails())

console.log(employee.checkType("Employee"))
