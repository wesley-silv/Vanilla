// Using conditionals

let valueOne = 50
let valueTwo = 49
if (valueOne == 10 || valueTwo >= 40) {
  console.log('The value is equal:', valueOne)
} else {
  console.log('\nValue not defined!')
}

// Example using the ternary operator
valueOne == 10 && valueTwo >= 40
  ? console.log(valueOne, valueTwo)
  : console.log('\nValue still not defined!')

// Example with use of else if()
if (valueTwo >= 60) {
  console.log('\nCongratulations! You are aproved in this content.')
} else if (valueTwo >= 50 || valueTwo < 60) {
  console.log("\nI'am sorry, you are in recuperations!")
} else {
  console.log('\nYou are reproved in this content.')
}

// Using the switch case
// The switch case to do the comparations embased in the operator restrict ===
value = '30'
switch (value) {
  case 10:
    console.log('\Value is equal the 10')
    break
  case 20:
    console.log('\Value is equal the 20')
    break
  case "30":
    console.log('\Value is equal the 30')
    break
  default:
    console.log('\nValue not is equal nothing value')
    break
}
