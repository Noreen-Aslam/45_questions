// Define an array of animals with a common characteristic
var animals = ["dog", "cat", "rabbit"];
// Print the name of each animal using a for loop
console.log("Printing animal names:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Modify the for loop to print a statement about each animal
console.log("\nPrinting statements about animals:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal, " would make a great pet."));
}
// Add a line at the end of the program stating what these animals have in common
console.log("\nAny of these animals would make a great pet!");
