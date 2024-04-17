let paragraph = document.getElementById('demo')
paragraph.innerHTML = 'Hello World!'

let paragraphTwo = document.querySelector('#demo-two')
paragraphTwo.innerHTML = 'Hello Wesley Silva'

// With JavaScript is possible alter the attributs of a HTML element.
// Attributes such as value, src, href, alt and many more.

let lighton = (document.getElementById('myImage').src = 'pic_bulbon.gif')
let lightoff = (document.getElementById('myImage').src = 'pic_bulboff.gif')

// A Form of called this varables is add the "event onclick" to a buttom rightlly in the HTML element

// The JavaScript is able of replice the styles of a HTML element
let margin = document.getElementById('paragraph')
margin.style.color = '#0000ff'
margin.style.margin = '1em'
// The properties of CSS with compost name is declared in JavaScript using the camelCAse, for example "backgroundColor", "fontSize", "marginTop"...

// The property "none" of a CSS can hide the elements of display
let hide = (document.getElementById('hide-element').style.display = 'none')
