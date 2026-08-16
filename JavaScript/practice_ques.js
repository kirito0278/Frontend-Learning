// --   Variables and Declarations

// // Ques.1
console.log(nm);
var nm="harsh"; //O/P- undefined

// Ques.2
console.log(age);
var age=43; //O/P- error: trying to access before initialization

// Ques.3
var x=1; //global
{
    var x=2;
}
console.log(x); // O/P-2

// Ques.4
let a=1;
{
    let a=2;
    console.log("inside:",x); // O/P-2
}
console.log("outside:",x); // O/P-1


// --   Data Types + Type System
// Ques.1:Predict: true + false, null + 1, 5 + "5", !!undefined
// Ans: 1, 1, "55", false


// --   Operators
// Ques.1:
let b=10;
let y=20;
if(b>5 && y<25){
    console.log("A");
}else{
    console.log("B");   // O/P- A
}

// Ques.2:
let isAdmin=true;
let isLoggedIn=false;
if(isAdmin || isLoggedIn){
    console.log("Access granted");
}else{
    console.log("Access denied");   // O/P- Access granted
}

// Ques.3:
let temp=35;
if(!(temp<30)){
    console.log("Hot");
}else{
    console.log("Pleasant");   // O/P- Hot
}