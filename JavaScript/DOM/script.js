// DOM - Document Object Model it allow Js to interact with HTML 

// 4 Pillars of DOM:
//  -- Selection of an element
        // -- querySelector
        // -- getElementById
        // -- getElementByClassName
        // -- querySelectorAll

//  -- Changing HTML
        // -- textContent
        // -- innerHTML
//  -- Changing CSS
//  -- Event Listners

var h1 = document.querySelector('h1') // Selecting element
console.log(h1);
h1.innerHTML = '<i>Americayaa<i>' // Changing HTML
// h1.textContent = '<i>Americayaa<i>'
h1.style.color = 'pink'
h1.style.backgroundColor = 'grey' // Changing CSS

// var box = document.querySelector('#box')
var box1 = document.getElementById('box') // selecting element using id
box.innerHTML = 'Hello'
box.style.backgroundColor = 'royalblue'

var btn = document.querySelector('button')
btn.addEventListener('click',function() {
    h1.innerHTML = 'I am Alive!!'
    h1.style.backgroundColor = 'black'
    h1.style.fontSize = '60px'
    h1.style.textAlign = 'center'
})
