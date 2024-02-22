var myArray = [1, 2, 3, 4, 5];
console.log("Before producing error:", myArray);
// Trying to access an index beyond the array's bounds
var index = 6;
var element = myArray[index]; // This will produce an index error
// Correcting the error by accessing a valid index
if (index >= 0 && index < myArray.length) {
    element = myArray[index];
    console.log("After correcting error:", element);
}
else {
    console.log("Index is out of bounds. Please provide a valid index.");
}
