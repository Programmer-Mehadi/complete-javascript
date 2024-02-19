const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

numbers.forEach((num) => console.log(num))

console.log(numbers.map((num) => num * 2))

console.log(numbers.filter((num) => num % 2 === 0))

console.log(numbers.reduce((acc, num) => acc + num, 0))

console.log(numbers.reduceRight((acc, num) => acc + num, 0))

console.log(numbers.every((num) => num % 2 === 0))

console.log(numbers.some((num) => num % 2 === 0))

console.log(numbers.find((num) => num % 2 === 0))

console.log(numbers.findIndex((num) => num % 2 === 0))
