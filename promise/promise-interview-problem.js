/*
the problem is the getData function return a promise. 
Solve this problem and get the result in the console as a original format.
*/

async function getData() {
  return "data"
}

console.log(getData())

// ! solution
async function getData() {
  return "data"
}

getData().then((data) => console.log(data))
