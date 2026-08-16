// Control flow → decides which code executes and in what order

// 1. if → executes code when a condition is true
// 2. else if → checks another condition if the previous one was false
// 3. else → executes when all previous conditions are false
if (condition) {
    // code
} else if (condition) {
    // code
} else {
    // code
}

// 4. switch case → compares one value against multiple possible values
switch (value) {
    case 1:
        // code
        break;

    case 2:
        // code
        break;

    default:
        // code
}

// 5. Early return → exits a function early when a condition is met
function check(age) {
    if (age < 18) return "Not allowed";
    return "Allowed";
}
