// keywords- reserved words used for specific functons e.g. if while etc.

//variables- var(es5 command),let & const(es6 command)
// a=123; // this is also a way to create var. but it is a bug and shouldn't be use bcz it causes security issues and memory leaks
var a;//Declarations
var a=12;//Declaration and Intialization
var a=232;//Redeclaration (allowed)
// NOTE(when we declare variable using var):
// --It adds itself in window
// --Function Scoped
// --Supports REDECLARATION with same name and no error occurs
let b;
b=13;
// let b=13;//ERROR: Identifier 'b' has already been declared
//NOTE: 
//--let and const doesn't support redeclaration
//--let and var supports REASSIGNMENT
const c=12;
// const d; // ERROR: Missing initializer in const declaration
var pass= ((23*12-89)%45)*122;


//Scope(global,block,functional)
var e=12;// GLOBAL SCOPED (not in any type of brackets)
// BLOCK SCOPED
{
    let a=12;//let is block scoped
}
// FUNCTIONAL SCOPED
function abcd(){
    if(true){
        var c=12; //var is functional scoped it only respect functions,we can access it in complete function
    }
}


//Temporal Dead Zone
// --The time between a variable being created and the point where it is initialized. During this time, you cannot use the variable
// --Only happens in let and const
console.log(k);//ReferenceError: K is not defined
console.log(f);//ReferenceError: Cannot access 'f' before initialization
let f=12;
console.log(z); //shows undefined
var z =12;


// Hoisting
// --Hoisting means JavaScript processes declarations before executing the code in that scope
console.log(l);

var l = 10;
// We can think of JavaScript as treating it roughly like:
var a;

console.log(a); // undefined

a = 10;
// So var is hoisted and initialized with undefined.

console.log(h);

let h = 10;
// let is also hoisted, but here's the important difference:
// Variable created/hoisted
//         ↓
//      TDZ
//         ↓
// let h = 10
//         ↓
//    Initialized
//         ↓
// Can use h
// During the TDZ, we cannot access a


// const is also hoisted but remains in the TDZ until initialization


// NOTE:
// --So don't think "let and const aren't hoisted." That's a common misconception.
//They are hoisted, but they aren't initialized until execution reaches their declaration.