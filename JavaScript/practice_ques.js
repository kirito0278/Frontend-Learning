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