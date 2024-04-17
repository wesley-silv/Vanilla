const callingBrowserButton = function () {
  timeWrite =
    'Usando o evento de tempo e o for para renderizar conteúdo na tela.'
  timingWrite = ''
  for (let are in timeWrite) {
    timingWrite += timeWrite[are]
    document.getElementById('response').innerHTML = timingWrite
  }
}

// setTimeout(callingBrowserButton, 4000) // Not stop with the use of clearTimeout()
// clearInterval(callingBrowserButton);

const countStrElements = function() {
  string = 'This is the content of a string JavaScript, using the set interval!'
  writeStr = ''
  for(let i in string){
    writeStr += string[i]
    document.getElementById('string-content').innerText = writeStr
  }
}