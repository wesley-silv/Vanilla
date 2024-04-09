selection = document.getElementById('select-machine')
showInDisplay = document.querySelector('p')

selection.addEventListener('change', select) // change is used when un tag option inside of selection is selected.

function select() {
  const choise = selection.value

  if (choise == 2800017) {
    showInDisplay.innerHTML = 'The equipment number is 2800017'
    showInDisplay.style.backgroundColor = '#c0c0c0'
  } else if (choise == 2800032) {
    showInDisplay.innerHTML = 'The equipment number is 2800032'
    showInDisplay.style.backgroundColor = '#c0c0c0'
  } else if (choise == 2800063) {
    showInDisplay.innerHTML = 'The equipment number is 2800063'
    showInDisplay.style.backgroundColor = '#c0c0c0'
  } else if (choise == 2800093) {
    showInDisplay.innerHTML = 'The equipment number is 2800093'
    showInDisplay.style.backgroundColor = '#c0c0c0'
  } else if (choise == 2800097) {
    showInDisplay.innerHTML = 'The equipment number is 2800097'
    showInDisplay.style.backgroundColor = '#c0c0c0'
  } else {
    showInDisplay.innerHTML = 'Nothing machine founded in the list'
    showInDisplay.style.backgroundColor = '#f00'
  }

  // switch (choise) {
  //   case 2800017:
  //     showInDisplay.innerHTML = 'The equipment 2800017 are locate in Araxá'
  //   case 2800032:
  //     showInDisplay.innerHTML = 'The equipment 2800032 are locate in Tapira'
  //   case 2800063:
  //     showInDisplay.innerHTML =
  //       'The equipment 2800063 are locate in Serra do Salítre'
  //   case 2800093:
  //     showInDisplay.innerHTML = 'The equipment 2800093 are locate in Ibiá'
  //   case 2800097:
  //     showInDisplay.innerHTML =
  //       'The equipment 2800097 are locate in Serra do Salítre'
  //   default:
  //     showInDisplay.innerHTML = 'The equipment not found in this list'
  // }
}
