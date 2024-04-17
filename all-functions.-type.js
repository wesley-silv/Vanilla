// Declaration of function
function some(water, eletricEnergy, food) {
  return water + eletricEnergy + food
}

// Expression of function
const subtracao = function (a, b) {
  return a - b
}

// Arrow function
const multiplicacao = (a, b) => {
  return a * b
}

// Callback function
function executarOperacao(a, b, operacao) {
  return operacao(a, b)
}

// Function such as object method
const objeto = {
  valor: 10,
  adicionar: function (x) {
    this.valor += x
  },
  diminuirValor: x => {
    // arrow function not accept the use of "this".
    objeto.valor -= x
  },
  obterValor: function () {
    return this.valor
  }
}

// Chamada das funções
console.log(some(5, 7, 12)) // Saída: 24
console.log(subtracao(5, 3)) // Saída: 2
console.log(multiplicacao(2, 4)) // Saída: 8

console.log(executarOperacao(4, 100, multiplicacao)) // Saída: 6
// In the example above the method can used with arrow function, but remember that the keyword "this" can't be used join the arrow function.

objeto.adicionar(5)
console.log(objeto.obterValor()) // Saída: 15
objeto.diminuirValor(7.8)
console.log(objeto.obterValor()) // Saída: 7.2

const media = (a, b, c, d) => {
  return (a + b + c + d) / 4
}
console.log(parseInt(media(8.5, 9, 7.8, 9.2))) // Saída 8

const paramThree = function (w, y, z) {
  return w + y * z
}
console.log(paramThree(5, 7, 5))

// Function with value of variable
console.log(
  `The value of a function with three values can to be present ${paramThree(
    5,
    9,
    5
  )}`
)

// Hoisting
console.log(hoisting(3, 5, 2))
function hoisting(a, b, c) {
  return (a * b) / c
}

// Function auto called, the ; is to preservation of instruction
;(function () {
  console.log('This is a function auto call')
})()

// Functions used as values
let x = some(23, 20, 10)
console.log(x, typeof x)

// Functions used as exxpressions
let y = some(12, 15, 20) * 2
console.log(y, typeof y)

// Return quantity of paramethers
let arg = function (a, b, c, d, e) {
  return arguments.length
}
console.log(
  arg(2, 3, 4, 5) + ' is the quantity of argumens defined in the function'
)

// Arrow function don't need of keyword "function" and "return".
// Can't user "this" and also methods of object
const user = (a, b) => {
  a + b
}
console.log(user(100, 482.9))

// Parameters of a function
function myFunction(x, y) {
  if (y === undefined) {
    y = 2
  }
  return x * y
}
console.log(myFunction(175))

// The JavaScript functions are able of define values to argumens
function myFuctionTwo(a, b, c = ' Silva') {
  if (c !== 'Silva') {
    c = ' Da Silva'
  }
  return a + b + c
}
console.log(myFuctionTwo(23, 12))

// Declarate a undefine number such as parameters
function sum(...args) {
  let sum = 0
  for (let arg of args) sum += arg
  return sum
}

let n = sum(4, 9, 16, 25, 29, 100, 66, 77)
console.log(n)

// Continue en object of arguments