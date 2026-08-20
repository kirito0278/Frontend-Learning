// A function is a block of code designed to perform a particular task. You can define it once and call it whenever needed.There are 3 common ways:

// 1. Function Declaration
function greet() {
    console.log("Hello");
}
greet();


// 2. Function Expression  [Here,we store a function inside a variable]
let greet = function() {
    console.log("Hello");
};
greet();
// We can also give it a name:
let greet = function sayHello() {
    console.log("Hello");
};
greet(); // ✅ Hello
sayHello(); // ❌ ReferenceError
// We call it using the variable name, not the function's internal name
// We cannot normally access sayHello from outside because its name is only available inside that function expression
// The name can be useful for the function to refer to itself, especially for recursion:
let count = function countdown(n) {
    if (n === 0) return;
    console.log(n);
    countdown(n - 1);
};
count(3);

Output:
3
2
1


// 3. Fat Arrow Function  [Arrow functions are a shorter syntax for writing function expressions]
// Normal function expression:
let add = function(a, b) {
    return a + b;
};
// Arrow function:
let add = (a, b) => {
    return a + b;
};
// If there is only one expression, we can make it even shorter:
let add = (a, b) => a + b;

// IMPORTANT: Arrow functions aren't just shorter syntax; they also behave differently regarding this, arguments, and constructors




// PARAMETERS VS ARGUMENTS
// A parameter is the variable written when you define the function
function greet(name) {    //name → parameter
    console.log("Hello " + name);
}
// An argument is the actual value you pass when calling the function
greet("Parth");  //"Parth" → argument




// DEFAULT, REST, AND SPREAD PARAMETERS
function add(v1,v2) {
    console.log(v1,v2); //Output: undefined undefined
    console.log(v1+v2); //Output: NaN
}
add(); // we didn't pass any value as args. that's why vars. are undefined

// 1. Default Parameter: It gives a parameter a default value if no argument is provided
function greet(name = "Guest") {    // Here: name = "Guest" → default parameter
    console.log("Hello " + name);
}
greet("Parth");  // Hello Parth
greet();
         // Hello Guest
// 2. Rest Parameter ... :It collects multiple arguments into a single array
function add(...numbers) {
    console.log(numbers);
}
add(10, 20, 30, 40);
Output: [10, 20, 30, 40]
// IMPORTANT:Rest parameter must be the last parameter:
function test(a, b, ...rest) {}

// 3. Spread Operator ... :Spread does the opposite of rest.It spreads/unpacks an array (or another iterable) into individual values
let numbers = [10, 20, 30];
console.log(...numbers);    // Output: 10 20 30

// For example:
function add(a, b, c) {
    return a + b + c;
}
let numbers = [10, 20, 30];
add(...numbers);
// This is basically:
add(10, 20, 30);




//  RETURN VALUES AND EARLY RETURNS
// Return Values: A function can send a value back to the place where it was called using return
// Once JavaScript reaches return, the function immediately stops executing
function add(a, b) {
    return a + b;
    console.log("World"); // ❌ Never runs
}
let result = add(10, 20);
console.log(result); // 30

// NOTE: return can return any value
return 10;
return "Hello";
return true;
return [1, 2, 3];
return { name: "Parth" };
return; //undefined




// FIRST-CLASS FUNCTIONS

// In JavaScript, functions are first-class citizens.This means a function can be treated like any other value.
// A function can be:
// -- Stored in a variable
let greet = function() {
    console.log("Hello");
};
greet();

// -- Passed as an argument
function greet() {
    console.log("Hello");
}
function execute(fn) {
    fn();
}
execute(greet);

// -- Returned from another function
function outer() {
    return function() {
        console.log("Hello");
    };
}
let result = outer();
result();

// -- Stored in an array/object




// HIGHER-ORDER FUNCTION: It is a function that does at least one of these:
// --Takes another function as an argument
function greet() {
    console.log("Hello");
}
function execute(fn) {
    fn();
}
execute(greet);
// greet → function passed as an argument
// execute → higher-order function

// --Returns another function
function outer() {
    return function() {
        console.log("Hello");
    };
}
// outer() is a higher-order function because it returns another function




// PURE VS IMPURE FUNCTIONS
//A pure function always gives the same output for the same input and does not change anything outside the function
function add(a, b) {
    return a + b;
}
add(2, 3); // 5
add(2, 3); // 5

// An impure function can produce different results for the same input or change something outside itself
let count = 0;
function increase() {
    count++;
    return count;
}
increase(); // 1
increase(); // 2



// LEXICAL SCOPING: It means a function can access variables based on where the function is written in the code, not where it is called.
function outer() {
    let message = "Hello";
    function inner() {
        console.log(message);
    }
    inner();
}
// inner() can access message because inner is written inside outer




// Closure: A closure happens when an inner function remembers and continues to access variables from its outer lexical scope even after the outer function has finished executing
function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}
let counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3




// IIFE — Immediately Invoked Function Expression: It is a function that is created and immediately executed
(function greet() {
    console.log("Hello");
})();




// Hoisting: Function Declaration vs Function Expression
// A function declaration is hoisted with its complete function definition, so you can call it before its declaration
greet(); // ✅ Hello
function greet() {
    console.log("Hello");
}

// Function Expression → not usable before initialization
greet(); // ❌ ReferenceError
let greet = function() {
    console.log("Hello");
};

