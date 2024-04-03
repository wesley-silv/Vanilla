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
    let result = document.getElementById('results')
    result.style.display = 'block'
    result.innerHTML = `Payment result R$ ${paymentResult}`

    let dizym = document.getElementById('dizy')
    dizym.style.display = 'block'
    dizym.innerHTML = `Dizy result R$ ${dizy}`

    let payment = document.getElementById('after-payment-result')
    payment.style.display = 'block'
    payment.innerHTML = `Alfter paymente result R$ ${afterPayment}`
  } else {
    let invalidResult = document.getElementById('results')
    invalidResult.style.display = 'block'
    invalidResult.innerHTML = `Resultado inválido! \n preencha todos os campos corretamente.`
  }
}
