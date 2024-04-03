itemsValue = {
  payment: document.getElementById('received-value'),
  water: document.getElementById('water'),
  eletricEnergy: document.getElementById('eletric-energy'),
  cookGas: document.getElementById('cook-gas'),
  food: document.getElementById('food'),
  fruits: document.getElementById('fruits')
}

function some(){
  
  console.log(parseFloat(itemsValue.payment.value))
}