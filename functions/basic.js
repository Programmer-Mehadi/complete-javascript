// self invoking
;(function () {
  let x = "Hello!!" // I will invoke myself
  console.log(x)
})()

// basic

function myFunction(a, b) {
  return a * b
}

let x = myFunction(4, 3)
console.log(x)

// arrow function
let myArrowFunction = (a, b) => a * b
let y = myArrowFunction(4, 3)
console.log(y)

// anonymous function
let myAnonymousFunction = function (a, b) {
  return a * b
}
let z = myAnonymousFunction(4, 3)
console.log(z)

// function expression
let myFunctionExpression = function (a, b) {
  return a * b
}
let w = myFunctionExpression(4, 3)
console.log(w)

// function declaration
function myFunctionDeclaration(a, b) {
  return a * b
}
let v = myFunctionDeclaration(4, 3)
console.log(v)
