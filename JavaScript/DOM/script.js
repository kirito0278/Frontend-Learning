// 1.Dom Manipulation::
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



//  -- Selection of an element
        // -- querySelector
        // -- getElementById
        // -- getElementsByClassName
        // -- querySelectorAll

var h1 = document.querySelector('h1')
console.log(h1);


//  -- Accessing Text/Content
        // -- textContent
        // -- innerHTML
        // -- innerText

// h1.innerHTML = '<i>Americayaa<i>'
// h1.textContent = '<i>Americayaa<i>'
// h1.innerText = '<i>Americayaa<i>'


//  -- Attribute Manipulation
        // -- getAttribute
        // -- setAttribute
        // -- removeAttribute



//  -- Dynamic DOM Manipulation
        // --createElement
        // --appendChild
        // --removeChild
        // --prepend



//  -- Style Updates
        // -- .style
        // --classList (add,remove,toggle)





// 2. Events and Event Handling::
//  -- Event Binding
        // -- addEventListener
        // -- removeEventListener

// Common Events
        //click, input, change, submit, mouseover, keyup 

// Event Objects -- target,type,preventDefault
// Event Bubbling: An event travels from the target element upward to its parent elements.

// Event Capturing: An event travels from the outer parent elements down toward the target.

// stopPropagation(): Stops the event from propagating further.

// Default event flow: Capturing → Target → Bubbling.

var ul = document.querySelector("ul");
ul.addEventListener("click",function(evt) {
        evt.target.classList.toggle("lt");
})

// Event Delegation: A technique of handling events on multiple child elements by attaching a single event listener to their common parent.
// - It works using Event Bubbling.
// - event.target identifies the actual element that triggered the event.
// - event.currentTarget identifies the element holding the event listener.
// - Reduces the need for multiple event listeners.
// - Works with dynamically created child elements.