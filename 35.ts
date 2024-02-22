// Define an array of animals with a common characteristic
let animals: string[] = ["dog", "cat", "rabbit"];

// Print the name of each animal using a for loop
console.log("Printing animal names:");
for (let animal of animals) {
    console.log(animal);
}

// Modify the for loop to print a statement about each animal
console.log("\nPrinting statements about animals:");
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Add a line at the end of the program stating what these animals have in common
console.log("\nAny of these animals would make a great pet!");
