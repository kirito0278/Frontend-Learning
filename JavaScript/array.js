// An array is a data structure used to store multiple values in a single variable
let arr = [];
let arr1 = new Array() ;
let fruits = ["Apple", "Mango", "Banana"];

// ACCESSING ELEMENTS
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Banana
console.log(fruits[32]); //undefined bcz it doesn't exist
// Index:   0        1        2
//         Apple    Mango    Banana

// CHANGING ELEMENTS :Arrays are mutable, meaning their elements can be changed
fruits[1] = "Orange";
console.log(fruits);// ["Apple", "Orange", "Banana"]

// Arrays can contain different data types
let data = ["Parth",20,true,null];
// Nested Arrays
let numbers = [[1, 2],[3, 4]];
console.log(numbers[0][1]); // 2

// Array METHODS
// 1. push(): Adds element(s) to the end
let arr2 = [1, 2, 3];
arr2.push(4);
console.log(arr2); // [1, 2, 3, 4]
// 2. pop(): Removes the last element.
arr2.pop();
console.log(arr2); // [1, 2, 3]
// 3. unshift(): Adds element(s) to the beginning.
arr2.unshift(0);
console.log(arr2); // [0, 1, 2, 3]
// 4. shift(): Removes the first element.
arr2.shift();
console.log(arr2); // [1, 2, 3]
// 5. includes(): Checks whether an element exists.
let fruit = ["Apple", "Mango", "Banana"];
fruit.includes("Mango"); // true
fruit.includes("Orange"); // false
// 6. indexOf(): Returns the index of an element.
fruit.indexOf("Mango"); // 1
// If it doesn't exist:
fruit.indexOf("Orange"); // -1
// 7. slice(): Creates a portion/copy of an array without changing the original
let nums1 = [10, 20, 30, 40, 50];
let result = nums1.slice(1, 4);
console.log(result); // [20, 30, 40]
// slice(start, end) → end is not included
// 8. splice(): Used to add, remove, or replace elements. It changes the original array.
let nums = [10, 20, 30, 40];
nums.splice(1, 2);
console.log(nums); // [10, 40]
// Here:
// 1 → starting index
// 2 → number of elements to remove


// 9. reverse(): reverses the order of elements in an array
let nums2 = [1, 2, 3, 4, 5];
nums2.reverse();
console.log(nums2);// Output:[5, 4, 3, 2, 1]
// Important: reverse() changes the original array

// 10.sort(): sorts the elements of an array
let fruits1 = ["Banana", "Apple", "Mango"];
fruits1.sort();
console.log(fruits1);
// Output:["Apple", "Banana", "Mango"]
// By default, sort() sorts values as strings, even when the array contains numbers
// Correct numerical sorting
// Use a compare function:
let nums3 = [10, 5, 20, 2];
let sr = nums3.sort(function(a, b){
    return a-b; //ascending
});
console.log(sr);
let sr2 = nums3.sort(function(a, b){
    return b-a; //descending
});
console.log(sr2);

// 11. forEach(): Runs a function for every element
let nums4 = [1, 2, 3];
nums4.forEach(function(val){
    console.log(val);
});

// 12. map(): Creates a new array by transforming every element
let nums5 = [1, 2, 3];
let doubled = nums5.map(function(val){
    return val*2;
});
console.log(doubled); // [2, 4, 6]
// if we will not return anything it will return undefined bydefault

// 13. filter(): Creates a new array containing elements that satisfy a condition
let nums6 = [1, 2, 3, 4, 5];
let arr8=nums6.filter(function(val){
    if(val>4) return true; // if it is true then this item will get stored in new array
})
console.log(arr8);
let even = nums6.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// 16. reduce():Reduces an array to one final value.
let nums7 = [1, 2, 3, 4,5,6];
let sum = nums7.reduce((total, num) => total + num, 0);
console.log(sum); // 21

// 17. find(): Returns the first element that satisfies a condition
let nums8 = [10, 20, 30, 40];
let result1 = nums8.find(function(val){
    return val==30;
});
console.log(result1); // 30

// 18. some(): Checks whether at least one element satisfies the condition.
let val3= nums8.some(num => num > 30); // true
// 19. every(): Checks whether all elements satisfy the condition.
let val4=nums8.every(num => num > 0); // true


// DESTRUCTURING
let arra = [1,2,3,4,5];
let[a,b, ,c]=arra; // a=1,b=2, 3 got ignored,c=4
let arra1 = arra; //copied refernce value
let arra2 = [...arra]; // spreading value of arra in arra2 //become separate array

