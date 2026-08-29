// OBJECTS: An object is a collection of data stored as key-value pairs
let student = {
    name: "Parth",
    age: 20,
    city: "Delhi"
};
// name → key  "Parth" → value
// age → key  20 → value

// Accessing properties
// --Dot notation:
console.log(student.name); // Parth
// --Bracket notation:
console.log(student["name"]); // Parth

// IMPORTANT:
// Bracket notation is useful when the key is stored in a variable:
let key = "name";
console.log(student[key]); // Parth

// Adding a property
student.course = "CSE";
// OUTPUT:
// {
//     name: "Parth",
//     age: 20,
//     city: "Delhi",
//     course: "CSE"
// }

// Changing a property
student.age = 21;

// Deleting a property
delete student.city;

// NESTING and DEEP ACCESS
// Nesting meanss putting one object inside another object
let student1 = {
    name: "Parth",
    age: 20,

    address: {
        city: "Delhi",
        pincode: 110001
    }
};
// Deep access means accessing a value inside a nestdd object using multiple property accesses
console.log(student1.address.city);

// Object destructuring
let {city,pincode}=student1.address;

// Looping: for-in, Object.keys, Object.entries
for(let key in student1){
    console.log(key, student1[key]);
}

Object.keys(student1);   // ['name', 'age', 'address']
Object.entries(student1);


// Copying objects: spread, Object.assign, deep clone
let obj={...student};
let obj2 = Object.assign({}, obj); // copying object but
let obj3 = Object.assign({price:2000}, obj); //added new property

// during copying object using rest operator only top values get copied and nested object is still on passing reference  // solution for this: deep clone

let obj4= JSON.parse(JSON.stringify(student1)); //JSON.stringify convert object into string and JSON.parse convert it back to object
obj4.address.city="UP";


// Optional chaining, computed properties
// Optional chaining lets you safely access a property or method when something might be null or undefined
console.log(user?.name); // undefined
// Instead of throwing an error, ?. stops the access and returns 
let user = {
    address: {
        city: "Delhi"
    }
};
console.log(user?.address?.city); // Delhi
// If address doesn't exist:
let user1 = {};
console.log(user1?.address?.city); // undefined

// A computed property allows you to use an expression/variable as an object property name
// Normally:
let name = "Parth";
let student2 = {
    name: name
};

// With a computed property:
let key1 = "name";
let student = {
    [key1]: "Parth"
};
console.log(student.name); // Parth


// NOTE: object key can be a number or boolean