// Store the numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Use an if-else chain inside the loop to print the proper ordinal ending for each number
    if (number === 1) {
        console.log(`${number}st`); // Print '1st' for number 1
    } else if (number === 2) {
        console.log(`${number}nd`); // Print '2nd' for number 2
    } else if (number === 3) {
        console.log(`${number}rd`); // Print '3rd' for number 3
    } else {
        console.log(`${number}th`); // Print '[number]th' for other numbers
    }
}
