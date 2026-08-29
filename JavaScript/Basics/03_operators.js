// 1. Arithmetic Operators
// +   // addition
// -   // subtraction
// *   // multiplication
// /   // division
// %   // remainder
// **  // exponent

// Example:
10 + 3  // 13
10 - 3  // 7
10 * 3  // 30
10 / 3  // 3.333...
10 % 3  // 1
2 ** 3  // 8

// 2. Assignment Operators
// =    // assignment
// +=   // add and assign
// -=   // subtract and assign
// *=   // multiply and assign
// /=   // divide and assign
// %=   // remainder and assign

// Example:
let x = 10;
x += 5;  // x = 15
x *= 2;  // x = 30

// 3. Comparison Operators
// ==    // loose equality
// ===   // strict equality
// !=    // loose inequality
// !==   // strict inequality
// >     // greater than
// <     // less than
// >=    // greater than or equal
// <=    // less than or equal

// Example:
10 == "10"   // true
10 === "10"  // false
10 > 5       // true
10 <= 10     // true

// 4. Logical Operators
//AND &&  [Both conditions must be true]
age >= 18 && age <= 30
// OR || [At least one condition must be true]
age < 18 || age > 60
// NOT ! [Reverses the boolean value]
!true   // false
!false  // true

// 5. Ternary Operator ? : [A short way of writing an if-else]
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";

// 6. Unary Operator [++ and --]
let x = 5;
x++; // 6
x--; // 5


// typeof / instanceof  
// 1. typeof: typeof tells you the type of a value
typeof "Hello"     // "string"
typeof 10          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"  ← famous quirk

// 2. instanceof: instanceof checks whether an object was created from a particular constructor/class
let arr = [1, 2, 3]; arr instanceof Array  // true
let obj = {}; obj instanceof Object // true

//NOTE:
// -- instanceof is mainly useful for objects, not primitives
"hello" instanceof String // false  //because "hello" is a primitive string, not a String object