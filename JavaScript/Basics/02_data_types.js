//Data types:
// --Primitive(string,number,boolean,null,undefined,symbol,bigint)
// --Reference(arrays,objects,functions)

// EXAMPLES:
let a=10;
let b=a; //b gets its own copy of the value
a=a+2;
console.log(a);// 12
console.log(b);// 10

let c=[1,2,3];
let d=c;//Here a and b refer to the same array.That's why they're called reference types
d.pop();
console.log(d);// [1,2]
console.log(c);// [1,2]

// 1. string → Text(uses:''(single quote),""(double quote),``(backticks))
let name = "Parth";

// 2. number → Numbers
// JavaScript uses number for both integers and decimals.
let age = 20;
let price = 99.5;

// 3. boolean → True or false
let isLoggedIn = true;
let isAdmin = false;

// 4. null → Intentionally empty
// You use null when you deliberately say there is no value.
let user = null;

// 5. undefined → Value hasn't been assigned
let x;
console.log(x); // undefined

// 6. symbol → Unique value
// Used mainly when you need a unique identifier.
let id = Symbol("id");
// Even if two Symbols have the same description, they are different:
Symbol("id") === Symbol("id"); // false

// 7. bigint → Very large integers
// Used when numbers are larger than what the normal number type can safely represent.
let big = 123456789012345678901234567890n;
// The n at the end makes it a BigInt.

//Dynamic typing: Dynamic typing means that in JavaScript, you don't have to specify the data type of a variable, and the type can change during the execution of the program.
//For example:
let x = 10;//Here x is a number.
// Later:
x = "Hello";// Now x is a string.And you can even do:
x = true;// Now x is a boolean.
//So the variable doesn't have a fixed type. The value currently stored in it determines its type.

//typeof quirks (e.g. typeof null === 'object')
//typeof is an operator used to find the type of a value:
typeof 10        // "number"
typeof "Hello"   // "string"
typeof true      // "boolean"

// But there are a few quirks:
typeof NaN        // "number"
typeof null       // "object"   ❗
typeof []         // "object"   ❗
// To specifically check for an array:
Array.isArray([]) //Output:true

typeof function(){} // "function"  Technically, functions are objects in JavaScript, but typeof gives them the special result "function".
typeof undeclared // "undefined" 
// typeof undeclaredVariable → "undefined"
typeof xyz // Even though xyz was never declared, this doesn't throw an error.

// typeof with let/const in TDZ
console.log(typeof x);
let x = 10; // ❌ ReferenceError

// Type Coercion:Type coercion means JavaScript automatically or manually converts one data type into another.
// For example:
let x = "10";
let y = 5;
console.log(x + y); // Output:"105"
// Why? JavaScript converts 5 into "5" and then performs string concatenation: "10" + "5" → "105"
// 1. Implicit Type Coercion: JavaScript does the conversion automatically.
// With +: "10" + 5 // Result:"105" 5 → "5"
// But:"10" - 5 Result: 5
// Here JavaScript converts "10" → 10 because subtraction requires numbers.
// Similarly:
"10" * 2    // 20
"10" / 2    // 5
// 2. Explicit Type Coercion:You can convert the type yourself
// String → Number
Number("10")  //10
// Number → String
String(10)    //"10"
// Value → Boolean
Boolean(1)       // true
Boolean(0)       // false
Boolean("hello") // true
Boolean("")      // false
// 3. == vs === — Very Important
// Type coercion is especially important when comparing values.
// == (loose equality) It allows type coercion:
10 == "10"   // Result:true // JavaScript converts "10" to 10.
// === (strict equality) It doesn't perform type coercion:
10 === "10"  // Result:false // Because: // 10 → number // "10" → string
// Easy rule 🧠
// ==   → compares after possible conversion
// ===  → compares value AND type
// That's why we generally see === preferred in modern JavaScript.
// EXAMPLES:
1 + "2"       // "12"
1 - "2"       // -1
true + 1      // 2
false + 1     // 1
null + 1      // 1
undefined + 1 // NaN

// Truthy VS Falsy values
// Falsy: 0,false,"",null,undefined,NaN,document.all