const letters = new Set()

letters.add("a")
letters.add("e")
letters.add("i")
letters.add("o")
letters.add("u")

console.log(letters)

letters.delete("i")

console.log(letters)

console.log(letters.has("i"))

console.log(letters.keys())
console.log(letters.values())
console.log(letters.entries())

letters.forEach((letter) => console.log(letter))

console.log(letters)
letters.clear()
