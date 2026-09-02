// DOM - Document Object Model it allow Js to interact with HTML 
//     - When a browser loads an HTML page, it converts the HTML document into a tree-like structure of objects. This structure is called the DOM.

//EXAMPLE:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>My Page</title>
// </head>
// <body>
//     <h1>Hello</h1>
//     <p>Welcome to my website</p>
// </body>
// </html>

// The browser represents it roughly like this:
// Document
// │
// └── html
//     │
//     ├── head
//     │   └── title
//     │       └── "My Page"
//     │
//     └── body
//         ├── h1
//         │   └── "Hello"
//         │
//         └── p
//             └── "Welcome to my website"




// WHY DO WE NEED THE DOM?
//    -- HTML by itself creates the structure of a webpage, but it is mostly static.
//    -- JavaScript uses the DOM to access and manipulate HTML elements.

// EXAMPLE:
// HTML: <h1 id="heading">Hello</h1>
// Js:   document.getElementById("heading").textContent = "Hello World";

// Before: Hello
// After: Hello World




// What does "Object Model" mean?
// HTML Element  [The browser converts HTML elements into JavaScript objects]
//      ↓
// Browser converts it
//      ↓
// JavaScript Object   [JavaScript can access this element as an object]
//      ↓
// Properties + Methods   [That object contains properties and methods]
//      ↓
// JavaScript can manipulate it



// document Object: The entry point for working with the DOM.It represents the entire HTML document/webpage.JavaScript uses document to find and manipulate elements.



// 4 Pillars of DOM:
//  -- Selection of an element
        // -- querySelector
        // -- getElementById
        // -- getElementsByClassName
        // -- querySelectorAll

//  -- Changing HTML
        // -- textContent
        // -- innerHTML
        // -- innerText

//  -- Changing CSS
//  -- Event Listners



// var h1 = document.querySelector('h1') // Selecting element
// console.log(h1);
// h1.innerHTML = '<i>Americayaa<i>' // Changing HTML
// // h1.textContent = '<i>Americayaa<i>'
// h1.style.color = 'pink'
// h1.style.backgroundColor = 'grey' // Changing CSS

// // var box = document.querySelector('#box')
// var box1 = document.getElementById('box') // selecting element using id
// box.innerHTML = 'Hello'
// box.style.backgroundColor = 'royalblue'

// var btn = document.querySelector('button')
// btn.addEventListener('click',function() {
//     h1.innerHTML = 'I am Alive!!'
//     h1.style.backgroundColor = 'black'
//     h1.style.fontSize = '60px'
//     h1.style.textAlign = 'center'
// })


var v1 = document.createElement('h1'); // element creation
console.log(v1);

var btn5 = document.querySelector('h1');
var btn = document.querySelector('button');
var main = document.querySelector('main')
btn.addEventListener('click',function() {
        // var v2 = document.createElement('h1');
        // v2.innerHTML = 'hello monkeys!!'
        // console.log(v2);
        // main.appendChild(v2);
        
        
        setTimeout(() => {
                btn5.innerHTML="byee!!"
        }, 1000);
})
