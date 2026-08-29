// structuredClone() is a built-in JavaScript function.
// It is used to create a deep copy of an object or array
let user1 = {
    name: "Parth",
    address: {
        city: "Delhi"
    }
};
let user2 = structuredClone(user1);

{ ...obj }          // Shallow copy
structuredClone(obj) // Deep copy



console.log();  // Used for general output/debugging
console.info();  // Used to display informational messages
// Both are console methods used to display information in the browser/Node.js console
console.warn(); // Used to display a warning  // Usually appears with a warning icon/style in the browser console
console.error(); // Used to display an error message //Usually appears with an error icon/style
console.table() // is used to display arrays or objects in a table format in the console
let fruits1 = ["Apple", "Mango", "Banana"];
console.table(fruit);
// ┌─────────┬──────────┐
// │ (index) │ Values   │
// ├─────────┼──────────┤
// │ 0       │ 'Apple'  │
// │ 1       │ 'Mango'  │
// │ 2       │ 'Banana' │
// └─────────┴──────────┘

let student_detail = {
    name: "Parth",
    age: 20,
    city: "Delhi"
};
console.table(student);
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │ name    │ 'Parth' │
// │ age     │ 20      │
// │ city    │ 'Delhi' │
// └─────────┴─────────┘

//prompt() se jo bhi input loge vo string bn jayega 
//conversion??
Number(value);       // Convert to number
String(value);       // Convert to string
Boolean(value);      // Convert to boolean
parseInt(value);     // Convert to integer
parseFloat(value);   // Convert to decimal number

// NULLISH COALESCING OPERATOR: It (??) provides a default value only when the left-side value is null or undefined
let name = null;
let result = name ?? "Guest";
console.log(result); // Guest

// 1. for...of [Used to get the values/elements of an iterable like an array]
let fruits2 = ["Apple", "Mango", "Banana"];
for (let fruit of fruits2) {
    console.log(fruit);
}
// Output:
// Apple
// Mango
// Banana

// Think:
// for...of → gives me the values.

// You can use break and continue:
for (let fruit of fruits) {
    if (fruit === "Mango") {
        break;
    }
    console.log(fruit);
}


for (let key in object)   // 🔑 key
for (let value of array)  // 📦 value

// for...in vs for...of
// The easiest way to remember:
// for...in → keys
// for...of → values
// Example with an object:
let student = {
    name: "Parth",
    age: 20,
    city: "Delhi"
};
for (let key in student) {
    console.log(key);
}
Output:
name
age
city
// for...in gives you the property names (keys).

// for...of with an array
let fruits = ["Apple", "Mango", "Banana"];
for (let fruit of fruits) {
    console.log(fruit);
}
Output:
Apple
Mango
Banana
// for...of gives you the actual values.

// IMPORTANT DIFFERENCE:
let fruits = ["Apple", "Mango", "Banana"];
for (let x in fruits) {
    console.log(x);
}
Output:
0
1
2
// Because for...in gives the indexes/keys.

// While:
for (let x of fruits) {
    console.log(x);
}
Output:
Apple
Mango
Banana
// Because for...of gives the values.

// arguments Object in Functions:
// The arguments object is a special object available inside regular JavaScript functions.
// It contains all the arguments passed to the function, even if you didn't define parameters for them.

// Example:
function show() {
    console.log(arguments);
}
show(10, 20, 30);

// You will get something similar to:
{
    0: 10,
    1: 20,
    2: 30
}
// So you can access individual arguments using indexes:

function show() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
show(10, 20, 30);

Output:
10
20
30

// Even without parameters
function add() {
    console.log(arguments);
}
add(10, 20, 30);
// The function has no declared parameters, but arguments still contains:
10, 20, 30

// Parameters vs arguments
function add(a, b) {
    console.log(a);
    console.log(b);
    console.log(arguments);
}
add(10, 20, 30);

Here:
a → 10
b → 20
arguments → [10, 20, 30]
// Notice that arguments also contains the extra argument 30.

// ⚠️ Arrow functions don't have arguments
// This is important:
let test = () => {
    console.log(arguments); // ❌
};
// Arrow functions do not have their own arguments object.
// If you want to collect any number of arguments in an arrow function, use the rest parameter:
let add = (...numbers) => {
    console.log(numbers);
};
add(10, 20, 30);
Output:
[10, 20, 30]


// Destructuring parameter: You can also destructure an object directly in the parameter:
function greet({ name, age }) {
    console.log(name, age);
}
let student = {
    name: "Parth",
    age: 20
};
greet(student);

// Callback Function
// A callback function is a function that is passed as an argument to another function, so that the other function can call it later
function greet() {
    console.log("Hello");
}
function execute(callback) {
    callback();
}
execute(greet);


// new Object()
let obj = new Object();
// This also creates an empty object, but it is rarely used because {} is simpler