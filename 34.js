/ Define an array of favorite pizza names;
var favoritePizzas = ["Pepperoni", "Margherita", "Supreme"];
// Print the name of each pizza using a for loop
console.log("Printing pizza names:");
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
// Modify the for loop to print a sentence using the name of each pizza
console.log("\nPrinting sentences about pizza:");
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Add a line at the end of the program stating how much you like pizza
console.log("\nI really love pizza!");
