// Define an array of favorite pizza names
let favoritePizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Print the name of each pizza using a for loop
console.log("Printing pizza names:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Modify the for loop to print a sentence using the name of each pizza
console.log("\nPrinting sentences about pizza:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Add a line at the end of the program stating how much you like pizza
console.log("\nI really love pizza!");
