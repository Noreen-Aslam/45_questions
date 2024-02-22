let age: number = 25; // Change this variable to test different ages

// Check if the age is less than 2
if (age < 2) {
    console.log("The person is a baby.");
} 
// Check if the age is between 2 and 4 (inclusive)
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} 
// Check if the age is between 4 and 13 (inclusive)
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} 
// Check if the age is between 13 and 20 (inclusive)
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} 
// Check if the age is between 20 and 65 (inclusive)
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} 
// If the age is greater than or equal to 65
else {
    console.log("The person is an elder.");
}
