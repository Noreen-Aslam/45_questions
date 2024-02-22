// Define the function order_sandwich to print a summary of the sandwich being ordered
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich ordered with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("Enjoy your sandwich!");
}
// Call the function order_sandwich three times with a different number of arguments each time
order_sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
order_sandwich("Ham", "Cheese");
order_sandwich("Peanut Butter", "Jelly");
