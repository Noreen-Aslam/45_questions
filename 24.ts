// Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";

// Testing equality
console.log(string1 === string2); // False
// Testing inequality
console.log(string1 !== string2); // True

// Tests using the lower case function
const string3: string = "HELLO";
const string4: string = "hello";

// Testing whether lowercase of string3 equals string4
console.log(string3.toLowerCase() === string4); // True
// Testing original strings for inequality
console.log(string3 === string4); // False

// Numerical tests
const num1: number = 5;
const num2: number = 10;

// Testing equality
console.log(num1 === num2); // False
// Testing inequality
console.log(num1 !== num2); // True
// Testing less than
console.log(num1 < num2); // True
// Testing greater than
console.log(num1 > num2); // False
// Testing less than or equal to
console.log(num1 <= num2); // True
// Testing greater than or equal to
console.log(num1 >= num2); // False

// Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;

// Testing "and" operator
console.log(condition1 && condition2); // False
// Testing "or" operator
console.log(condition1 || condition2); // True

// Test whether an item is in an array
const array: string[] = ["apple", "banana", "orange"];

// Testing if "apple" is in the array
console.log(array.includes("apple")); // True
// Testing if "grape" is in the array
console.log(array.includes("grape")); // False

// Test whether an item is not in an array
const fruit: string = "grape";
// Check if fruit is not in the array
const isInArray: boolean = !array.includes(fruit);

console.log(isInArray); // True
