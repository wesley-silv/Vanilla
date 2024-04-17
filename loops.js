// For
const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi']
let text = ''
for (let i = 0; i < cars.length; i++) {
  // The conditions of for have one variable declaration, contition of interation and update the value of variable.
  text += cars[i]
  console.log('\n', text)
}

// For in
const users = ['Ana', 'Bia', 'Clara', 'Diana', 'Edna', 'Flávia', 'Iara']
let names = ''

for (names in users) {
  allNames = users[names]
  console.log(allNames)
}
