function some() {
  receivedValue = parseFloat(document.getElementById('received-value').value)
  let dizy = receivedValue / 10

  let water = parseFloat(document.getElementById('water').value)
  let eletricEnergy = parseFloat(
    document.getElementById('eletric-energy').value
  )
  let cookGas = parseFloat(document.getElementById('cook-gas').value)
  let food = parseFloat(document.getElementById('food').value)
  let fruits = parseFloat(document.getElementById('fruits').value)
  let paymentResult = water + eletricEnergy + cookGas + food + fruits
  let afterPayment = receivedValue - (dizy + paymentResult)

  if (paymentResult > 0) {
    document.getElementById(
      'results'
    ).innerHTML = `Payment result R$ ${paymentResult}`
    document.getElementById('dizy').innerHTML = `Dizy result R$ ${dizy}`
    document.getElementById(
      'after-payment-result'
    ).innerHTML = `Alfter paymente result R$ ${afterPayment}`
  } else {
    document.getElementById(
      'results'
    ).innerHTML = `Resultado inválido! \n preencha todos os campos corretamente.`
  }
}
