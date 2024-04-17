// const redColor = () => {
//   if (red != null && alert(typeof red)) {
//     let red = document.getElementById('red')
//     red.style.backgroundColor = '#ff0000'
//     red.style.color = '#fff'
//     red.innerHTML = 'My background is red color'
//   } else {
//     red.style.color = '#0000ff'
//     red.style.textDecoration = 'underline'
//   }
// }
// const greenColor = () => {
//   let green = document.getElementById('green')
//   green.style.color = 'green'
//   green.style.border = 'solid 2px green'
//   green.style.borderRadius = '20px'
//   green.style.padding = '10px'
//   green.innerHTML = 'I have a border and your color is green'
// }
// const blueColor = () => {
//   let blue = document.getElementById('blue')
//   blue.style.color = 'blue'
//   blue.innerHTML = 'I called a small window in your browser'
//   alert('You called me? I am here...')
// }
// const orangeColor = () => {
//   let orange = document.getElementById('orange')
//   orange.style.color = 'orange'
//   orange.innerText = 'I called the print menu'
//   print()
// }
// const navyColor = () => {
//   document.getElementById('navy').style.color = 'navy'
//   if (navy) {
//     let description = document.getElementById('navy')
//     description.innerHTML =
//       "Hello world! I'm Navy color, look in the browser console"
//     console.log('You called me when click in Navy.')
//   }
// }

// Understand how use of add event listener

const selector = document.getElementById('select-colors')
const square = document.getElementById('square-color')

selector.addEventListener('change', allColors)

function allColors() {
  const selected = selector.value
  if (selected === 'blue') {
    square.innerHTML = 'Blue'
    square.style.height = '100px'
    square.style.width = '100px'
    square.style.margin = '1em'
    square.style.backgroundColor = '#0000ff'
    square.style.color = '#fff'
    square.style.textAlign = 'center'
    square.style.alignContent = 'justify'
  }
}
