// Define the function order_sandwich to print a summary of the sandwich being ordered
function order_sandwich(...items: string[]): void {
    // Print a message indicating that a sandwich is being ordered
    console.log("Sandwich ordered with the following items:");
    
    // Loop through each item in the arguments list
    for (let item of items) {
        // Print each item as part of the sandwich
        console.log(`- ${item}`);
    }
    
    // Print a closing message
    console.log("Enjoy your sandwich!");
}

// Call the function order_sandwich three times with a different number of arguments each time
order_sandwich("Turkey", "Lettuce", "Tomato", "Mayo"); // Ordering a sandwich with four items
order_sandwich("Ham", "Cheese"); // Ordering a sandwich with two items
order_sandwich("Peanut Butter", "Jelly"); // Ordering a sandwich with two items
