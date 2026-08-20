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


// -- Control Flow
// Ques.1: Write a function getGrade(score) that:
// -- Takes a student marks(0 to 100)
// -- Returns the grade based on this logic:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 FAIL
// Anything else    Inavalid Marks

function getGrade(score) {
    if(score<=32) return "Fail";
    else if(score<=59) return "D";
    else if(score<=69) return "C";
    else if(score<=79) return "B";
    else if(score<=89) return "A";
    else if(score<=100) return "A+";
    else return "Invaild Marks";
}
console.log(getGrade(3));

// Ques.2 Rock-Paper-scissor logic
function rps(user,comp) {
    if(user === comp) return "DRAW";

    if (user === "rock" && comp === "scissor") return "USER WINS";
    if (user === "paper" && comp === "rock") return "USER WINS";
    if (user === "scissor" && comp === "paper") return "USER WINS";

    return "COMP WINS";
}

console.log(rps("rock","scissor"))


// FUNCTIONS
// --1.BMI Calculator
function BMI(weight,height) {
    return weight/(height**2);
}
console.log(BMI(54,5.7).toFixed(3));

// --2.Create reusable discount calculator(HOF)
function discountCalc(discount) {
    return function (price) {
        return price - price*(discount/100);
    }
}
let ten=discountCalc(10);
let twenty=discountCalc(20);
console.log(ten(1200));
console.log(twenty(1200));

//--3.Build a counter using closure
function counter() {
    let count=0;
    return function() {
        count++;
        return count;
    }
}

let c=counter();
console.log(c()); //1
console.log(c()); //2
console.log(c()); //3
console.log(c()); //4 //sustaining its value
//whenever we use counter() it will use function where count will start with 0
let d=counter();
console.log(d()); //1

