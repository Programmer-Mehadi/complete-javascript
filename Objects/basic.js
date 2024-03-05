let person = {
  name: "John",
  age: 30,
}

Object.keys(person).forEach((key) => {
  console.log(person[key])
})

Object.values(person).forEach((value) => {
  console.log(value)
})

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value)
})

for (const [key, value] of Object.entries(person)) {
  console.log(key, value)
}
