// Define an array
let myArray = [1, 2, 3, 4, 5];

// Print the array before attempting to access an element
console.log("Before producing error:", myArray);

// Trying to access an index beyond the array's bounds
let index = 6; // This index is beyond the bounds of the array
let element = myArray[index]; // This will produce an index error

// Correcting the error by checking if the index is within bounds
if (index >= 0 && index < myArray.length) {
    // Access the element at the valid index
    element = myArray[index];
    console.log("After correcting error:", element); // Print the accessed element
} else {
    console.log("Index is out of bounds. Please provide a valid index."); // Inform about the invalid index
}
