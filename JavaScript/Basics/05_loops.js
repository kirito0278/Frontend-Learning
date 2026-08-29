// Loops are used to repeat a block of code multiple times
// 1. for loop: Used when you generally know how many times you want to repeat something
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output:
0
1
2
3
4

//2. while loop: Runs as long as the condition is true.
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
//The condition is checked before each iteration 

// 3. do...while loop: Similar to while, but the code runs at least once because the condition is checked after the code.
let i = 10;
do {
    console.log(i);
    i++;
} while (i < 5); // Output:10
// Even though i < 5 is false, the code ran once

// 4. break: Immediately stops the loop.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
//Output:
0
1
2
3
4

// 5. continue: Skips the current iteration and moves to the next one.
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
// Output:
0
1
3
4  // 2 is skipped

// NOTE: there is no pass keyword in Js we can simply use a empty block
// EXAMPLE:
if (age < 18) {
} 