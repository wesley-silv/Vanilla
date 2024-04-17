let object = {} // Declarete a void object.
object.firstName = 'Wesley'
object.lastName = 'Conceição'
object.age = 30

object.fullName = function () {
  // Declarate a method in a property of object.
  return `User name complete: ${this.firstName} da Silva ${this.lastName}`
}

console.log(object.firstName, object.lastName, object['age'], typeof object)
console.log(object.fullName(), typeof object.fullName() + '\n')

// Using the key-word "delete" to exclude an object
delete object.age
console.log(object['age']) // undefined

// Rewriting the value of an object
object.middleName = 'Silv'
console.log(object['middleName'])
object.middleName = 'Silva'
console.log(object['middleName'])

// using the "new" to declarate an object, this declaration is equal the using person = {}
let person = new Object()
person.firstName = 'Maria clara'
person.lastName = 'of Andrade'
console.log(
  `The her name is ${person.firstName} ${person.lastName}`,
  typeof person
)

// Listing all items of a list with for in loop

let list = {
  1: '\nArroz',
  2: 'Feijão',
  3: 'Macarrão',
  4: 'Café',
  5: 'Açucar\n'
}

for (let items in list) {
  listFull = list[items]
  console.log(listFull)
}

// Aplication with numeric list, this code can be applicated in other different uses. 
numberList = [ 
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

for (let number in numberList){
  existNumbers = numberList[number]
  console.log(existNumbers)
}

// Apply in the array to print your content
description = '\nThe description is many fantastic!'

for(let charactere in description){
  content = description[charactere]
  console.log(content)
}